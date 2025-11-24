import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
  <header className="fixed top-0 left-0 right-0 bg-[#EDC531] border-b border-gold-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <Link to="/">
              <img 
                src="/ph.png" 
                alt="Phylos Logo" 
                className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 mr-8">
            <Link
              to="/"
              className="text-gray-800 rounded-none px-3 py-2 hover:opacity-70 transition-colors duration-200 font-medium text-sm"
            >
              Home
            </Link>
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
            <div className="relative group">
              <button
                className="text-gray-800 rounded-none px-3 py-2 hover:opacity-70 transition-colors duration-200 font-medium text-sm flex items-center"
              >
                Clubs
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-[#EDC531] border border-gold-700 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link
                  to="/runclub"
                  className="block px-4 py-3 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium text-sm"
                >
                  Run Club
                </Link>
              </div>
            </div>
           
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
              <Link
                to="/"
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                Home
              </Link>
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
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                Services
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = '/runclub';
                }}
                className="block px-3 py-2 text-gray-800 hover:opacity-70 transition-colors duration-200 font-medium w-full text-left rounded-none text-sm"
              >
                Run Club
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