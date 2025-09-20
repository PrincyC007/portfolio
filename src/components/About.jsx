import React from 'react';

const About = () => {
  const stats = [
    { number: '5+', label: 'Projects Completed', gradient: 'from-blue-50 to-purple-50', color: 'text-blue-600' },
    { number: '2+', label: 'Years Experience', gradient: 'from-green-50 to-blue-50', color: 'text-green-600' },
    { number: '100%', label: 'Client Satisfaction', gradient: 'from-purple-50 to-pink-50', color: 'text-purple-600' },
    { number: '24/7', label: 'Dedicated Support', gradient: 'from-yellow-50 to-orange-50', color: 'text-orange-600' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate frontend developer who loves turning complex problems into simple, beautiful solutions. 
              With a strong foundation in modern JavaScript, React, and responsive design, I create web applications 
              that provide exceptional user experiences across all devices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My approach combines technical expertise with creative problem-solving. I believe in writing clean, 
              maintainable code that not only works flawlessly but also scales effectively. Every project I work on 
              is an opportunity to learn something new and push the boundaries of what's possible on the web.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or helping others learn to code. I'm always excited to collaborate on challenging projects and 
              contribute to innovative teams.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-2xl text-center`}>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
