"use client";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "../data/navLinksData";

const Header = ({ darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container mx-auto max-w-6xl px-4 transition-all duration-300 ${
          isScrolled
            ? "glass-strong shadow-mac rounded-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between py-2">
          <button
            onClick={() => scrollToSection("#home")}
            className="font-mono text-lg font-semibold text-mac-text transition-colors hover:text-od-orange dark:text-gray-100 dark:hover:text-od-orange"
          >
            <span className="mr-1 text-od-green">~</span>rohan
            <span className="ml-2 hidden select-none font-mono text-xs font-normal text-mac-text-secondary/60 dark:text-gray-500 sm:inline">
              user@rohan:~$
            </span>
          </button>

          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative rounded-lg px-3 py-1.5 font-mono text-sm transition-all duration-200 ${
                    isActive
                      ? "text-od-orange font-medium"
                      : "text-mac-text-secondary hover:text-mac-text dark:text-gray-300 dark:hover:text-gray-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-od-orange" />
                  )}
                </button>
              );
            })}
            <div className="ml-2 h-5 w-px bg-mac-border dark:bg-white/10" />
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-lg p-2 text-mac-text-secondary transition-colors hover:bg-black/5 hover:text-mac-text dark:text-gray-200 dark:hover:bg-white/10"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-lg p-2 text-mac-text-secondary hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-mac-text dark:text-gray-200"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="border-t border-mac-border pb-4 pt-2 dark:border-white/10 md:hidden">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full py-2.5 text-left font-mono text-sm transition-colors ${
                    isActive
                      ? "text-od-orange font-medium"
                      : "text-mac-text-secondary hover:text-mac-text dark:text-gray-300 dark:hover:text-od-cyan"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
