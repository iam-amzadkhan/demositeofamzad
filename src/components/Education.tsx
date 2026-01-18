import React from 'react';
import { GraduationCap, Calendar, School } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  year: string;
  result?: string;
}

const educationItems: EducationItem[] = [
  {
    institution: 'University Of Dhaka',
    degree: 'Bachelor of Social Science',
    field: 'Department of Anthropology',
    year: '2019 - 2020',
    result: 'Not Appeared yet'
  },
  {
    institution: 'Adamjee Cantonment College',
    degree: 'Higher Secondary Certificate',
    field: 'Humanities',
    year: '2019',
    result: '4.42'
  },
  {
    institution: 'Rajendrapur Cantonment Board High School',
    degree: 'Secondary School Certificate',
    field: 'Commerce',
    year: '2017',
    result: '4.93'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with the knowledge and skills
            needed for success in my professional career.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {educationItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-blue-600 dark:bg-blue-700 p-6 text-white flex flex-col justify-center items-center">
                  <GraduationCap size={48} className="mb-3" />
                  <h3 className="text-xl font-bold text-center">{item.institution}</h3>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {item.degree}
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <School size={16} />
                      <span>{item.field}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{item.year}</span>
                    </div>
                  </div>
                  
                  {item.result && (
                    <div className="mt-3">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Result: </span>
                      <span className="text-gray-600 dark:text-gray-400">{item.result}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;