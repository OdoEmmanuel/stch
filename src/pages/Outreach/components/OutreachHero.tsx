import React from 'react';
import { motion } from 'framer-motion';
import { outreachContent } from '../data/outreachData';

export const OutreachHero: React.FC = () => {
  const { hero } = outreachContent;

  return (
    <section className="relative w-full h-[80vh] min-h-screen flex items-center justify-center overflow-hidden">
      <img 
        src={hero.image} 
        alt="Community Outreach" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl md:mt-10 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-5xl md:text-8xl font-semibold mb-8 tracking-tight"
        >
          {hero.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl leading-relaxed font-medium"
        >
          {hero.description}
        </motion.p>
      </div>
    </section>
  );
};