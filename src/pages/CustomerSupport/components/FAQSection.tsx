import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/supportData';

export const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>("Appointments & Booking-0");

  const toggleItem = (catIndex: number, itemIndex: number) => {
    const id = `${faqData[catIndex].title}-${itemIndex}`;
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-[#F1F3F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-lg md:text-xl">Quick answers to common questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {faqData.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <div key={catIdx}>
                <div className={`flex items-center gap-3 mb-8 ${category.color}`}>
                  <Icon size={24} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => {
                    const id = `${category.title}-${itemIdx}`;
                    const isOpen = openItem === id;

                    return (
                      <div key={itemIdx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        <button 
                          onClick={() => toggleItem(catIdx, itemIdx)}
                          className="w-full px-6 py-5 cursor-pointer flex items-center justify-between text-left transition-colors hover:bg-gray-50"
                        >
                          <span className="font-semibold text-gray-900 md:text-lg">{item.question}</span>
                          <ChevronDown className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};