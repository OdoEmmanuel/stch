import React from 'react';
import { ServiceHero } from '../../../components/shared/ServiceHero';
import { ServiceCareCard } from '../../../components/shared/ServiceCareCard';
import { PharmacyFeatures } from './components/PharmacyFeatures';
import { pharmacyContent } from './data/pharmacyData';

const PharmacyServices: React.FC = () => {
  const { hero, sections } = pharmacyContent;

  return (
    <main className="w-full bg-[#F1F3F0]">
      <ServiceHero 
        titleDark={hero.title.dark}
        titleLight={hero.title.light}
        description={hero.subtitle}
        primaryAction={{ label: "Book Consultation", to: "/book" }}
        secondaryAction={{ label: "Contact Hospital", to: "/contact" }}
      />

      <section className="py-24 px-4 md:px-8 bg-[#F1F3F0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-[#1A2B48] mb-16 tracking-tight leading-tight">
            Your Partner in <br /> Everyday Wellness
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <ServiceCareCard 
                key={idx} 
                {...section} 
                isWide={true}
              />
            ))}
          </div>
        </div>
      </section>

      <PharmacyFeatures />
    </main>
  );
};

export default PharmacyServices;