import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences } from "../data/experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A journey of continuous learning and building innovative solutions
              across various projects and technologies
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {exp.position}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      {/* <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                        {exp.type}
                      </div> */}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <ChevronRight
                            size={16}
                            className="text-blue-500 mt-0.5 flex-shrink-0"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-500 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200"
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
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Interested in working together or learning more about my
              experience?
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
