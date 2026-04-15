import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { aboutContent } from '../data/homeData';
import PrayingIcon from '../../../assets/icons/PrayingIcon';

export const About: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F2F7F2] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F2F7F2] rounded-full translate-y-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        <div className="relative order-2 lg:order-1 flex flex-col h-full">
          <div className="relative rounded-4xl overflow-hidden shadow-2xl flex-1">
            <img 
              src={aboutContent.image} 
              alt="St. Timothy Hospital Building" 
              className="w-full h-full object-cover min-h-100"
            />
            
            {/* Design Watermark */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white/20 text-4xl md:text-6xl font-black rotate-[-25deg] uppercase text-center border-4 border-white/10 px-4 py-2">
                HOSPITAL BUILDING IMG
              </span>
            </div> */}
          </div>

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-[#EBF2FF] rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-xl border border-white/50 max-w-70">
            <div className="bg-white rounded-xl p-2 shrink-0 shadow-sm">
              <PrayingIcon width={32} height={32} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">Faith-Based Identity</h4>
              <p className="text-[10px] text-gray-500 leading-snug">
                Rooted in Catholic values, we serve everyone with dignity and respect.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col justify-center py-4">
          <span className="text-[#4F7733] font-bold tracking-[0.2em] text-sm uppercase block mb-4">
            {aboutContent.badge}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#3A5A26] leading-[1.1] mb-6">
            {aboutContent.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            {aboutContent.description}
          </p>

          <div className="grid grid-cols-1 gap-5 mb-12">
            {aboutContent.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle2 className="text-[#4F7733] shrink-0" size={24} fill="#E5F0DF" />
                <span className="text-gray-800 font-semibold text-base md:text-lg">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div>
            <Link 
              to="/history" 
              className="inline-flex items-center gap-2 text-[#4F7733] font-bold text-lg hover:gap-4 transition-all duration-300 group"
            >
              Learn more about our history 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};