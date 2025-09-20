import React from 'react';
import { Phone, Mail, MapPin, ChevronDown, User, Download } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 name-font">
            Prince Emma Ejikeme
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">
            Frontend / JavaScript Developer
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting exceptional user experiences with modern JavaScript, React, and responsive design. 
            I build clean, efficient applications that work beautifully across all devices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="font-medium">+(234)9168381896</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="font-medium">israelprince272@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Nigeria</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              <Download className="w-5 h-5 inline mr-2" />
              Download CV
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;