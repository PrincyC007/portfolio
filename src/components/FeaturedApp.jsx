// src/components/FeaturedApp.jsx
import React from 'react';
import { Smartphone, Download, Star, Code, Users, Zap } from 'lucide-react';

const FeaturedApp = () => {
  // Function to download Android APK
    const downloadAndroidApp = () => {
    const fileId = '1bS595yLNVyEiaNFozZ0DgWUTPIiELE6S';
    window.open(`https://drive.google.com/uc?export=download&id=${fileId}`, '_blank');
    };

  // Function to download iOS app (if available)
  const downloadIOSApp = () => {
    // Option 1: Direct IPA download (for TestFlight or enterprise)
    const link = document.createElement('a');
    link.href = '/apps/afromart-app.ipa';
    link.download = 'Afromart_App.ipa';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Option 2: Redirect to App Store
    // window.open('https://apps.apple.com/app/your-app-id', '_blank');
  };

  // Function to open Google Play Store (if published)
  const openPlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.afromart.app', '_blank');
  };

  // Function to open Apple App Store (if published)
  const openAppStore = () => {
    window.open('https://apps.apple.com/app/afromart/id123456789', '_blank');
  };

  return (
    <section id="featured-app" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block backdrop-blur-md bg-white/10 px-6 py-2 rounded-full mb-6 border border-white/20">
            <span className="text-sm font-semibold text-purple-300">Featured Mobile App</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Afromart Mobile App</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built during my internship at Afromart - A full-featured e-commerce mobile application
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* App Preview Section */}
          <div className="relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto w-72 h-[600px] backdrop-blur-xl bg-white/10 rounded-[3rem] p-0.5 border-8 border-gray-800 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-[2.0rem] overflow-hidden">
                {/* App Screenshot */}
                <img 
                  src="/images/app-screen.jpg" 
                  alt="Afromart App Screenshot" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full hidden items-center justify-center text-white">
                  <div className="text-center">
                    <Smartphone className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-75">App Screenshot</p>
                  </div>
                </div>
              </div>
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl"></div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 backdrop-blur-md bg-green-500/20 border border-green-400/30 px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold">Internship Demo-Project</span>
              </div>
            </div>
          </div>

          {/* App Details Section */}
          <div>
            {/* Features */}
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">React Native Development</h4>
                  <p className="text-gray-400">Built with React Native for cross-platform compatibility</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Fast Performance</h4>
                  <p className="text-gray-400">Optimized for smooth user experience and quick loading</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">User-Friendly Interface</h4>
                  <p className="text-gray-400">Intuitive design focused on customer experience</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Download the App</h3>
              
              {/* Android Download */}
              <button
                onClick={downloadAndroidApp}
                className="w-full backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-green-500 rounded-lg">
                      <Download className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Download for</p>
                      <p className="text-lg font-semibold">Android (APK)</p>
                    </div>
                  </div>
                  <div className="text-2xl group-hover:translate-x-2 transition-transform">→</div>
                </div>
              </button>

              {/* iOS Download */}
              {/* <button
                onClick={downloadIOSApp}
                className="w-full backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <Download className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Download for</p>
                      <p className="text-lg font-semibold">iOS (iPhone/iPad)</p>
                    </div>
                  </div>
                  <div className="text-2xl group-hover:translate-x-2 transition-transform">→</div>
                </div>
              </button> */}

              {/* Optional: Store Links if published */}
              {/* <div className="grid grid-cols-2 gap-4 mt-4">
                <button
                  onClick={openPlayStore}
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-lg transition-all duration-300"
                >
                  <p className="text-sm">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </button>
                <button
                  onClick={openAppStore}
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-3 rounded-lg transition-all duration-300"
                >
                  <p className="text-sm">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </button>
              </div> */}
            </div>

            {/* Tech Stack */}
            <div className="mt-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'JavaScript', 'Typescript', 'REST APIs', 'Expo', 'Push Notifications'].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
            <p className="text-gray-400">Months Development</p>
          </div>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
            <p className="text-gray-400">Active Users</p>
          </div>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">4.8★</div>
            <p className="text-gray-400">User Rating</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedApp;