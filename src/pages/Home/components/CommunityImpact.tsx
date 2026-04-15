import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { impactItems } from '../data/homeData';
import { ImpactCard } from '../../../components/shared/ImpactCard';

export const CommunityImpact: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#4F7733] font-bold tracking-[0.2em] text-sm uppercase block mb-4">
              Community Impact
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-[#3A5A26] mb-6 leading-tight">
              Giving Back to Society
            </h2>
            <p className="text-gray-500 text-lg md:text-xl">
              We believe in extending care beyond our hospital walls through free medical missions and educational programs.
            </p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full cursor-pointer border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#4F7733] hover:text-[#4F7733] transition-all"
              aria-label="Scroll Left"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full cursor-pointer bg-[#4F7733] flex items-center justify-center text-white hover:bg-[#3d5c27] transition-all shadow-lg shadow-green-900/20"
              aria-label="Scroll Right"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {impactItems.map((item) => (
            <div key={item.id} className="snap-start">
              <ImpactCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};