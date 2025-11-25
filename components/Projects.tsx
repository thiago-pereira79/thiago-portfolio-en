import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">Featured Projects</h2>
          <p className="text-brown-700 text-lg max-w-2xl text-left">
            Some experiments in Front-end, Mobile, and logic that I am building throughout courses and bootcamps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="bg-cream-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col border border-cream-200"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-brown-800 mb-3">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-2 py-1 bg-taupe/20 text-brown-800 text-xs font-semibold rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-brown-700 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="px-6 py-4 bg-cream-200/50 border-t border-brown-800/5 flex justify-between items-center">
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brown-800 flex items-center hover:text-terracotta transition-colors"
                >
                  <Code size={16} className="mr-2" /> View Code
                </a>
                {project.demoLink && (
                  <a 
                    href={project.demoLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brown-800 flex items-center hover:text-terracotta transition-colors"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;