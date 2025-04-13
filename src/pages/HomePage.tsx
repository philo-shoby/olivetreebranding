import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import ContactSection from '../components/ContactSection';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const HomePage = () => {
  const navigate = useNavigate();
  const backgroundImages = [
    '/images/homepage1.jpg',
    '/images/homepage2.jpg',
    '/images/homepage3.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  return (
    <>
      <Navbar />
      
      <Hero 
        images={backgroundImages}
        currentImageIndex={currentImageIndex}
        title="Signage That Tells Your Story"
        onButtonClick={() => navigate('/our-work')}
      />

      {/* About Section */}
      <section id="about" className="py-20 bg-[#f9f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={aboutRef}
            variants={containerVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl font-bold text-primary-dark mb-6">Legacy</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
              With over a decade of expertise, <b className='text-[#9ca428]'>Olive Tree Branding</b> is a trusted leader in custom signage 
              and interior design solutions based in Thrissur, Kerala. Founded by <b className='text-[#9ca428]'>Jethin Joy</b>, a visionary leader passionate about creativity and design, 
              we combine traditional craftsmanship with cutting-edge technology to create eye-catching signboards that elevate your brand.
              </p>
              <p className="text-gray-600 leading-relaxed">
              Our commitment to quality and creativity has made us a preferred partner for businesses across the region. 
              We turn your vision into impactful signage that drives customer engagement.
              </p>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="relative h-[450px] flex justify-center items-center"
            >
              <img
                src="/images/jethin_aboutus1.JPG"
                alt="AboutUs"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={servicesRef}
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-5xl font-bold text-primary-dark text-center mb-5 -mt-10"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  image={service.image}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#f9f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={testimonialsRef}
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold text-primary-dark text-center mb-12"
            >
              What Our Clients Say
            </motion.h2>
            
            <div className="relative">
              <TestimonialCard {...testimonials[currentTestimonialIndex]} />

              <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-12 md:-translate-x-16">
                <button
                  onClick={handlePrevTestimonial}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-12 md:translate-x-16">
                <button
                  onClick={handleNextTestimonial}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonialIndex
                        ? 'bg-primary'
                        : 'bg-gray-300 hover:bg-primary-light'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="bg-primary-dark text-[#231f20] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Olive Tree Branding. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;