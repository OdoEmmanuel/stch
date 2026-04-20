import React from 'react';
import { Plus, Heart } from 'lucide-react';
import PrayingIcon from '../../../assets/icons/PrayingIcon';
import { outreachContent } from '../data/outreachData';

export const MissionSection: React.FC = () => {
  const { mission } = outreachContent;

  return (
    <section className="py-24 px-4 md:px-8 bg-[#F1F3F0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {mission.title}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
            {mission.subtitle}
          </p>

          <div className="space-y-8">
            {mission.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className="mt-1 shrink-0">
                  {feature.iconType === 'plus' && <Plus className="text-[#4F7733]" size={32} strokeWidth={5} />}
                  {feature.iconType === 'heart' && <Heart className="text-[#4F7733]" size={32} fill="#3A5A26" />}
                  {feature.iconType === 'hands' && <PrayingIcon className="text-[#4F7733]" size={32} />}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-500 font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-100 lg:min-h-full">
          <img 
            src={mission.image} 
            alt="Mission in Action" 
            className="w-full h-full object-cover rounded-[40px] shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};