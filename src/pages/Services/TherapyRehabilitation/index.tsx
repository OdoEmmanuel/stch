import React from 'react';
import { ServiceHero } from '../../../components/shared/ServiceHero';
import { ServiceCareCard } from '../../../components/shared/ServiceCareCard';
import { RecoverySupport } from './components/RecoverySupport';
import { therapyContent } from './data/therapyData';

const TherapyRehab: React.FC = () => {
  const { hero, clinics } = therapyContent;

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
          <h2 className="text-5xl md:text-7xl font-bold text-[#1A2B48] mb-16 tracking-tight">
            Strength for <br /> Every Step
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinics.map((clinic, idx) => (
              <ServiceCareCard 
                key={idx} 
                {...clinic} 
                isWide={false} // Matches the 3-column vertical button stack in UI
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Recovery Support Section */}
      <RecoverySupport />
    </main>
  );
};

export default TherapyRehab;