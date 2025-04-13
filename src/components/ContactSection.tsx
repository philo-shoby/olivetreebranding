import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import React from 'react';

const ContactSection: React.FC = () => {
  const contactDetails = [
    {
      icon: <Building2 className="flex-shrink-0 h-7 w-7 text-primary-dark mr-2"/>,
      text: 'Kuttukaran Arcade, Paravattani, Thrissur, Kerala, India - 680655'
    },
    {
      icon: <Phone className="flex-shrink-0 h-7 w-7 text-primary-dark mr-2"/>,
      text: '+91 9895320525'
    },
    {
      icon: <Mail className="flex-shrink-0 h-7 w-7 text-primary-dark mr-2"/>,
      text: 'info@olivetreebranding.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-5xl font-semibold mb-4 text-primary-dark py-7">Get in Touch</h3>
            <div className="space-y-5">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center">
                  {detail.icon}
                  <span className="text-[#231f20]">{detail.text}</span>
                </div>
              ))}
              <div className="flex items-center text-xl">
                <MapPin className="flex-shrink-0 h-7 w-7 text-primary-dark mr-2"/>
                <a href="https://maps.app.goo.gl/6zVnm1XGeucjndmj8" 
                className="text-[#231f20] text-xl underline hover:text-[#231f20]">Get Directions</a>
              </div>
              <div className="flex space-x-4 pt-6">
                <a
                  href="https://www.facebook.com/olivetreebranding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-dark text-white flex items-center justify-center transition-colors duration-300 hover:bg-primary-light"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/olivetreebranding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-dark text-white flex items-center justify-center transition-colors duration-300 hover:bg-primary-light"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.7130965234396!2d76.24126507408425!3d10.523248463814557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef775c896b63%3A0x74a8b783982238a8!2sOlive%20tree%20branding!5e0!3m2!1sen!2sin!4v1742133440700!5m2!1sen!2sin"
                  width="100%" 
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
          </div>  
        </div>
      </div>
    </section>
  );
};

export default ContactSection;