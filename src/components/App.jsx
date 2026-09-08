"use client";
import { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";
import ChatWidget from "./ChatWidget";
import Preloader from "./ui/Preloader";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme ? savedTheme === "dark" : true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = loaded ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loaded]);

  const toggleTheme = () => setDarkMode((d) => !d);

  return (
    <ErrorBoundary>
      {!loaded && <Preloader onComplete={handleLoadComplete} />}
      <div className="min-h-screen transition-colors duration-300 bg-mac-bg text-mac-text dark:bg-od-bg dark:text-od-fg">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </ErrorBoundary>
  );
}

export default App;
