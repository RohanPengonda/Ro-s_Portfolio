import { ExternalLink, Github, BarChart3 } from "lucide-react";
import { projects } from "../data/projectsData";
import ScrollReveal from "./ui/ScrollReveal";
import TerminalCard from "./ui/TerminalCard";
import SectionLabel from "./ui/SectionLabel";

const accentMap = {
  purple: "text-od-purple",
  cyan: "text-od-cyan",
  green: "text-od-green",
  orange: "text-od-orange",
  red: "text-od-red",
};

const accentDot = {
  purple: "bg-od-purple",
  cyan: "bg-od-cyan",
  green: "bg-od-green",
  orange: "bg-od-orange",
  red: "bg-od-red",
};

// Styled code-block mockup for PDFChat (no screenshot available)
const PdfchatMockup = () => (
  <div className="overflow-hidden rounded-xl border border-mac-border bg-mac-bg/80 dark:border-white/10 dark:bg-[#1e2127]/90">
    <div className="border-b border-mac-border px-4 py-2 font-mono text-[11px] text-mac-text-secondary dark:border-white/10 dark:text-gray-400">
      query.py — RAG with hybrid retrieval
    </div>
    <div className="space-y-2.5 p-4 font-mono text-[12px] leading-relaxed sm:text-[13px]">
      <p className="text-mac-text-secondary dark:text-gray-400">
        <span className="mr-1.5 text-od-green">$</span>
        <span className="text-od-orange">ask</span>
        <span className="text-mac-text dark:text-gray-200">("What causes inflation?")</span>
      </p>
      <div className="ml-0 space-y-1 border-l-2 border-od-cyan/40 pl-3 text-mac-text-secondary dark:text-gray-300">
        <p>
          <span className="text-od-purple">retrieval</span>
          <span> &rarr; hybrid (cosine 40% + keyword 60%)</span>
        </p>
        <p>
          <span className="text-od-green">citations</span>
          <span> &rarr; 2 found, confidence 0.94</span>
        </p>
        <p>
          <span className="text-od-green">answer</span>
          <span> streaming via SSE, cited to p.42 </span>
        </p>
      </div>
      <p className="text-mac-text-secondary dark:text-gray-400">
        <span className="mr-1.5 text-od-green">$</span>
        <span className="text-mac-text dark:text-gray-300">— 2 verified citations in 1.8s</span>
        <span className="cursor-blink text-od-orange">▋</span>
      </p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-primary py-16 transition-colors duration-300 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-12 sm:mb-16">
            <SectionLabel
              command="cat ./projects"
              output="2 featured · flagship case studies"
            />
            <h2 className="text-3xl font-bold tracking-tight text-mac-text dark:text-white sm:text-4xl md:text-5xl">
              Case <span className="text-od-cyan">Studies</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-16 sm:space-y-20">
            {projects.map((project, index) => (
              <div key={project.title} id={`project-${index}`}>
                <ScrollReveal>
                  <TerminalCard filename={project.filename}>
                    {/* Header */}
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="mb-1 font-mono text-2xl font-semibold text-mac-text dark:text-white sm:text-3xl">
                          <span className="mr-1 text-od-green">?</span>
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs text-mac-text-secondary dark:text-gray-500">
                          {project.tagline}
                        </p>
                      </div>
                      <div className="flex flex-shrink-0 gap-3">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 rounded-lg border border-mac-border bg-white/50 px-3 py-1.5 font-mono text-xs text-mac-text-secondary transition-colors hover:border-od-purple hover:text-od-purple dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-200 dark:hover:border-od-purple dark:hover:text-od-purple"
                          >
                            <Github size={14} /> source
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 rounded-lg border border-mac-border bg-white/50 px-3 py-1.5 font-mono text-xs text-mac-text-secondary transition-colors hover:border-od-cyan hover:text-od-cyan dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-200 dark:hover:border-od-cyan dark:hover:text-od-cyan"
                          >
                            <ExternalLink size={14} /> live
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Image: code mockup for PDFChat, screenshot for Binkey-It */}
                    <div className="mb-6">
                      {project.title === "PDFChat" ? (
                        <PdfchatMockup />
                      ) : (
                        project.image && (
                          <div className="overflow-hidden rounded-xl border border-mac-border dark:border-white/10">
                            <img
                              src={project.image}
                              alt={`${project.title} preview`}
                              loading="lazy"
                              className="h-44 w-full object-cover sm:h-56"
                            />
                          </div>
                        )
                      )}
                    </div>

                    {/* Problem */}
                    <div className="mb-6">
                      <h4 className="mb-2 font-mono text-sm font-semibold text-od-purple">
                        {"// problem"}
                      </h4>
                      <p className="text-sm leading-relaxed text-mac-text-secondary dark:text-gray-300 sm:text-[15px]">
                        {project.problem}
                      </p>
                    </div>

                    {/* Architecture */}
                    <div className="mb-6">
                      <h4 className="mb-2 font-mono text-sm font-semibold text-od-cyan">
                        {"// architecture"}
                      </h4>
                      <ul className="space-y-1.5">
                        {project.architecture.map((line, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-mac-text-secondary dark:text-gray-300">
                            <span className="mt-0.5 text-od-green">›</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="mb-3 font-mono text-sm font-semibold text-od-orange">
                        {"// highlights"}
                      </h4>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-mac-border bg-white/50 p-3.5 dark:border-white/5 dark:bg-white/[0.03]"
                          >
                            <div className="mb-1 flex items-center gap-2">
                              <span className={`h-1.5 w-1.5 rounded-full ${accentDot[h.accent]}`} />
                              <h5 className={`font-mono text-sm font-semibold ${accentMap[h.accent]}`}>
                                {h.title}
                              </h5>
                            </div>
                            <p className="mb-1.5 font-mono text-[11px] text-od-comment dark:text-gray-600">
                              {"# "}{h.note}
                            </p>
                            {h.metric && (
                              <p className="mb-1 font-mono text-xs font-bold text-od-green">
                                {h.metric}
                              </p>
                            )}
                            <p className="text-xs leading-relaxed text-mac-text-secondary dark:text-gray-400">
                              {h.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Measured performance */}
                    {project.metrics && (
                      <div className="mb-6">
                        <h4 className="mb-3 flex items-center gap-1.5 font-mono text-sm font-semibold text-od-green">
                          <BarChart3 size={14} /> {"// measured performance"}
                        </h4>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
                          {project.metrics.map((m, i) => (
                            <div
                              key={i}
                              className="rounded-xl border border-mac-border bg-white/50 p-2.5 text-center dark:border-white/5 dark:bg-white/[0.03]"
                            >
                              <div className="font-mono text-sm font-bold text-od-orange">{m.value}</div>
                              <div className="font-mono text-[10px] text-mac-text-secondary dark:text-gray-500">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="mb-2 font-mono text-sm font-semibold text-mac-text-secondary dark:text-gray-400">
                        {"// stack"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-lg border border-mac-border bg-white/50 px-2 py-1 font-mono text-xs text-mac-text-secondary dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TerminalCard>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <ScrollReveal className="mt-14 text-center">
            <p className="mb-4 font-mono text-sm text-mac-text-secondary dark:text-gray-400">
              Want to see more of my work?{" "}
              <a
                href="https://github.com/RohanPengonda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-od-cyan underline-offset-4 hover:underline"
              >
                github.com/RohanPengonda
              </a>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;