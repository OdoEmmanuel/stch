import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pharmacyContent } from '../data/pharmacyData';

export const PharmacyFeatures: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#4F7733]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Our Pharmacy</h2>
        
        <div className="flex flex-col gap-6 mb-16">
          {pharmacyContent.features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-8 border-l-8 border-[#AEC0A1] shadow-sm transition-transform hover:translate-x-2 duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services/therapy" className="text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-80 transition-opacity hover:underline">
            Start your recovery journey with our rehabilitation specialists. <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};