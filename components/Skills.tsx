import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">Stack & Hard Skills</h2>
          <p className="text-terracotta text-lg">One foot in Front-end, another in Mobile, and an eye on the Cloud.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className={`${category.colorClass} rounded-xl p-8 shadow-md transform transition-transform hover:scale-105 duration-300`}
            >
              <h3 className="text-2xl font-bold mb-6 border-b border-brown-800/10 pb-2 text-brown-800">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center font-medium text-brown-700">
                    <span className="w-2 h-2 bg-terracotta rounded-full mr-3"></span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-brown-800/60 text-sm">
          <p>Always studying and updating the stack as projects demand.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;