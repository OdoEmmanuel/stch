import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { surgicalContent } from '../data/surgicalData';

export const SurgicalProcess: React.FC = () => {
  const { process } = surgicalContent;

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-4xl p-8 md:p-16 shadow-sm border border-gray-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Steps Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Surgical Care Process</h2>
              <h4 className="font-bold text-gray-700 mb-6 text-lg">Steps:</h4>
              <div className="space-y-4">
                {process.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#4F7733]" size={24} fill="#E5F0DF" />
                    <span className="text-gray-700 font-medium text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Facilities</h2>
              <ul className="space-y-4">
                {process.facilities.map((facility, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-gray-700 font-medium">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
             <Link to="/contact" className="text-[#4F7733] font-bold text-lg flex items-center justify-center gap-2 hover:underline">
              Consult our surgical team for professional care. <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};