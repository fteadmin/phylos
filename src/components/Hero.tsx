import React from 'react';
import { ArrowRight, Circle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-4 tracking-tight">
              Phylos
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Circle size={4} className="fill-current" />
              <p className="text-lg md:text-xl font-light tracking-wider uppercase">
                The Philosophy in Body Movement
              </p>
              <Circle size={4} className="fill-current" />
            </div>
          </div>

          {/* Main Tagline */}
          <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-light text-gray-800 leading-relaxed mb-6">
              Discover the profound wisdom within physical activity
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our platform helps you unlock the deeper meaning in movement for athletics, wellness, and beauty.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 group"
            >
              <span className="font-medium">Discover More</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-medium"
            >
              Explore Services
            </button>
          </div>

          {/* Floating Elements */}
          <div className="relative">
            <div className="absolute -top-20 left-1/4 w-2 h-2 bg-black rounded-full animate-pulse opacity-30"></div>
            <div className="absolute -top-32 right-1/3 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute -top-16 right-1/4 w-1.5 h-1.5 bg-gray-600 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;