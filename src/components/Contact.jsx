import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          I'm excited to bring my passion for modern JavaScript, React development, and responsive design to your team. 
          Let's build something amazing together!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Me</h3>
            <p className="opacity-90">+(234)9168381896</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Me</h3>
            <p className="opacity-90">israelprince272@gmail.com</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
            <Linkedin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <a href="https://www.linkedin.com/in/princycodes" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Download Resume
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            View GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;