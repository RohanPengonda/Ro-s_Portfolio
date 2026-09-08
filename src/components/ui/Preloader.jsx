"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "./DecryptedText";

const BOOT_LINES = [
  "$  init --portfolio --theme=onedark",
  ">  resolving dependencies ........ ok",
  ">  mounting <Hero/> .............. ok",
  ">  wiring <RAG/> + <Auth/> ....... ok",
  ">  tree-shaking node_modules ..... -12kb",
  "$  serve --port=8080 --ready",
];

const CHAR_MS = 9;

const bootLineClass = (line) =>
  line.startsWith("$") ? "text-od-green" : "text-gray-400";

const Preloader = ({ onComplete }) => {
  const [typed, setTyped] = useState([]);
  const [current, setCurrent] = useState("");
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("booting");
  const [reduceMotion, setReduceMotion] = useState(false);

  const lineRef = useRef(0);
  const charRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    setReduceMotion(prefersReduced);

    if (prefersReduced) {
      setTyped(BOOT_LINES);
      setProgress(100);
      setPhase("decrypt");
      const t = setTimeout(() => onComplete(), 600);
      return () => clearTimeout(t);
    }

    const totalChars = BOOT_LINES.reduce((sum, line) => sum + line.length, 0);
    let typedChars = 0;

    const interval = setInterval(() => {
      const line = BOOT_LINES[lineRef.current];
      if (!line) {
        clearInterval(interval);
        setProgress(100);
        setPhase("decrypt");
        return;
      }
      if (charRef.current < line.length) {
        charRef.current += 1;
        typedChars += 1;
        setCurrent(line.slice(0, charRef.current));
        setProgress(Math.round((typedChars / totalChars) * 100));
      } else {
        setTyped((prev) => [...prev, line]);
        setCurrent("");
        charRef.current = 0;
        typedChars += 1;
        lineRef.current += 1;
      }
    }, CHAR_MS);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (phase !== "decrypt") return undefined;
    const t = setTimeout(() => setPhase("leaving"), reduceMotion ? 400 : 2600);
    return () => clearTimeout(t);
  }, [phase, reduceMotion]);

  useEffect(() => {
    if (phase !== "leaving") return undefined;
    const t = setTimeout(() => onComplete(), 800);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#1e2127]"
      animate={phase === "leaving" ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden={phase === "leaving"}
    >
      <div className="absolute inset-0 bg-code-lines opacity-20" />
      <div className="absolute inset-0 bg-gutter opacity-20" />

      <div className="relative w-full max-w-lg px-4">
        <AnimatePresence mode="wait">
          {phase === "booting" ? (
            <motion.div
              key="terminal"
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-od-bg/95 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-od-red/80" />
                  <span className="h-3 w-3 rounded-full bg-od-orange/80" />
                  <span className="h-3 w-3 rounded-full bg-od-green/80" />
                  <span className="ml-3 font-mono text-xs text-gray-500">
                    ~/rohan-portfolio — zsh
                  </span>
                </div>

                <div className="min-h-[216px] px-5 py-4 font-mono text-[13px] leading-relaxed">
                  {typed.map((line, i) => (
                    <div
                      key={i}
                      className={`mb-1 whitespace-pre-wrap ${bootLineClass(line)}`}
                    >
                      {line}
                    </div>
                  ))}
                  <div className="flex items-center whitespace-pre-wrap text-od-green">
                    <span>{current}</span>
                    <span className="ml-0.5 inline-block h-[15px] w-2 animate-pulse bg-od-green/80" />
                  </div>
                </div>

                <div className="border-t border-white/10 px-5 py-3">
                  <div className="flex items-center justify-between font-mono text-xs text-gray-500">
                    <span>boot sequence</span>
                    <span className="tabular-nums text-od-green">
                      {progress}%
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-od-green transition-[width] duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              {reduceMotion ? (
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Rohan Pengonda
                </h1>
              ) : (
                <DecryptedText
                  text="Rohan Pengonda"
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={90}
                  maxIterations={15}
                  useOriginalCharsOnly
                  className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                  encryptedClassName="text-4xl font-bold tracking-tight text-od-purple/80 sm:text-6xl"
                />
              )}

              <p className="mt-5 font-mono text-sm text-gray-400">
                <span className="text-od-green">$</span> whoami{" "}
                <span aria-hidden="true">&rarr;</span> full-stack developer
                building AI-powered products
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Preloader;