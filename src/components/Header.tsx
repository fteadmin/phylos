import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
  <header className="fixed top-0 left-0 right-0 bg-[#EDC531] border-b border-gold-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <img 
              src="/ph.png" 
              alt="Phylos Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 mr-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-800 rounded-none px-3 py-2 hover:opacity-70 transition-colors duration-200 font-medium text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-gray-800 rounded-none px-3 py-2 hover:opacity-70 transition-colors duration-200 font-medium text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('membership')}
              className="text-gray-800 rounded-none px-3 py-2 hover:opacity-70 transition-colors duration-200 font-medium text-sm"
            >
              Membership
            </button>

             <button
              onClick={() => scrollToSection('services')}
              className="text-gray-800 rounded-none px-3 py-2 hover:opacity-70 transition-colors duration-200 font-medium text-sm"
            >
              Services
            </button>

            {/* <button
              onClick={() => scrollToSection('events')}
              className="text-gray-800 rounded-none px-3 py-2 hover:opacity-70 transition-colors duration-200 font-medium text-sm"
            >
              Events
            </button> */}
            {/* <button
              onClick={() => scrollToSection('clubs')}
              className="text-gray-800 rounded-none px-3 py-2 hover:opacity-70 transition-colors duration-200 font-medium text-sm"
            >
              Clubs
            </button> */}
           
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 rounded-none px-3 py-2 hover:opacity-70 transition-colors duration-200 font-medium text-sm"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white rounded-none p-2 hover:opacity-90 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gold-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('membership')}
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                Membership
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('clubs')}
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                Clubs
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;