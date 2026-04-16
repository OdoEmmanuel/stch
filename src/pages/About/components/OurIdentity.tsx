import React from 'react';
import { identityContent } from '../data/aboutData';
import { DepartmentCard } from '../../../components/shared/DepartmentCard';

export const OurIdentity: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#FBFBFC] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-[#1A2B48] mb-6">
            {identityContent.title}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {identityContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {identityContent.values.map((value, index) => (
            <DepartmentCard 
              key={index}
              title={value.title}
              subtitle={value.subtitle}
              icon={value.icon}
              iconBgColor={value.iconBgColor}
              bgColor="bg-white"
              className="border border-gray-100 shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
};