import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Button } from './Button';

interface SpecialistCardProps {
  name: string;
  role: string;
  rating: number;
  description: string;
  image: string;
  isHighlighted?: boolean;
}

export const SpecialistCard: React.FC<SpecialistCardProps> = ({
  name,
  role,
  rating,
  description,
  image,
  isHighlighted = false,
}) => {
  const bgStyle = isHighlighted 
    ? 'bg-gradient-to-br from-[#4F7733] to-[#6D9C4D] text-white shadow-xl' 
    : 'bg-[#F2F6F2] text-gray-900 shadow-sm';
  
  const roleColor = isHighlighted ? 'text-green-100' : 'text-gray-500';
  const descColor = isHighlighted ? 'text-green-50' : 'text-gray-500';
  
  const heartBg = isHighlighted ? 'bg-[#8ED05F]' : 'bg-[#E5F0DF]';
  const heartIconColor = isHighlighted ? 'text-white' : 'text-[#4F7733]';

  return (
    <div className={`relative w-full rounded-4xl p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1 ${bgStyle}`}>
      
      {/* Top Section: Rating and Heart Icon */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-sm font-bold text-gray-900 shadow-sm">
          <Star className="text-yellow-400" size={16} fill="currentColor" />
          <span>{rating}</span>
        </div>

        <button className={`w-12 h-12 rounded-full flex items-center justify-center ${heartBg} transition-colors hover:scale-105`}>
          <Heart size={20} className={heartIconColor} />
        </button>
      </div>

      <div className="flex gap-4 justify-between mb-8">
        <div className="flex-1">
          <p className={`text-[10px] md:text-xs font-black tracking-widest uppercase mb-2 ${roleColor}`}>
            {role}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">{name}</h3>
          <p className={`text-sm md:text-base leading-relaxed max-w-70 ${descColor}`}>
            {description}
          </p>
        </div>
        
        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-2xl border-2 border-white/20 bg-gray-200">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      <Button 
        className={`w-full py-4 text-base font-bold rounded-full ${isHighlighted ? 'bg-white text-[#4F7733]! hover:bg-gray-200' : 'bg-[#4F7733] text-white hover:bg-[#3d5c27]'}`}
      >
        Book Now
      </Button>
    </div>
  );
};