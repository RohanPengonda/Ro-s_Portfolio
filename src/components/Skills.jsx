import React from "react";
import skillCategories from "../data/skillCategories";
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I use in development, grouped by category
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
                {category.title}
              </h3>
              <div className="flex overflow-x-auto gap-4 sm:gap-6 py-3 sm:py-4 custom-scrollbar">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow p-3 sm:p-4 min-w-[100px] sm:min-w-[120px] hover:shadow-lg transition-shadow"
                    >
                      <div className="text-blue-600 dark:text-blue-400 mb-2">
                        <Icon size={32} className="sm:w-10 sm:h-10" />
                      </div>
                      <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium text-center">
                        {skill.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
