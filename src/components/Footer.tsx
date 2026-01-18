import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-blue-400">
              Amzad<span className="text-white">.Khan</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Dedicated to making result-oriented contributions through effective project 
              monitoring and implementation of community-based initiatives.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Md. Amzad Hossain Khan Rabbi. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center space-x-6">
                <li><a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-white text-sm transition-colors">Experience</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors">Skills</a></li>
                <li><a href="#education" className="text-gray-400 hover:text-white text-sm transition-colors">Education</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;