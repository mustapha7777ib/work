import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full bg-[#F8F1E9]/${scrolled ? '95' : '80'} backdrop-blur-sm shadow-md z-50 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-3xl font-extrabold">
          <span className="text-black">AI Allied</span>
          <span className="text-red-600"> Limited</span>
        </div>
        <ul className="hidden md:flex space-x-10 text-black font-medium">
          {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
            <li
              key={item}
              onClick={() => handleNavScroll(item)}
              className="relative cursor-pointer hover:text-red-600 transition duration-300 group"
              aria-label={`Scroll to ${item} section`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#F8F1E9]/95"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center py-6 space-y-4 text-black font-medium">
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
              <li
                key={item}
                onClick={() => handleNavScroll(item)}
                className="cursor-pointer hover:text-red-600 transition duration-300"
                aria-label={`Scroll to ${item} section`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}