import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { chaplaincyContent } from '../data/aboutData';

export const ChaplaincyAndAccreditation: React.FC = () => {
  const { title, description, image, spiritualItems, accreditations } = chaplaincyContent;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#FBFBFC]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-4xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
          
          <div className="p-8 md:p-16 flex flex-col justify-center h-full">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                {title}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {description}
              </p>
              
              <div className="space-y-4">
                {spiritualItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#4F7733] shrink-0" size={24} fill="#E5F0DF" />
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Accreditations
              </h3>
              <div className="space-y-5">
                {accreditations.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Award className="text-[#F59E0B] shrink-0" size={26} />
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-112.5 lg:min-h-full h-full w-full">
            <div className="absolute inset-0 p-4 md:p-8 h-full w-full">
              <img 
                src={image} 
                alt="Hospital Chapel" 
                className="w-full h-full object-cover rounded-3xl md:rounded-[40px] shadow-inner"
              />
              
              {/* Design Watermark Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none rotate-[-30deg]">
                <span className="text-[#8ED05F]/30 text-2xl md:text-4xl font-black uppercase tracking-widest text-center border-2 border-[#8ED05F]/10 px-6 py-2">
                  CHURCH CHAPLAINCY IMG
                </span>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};