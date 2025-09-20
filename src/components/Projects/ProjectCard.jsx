import React from 'react';
import { Eye, Github, Star } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, features, demoLink, codeLink, gradient }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
      <div className="bg-white rounded-2xl p-8 h-full">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
          <ul className="text-gray-600 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 mt-auto">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Eye className="w-4 h-4" />
            Live Demo
          </button>
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Github className="w-4 h-4" />
            View Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
