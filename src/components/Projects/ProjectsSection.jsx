import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Interactive React Dashboard",
      description: "A comprehensive analytics dashboard built with React featuring real-time data visualization, responsive design, and seamless API integration. Perfect demonstration of modern frontend architecture.",
      technologies: ['React', 'JavaScript ES6+', 'Chart.js', 'REST API', 'Tailwind CSS', 'Responsive Design'],
      features: [
        'Real-time data updates with live API calls',
        'Interactive charts and data visualizations',
        'Fully responsive mobile-first design',
        'Performance optimized for fast loading',
        'Clean, maintainable component architecture'
      ],
      gradient: "from-blue-400 to-purple-600"
    },
    {
      title: "E-commerce Frontend Application",
      description: "A fully-featured e-commerce frontend with shopping cart functionality, product filtering, and seamless checkout flow. Built with modern React patterns and best practices.",
      technologies: ['React', 'JavaScript ES6+', 'Tailwind CSS', 'RESTful APIs', 'Git', 'Responsive'],
      features: [
        'Dynamic product catalog with filtering',
        'Shopping cart with persistent state',
        'Responsive design for all devices',
        'Optimized performance and SEO',
        'Clean code with proper Git workflow'
      ],
      gradient: "from-green-400 to-blue-600"
    },
    {
      title: "Progressive Web Application",
      description: "A mobile-first PWA with offline capabilities and app-like user experience. Demonstrates advanced frontend techniques including service workers and caching strategies.",
      technologies: ['PWA', 'Service Workers', 'JavaScript ES6+', 'CSS3', 'Mobile-First', 'Offline Support'],
      features: [
        'Offline functionality with service workers',
        'App-like user experience on mobile',
        'Fast loading with caching strategies',
        'Push notifications support',
        'Cross-platform compatibility'
      ],
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "Responsive Portfolio Website",
      description: "This very portfolio site you're viewing! Built with React and modern frontend techniques, featuring smooth animations, responsive design, and optimized performance.",
      technologies: ['React', 'Tailwind CSS', 'Lucide Icons', 'Responsive Design', 'Modern CSS', 'Animation'],
      features: [
        'Smooth scrolling and animations',
        'Fully responsive across all devices',
        'Modern, clean design aesthetic',
        'Interactive UI components',
        'Optimized for performance and SEO'
      ],
      gradient: "from-yellow-400 to-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that demonstrate my skills in modern web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;