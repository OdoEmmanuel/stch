import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeroCarousel } from '../../../hooks/useHeroCarousel';
import { Button } from '../../../components/shared/Button';
import { type HeroSlide } from '../data/homeData';
import HeartbeatIcon from '../../../assets/icons/HeartbeatIcon';
import { CheckSquare } from 'lucide-react';
import HealthcareIcon from '../../../assets/icons/HealthcareIcon';
import WhatsappIcon from '../../../assets/icons/WhatsappIcon';

interface HeroProps {
  slides: HeroSlide[];
}

export const Hero: React.FC<HeroProps> = ({ slides }) => {
  const currentIndex = useHeroCarousel(slides.length, 6000);
  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-screen min-h-150 flex items-center justify-center overflow-hidden bg-gray-900">

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`bg-${currentIndex}`}
          src={currentSlide.image}
          alt="Hospital Facility"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl px-4 md:px-8 text-center mt-12">

        {/* Emergency Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="bg-[#4F7733] rounded text-white p-0.5">
            <CheckSquare width={20} height={20} />
          </div>
          <span className="text-white text-sm md:text-lg font-medium">Open 24/7 for Emergencies</span>
        </div>

        {/* Dynamic Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white text-4xl sm:text-6xl md:text-[80px] font-bold mb-6 leading-22.5 uppercase tracking-tight">
              {currentSlide.title}
            </h1>
            <p className="text-gray-100 max-w-2xl mx-auto mb-10 text-base md:text-[16px] leading-5.5 font-medium">
              {currentSlide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" className="w-full sm:w-auto bg-[#4F7733] px-8 py-3 text-sm md:text-base">
            Book an Appointment
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-white/60 bg-white/5 px-8 py-3 text-sm md:text-base flex items-end"
            icon={<WhatsappIcon width={20} height={20} />}
          >
            Chat on Whatsapp
          </Button>
        </div>
      </div>

      {/* Floating Elements (Responsive hiding for very small screens) */}
      <div className="hidden md:flex absolute bottom-12 left-12 z-20 bg-[#FFF0F0] rounded-3xl px-5 py-2 items-center gap-2 shadow-xl border border-white/30 min-w-40 flex-col">
        <div className="flex items-center gap-4 w-full">
          <div className="w-4 h-4 rounded-full bg-[#FDDADA] flex items-center justify-center shrink-0">
            <HeartbeatIcon width={23} height={23} />
          </div>
          <div>
            <p className="text-sm text-[#9B9BAA] font-medium">Heart Rate</p>
            <p className="text-[16px] font-black text-gray-900 leading-tight">112 bpm</p>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-[72%] bg-red-500 rounded-full" />
        </div>
      </div>

      <div className="hidden lg:flex absolute right-16 top-[60%] -translate-y-1/2 z-20 bg-[#B9D1FF] rounded-3xl p-3 shadow-2xl">
        <HealthcareIcon width={32} height={32} />
      </div>
    </section>
  );
};