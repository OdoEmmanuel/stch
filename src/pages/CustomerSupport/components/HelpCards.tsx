import React from 'react';
import { Button } from '../../../components/shared/Button';
import { supportContent } from '../data/supportData';

export const HelpCards: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F1F3F0] rounded-full translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F1F3F0] rounded-full -translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Get Help Instantly</h2>
        <p className="text-gray-500 text-lg md:text-xl mb-16 font-medium">Choose the fastest way to reach us</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportContent.helpCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className={`${card.bgColor} rounded-4xl p-10 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300 border border-transparent hover:border-gray-100 shadow-sm`}
              >
                <div className={`${card.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-8 shadow-lg`}>
                  <Icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-10 leading-relaxed text-sm flex-1">
                  {card.description}
                </p>

                <Button 
                  to={card.to} 
                  className={`w-full py-4 text-white font-bold rounded-2xl ${card.color} hover:brightness-110 shadow-md`}
                >
                  {card.actionLabel}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};