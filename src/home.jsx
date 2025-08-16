import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Building1 from './images/building-1.jpg';
import Building2 from './images/building-2.jpg';
import Building3 from './images/building-3.jpg';

const slides = [
  {
    id: 1,
    url: Building1,
    text: 'Foundation Excellence',
  },
  {
    id: 2,
    url: Building2,
    text: 'Structural Precision',
  },
  {
    id: 3,
    url: Building3,
    text: 'Flawless Finishes',
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.url;
    });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <img
              src={slide.url}
              alt={slide.text}
              className="w-full h-full object-cover opacity-0 transition-opacity duration-1000"
              onLoad={(e) => (e.currentTarget.style.opacity = 1)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
              <div className="text-center">
                <motion.h2
                  className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl tracking-tight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.text}
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-200 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Building the Future, Preserving the Past
                </motion.p>
                <motion.button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  aria-label="Scroll to contact section"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 text-white p-4 rounded-full transition duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8 -translate-y-1/2 bg-gray-900/70 hover:bg-gray-900 text-white p-4 rounded-full transition duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-red-600 scale-125' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Home;