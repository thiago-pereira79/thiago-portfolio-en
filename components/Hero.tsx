import React from 'react';
import { HERO_CHIPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col space-y-8 order-2 lg:order-1 text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-800 tracking-tight mb-4 text-left">
                Thiago Pereira
              </h1>
              <h2 className="text-xl sm:text-2xl text-terracotta font-medium leading-relaxed text-justify">
                Systems Analysis & Dev student focused on Front-end, Mobile, and Cloud (AWS).
              </h2>
            </div>

            <p className="text-base sm:text-lg text-brown-700 leading-relaxed max-w-xl text-justify">
              I develop web and mobile interfaces while deepening my studies in React, Flutter, and cloud computing via Escola da Nuvem | AWS. I bring a background in International Relations and experience with people, customer service, and technology.
            </p>

            <div className="flex flex-wrap gap-2">
              {HERO_CHIPS.map((chip, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-cream-200 text-brown-800 border border-brown-800/10"
                >
                  ▫️ {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-terracotta text-white font-bold rounded-lg shadow-lg hover:bg-terracotta-hover transition-all transform hover:-translate-y-0.5"
              >
                View Projects <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative Circle Behind */}
              <div className="absolute inset-0 rounded-full bg-cream-200 opacity-80 transform translate-x-4 translate-y-4"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cream-200 shadow-xl">
              <img 
              src="/EU.jpg"   // <-- mesmo nome do arquivo na pasta public
              alt="Thiago Pereira"
              className="w-full h-full object-cover"
          />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;