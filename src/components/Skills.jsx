import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "../data/skillsData";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="section-primary py-16 transition-colors duration-300 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-12 sm:mb-16">
            <SectionLabel
              command="cat ./skills.json"
              output="23 entries · sorted by frequency of use ↓"
            />
            <h2 className="text-3xl font-bold tracking-tight text-mac-text dark:text-white sm:text-4xl md:text-5xl">
              Technical <span className="text-od-orange">Skills</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-10">
            {skillCategories.map((category, catIndex) => (
              <ScrollReveal key={category.name} delay={catIndex * 0.08}>
                <h3 className="mb-4 font-mono text-sm font-medium text-mac-text-secondary dark:text-gray-400">
                  <span className="mr-1.5 text-od-green">{"//"}</span>
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.03 + catIndex * 0.05,
                      }}
                      whileHover={reduceMotion ? {} : { y: -3, scale: 1.02 }}
                      className="skill-card glass group flex items-center gap-3 rounded-xl px-3.5 py-3 transition-all duration-200 hover:border-mac-border-dark hover:shadow-mac dark:hover:border-white/20 cursor-default"
                      style={{ "--skill-color": skill.color }}
                    >
                      <skill.icon
                        size={20}
                        className="skill-icon flex-shrink-0 text-gray-400 dark:text-gray-500"
                      />
                      <span className="font-mono text-xs font-medium text-mac-text-secondary dark:text-gray-300 group-hover:text-mac-text dark:group-hover:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
