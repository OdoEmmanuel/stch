import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mchContent } from '../data/mchData';

export const AboutMCH: React.FC = () => {
  const { about } = mchContent;

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[40px] overflow-hidden min-h-100 mb-20">
          <img src={about.image} alt="About Department" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
          <div className="relative z-10 p-8 md:p-16 flex flex-col justify-center h-full max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{about.title}</h2>
            <p className="text-white/80 text-lg leading-relaxed">{about.text}</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Need to see a doctor today?</h3>
          <Link to="/book" className="text-[#4F7733] font-bold text-lg flex items-center justify-center gap-2 hover:underline">
            Book a consultation with our primary care physicians. <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};