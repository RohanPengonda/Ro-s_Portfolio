"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";
import WarpText from "./ui/WarpText";
import HeroBackground from "./ui/HeroBackground";
import ShinyText from "./ui/ShinyText";

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "rpengonda1@gmail.com";
const GITHUB = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/RohanPengonda";
const LINKEDIN =
  process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/rohanpengonda/";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const { displayed, done } = useTypewriter(
    "I build software that's meant to ship."
  );

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode = () =>
      document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode());
    const observer = new MutationObserver(() => setIsDark(isDarkMode()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-mac-bg dark:bg-od-bg" />
      <div className="absolute inset-0 bg-code-lines opacity-[0.6] dark:opacity-[0.25]" />
      <div className="absolute inset-0 bg-gutter opacity-40 dark:opacity-20" />
      <div className="absolute inset-0">
        <HeroBackground />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Avatar with animated ring */}
        <motion.div
          {...fadeUp(0.05)}
          className="mx-auto mb-8 h-28 w-28 sm:h-32 sm:w-32"
        >
          <div className="avatar-ring relative h-full w-full rounded-full p-[3px]">
            <div className="glass flex h-full w-full items-center justify-center overflow-hidden rounded-full p-0.5 shadow-mac">
              <img
                src="/Logo.webp"
                alt="Rohan Pengonda"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Name — WebGL Warp Text */}
        <motion.div
          {...fadeUp(0.15)}
          className="mb-4"
        >
          <WarpText
            text="Rohan Pengonda"
            color={isDark ? "#ffffff" : "#1D1D1F"}
            warpStrength={0.06}
            warpScale={1.5}
            speed={0.45}
            pointerInfluence={0.5}
            pointerStrength={0.45}
            refraction={0.02}
            ripple={true}
            fontSize="clamp(2.5rem, 8vw, 5.5rem)"
            fontWeight={800}
            fontFamily="var(--font-inter), Inter, sans-serif"
            letterSpacing="-0.04em"
            lineHeight={1}
            className="mx-auto"
            style={{ minHeight: "120px" }}
          />
        </motion.div>

        {/* Typing headline */}
        <motion.div
          {...fadeUp(0.25)}
          className="mb-5 flex items-center justify-center"
        >
          <h2 className="font-mono text-lg font-medium text-mac-text-secondary dark:text-gray-200 sm:text-xl md:text-2xl">
            <span className="mr-1.5 text-od-green">$</span>
            <span>
              {displayed}
              <span className={`cursor-blink ${done ? "opacity-100" : ""}`}>|</span>
            </span>
          </h2>
        </motion.div>

        {/* Value prop */}
        <motion.p
          {...fadeUp(0.35)}
          className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-mac-text-secondary dark:text-gray-300 sm:text-base md:text-lg"
        >
          Full-Stack Developer building{" "}
          <span className="font-semibold text-mac-text dark:text-white">
            AI-powered products and production-ready web applications
          </span>{" "}
          with MERN, AI/LLMs, and modern web technologies.
          <br />
          <span className="mt-2 inline-block font-semibold text-od-orange">
            AI × Engineering × Product
          </span>
        </motion.p>

        {/* Actions */}
        <motion.div
          {...fadeUp(0.45)}
          className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-od-orange px-7 py-3 font-mono text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-od-orange/90 hover:shadow-glow-orange sm:w-auto"
          >
            <Download size={16} />
            <ShinyText
              text="Download Resume"
              speed={3}
              color="rgba(255,255,255,0.9)"
              shineColor="#ffe9d6"
              direction="left"
            />
          </a>
          <button
            onClick={() => scrollTo("#about")}
            className="glass glass-hover w-full rounded-xl px-7 py-3 font-mono text-sm text-mac-text dark:text-gray-200 sm:w-auto"
          >
            <span className="mr-1 text-od-green">./</span>about-me
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div {...fadeUp(0.55)} className="flex justify-center space-x-4">
          {[
            { href: `mailto:${EMAIL}`, Icon: Mail, label: "Email" },
            { href: GITHUB, Icon: Github, label: "GitHub" },
            { href: LINKEDIN, Icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass glass-hover rounded-xl p-3 text-mac-text-secondary transition-colors hover:text-od-orange dark:text-gray-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-mac-text-secondary transition-colors hover:text-od-orange dark:text-gray-400"
      >
        <ChevronDown size={26} />
      </button>
    </section>
  );
};

export default Hero;
