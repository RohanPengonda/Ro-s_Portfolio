import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences } from "../data/experienceData";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-alt py-16 transition-colors duration-300 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal className="mb-12 sm:mb-16">
            <SectionLabel
              command="ls ./experience"
              output="total 2 · drwxr-xr-x rohan 2 roles"
            />
            <h2 className="text-3xl font-bold tracking-tight text-mac-text dark:text-white sm:text-4xl md:text-5xl">
              Professional <span className="text-od-purple">Experience</span>
            </h2>
          </ScrollReveal>

          {/* Vertical timeline */}
          <div className="timeline-line space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              return (
                <div key={index} className="relative pl-6 sm:pl-8">
                  {/* Timeline dot */}
                  <span
                    className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm dark:border-od-bg ${
                      index === 0 ? "bg-od-orange" : "bg-od-purple"
                    }`}
                  />

                  {/* Duration marker */}
                  <div
                    className={`mb-3 font-mono text-xs uppercase tracking-wider text-mac-text-secondary dark:text-gray-400 ${
                      index === 0 ? "text-od-orange dark:text-od-orange" : ""
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                    <span className="mx-2 text-mac-border dark:text-white/10">|</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Card */}
                  <ScrollReveal delay={0.05} y={20}>
                    <div className="glass glass-hover rounded-2xl p-6 sm:p-8">
                      <div className="mb-4">
                        <h3 className="font-mono text-xl font-semibold text-mac-text dark:text-white sm:text-2xl">
                          {exp.position}
                        </h3>
                        <p className="mt-1 font-mono text-sm text-od-orange dark:text-od-orange">
                          {exp.company}
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-mac-text-secondary dark:text-gray-300 sm:text-[15px]"
                          >
                            <ChevronRight
                              size={16}
                              className="mt-0.5 flex-shrink-0 text-od-green"
                            />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, ti) => (
                          <span
                            key={ti}
                            className="rounded-lg border border-mac-border bg-white/60 px-2.5 py-1 font-mono text-xs text-mac-text-secondary dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;