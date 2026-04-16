import React from 'react';
import { Button } from './Button';

interface ServiceHeroProps {
  badge?: string;
  titleDark: string;
  titleLight: string;
  description: string;
  primaryAction: { label: string; to: string };
  secondaryAction: { label: string; to: string };
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  badge = "Our Services",
  titleDark,
  titleLight,
  description,
  primaryAction,
  secondaryAction
}) => {
  return (
    <section className="pt-40 pb-20 px-4 md:px-8 bg-[#F1F3F0] text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-gray-500 font-medium text-lg block mb-4">
          {badge}
        </span>
        <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
          <span className="text-[#4F7733]">{titleDark}</span> <br />
          <span className="text-[#62CC18]">{titleLight}</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            to={primaryAction.to} 
            className="bg-[#4F7733] px-10 py-4 min-w-55"
          >
            {primaryAction.label}
          </Button>
          <Button 
            to={secondaryAction.to} 
            variant="outline" 
            className="border-[#4F7733]! text-[#4F7733]! px-10 py-4 min-w-55 hover:bg-[#4F7733]! hover:text-white!"
          >
            {secondaryAction.label}
          </Button>
        </div>
      </div>
    </section>
  );
};