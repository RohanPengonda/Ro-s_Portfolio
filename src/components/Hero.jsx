import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-10"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 animate-pulse rounded-full bg-blue-400 opacity-20 mix-blend-multiply blur-xl filter dark:bg-blue-600 dark:mix-blend-screen"></div>
        <div className="animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter dark:bg-purple-600 dark:mix-blend-screen"></div>
        <div className="animation-delay-4000 absolute left-40 top-40 h-60 w-60 animate-pulse rounded-full bg-teal-400 opacity-20 mix-blend-multiply blur-xl filter dark:bg-teal-600 dark:mix-blend-screen"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          {/* Profile Image */}
          <div className="mb-4 mt-4 sm:mb-5 sm:mt-9">
            <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl sm:h-32 sm:w-32">
              <img
                src="/Logo.png"
                alt="Rohan Pengonda Logo"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Rohan Pengonda
            </span>
          </h1>

          <h2 className="mb-3 text-lg font-medium text-gray-700 dark:text-gray-300 sm:mb-4 sm:text-xl md:text-2xl lg:text-3xl">
            Full-Stack Developer
          </h2>

          <p className="mx-auto mb-6 max-w-3xl px-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:mb-8 sm:px-0 sm:text-base md:text-lg lg:text-xl">
            "Passionate full-stack developer specializing in modern web
            technologies, cloud solutions, and scalable applications.
            Experienced in building innovative solutions that drive business
            growth and enhance user experiences. Actively learning about AI and
            deeply interested in integrating intelligent systems into modern
            software solutions."
          </p>

          {/* Action Buttons */}
          <div className="mb-8 flex flex-col items-center justify-center gap-3 px-4 sm:mb-10 sm:flex-row sm:gap-4 sm:px-0">
            <a
              href={import.meta.env.VITE_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full transform items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              <Download size={18} className="sm:h-5 sm:w-5" />
              Download Resume
            </a>
            <button
              onClick={scrollToAbout}
              className="w-full rounded-full border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:hover:bg-blue-600 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Learn More
            </button>
          </div>

          {/* Social Links */}
          <div className="mb-4 flex justify-center space-x-4 sm:mb-0 sm:space-x-5">
            <a
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Mail size={20} className="sm:h-6 sm:w-6" />
            </a>

            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Github size={20} className="sm:h-6 sm:w-6" />
            </a>

            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <Linkedin size={20} className="sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="py-4 sm:py-6">
          <button
            onClick={scrollToAbout}
            className="absolute left-1/2 -translate-x-1/2 transform animate-bounce text-gray-600 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <ChevronDown size={24} className="sm:h-8 sm:w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
