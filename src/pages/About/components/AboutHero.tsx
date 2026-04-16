import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/aboutData';
import { Button } from '../../../components/shared/Button';

export const AboutHero: React.FC = () => {
  const { hero } = aboutContent;

  return (
    <section className="pt-32 pb-16 px-4 md:px-8 bg-[#F8FAF3]">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full rounded-[40px] overflow-hidden min-h-125 md:min-h-162.5 flex items-center justify-center text-center p-6 md:p-12">
          {/* Background Image with Overlay */}
          <img 
            src={hero.image} 
            alt="Medical Team" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-4xl md:text-7xl font-bold mb-8 leading-tight"
            >
              {hero.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed mb-12 font-medium"
            >
              {hero.description}
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                to="/services" 
                className="bg-white text-[#4F7733]! hover:bg-gray-200 min-w-55 py-4"
              >
                View Our Services
              </Button>
              <Button 
                to="/contact" 
                variant="outline" 
                className="min-w-55 py-4 border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};