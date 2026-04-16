import React from 'react';
import { historyTimeline } from '../data/aboutData';

export const OurHistory: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#F8FAFC]">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{historyTimeline.title}</h2>
          <p className="text-gray-500 text-lg md:text-xl">{historyTimeline.subtitle}</p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {historyTimeline.events.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 group">
              
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-md transition-transform group-hover:scale-105"
                style={{ backgroundColor: event.color }}
              >
                {event.year}
              </div>

              <div 
                className="flex-1 bg-white rounded-xl shadow-sm p-6 md:p-8 w-full transition-shadow group-hover:shadow-md"
                style={{ borderLeft: `6px solid ${event.color}` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};