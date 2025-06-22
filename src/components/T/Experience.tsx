import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      achievements: [
        "Led development of microservices architecture serving 2M+ users daily",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored team of 5 junior developers in modern development practices",
        "Architected cloud-native solutions using AWS, reducing infrastructure costs by 35%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "TypeScript"]
    },
    {
      company: "InnovateLab",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "Austin, TX",
      type: "Full-time",
      achievements: [
        "Developed responsive web applications using React and Vue.js",
        "Built RESTful APIs serving 100K+ requests daily with 99.9% uptime",
        "Collaborated with UX team to improve user engagement by 45%",
        "Optimized database queries reducing page load times by 40%"
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis", "Docker"]
    },
    {
      company: "StartupVenture",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      location: "Remote",
      type: "Contract",
      achievements: [
        "Built customer-facing dashboard used by 10K+ active users",
        "Implemented real-time features using WebSocket technology",
        "Created responsive design system reducing development time by 30%",
        "Integrated third-party APIs for payment processing and analytics"
      ],
      technologies: ["React", "JavaScript", "Sass", "REST APIs", "Git", "Figma"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A track record of delivering high-impact solutions and driving technical excellence across diverse projects and teams
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-3">
                      {exp.position}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {exp.type}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <ChevronRight size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm border border-gray-200 hover:border-blue-300 transition-colors duration-200"
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
            <p className="text-lg text-gray-600 mb-6">
              Interested in working together or learning more about my experience?
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