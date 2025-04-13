import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
    >

      <div className="service-card p-6 bg-[#f9f7f3]">
        {/* Title */}
        <div className="text-center mb-4">
          <h3 className="text-black text-2xl font-bold group-hover:text-black transition-all group-hover:text-2xl group-hover:scale-110">
            {title}
          </h3>
        </div>

        {/* Image under the title */}
        <div className="image-container">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;