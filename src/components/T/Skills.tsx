import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 70 }
      ]
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Jest/Testing", level: 85 },
        { name: "JIRA", level: 85 },
        { name: "Figma", level: 75 }
      ]
    }
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-600 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise across the full technology stack with proven proficiency in modern frameworks, cloud platforms, and development methodologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-100 pb-3">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "GraphQL", "Redux", "Express.js", "Firebase", "Elasticsearch", 
                "Redis", "Microservices", "REST APIs", "WebSocket", "OAuth",
                "Webpack", "Vite", "Sass", "Bootstrap", "Material-UI"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;