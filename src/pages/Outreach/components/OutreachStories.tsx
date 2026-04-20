import React from 'react';
import { Heart } from 'lucide-react';
import { outreachStories } from '../data/outreachData';

export const OutreachStories: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Stories of Hope & Impact</h2>
        <p className="text-gray-500 text-lg md:text-xl mb-16">Real lives transformed through compassionate care</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {outreachStories.map((story, idx) => (
            <div key={idx} className="bg-white rounded-4xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-50" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                  <p className="text-gray-500 text-sm font-medium">{story.program}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg italic leading-relaxed mb-8 flex-1">
                {story.story}
              </p>

              <div className="flex items-center gap-2 text-[#4F7733] font-semibold text-sm">
                <Heart size={18} fill="#4F7733" />
                <span>{story.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};