import React from 'react';
import { Code, Users, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Excellence",
      description: "Expert in modern web technologies, cloud platforms, and software architecture"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Led cross-functional teams and mentored junior developers in agile environments"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Developed cutting-edge solutions that improved efficiency by 40% and reduced costs"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Delivered 25+ successful projects with 99.9% uptime and excellent user satisfaction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate technology professional dedicated to creating impactful solutions and driving digital transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Transforming Ideas Into Reality
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 5 years of experience in software engineering and product development, 
                I specialize in building scalable, user-centric applications that solve real-world problems. 
                My expertise spans full-stack development, cloud architecture, and agile project management.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm passionate about emerging technologies, continuous learning, and collaborating with 
                diverse teams to deliver exceptional results. My approach combines technical excellence 
                with strategic thinking to drive business growth and innovation.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime Achieved</div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="text-blue-600 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;