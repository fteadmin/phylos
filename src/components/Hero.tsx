// JSX runtime handles React imports automatically
import { ArrowRight, Circle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 'phylos-main',
      title: 'Phylos',
      subtitle: 'The Philosophy in Body Movement',
      description: 'Our platform helps you unlock the deeper meaning in movement for athletics, wellness, and beauty.',
      videoSrc: '/hero1.mp4',
      fallbackImg: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80&auto=format&fit=crop',
      cta1: { label: 'Discover More', action: 'about', isLink: false },
      cta2: { label: 'Explore Services', action: 'services', isLink: false },
    },
    {
      id: 'run-club',
      title: 'Phylos Run Club',
      subtitle: 'Community & Movement',
      description: 'Join our vibrant running community where philosophy meets fitness. Connect with like-minded individuals.',
      videoSrc: '/hero2.mp4',
      fallbackImg: 'https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=1600&q=80&auto=format&fit=crop',
      cta1: { label: 'Learn More About Run Club', action: '/runclub', isLink: true },
      cta2: null,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Video or Image */}
      {slide.videoSrc ? (
        <video
          key={`video-${slide.id}`}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={slide.fallbackImg}
          onLoadStart={(e) => e.currentTarget.style.display = 'block'}
        >
          <source src={slide.videoSrc} type="video/mp4" />
          <img
            src={slide.fallbackImg}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
      ) : (
        <img
          key={`img-${slide.id}`}
          src={slide.fallbackImg}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      {/* Slide content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center text-white">
          {/* Brand/Title */}
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              {slide.title}
            </h1>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <p className="text-lg md:text-xl font-light tracking-wider uppercase">
                {slide.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 max-w-4xl mx-auto animate-fadeIn">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {slide.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeIn">
            {slide.cta1 && (
              slide.cta1.isLink ? (
                <Link
                  to={slide.cta1.action}
                  className="bg-white text-gold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span className="font-medium">{slide.cta1.label}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection(slide.cta1.action)}
                  className="bg-white text-gold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span className="font-medium">{slide.cta1.label}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              )
            )}
            {slide.cta2 && (
              slide.cta2.isLink ? (
                <Link
                  to={slide.cta2.action}
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gold transition-all duration-300 font-medium"
                >
                  {slide.cta2.label}
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection(slide.cta2.action)}
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gold transition-all duration-300 font-medium"
                >
                  {slide.cta2.label}
                </button>
              )
            )}
          </div>

          {/* Floating Elements */}
          <div className="relative">
            <div className="absolute -top-20 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-40"></div>
            <div className="absolute -top-32 right-1/3 w-1 h-1 bg-gold-600 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute -top-16 right-1/4 w-1.5 h-1.5 bg-gold-800 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Slideshow Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-20">
        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slide indicators */}
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                setAutoPlay(false);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-3 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;