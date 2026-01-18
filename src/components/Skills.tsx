import React from 'react';

interface Skill {
  name: string;
  category: 'technical' | 'soft';
}

const skills: Skill[] = [
  { name: 'SPSS', category: 'technical' },
  { name: 'Microsoft Office', category: 'technical' },
  { name: 'Data Collection', category: 'technical' },
  { name: 'Project Management', category: 'technical' },
  { name: 'Verbal Communication', category: 'soft' },
  { name: 'Non-verbal Communication', category: 'soft' },
  { name: 'Negotiation', category: 'soft' },
  { name: 'Team Leadership', category: 'soft' },
];

const Skills: React.FC = () => {
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A combination of technical expertise and interpersonal abilities that I've developed
            through education, training, and professional experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">T</span>
              </div>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">S</span>
              </div>
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
            Professional Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">February 2023</div>
              <div className="text-gray-800 dark:text-gray-200 font-medium">DURS SPSS TRAINING COURSE</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">Dhaka University Research Society</div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">January 2023</div>
              <div className="text-gray-800 dark:text-gray-200 font-medium">LEADERSHIP SKILLS</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">SPS, Dhaka University</div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">March 2022</div>
              <div className="text-gray-800 dark:text-gray-200 font-medium">PRESENTATION & INTERVIEW</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">SPS, Dhaka University</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;