import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            icon={Code}
            title="Frontend Technologies"
            skills={['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']}
            level={5}
          />
          <SkillCard
            icon={Zap}
            title="Frameworks & Libraries"
            skills={['React', 'Next.js', 'Vue.js', 'Node.js']}
            level={4}
          />
          <SkillCard
            icon={Palette}
            title="Styling & Design"
            skills={['Tailwind CSS', 'Bootstrap', 'Sass/SCSS', 'Responsive Design']}
            level={5}
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Development Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Git/GitHub', 'VS Code', 'Webpack', 'NPM/Yarn', 'Chrome DevTools', 'Figma'].map((tool, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Competencies</h3>
            <div className="space-y-3">
              {[
                'RESTful API Integration',
                'Responsive Web Design',
                'Performance Optimization',
                'Cross-browser Compatibility',
                'Mobile-First Development',
                'Version Control Workflows'
              ].map((competency, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
