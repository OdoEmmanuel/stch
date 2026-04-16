import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { therapyContent } from '../data/therapyData';

export const RecoverySupport: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#C9D9C2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">Recovery Support</h2>
        
        <div className="flex flex-col gap-6 mb-16">
          {therapyContent.supportCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 border-l-8 border-[#4F7733] shadow-sm transition-transform hover:translate-x-2 duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/book" className="text-[#4F7733] font-bold text-lg flex items-center justify-center gap-2 hover:underline">
            Start your recovery journey with our rehabilitation specialists. <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};