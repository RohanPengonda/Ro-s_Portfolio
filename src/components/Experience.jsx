import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences } from "../data/experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A journey of continuous learning and building innovative solutions
              across various projects and technologies
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="grid lg:grid-cols-4 gap-4 sm:gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {exp.position}
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="sm:w-4 sm:h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="sm:w-4 sm:h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-2">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                        >
                          <ChevronRight
                            size={14}
                            className="text-blue-500 mt-0.5 flex-shrink-0 sm:w-4 sm:h-4"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="lg:col-span-1">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm border border-gray-200 dark:border-gray-500 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
              Interested in working together or learning more about my
              experience?
            </p>
            <a
              href={import.meta.env.VITE_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              View Full Resume            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
