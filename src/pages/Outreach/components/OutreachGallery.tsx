import React from 'react';
import { outreachGallery } from '../data/outreachData';

export const OutreachGallery: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Our Community in Action</h2>
        <p className="text-gray-500 text-lg md:text-xl mb-16">Moments from our outreach activities</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {outreachGallery.map((img, idx) => (
            <div key={idx} className="h-80 rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src={img} 
                alt={`Outreach moment ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};