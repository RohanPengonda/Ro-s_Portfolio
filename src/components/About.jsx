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
    <section id="about" className="py-10 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            {/* <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate full-stack developer dedicated to creating impactful solutions and driving digital innovation
            </p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Hi, I am Rohan Pengonda.
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                A Full-stack Developer passionate about creating and delivering projects that make a real-world impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I specialize in full-stack development with React.js, Next.js and Express.js, using JavaScript for type safety. 
                I have experience with modern web technologies and tools.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Have an idea, want to collaborate, or have an internship opportunity? Feel free to message me! 
                I'm always excited to connect and work on great projects.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-400">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {React.createElement(iconMap[highlight.iconName], { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
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