"use client";
import { Terminal, Cpu, Rocket, GitBranch } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import SectionLabel from "./ui/SectionLabel";
import DecryptedText from "./ui/DecryptedText";
import GlareHover from "./ui/GlareHover";

const principles = [
  {
    icon: Terminal,
    title: "Full-stack, end to end",
    detail: "MongoDB schemas to React components — I own the whole vertical slice.",
    accent: "text-od-cyan",
    bg: "bg-od-cyan/5",
  },
  {
    icon: Cpu,
    title: "Applied AI, not hype",
    detail: "RAG pipelines, LLM integration, and systems that cite their sources.",
    accent: "text-od-purple",
    bg: "bg-od-purple/5",
  },
  {
    icon: Rocket,
    title: "Performance is a feature",
    detail: "Indexes, caching, and measured Lighthouse scores — not vibes.",
    accent: "text-od-green",
    bg: "bg-od-green/5",
  },
  {
    icon: GitBranch,
    title: "Boring infrastructure wins",
    detail: "Auth, payments, email, idempotency — the stuff that matters at scale.",
    accent: "text-od-orange",
    bg: "bg-od-orange/5",
  },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="section-alt py-16 transition-colors duration-300 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-12 sm:mb-16">
            <SectionLabel
              command="whoami"
              output="rohan ∈ { full-stack, applied AI, production engineering }"
            />
            <DecryptedText
              text="About Me"
              animateOn="view"
              sequential={true}
              revealDirection="start"
              speed={100}
              maxIterations={15}
              useOriginalCharsOnly={true}
              className="text-3xl font-bold tracking-tight text-mac-text dark:text-white sm:text-4xl md:text-5xl"
              encryptedClassName="text-3xl font-bold tracking-tight text-od-purple/60 dark:text-od-purple/50 sm:text-4xl md:text-5xl"
            />
          </ScrollReveal>

          {/* Asymmetric split: photo left, text right */}
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
              {/* Photo column */}
              <div className="flex flex-col items-center lg:items-start">
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="glass-strong relative h-48 w-48 overflow-hidden rounded-2xl p-1 shadow-mac-lg sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                    <img
                      src="/Logo.webp"
                      alt="Rohan Pengonda"
                      loading="lazy"
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </div>
                  {/* Floating stat card */}
                  {/* <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="absolute -bottom-4 -right-2 rounded-xl border border-mac-border bg-white px-4 py-2.5 shadow-mac dark:border-white/10 dark:bg-od-surface sm:-right-4"
                  >
                    <div className="font-mono text-lg font-bold text-od-orange">
                      <CountUp to={5} duration={2} />+
                    </div>
                    <div className="font-mono text-[10px] text-mac-text-secondary dark:text-gray-400">
                      projects shipped
                    </div>
                  </motion.div> */}
                </motion.div>
              </div>

              {/* Text column */}
              <div className="space-y-4 text-[15px] leading-relaxed text-mac-text-secondary dark:text-gray-300">
                <p>
                  I'm a full-stack developer who builds AI-powered products —
                  the kind of software that ships to real users and holds up
                  under load. My work sits at the intersection of applied AI
                  and production engineering: RAG systems that answer
                  questions with citations, and e-commerce platforms that
                  survive a flash sale without falling over.
                </p>
                <p>
                  I care about measurable outcomes, not demo-ware. That means
                  indexes and caching over slick slides, idempotent payments
                  over happy-path demos, and Lighthouse scores I can point at
                  rather than screenshots I can't defend.
                </p>
                <p>
                  Right now I build full MERN applications for clients at Renb
                  Digital, where I've cut page-load times by up to 30% and
                  automated testing with Playwright. I'm always looking for the
                  next interesting problem at the intersection of AI and
                  reliability.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Principles grid */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {principles.map((p, i) => (
                  <GlareHover
                    key={i}
                    glareColor="#ffffff"
                    glareOpacity={0.08}
                    glareAngle={-45}
                    glareSize={300}
                    transitionDuration={600}
                    playOnce={false}
                    className="rounded-xl"
                    style={{ width: "100%", height: "auto" }}
                  >
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      className={`glass glass-hover group rounded-xl p-4 ${p.bg}`}
                    >
                      <p.icon
                        size={20}
                        className={`mb-2 ${p.accent} transition-transform duration-200 group-hover:scale-110`}
                      />
                      <h4 className="mb-1 font-mono text-sm font-semibold text-mac-text dark:text-gray-100">
                        {p.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-mac-text-secondary dark:text-gray-400">
                        {p.detail}
                      </p>
                    </motion.div>
                  </GlareHover>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
