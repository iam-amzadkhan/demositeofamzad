import React from 'react';
import { Briefcase, CalendarDays, MapPin, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Wave Foundation',
    position: 'Conference Associate',
    location: 'Dhaka',
    period: 'March 2022 - Present',
    description: 'To make sure the conference becomes successful',
    achievements: [
      'Managed the registration process of 1000+ participants',
      'Lead a volunteer team of 100+ members',
      'Planned digital campaign & reached 1,50,000+ people through it'
    ]
  },
  {
    company: 'Neilsen IQ',
    position: 'Enumerator',
    location: 'Online & Offline',
    period: 'May 2020 - February 2022',
    description: 'To collect for research purpose',
    achievements: [
      'Won the best Enumerator prize for the month of April, 2021',
      'Conducted 17 Survey for different projects',
      'Collected data from 1000+ people',
      'Conducted interview over phone and face to face'
    ]
  },
  {
    company: 'Active Citizen',
    position: 'Volunteer',
    location: 'British Council, Fuller Road',
    period: 'November 2019 - March 2020',
    description: 'To develop and lead Social Action Project',
    achievements: [
      'Lead a Social Action Project named Unlock Rights',
      'Lead a team of 35 Volunteers to run the project'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey showcases my expertise in project management, 
            data collection, and community engagement.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 relative"
            >
              <div className="hidden md:block absolute top-0 bottom-0 left-6 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-12 flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center shadow-md">
                    <Briefcase className="text-white" size={20} />
                  </div>
                </div>
                
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                    <span className="mt-2 sm:mt-0 px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;