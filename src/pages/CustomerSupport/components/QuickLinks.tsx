import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { quickLinks } from '../data/supportData';

export const QuickLinks: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#F1F3F0]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Quick Links</h2>
        <p className="text-gray-500 text-lg md:text-xl mb-16">Access our services and information easily</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link 
                key={idx} 
                to={link.to}
                className="bg-[#E9EDE7] rounded-3xl p-8 flex items-center gap-6 group hover:bg-[#E2E7DF] transition-colors text-left"
              >
                <div className={`${link.color} w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{link.title}</h4>
                  <p className="text-gray-500 text-sm mb-2">{link.subtitle}</p>
                  <div className="flex items-center gap-1 text-[#4F7733] text-sm font-bold">
                    Discover Our Experts <ArrowUpRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};