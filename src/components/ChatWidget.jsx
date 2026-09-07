"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Send, X, Bot, Sparkles, ChevronDown } from 'lucide-react';
import { askGemini, isAIConfigured } from '../lib/gemini';

const SUGGESTIONS = [
  'Who is Rohan?',
  'What projects has he built?',
  'What skills does he have?',
  'How can I get in touch?',
];

const MarkdownText = ({ text, streaming }) => {
  const lines = String(text || '').split('\n');
  const nodes = [];
  let list = [];
  let listType = null;

  const flushList = () => {
    if (list.length) {
      nodes.push(
        <ul key={`list-${nodes.length}`} className="my-1.5 space-y-1 pl-4">
          {list.map((item, j) => (
            <li key={j} className="flex gap-1.5">
              <span className="text-od-orange">
                {listType === 'ol' ? `${j + 1}.` : '•'}
              </span>
              <span className="min-w-0 flex-1">{inline(item)}</span>
            </li>
          ))}
        </ul>
      );
      list = [];
      listType = null;
    }
  };

  const inline = raw => {
    const parts = [];
    const regex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(raw)) !== null) {
      if (match.index > lastIndex) {
        parts.push(raw.slice(lastIndex, match.index));
      }
      const token = match[0];
      if (token.startsWith('**')) {
        parts.push(
          <strong key={parts.length} className="font-semibold">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('`')) {
        parts.push(
          <code
            key={parts.length}
            className="rounded bg-mac-border/40 px-1 py-0.5 font-mono text-[12px] dark:bg-white/10"
          >
            {token.slice(1, -1)}
          </code>
        );
      } else if (token.startsWith('*')) {
        parts.push(<em key={parts.length}>{token.slice(1, -1)}</em>);
      }
      lastIndex = match.index + token.length;
    }
    if (lastIndex < raw.length) {
      parts.push(raw.slice(lastIndex));
    }
    return parts.length ? parts : raw;
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    const olMatch = trimmed.match(/^\d+[.)]\s+(.*)/);
    const ulMatch = trimmed.match(/^[-*]\s+(.*)/);
    const hMatch = trimmed.match(/^(#{1,3})\s+(.*)/);

    if (ulMatch || olMatch) {
      if (listType && listType !== (olMatch ? 'ol' : 'ul')) flushList();
      listType = olMatch ? 'ol' : 'ul';
      list.push((olMatch || ulMatch)[1]);
      return;
    }

    flushList();

    if (hMatch) {
      nodes.push(
        <div
          key={idx}
          className={`mt-1.5 font-semibold ${hMatch[1].length === 1 ? 'text-[14px]' : 'text-[13px]'}`}
        >
          {inline(hMatch[2])}
        </div>
      );
    } else if (trimmed === '') {
      nodes.push(<div key={idx} className="h-1.5" />);
    } else {
      nodes.push(
        <div key={idx} className="whitespace-pre-wrap">
          {inline(trimmed)}
        </div>
      );
    }
  });

  flushList();

  if (streaming) {
    nodes.push(
      <span key="cursor" className="cursor-blink">
        ▍
      </span>
    );
  }

  return <>{nodes}</>;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const reduceMotion = useReducedMotion();
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const send = async text => {
    const trimmed = (text ?? input).trim();
    if (!trimmed || isTyping) return;

    const userMsg = { role: 'user', content: trimmed };
    const assistantMsg = { role: 'assistant', content: '', streaming: true };
    setMessages(m => [...m, userMsg, assistantMsg]);
    setInput('');
    setIsTyping(true);

    const result = await askGemini(trimmed, chunk => {
      setMessages(m => {
        const next = [...m];
        const last = next[next.length - 1];
        if (last && last.streaming) {
          next[next.length - 1] = { ...last, content: last.content + chunk };
        }
        return next;
      });
    }).catch(() => ({
      text: 'Something went wrong on my side. Please try again in a moment.',
      ok: false,
    }));

    setMessages(m => {
      const next = [...m];
      const idx = next.length - 1;
      if (next[idx] && next[idx].streaming) {
        next[idx] = {
          role: 'assistant',
          content: result.text,
          isError: !result.ok,
        };
      }
      return next;
    });
    setIsTyping(false);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(o => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open AI assistant'}
        className={`fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-2xl shadow-mac-xl transition-colors duration-200 ${
          isOpen
            ? 'bg-od-surface text-gray-200 hover:bg-od-surface/80'
            : 'bg-od-orange text-white hover:bg-od-orange/90 hover:shadow-glow-orange'
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'bot'}
            initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={reduceMotion ? undefined : { rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            {isOpen ? <X size={24} /> : <Bot size={24} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="glass-strong fixed bottom-24 right-4 z-[60] flex h-[540px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl shadow-mac-xl sm:right-6"
            role="dialog"
            aria-label="AI assistant chat"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-mac-border bg-mac-bg/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-od-orange/15 text-od-orange">
                <Sparkles size={18} />
                <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-od-green opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-od-green" />
                </span>
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold text-mac-text dark:text-gray-100">
                  <span className="mr-1.5 text-od-green">$</span>rohan assistant
                </div>
                <div className="font-mono text-[11px] text-mac-text-secondary dark:text-gray-400">
                  ask me about Rohan
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="rounded-lg p-1.5 text-mac-text-secondary transition-colors hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="custom-scrollbar flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.length === 0 && !isTyping && (
                <div className="py-1 text-center">
                  <div className="font-mono text-xs text-mac-text-secondary dark:text-gray-500">
                    {"// hi, I'm rohan assistant. ask me anything"}
                    <br />
                    {"// about Rohan's work & experience."}
                  </div>
                  <div className="mt-4 space-y-2">
                    {SUGGESTIONS.map(s => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="glass glass-hover block w-full rounded-xl px-3 py-2 text-left font-mono text-xs text-mac-text-secondary transition-colors hover:text-od-orange dark:text-gray-300"
                      >
                        <span className="mr-1 text-od-green">$</span>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 font-mono text-[13px] leading-relaxed ${
                      m.role === 'user'
                        ? 'rounded-br-sm bg-od-orange/90 text-white'
                        : m.isError
                          ? 'rounded-bl-sm border border-od-red/30 bg-od-red/10 text-od-red dark:text-[#e06c75]/90'
                          : 'glass rounded-bl-sm text-mac-text dark:text-gray-200'
                    }`}
                  >
                    {m.role === 'assistant' && !m.isError && (
                      <span className="mr-1.5 text-od-green">→</span>
                    )}
                    {m.role === 'user' ? (
                      m.content
                    ) : (
                      <MarkdownText text={m.content} streaming={m.streaming} />
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                    <div className="flex items-center space-x-1">
                      <span className="h-1.5 w-1.5 animate-bounce-slow rounded-full bg-mac-text-secondary/60 delay-0 dark:bg-gray-400" />
                      <span className="h-1.5 w-1.5 animate-bounce-slow rounded-full bg-mac-text-secondary/60 delay-100 dark:bg-gray-400" />
                      <span className="h-1.5 w-1.5 animate-bounce-slow rounded-full bg-mac-text-secondary/60 delay-200 dark:bg-gray-400" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-mac-border p-3 dark:border-white/10">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  placeholder="ask a question..."
                  disabled={!isAIConfigured()}
                  className="glass custom-scrollbar max-h-32 w-full resize-none rounded-xl px-3.5 py-2.5 font-mono text-[13px] text-mac-text placeholder:text-mac-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-od-orange/40 dark:text-gray-200 dark:placeholder:text-gray-500"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim() || isTyping || !isAIConfigured()}
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-od-orange text-white transition-colors hover:bg-od-orange/90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </div>
              {!isAIConfigured() && (
                <p className="mt-2 flex items-center gap-1.5 font-mono text-[10px] text-od-red">
                  <ChevronDown size={12} />
                  Gemini not configured — add NEXT_PUBLIC_GEMINI_API_KEY
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
