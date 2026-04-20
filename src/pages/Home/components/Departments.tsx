import React from 'react';
import { DepartmentCard } from '../../../components/shared/DepartmentCard';
import { departments } from '../data/homeData';
import { Button } from '../../../components/shared/Button';

export const Departments: React.FC = () => {
  return (
    <section className="py-28 px-6 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="mb-20">
          <h4 className="text-[#4F7733] font-black tracking-[0.3em] uppercase text-xs mb-4">
            Our Medical Departments
          </h4>
          <h2 className="text-5xl md:text-7xl font-bold text-[#486C2E] mb-8 leading-tight">
            Comprehensive Care <br className="hidden md:block" /> for You
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            From maternity to surgery, our specialized clinics are equipped to handle your health needs with professional excellence.
          </p>
        </div>

        {/* Top Row: 4 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {departments.slice(0, 4).map((dept, idx) => (
            <DepartmentCard key={idx} {...dept} />
          ))}
        </div>
        
        {/* Bottom Row: 3 Items Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {departments.slice(4, 7).map((dept, idx) => (
            <DepartmentCard key={idx} {...dept} />
          ))}
        </div>

        <div className="mt-20">
          <Button variant="primary" className="px-12 py-4 text-lg" to='/services/general-primary-care'>
            View all Services
          </Button>
        </div>
      </div>
    </section>
  );
};