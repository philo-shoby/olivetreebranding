import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  images: string[];
  currentImageIndex: number;
  title: string;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  images,
  currentImageIndex,
  title,
  showButton = true,
  buttonText = "Our Work",
}) => {
  return (
    <section id="hero" className="relative h-screen py-16 shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 pt-20 mt-16 ${
            index === currentImageIndex ? 'opacity-150' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <h3 className="text-xl md:text-2xl mb-6">Total signage solutions</h3>
          {showButton && (
            <button 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md transition-colors text-lg"
            >
              <a href='https://www.instagram.com/olivetreebranding/'>{buttonText}</a>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;