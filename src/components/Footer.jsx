import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { navLinks } from '../data/navLinksData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <button 
                onClick={scrollToTop}
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 hover:opacity-80 transition-opacity duration-200"
              >
                Rohan Pengonda
              </button>
              <p className="text-gray-400 mb-6 max-w-md">
                Full-Stack Developer passionate about creating innovative solutions 
                and driving digital transformation through cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:rpengonda1@gmail.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label="Email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={24} />
                </a>
                <a 
                  href="https://github.com/RohanPengonda" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rohanpengonda/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links and Contact - Horizontal Layout */}
            <div className="flex flex-col gap-4 mt-8 md:mt-0">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="flex flex-row gap-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className='flex flex-col'>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="flex flex-row gap-6 text-gray-400">
                  <p>Available Worldwide</p>
                  <p>rpengonda1@gmail.com</p>
                  <p>+917720991451</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Rohan Pengonda. All rights reserved.
              </p>
              {/* <p className="text-gray-400 text-sm flex items-center gap-2">
                Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;