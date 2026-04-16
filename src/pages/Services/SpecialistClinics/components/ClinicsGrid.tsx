import React from 'react';
import { ServiceCareCard } from '../../../../components/shared/ServiceCareCard';
import { specialistContent } from '../data/specialistData';

export const ClinicsGrid: React.FC = () => {
  const { clinics } = specialistContent;

  return (
    <section className="py-24 px-4 md:px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold text-[#1A2B48] mb-16 tracking-tight leading-tight">
          Your Path to <br /> Specialized Care
        </h2>

        {/* 4-Column base grid to handle the 50% (span-2) and 25% (span-1) widths */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {clinics.map((clinic, index) => {
            const wideIndices = [0, 3, 4, 7];
            const isWide = wideIndices.includes(index);
            const colSpan = isWide ? "md:col-span-2" : "md:col-span-1";

            return (
              <div key={index} className={colSpan}>
                <ServiceCareCard 
                  {...clinic} 
                  isWide={isWide} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};