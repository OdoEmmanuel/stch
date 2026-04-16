import React from 'react';
import { leadershipAndStats } from '../data/aboutData';
import { Button } from '../../../components/shared/Button';

export const LeadershipStats: React.FC = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 24 24" className="w-200 h-200" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 3.32 2.31 6.1 5.41 6.81l-1.4 3.49C8.42 19.82 8 20.37 8 21c0 1.1.9 2 2 2s2-.9 2-2c0-.63-.42-1.18-1.01-1.7l1.4-3.49c.2.06.4.1.61.1s.41-.04.61-.1l1.4 3.49c-.59.52-1.01 1.07-1.01 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.63-.42-1.18-1.01-1.7l-1.4-3.49C16.69 15.1 19 12.32 19 9c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-12">Leadership Team</h2>
          <div className="space-y-10 mb-12">
            {leadershipAndStats.leaders.map((leader, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <img src={leader.image} alt={leader.name} className="w-20 h-20 rounded-full object-cover shadow-md" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{leader.name}</h4>
                  <p className="text-[#4F7733] font-semibold text-sm mb-1">{leader.role}</p>
                  <p className="text-gray-500 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <Button to="/specialists" variant="primary" className="px-8 py-3 bg-[#4F7733]">
            View all Specialists
          </Button>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-12">Key Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {leadershipAndStats.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`rounded-3xl p-8 text-center text-white shadow-lg bg-linear-to-br ${stat.gradient} transition-transform hover:scale-105`}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};