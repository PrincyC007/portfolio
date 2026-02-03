import React from 'react';
import { Phone, Mail, Linkedin, Download, Github } from 'lucide-react';

const Contact = () => {
  // Function to download CV
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Prince_Emma_Ejikeme_CV.pdf';
    link.download = 'Prince_Emma_Ejikeme_Frontend_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to open GitHub (replace with your actual GitHub URL)
  const viewGitHub = () => {
    window.open('https://github.com/PrincyC007', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          I'm excited to bring my passion for modern JavaScript, React development, and responsive design to your team. 
          Let's build something amazing together!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone Contact */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Me</h3>
            <a 
              href="tel:+2349168381896" 
              className="opacity-90 hover:opacity-100 transition-opacity hover:underline"
            >
              +(234)9168381896
            </a>
          </div>

          {/* Email Contact */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Me</h3>
            <a 
              href="mailto:israelprince272@gmail.com?subject=Hello Prince - Job Opportunity&body=Hi Prince,%0D%0A%0D%0AI came across your portfolio and would like to discuss a potential opportunity.%0D%0A%0D%0ABest regards,"
              className="opacity-90 hover:opacity-100 transition-opacity hover:underline break-all"
            >
              israelprince272@gmail.com
            </a>
          </div>

          {/* LinkedIn Contact */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
            <Linkedin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <a 
              href="https://www.linkedin.com/in/princycodes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {/* Download Resume Button */}
          <button 
            onClick={downloadResume}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
          
          {/* View GitHub Button */}
          <button 
            onClick={viewGitHub}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" />
            View GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;