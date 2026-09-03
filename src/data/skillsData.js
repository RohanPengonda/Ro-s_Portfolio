import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiRedux,
  SiOpenai,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiTestinglibrary,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";

export const skillCategories = [
  {
    name: "Languages & Databases",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL Server", icon: DiDatabase, color: "#CC2927" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    name: "AI/LLM & Tools",
    skills: [
      { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
      { name: "RAG Pipelines", icon: SiOpenai, color: "#a371f7" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Playwright", icon: SiTestinglibrary, color: "#2EAD33" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
    ],
  },
];
