import React from "react";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-10"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-teal-400 dark:bg-teal-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-4 sm:mb-5 mt-4 sm:mt-9">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-5xl font-bold shadow-2xl">
              RP
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Rohan Pengonda
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 font-medium">
            Full-Stack Developer
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            "Passionate full-stack developer specializing in modern web
            technologies, cloud solutions, and scalable applications.
            Experienced in building innovative solutions that drive business
            growth and enhance user experiences. Actively learning about AI and
            deeply interested in integrating intelligent systems into modern
            software solutions."
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 px-4 sm:px-0">
            <a
              href="https://drive.google.com/file/d/1e715evlbLsF5aMqC2hpCBH29hToc6UK1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
              Download Resume
            </a>
            <button
              onClick={scrollToAbout}
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 text-sm sm:text-base"
            >
              Learn More
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-5 mb-4 sm:mb-0">
            <a
              href="mailto:rpengonda1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 p-2"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://github.com/RohanPengonda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 p-2"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/rohanpengonda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 p-2"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="py-4 sm:py-6">
          <button
            onClick={scrollToAbout}
            className="absolute left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={24} className="sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
