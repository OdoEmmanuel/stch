import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gpContent } from '../data/gpData';

export const AboutDepartment: React.FC = () => {
  const { about } = gpContent;

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F7FCF7] rounded-4xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{about.title}</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">{about.text}</p>
            
            <h4 className="font-bold text-gray-900 mb-6">When to visit</h4>
            <div className="grid grid-cols-1 gap-4">
              {about.checkpoints.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#4F7733]" size={24} fill="#E5F0DF" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl h-full">
            <img src={about.image} alt="Consultation" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Need to see a doctor today?</h3>
          <Link to="/book" className="text-[#4F7733] font-bold text-lg flex items-center justify-center gap-2 hover:underline">
            Book a consultation with our primary care physicians. <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};