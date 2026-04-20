import React, { type ComponentType } from 'react';
import MultipleUsersIcon from '../../../assets/icons/MulitpleUsers';
import { Users, Stethoscope, Church } from 'lucide-react';
import { Counter } from '../../../components/shared/Counter';
import { impactStats } from '../data/outreachData';

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  0: MultipleUsersIcon,
  1: Stethoscope,
  2: Church,
  3: Users
};

export const CommunityImpact: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Our Community Impact</h2>
        <p className="text-gray-500 text-lg md:text-xl mb-16">Making a difference through dedicated outreach and service</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, idx) => {
            const Icon = iconMap[idx];
            return (
              <div key={idx} className="bg-white rounded-4xl p-10 shadow-xl border border-gray-50 flex flex-col items-center group transition-transform hover:-translate-y-2">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 shadow-lg"
                  style={{ backgroundColor: stat.color }}
                >
                  <Icon size={28} />
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};