import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, User, Download, Linkedin } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  // Download CV function
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Prince_Emma_Ejikeme_CV.pdf';
    link.download = 'Prince_Emma_Ejikeme_Frontend_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Scroll state for scroll-to-top button and down arrow
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Show scroll-to-top button after 100vh
      setShowScrollTop(scrollY > windowHeight);

      // Hide down arrow if within last 100vh of page
      const scrolledToBottom = scrollY + windowHeight >= docHeight - windowHeight;
      setShowDownArrow(!scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-300 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 name-font">
            Prince Emma Ejikeme
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">
            Frontend/Javascript Developer
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting exceptional user experiences with modern JavaScript, React, and responsive design. 
            I build clean, efficient applications that work beautifully across all devices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/40">
              <Phone className="w-5 h-5 text-blue-600" />
              <a href="tel:+2349168381896" className="font-medium hover:text-blue-600 transition-colors">
                +(234)9168381896
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/40">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:israelprince272@gmail.com?subject=Hello Prince - Job Opportunity&body=Hi Prince,%0D%0A%0D%0AI came across your portfolio and would like to discuss a potential opportunity.%0D%0A%0D%0ABest regards," 
                className="font-medium hover:text-blue-600 transition-colors break-all">
                  israelprince272@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/40">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <a href="https://www.linkedin.com/in/princycodes" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600 transition-colors">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/40">
              <MapPin className="w-5 h-5 text-blue-600" />
              <a href="https://www.google.com/maps/place/Owerri,+Nigeria/@5.4840395,6.9753692,12z/data=!3m1!4b1!4m6!3m5!1s0x10426c4eda854b47:0x4e5ddaac7d0a8b7e!8m2!3d5.4840395!4d7.0335199!16zL20vMDN3eHI4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-medium hover:text-blue-600 transition-colors">
                Owerri, Nigeria
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </button>
            {/* THIS BUTTON NOW USES THE DOWNLOAD FUNCTION */}
            <button 
              onClick={downloadCV}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              <Download className="w-5 h-5 inline mr-2" />
              Download CV
            </button>
          </div>
        </div>

        {/* Downward Arrow */}
        {showDownArrow && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none z-20">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        )}

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg z-30 animate-in fade-in"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;