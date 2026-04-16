import React from 'react';
import { ServiceHero } from '../../../components/shared/ServiceHero';
import { ServiceCareCard } from '../../../components/shared/ServiceCareCard';
import { diagContent } from './data/diagData';

const DiagnosticServices: React.FC = () => {
  const { hero, services, whySection } = diagContent;

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
          <h2 className="text-4xl md:text-7xl font-bold text-[#1A2B48] mb-16 tracking-tight">
            Clarity for <br /> Every Diagnosis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCareCard 
                key={idx} 
                {...service} 
                isWide={false}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#4F7733] rounded-[48px] p-8 md:p-20 text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <div className="scale-[2] rotate-12">
                <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                   <path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 0 0-.2.3zm5.4 16.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7.6-6.4a5.6 5.6 0 0 1 5.3-5.5 3.3 3.3 0 1 0 .1 6.6 5.7 5.7 0 0 1-5.4-1.1zm11.8 1.1a5.7 5.7 0 0 1-5.4 1.1 3.3 3.3 0 1 0 .1-6.6 5.6 5.6 0 0 1 5.3 5.5z" />
                </svg>
              </div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-10">{whySection.title}</h2>
              <div className="space-y-6 text-white/90 text-lg md:text-xl leading-relaxed max-w-5xl">
                {whySection.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DiagnosticServices;