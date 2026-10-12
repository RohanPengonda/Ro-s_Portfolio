import { NextResponse } from 'next/server';
import { isGeminiConfigured, openGeminiStream } from '../../../lib/gemini';
import { rateLimit } from '../../../lib/rateLimit';

const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_TURNS = 20;

const normalizeHistory = (history) => {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_TURNS)
    .map((turn) => {
      const text =
        typeof turn?.content === 'string'
          ? turn.content.slice(0, MAX_MESSAGE_LENGTH).trim()
          : '';
      if (!text) return null;
      const role =
        turn?.role === 'assistant' || turn?.role === 'model' ? 'model' : 'user';
      return { role, parts: [{ text }] };
    })
    .filter(Boolean);
};

export async function GET() {
  return NextResponse.json({ configured: isGeminiConfigured() });
}

export async function POST(request) {
  const limit = rateLimit(request, {
    key: 'chat',
    limit: 20,
    windowMs: 60_000,
  });

  if (!limit.ok) {
    return NextResponse.json(
      { error: 'Too many requests. Please slow down and try again shortly.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    );
  }

  if (!isGeminiConfigured()) {
    return NextResponse.json(
      { error: 'The AI assistant is not configured.' },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const message = typeof body?.message === 'string' ? body.message.trim() : '';

  if (!message) {
    return NextResponse.json(
      { error: 'A message is required.' },
      { status: 400 }
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: 'That message is too long.' },
      { status: 400 }
    );
  }

  const contents = [
    ...normalizeHistory(body?.history),
    { role: 'user', parts: [{ text: message }] },
  ];

  let gemini;
  try {
    gemini = await openGeminiStream(contents);
  } catch (error) {
    console.error('Gemini request error:', error);
    return NextResponse.json(
      { error: 'Failed to reach the AI model.' },
      { status: 502 }
    );
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      let received = false;
      try {
        for await (const chunk of gemini.stream) {
          const text = chunk.text ?? '';
          if (text) {
            received = true;
            controller.enqueue(encoder.encode(text));
          }
        }
        if (!received) {
          controller.enqueue(
            encoder.encode("Sorry, I couldn't generate a response. Please try again.")
          );
        }
        controller.close();
      } catch (error) {
        console.error('Gemini stream error:', error);
        controller.error(error);
      }
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store, no-transform',
    },
  });
}
