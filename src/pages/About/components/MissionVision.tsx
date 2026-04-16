import React from 'react';
import { Target, Eye } from 'lucide-react';
import { aboutContent } from '../data/aboutData';

export const MissionVision: React.FC = () => {
  const { missionVision } = aboutContent;

  return (
    <section className="py-24 px-4 md:px-8 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-[#1A2B48] mb-6 tracking-tight">
            {missionVision.title}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {missionVision.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="relative h-112.5 rounded-4xl overflow-hidden group">
            <img src={missionVision.mission.image} alt="Mission" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/60" />
            
            <div className="relative z-10 h-full p-8 md:p-12 flex flex-col items-start justify-center text-left">
              <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-white text-3xl font-bold mb-4">{missionVision.mission.title}</h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                {missionVision.mission.text}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative h-112.5 rounded-4xl overflow-hidden group">
            <img src={missionVision.vision.image} alt="Vision" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/60" />
            
            <div className="relative z-10 h-full p-8 md:p-12 flex flex-col items-start justify-center text-left">
              <div className="w-16 h-16 rounded-full bg-[#6D9C4D] flex items-center justify-center mb-8 shadow-lg shadow-green-500/30">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-white text-3xl font-bold mb-4">{missionVision.vision.title}</h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                {missionVision.vision.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};