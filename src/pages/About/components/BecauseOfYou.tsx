import React from 'react';
import { becauseOfYouContent } from '../data/aboutData';

export const BecauseOfYou: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
          <div className="rounded-tl-[60px] rounded-br-[60px] overflow-hidden h-48">
            <img src={becauseOfYouContent.images[0]} alt="Care" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-[160px] font-bold text-[#4F7733] leading-none">T</span>
          </div>
          <div className="bg-[#4F7733] rounded-xl flex items-center justify-center h-48">
            <span className="text-[120px] font-bold text-white leading-none">S</span>
          </div>
          <div className="rounded-tr-[60px] rounded-bl-[60px] overflow-hidden h-48">
            <img src={becauseOfYouContent.images[1]} alt="Care 2" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{becauseOfYouContent.title}</h2>
          <ul className="space-y-6">
            {becauseOfYouContent.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-600 text-lg">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};