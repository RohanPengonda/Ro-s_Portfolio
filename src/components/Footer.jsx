"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks } from "../data/navLinksData";

const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "rpengonda1@gmail.com";
const GITHUB = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/RohanPengonda";
const LINKEDIN =
  process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/rohanpengonda/";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-mac-border bg-mac-bg py-10 text-mac-text-secondary transition-colors duration-300 dark:border-white/10 dark:bg-gray-950 dark:text-gray-300">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="font-mono text-xl font-semibold text-mac-text dark:text-white"
            >
              <span className="mr-1 text-od-green">~</span>rohan
            </button>
            <p className="mt-2 max-w-sm text-sm text-mac-text-secondary dark:text-gray-400">
              Full-Stack Developer building AI-powered products.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-mono text-sm text-mac-text-secondary transition-colors hover:text-od-orange dark:text-gray-400 dark:hover:text-od-cyan"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex space-x-4">
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
                className="transition-colors hover:text-od-orange"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-mac-border pt-6 text-xs text-mac-text-secondary dark:border-white/10 dark:text-gray-500 sm:flex-row">
        <p>&copy; {currentYear} Rohan Pengonda. All rights reserved.</p>
        </div>

        <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-mac-text-secondary/50 dark:text-gray-600">
          <span className="text-od-green">$</span>
          <span>exit 0</span>
          <span className="mx-1 select-none">·</span>
          <span>{"// EOF"}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;