// src/data/skillCategories.js
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaLaptopCode,
  FaJira,
  FaVuejs,
  FaSass,
  FaBootstrap,
  FaFigma,
  FaLinux,
  FaJava,
  FaWindows,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiNextdotjs,
  SiPostman,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: FaJsSquare },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Python", icon: FaPython },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Sass", icon: FaSass },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Jest", icon: SiJest },
      { name: "Webpack", icon: SiWebpack },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
    ],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "VS Code", icon: FaLaptopCode },
      { name: "Postman", icon: SiPostman },
      { name: "Agile / Scrum", icon: FaJira },
      { name: "Figma", icon: FaFigma },
      { name: "Linux", icon: FaLinux },
      { name: "Excel", icon: FaFileExcel },
      { name: "MS Office", icon: FaWindows },
    ],
  },
];

export default skillCategories;
