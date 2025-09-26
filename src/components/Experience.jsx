import React from 'react';
import { Briefcase, GraduationCap, Star } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 p-3 md:p-4 bg-blue-100 rounded-full self-start">
                <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 break-words">Freelance Frontend Developer</h3>
                    <p className="text-blue-600 font-semibold">Remote</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 md:px-4 py-2 rounded-full font-medium text-sm flex-shrink-0 self-start">
                    Jan 2025 - Present
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                  Building modern, responsive web applications for diverse clients using React, JavaScript (ES6+), and modern CSS frameworks. 
                  Specializing in creating pixel-perfect, mobile-first designs that provide exceptional user experiences.
                </p>
                <div className="grid gap-3">
                  {[
                    'Developed 5+ responsive React applications',
                    'Integrated RESTful APIs for dynamic content',
                    'Implemented modern JavaScript (ES6+) features',
                    'Maintained clean Git workflows and documentation'
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 p-3 md:p-4 bg-purple-100 rounded-full self-start">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 break-words">Bachelor of Technology</h3>
                    <p className="text-purple-600 font-semibold break-words">Federal University of Technology Owerri</p>
                  </div>
                  <span className="bg-purple-100 text-purple-800 px-3 md:px-4 py-2 rounded-full font-medium text-sm flex-shrink-0 self-start">
                    Nov 2024
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 text-sm md:text-base">
                    <strong>GPA: 4.12 - Second Class Honours (Upper Division)</strong>
                  </p>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    <strong>Relevant Courses:</strong> Web Design & Development, UI/UX Design, JavaScript Programming, 
                    Digital Media Design, Human-Centred Design Principles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;