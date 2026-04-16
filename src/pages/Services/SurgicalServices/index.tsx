import React from 'react';
import { ServiceHero } from '../../../components/shared/ServiceHero';
import { ServiceCareCard } from '../../../components/shared/ServiceCareCard';
import { SurgicalProcess } from './components/SurgicalProcess';
import { surgicalContent } from './data/surgicalData';

const SurgicalServices: React.FC = () => {
  const { hero, procedures } = surgicalContent;

  return (
    <main className="w-full bg-[#FBFBFC]">
      <ServiceHero 
        titleDark={hero.title.dark}
        titleLight={hero.title.light}
        description={hero.subtitle}
        primaryAction={{ label: "Book Consultation", to: "/book" }}
        secondaryAction={{ label: "Contact Hospital", to: "/contact" }}
      />

      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold text-[#3A5A26] mb-16 tracking-tight">
            Precision in <br /> Every Procedure
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {procedures.map((proc, idx) => (
              <ServiceCareCard 
                key={idx} 
                {...proc} 
                isWide={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Care Process & Facilities */}
      <SurgicalProcess />
    </main>
  );
};

export default SurgicalServices;