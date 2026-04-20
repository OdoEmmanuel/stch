import React from 'react';
import { supportContent } from '../data/supportData';

export const SupportHero: React.FC = () => {
  const { hero } = supportContent;

  return (
    <section className="pt-32 pb-12 px-4 md:px-8 bg-[#F1F3F0]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#A1D692] rounded-[48px] overflow-hidden flex flex-col lg:flex-row items-center p-8 md:p-16 lg:p-12 gap-12 lg:min-h-137.5">
          
          <div className="flex-1 text-white">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
              Customer <br /> Support
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-md">
              {hero.description}
            </p>
          </div>

          <div className="flex-1 w-full lg:w-auto h-full flex justify-center">
            <div className="relative w-full max-w-md aspect-square lg:aspect-auto lg:h-100 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src={hero.image} 
                alt="Support Agent" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};