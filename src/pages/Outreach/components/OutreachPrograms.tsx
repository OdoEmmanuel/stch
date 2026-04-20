import React, { type ComponentType } from 'react';
import AmbulanceIcon from '../../../assets/icons/AmbulanceIcon';
import WalkingCaneIcon from '../../../assets/icons/WalkingCaneIcon';
import ScreenIcon from '../../../assets/icons/ScreenIcon';
import { 
  Calendar, 
  MapPin, 
  Baby, 
  Syringe, 
  Pill, 
  Users, 
  HandHeart, 
  Home,
} from 'lucide-react';
import { outreachPrograms } from '../data/outreachData';

type IconComponent = ComponentType<{ className?: string; size?: number }>;

const programIcons: Record<string, IconComponent> = {
  AmbulanceIcon,
  Baby,
  Syringe,
  WalkingCaneIcon,
  Pill,
  ScreenIcon
};

const metaIcons: Record<string, IconComponent> = {
  MapPin,
  Users,
  Home,
  HandHeart
};

export const OutreachPrograms: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#1E40AF 1px, transparent 1px), linear-gradient(90deg, #1E40AF 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Our Outreach Programs</h2>
        <p className="text-gray-500 text-lg md:text-xl mb-16">Bringing healthcare and hope to communities in need</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {outreachPrograms.map((program, idx) => {
            const MainIcon = programIcons[program.iconName];
            const MetaIcon = metaIcons[program.metaIconName];
            
            if (!MainIcon) {
                console.warn(`Main icon not found: ${program.iconName}`);
                return null;
            }

            return (
              <div key={idx} className="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all">
                <div className="h-60 overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  {/* Card Header with unique Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <MainIcon className="text-[#0D9488]" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-500 mb-8 leading-relaxed flex-1">
                    {program.description}
                  </p>

                  {/* Metadata Section - Now strictly following the UI icons */}
                  <div className="space-y-3 pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-3 text-blue-600 font-medium text-sm">
                      <Calendar size={18} />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-600 font-medium text-sm">
                      {MetaIcon && <MetaIcon size={18} />}
                      <span>{program.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};