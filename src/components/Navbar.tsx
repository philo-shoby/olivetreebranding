import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Legacy', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-3000 bg-gradient-to-b from-[#f9f7f3] to-transparent`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="OliveTree Logo"
              className="ml-2 w-40 h-25 img-fluid"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-[#9ca428] hover:underline cursor-pointer font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                <a href='https://www.instagram.com/olivetreebranding/'>Our Work</a>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-dark hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-md shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block px-3 py-2 text-primary-dark hover:text-primary cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-primary-dark hover:text-primary"
              >
                <a href='https://www.instagram.com/olivetreebranding/?hl=en'>Our Work</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>

  );
};

export default Navbar;