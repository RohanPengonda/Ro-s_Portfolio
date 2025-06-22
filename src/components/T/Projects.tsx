import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Serves 50K+ users with 99.9% uptime.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      features: ["Real-time inventory", "Payment integration", "Admin dashboard", "Mobile responsive"],
      metrics: { users: "50K+", uptime: "99.9%", performance: "95%" },
      duration: "6 months",
      team: "5 developers",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics platform processing millions of data points daily. Features interactive charts, custom reporting, and automated insights generation.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Python", "MongoDB", "D3.js", "Redis"],
      features: ["Real-time data", "Interactive charts", "Custom reports", "AI insights"],
      metrics: { dataPoints: "10M+", responseTime: "<200ms", accuracy: "98%" },
      duration: "4 months",
      team: "3 developers",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Mobile Health App",
      description: "Cross-platform health monitoring application with IoT device integration, health tracking, and telemedicine features. Used by 25K+ patients.",
      image: "https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Express.js", "Firebase", "WebSocket"],
      features: ["IoT integration", "Health tracking", "Telemedicine", "Push notifications"],
      metrics: { patients: "25K+", satisfaction: "4.8/5", retention: "85%" },
      duration: "8 months",
      team: "4 developers",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate technical excellence, user-centric design, and measurable business impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="h-64 lg:h-full">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:w-1/2 p-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users size={16} />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Impact & Metrics</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a 
                        href={project.liveUrl}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Want to see more of my work?
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;