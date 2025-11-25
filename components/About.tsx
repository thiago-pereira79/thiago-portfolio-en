import React from 'react';
import { LANGUAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-10">About Me</h2>
        
        <div className="space-y-6 text-lg text-brown-700 leading-relaxed text-left text-justify">
          <p>
            I am Thiago Pereira, a Systems Analysis and Development student focused on Front-end, Mobile programming, and Cloud computing.
          </p>
          <p>
            I started my academic journey in International Relations, which gave me a broad view of the world, communication, and context. Over time, I realized I wanted to be closer to building digital solutions and that's when I dove into technology.
          </p>
          <p>
            Today I study Systems Analysis & Dev, participate in the Cloud Computing Program | AWS at Escola da Nuvem, and build practical projects to train logic, interfaces, and integrations. I like learning by doing: experimenting, making mistakes, adjusting, and sharing what I develop.
          </p>
          <p>
            When I'm not coding, I'm probably digging into a new course, organizing project ideas, or exchanging experiences with others who are also migrating to the tech area.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-brown-800/10">
          <h3 className="text-xl font-semibold text-brown-800 mb-6">Languages</h3>
          <div className="flex flex-wrap gap-6">
            {LANGUAGES.map((lang, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-terracotta font-medium">{lang.name}</span>
                <span className="text-sm text-brown-600">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;