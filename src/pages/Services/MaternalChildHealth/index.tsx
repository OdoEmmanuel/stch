import React from 'react';
import { ServiceHero } from '../../../components/shared/ServiceHero';
import { ServiceCareCard } from '../../../components/shared/ServiceCareCard';
import { AboutMCH } from './components/AboutMCH';
import { mchContent } from './data/mchData';

const MaternalChildHealth: React.FC = () => {
  return (
    <main className="w-full">
      <ServiceHero 
        titleDark={mchContent.hero.title.dark}
        titleLight={mchContent.hero.title.light}
        description={mchContent.hero.subtitle}
        primaryAction={{ label: "Book Consultation", to: "/book" }}
        secondaryAction={{ label: "Contact Hospital", to: "/contact" }}
      />
      
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold text-[#1A2B48] mb-16 tracking-tight">
            Women & <br /> Children’s Care
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mchContent.careSections.map((section, idx) => (
              <ServiceCareCard key={idx} {...section} />
            ))}
          </div>
        </div>
      </section>

      <AboutMCH />
    </main>
  );
};

export default MaternalChildHealth;