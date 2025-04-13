import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  company: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  quote,
  image
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
        <img
          src={image}
          alt={`Project for ${name}`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl text-gray-600 italic font-['Playfair_Display'] leading-relaxed">
          "{quote}"
        </p>
        <div>
          <p className="text-lg font-semibold text-primary-dark">{name}</p>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;