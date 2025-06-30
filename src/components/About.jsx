import React from 'react';
import { Code, Lightbulb, BookOpen, Zap } from 'lucide-react';
import { highlights } from '../data/highlightData';

const About = () => {
  // Icon mapping
  const iconMap = {
    Code: Code,
    Lightbulb: Lightbulb,
    BookOpen: BookOpen,
    Zap: Zap
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            {/* <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate full-stack developer dedicated to creating impactful solutions and driving digital innovation
            </p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
                Hi, I'm Rohan Pengonda
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                I'm a Full-Stack Developer experienced in building modern, scalable web applications. I specialize in React.js, Next.js, Node.js, and MongoDB, crafting responsive UIs and secure backends.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                I work with JavaScript, TypeScript, Tailwind CSS, and RESTful APIs, and have deployed apps using AWS and Firebase for real-world performance and scalability.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                Currently exploring AI integration to build smarter applications. I'm always open to collaborations, projects, or internship opportunities feel free to connect!
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">30+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">10+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-1 sm:mb-2">100+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Coding Questions Solved</div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-4 sm:space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {React.createElement(iconMap[highlight.iconName], { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-gray-200">
                      {highlight.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;