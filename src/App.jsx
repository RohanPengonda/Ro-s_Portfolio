import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import { usePageLoad } from "./hooks/usePageLoad";
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { isLoading, isVisible } = usePageLoad(800);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
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

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <Analytics />
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
