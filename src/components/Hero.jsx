import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";

const RESUME_URL =
  import.meta.env.VITE_RESUME_URL || `${import.meta.env.BASE_URL}resume.pdf`;
const EMAIL = import.meta.env.VITE_EMAIL || "rpengonda1@gmail.com";
const GITHUB = import.meta.env.VITE_GITHUB_URL || "https://github.com/RohanPengonda";
const LINKEDIN =
  import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/rohanpengonda/";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const { displayed, done } = useTypewriter(
    "Full-Stack Developer building AI-powered products"
  );

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

        {/* Name */}
        <motion.h1
          {...fadeUp(0.15)}
          className="mb-4 text-4xl font-bold tracking-tight text-mac-text dark:text-white sm:text-5xl md:text-6xl"
        >
          Rohan Pengonda
        </motion.h1>

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
          I design, build, and ship production-grade web applications — from RAG
          systems that cite their sources, not fabricate them, to e-commerce
          platforms that hold up at scale.
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
            Download Resume
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
