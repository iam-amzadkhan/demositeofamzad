import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed bg-cover opacity-5 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 animate-fade-in">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in-delay-1">
                Md. Amzad Hossain Khan Rabbi
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium animate-fade-in-delay-2">
                Conference Associate & Community Project Specialist
              </p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg animate-fade-in-delay-3 leading-relaxed">
              Dedicated to making result-oriented contributions through effective project monitoring, 
              robust data collection, and successful implementation of community-based initiatives.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-delay-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
              >
                View Experience
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-fade-in-delay-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="/Amzad hehe.jpg"
                alt="Md. Amzad Hossain Khan Rabbi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-blue-600 dark:text-blue-400" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;