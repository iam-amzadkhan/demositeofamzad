import React from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Professional Profile
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a result-oriented professional with extensive experience in project management, 
              data collection, and community development. My expertise lies in consistently monitoring 
              project progress, implementing robust data collection methodologies, and effectively 
              executing community-based initiatives.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              With a background in Anthropology and strong leadership skills, I bring a unique 
              perspective to community projects, combining academic knowledge with practical field 
              experience. I have successfully managed large-scale events, led volunteer teams, and 
              conducted comprehensive research studies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I am passionate about making meaningful contributions to projects that create positive 
              social impact and am constantly seeking new opportunities to leverage my skills and 
              experience for effective project implementation.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Personal Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <User className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Full Name</h4>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Md. Amzad Hossain Khan Rabbi</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Location</h4>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Lalbagh, Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Email</h4>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">amzadkhan.du.anthro@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Phone</h4>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">+880 18555 65593</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;