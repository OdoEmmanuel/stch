import React from 'react';
import { ServiceHero } from '../../../components/shared/ServiceHero';
import { ServiceCareCard } from '../../../components/shared/ServiceCareCard';
import { AboutDepartment } from './components/AboutDepartment';
import { gpContent } from './data/gpData';

const GeneralPrimaryCare: React.FC = () => {
  return (
    <main className="w-full">
      <ServiceHero 
        titleDark={gpContent.hero.title.dark}
        titleLight={gpContent.hero.title.light}
        description={gpContent.hero.subtitle}
        primaryAction={{ label: "Book Consultation", to: "/book" }}
        secondaryAction={{ label: "Contact Hospital", to: "/contact" }}
      />
      
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold text-[#1A2B48] mb-16 tracking-tight">
            Care for <br /> Everyday Health
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gpContent.careCards.map((card, idx) => (
              <ServiceCareCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      <AboutDepartment />
    </main>
  );
};

export default GeneralPrimaryCare;