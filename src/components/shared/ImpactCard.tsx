import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface ImpactCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  to: string;
}

export const ImpactCard: React.FC<ImpactCardProps> = ({ 
  image, 
  category, 
  title, 
  description, 
  to 
}) => {
  return (
    <div className="shrink-0 w-full sm:w-95 group">
      {/* Image Container */}
      <div className="relative h-70 rounded-4xl overflow-hidden mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {/* Category Badge - Exactly as UI: bottom-left, white pill */}
        <div className="absolute bottom-4 left-4 bg-white rounded-full px-5 py-2 shadow-md">
          <span className="text-gray-600 text-sm font-semibold">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-2">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
        
        <Button 
          to={to} 
          variant="primary" 
          className="bg-[#4F7733] px-8 py-3 group/btn"
          icon={<ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};