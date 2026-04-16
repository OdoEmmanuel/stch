import React from 'react';
import { Calendar, Stethoscope } from 'lucide-react';
import { Button } from '../../../components/shared/Button';

export const AboutCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto relative bg-[#4F7733] rounded-[40px] overflow-hidden py-20 px-6 md:px-12 text-center shadow-2xl">
        
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
          <Stethoscope size={600} strokeWidth={1} className="text-white scale-150 rotate-12" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Experience Our Care?
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12">
            Join thousands of patients who have experienced our compassionate, faith-based healthcare. Book your appointment today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              to="/donate" 
              className="bg-white text-[#4F7733]! hover:bg-gray-200 px-8 py-4 text-lg min-w-55"
            >
              Donate Now <Calendar size={20} className="ml-2" />
            </Button>
            
            <Button 
              to="/services" 
              variant="outline" 
              className="border border-white text-white hover:bg-white/10 px-8 py-4 text-lg min-w-55"
            >
              View Our Services <Stethoscope size={20} className="ml-2" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-24 pt-10 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/80 font-medium">Emergency Care</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">Online</div>
              <div className="text-white/80 font-medium">Booking</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">Whatsapp</div>
              <div className="text-white/80 font-medium">Support</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};