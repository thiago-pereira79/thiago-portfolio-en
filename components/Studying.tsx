import React from 'react';
import { STUDY_TOPICS } from '../constants';

const Studying: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">Currently Studying</h2>
          <p className="text-brown-700 text-lg max-w-3xl mx-auto">
            Today my focus is on deepening the Front-end base, advancing in Mobile development, and consolidating Cloud (AWS) fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDY_TOPICS.map((topic, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-terracotta/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-terracotta"></div>
              <h3 className="text-xl font-bold text-terracotta mb-4">{topic.category}</h3>
              <ul className="space-y-3">
                {topic.items.map((item, idx) => (
                  <li key={idx} className="text-brown-700 text-sm sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studying;