import React from "react";
import skillCategories from "../data/skillcategories";
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I use in development, grouped by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {category.title}
              </h3>
              <div className="flex overflow-x-auto gap-6 py-4 custom-scrollbar">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow p-4 min-w-[120px] hover:shadow-lg transition-shadow"
                    >
                      <div className="text-blue-600 dark:text-blue-400 mb-2">
                        <Icon size={40} />
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 font-medium text-center">
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
