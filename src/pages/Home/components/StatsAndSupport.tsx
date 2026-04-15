import React from 'react';
import { Heart, HandHeart } from 'lucide-react';
import { Counter } from '../../../components/shared/Counter';
import { Button } from '../../../components/shared/Button';

const stats = [
  { label: "Diagnostics Center", value: 75, suffix: "+" },
  { label: "Beds", value: 28, suffix: "+" },
  { label: "Patient Episodes", value: 500, suffix: " Thousand+" },
  { label: "Employees", value: 61, suffix: "+" },
  { label: "Ambulance service", value: 13, suffix: "+" },
];

export const StatsAndSupport: React.FC = () => {
  return (
    <section className="w-full">
      <div className="bg-[#F9F9FD] py-20 px-4 md:px-8 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-900 font-semibold mb-12 text-lg">St. Timothy Catholic Hospital has</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-4xl md:text-[40px] font-semibold text-gray-900 mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-gray-500 text-sm md:text-base font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-[#4F7733] py-24 px-4 overflow-hidden text-center">
        
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none">
            <path 
              fill="#FFFFFF" 
              d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
          <svg viewBox="0 0 1440 320" className="absolute -bottom-12.5 w-full h-full scale-y-125" preserveAspectRatio="none">
            <path 
              fill="#FFFFFF" 
              fillOpacity="0.2"
              d="M0,224L120,208C240,192,480,160,720,170.7C960,181,1200,235,1320,261.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Support Our Mission
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Your donations help us provide care to those who cannot afford it and improve our facilities. 
            Be a part of our story of healing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              to="/donate" 
              className="bg-white text-[#4F7733]! hover:bg-gray-100 min-w-55 py-4"
              icon={<Heart className="text-red-500 fill-red-500" size={20} />}
            >
              Donate Now
            </Button>
            
            <Button 
              to="/volunteer" 
              className="bg-[#3D5C27] text-white border border-white/20 hover:bg-[#344d21] min-w-55 py-4"
              icon={<HandHeart className="text-white" size={20} />}
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};