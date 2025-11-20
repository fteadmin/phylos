// JSX runtime handles React imports automatically
import { Circle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#EDC531] text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Phylos</h3>
            <div className="flex items-center space-x-2 text-gray-800 mb-6">
              <Circle size={4} className="fill-current" />
              <p className="text-sm tracking-wider uppercase">The Philosophy in Body Movement</p>
              <Circle size={4} className="fill-current" />
            </div>
            <p className="text-gray-800 leading-relaxed max-w-md">
              Discover the profound wisdom within physical activity. Our platform helps you unlock the deeper meaning in movement for athletics, wellness, and beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-800 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-800 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-800 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-800 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Connect</h4>
            <ul className="space-y-2 text-gray-800">
              <li>hello@phylos.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Available Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-800 text-sm mb-4 md:mb-0">© {currentYear} Phylos. All rights reserved.</div>
            
            <div className="text-gray-800 text-sm text-center md:text-right">
              <p>
                "The Philosophy in Body Movement" is the ideal tagline for a dynamic platform 
                encouraging holistic movement for athletics, wellness, and beauty.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 right-10 w-1.5 h-1.5 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
    </footer>
  );
};

export default Footer;