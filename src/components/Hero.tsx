// JSX runtime handles React imports automatically
import { ArrowRight, Circle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/*
        Video background (preferred):
        - Place `hero.mp4` under the `public/assets/` folder (e.g. `/public/assets/hero.mp4`).
        - Browser will autoplay the muted looped video when available.
        GIF fallback: put `hero.gif` under `public/assets/hero.gif` and uncomment the <img> fallback below.
      */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero-poster.jpg"
      >
        {/* Primary: local video if provided */}
        <source src="/assets/hero.mp4" type="video/mp4" />
        {/* Public fallback: MDN sample video (plays if local file missing) */}
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        {/* If the browser can't play video, the <img> below will be visible (declared after closing tag) */}
      </video>

      {/* Image fallback for browsers that don't support <video> or where video fails to load. */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Phylos
            </h1>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Circle size={4} className="fill-current" />
              <p className="text-lg md:text-xl font-light tracking-wider uppercase">
                The Philosophy in Body Movement
              </p>
              <Circle size={4} className="fill-current" />
            </div>
          </div>

          {/* Main Tagline */}
          <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-light leading-relaxed mb-6">
              Discover the profound wisdom within physical activity
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Our platform helps you unlock the deeper meaning in movement for athletics, wellness, and beauty.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-white text-gold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 group"
            >
              <span className="font-medium">Discover More</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gold transition-all duration-300 font-medium"
            >
              Explore Services
            </button>
          </div>

          {/* Floating Elements */}
          <div className="relative">
            <div className="absolute -top-20 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-40"></div>
            <div className="absolute -top-32 right-1/3 w-1 h-1 bg-gold-600 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute -top-16 right-1/4 w-1.5 h-1.5 bg-gold-800 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;