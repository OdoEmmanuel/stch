import React, { useState } from 'react';
import { User, Phone, Users, Lock, Check, ArrowRight } from 'lucide-react';
import { specialists } from '../data/homeData';
import { SpecialistCard } from '../../../components/shared/SpecialistCard';
import { Button } from '../../../components/shared/Button';

export const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    department: '',
    date: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted Data:', formData);
    alert('Appointment requested successfully! We will contact you soon.');
    setFormData({ fullName: '', phone: '', department: '', date: '', notes: '' });
  };

  const inputBgClass = "bg-[#F2F7F2] w-full rounded-xl px-11 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F7733]/50 transition-all";

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-[#FBFCFB] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-stretch">

        <div className="flex flex-col h-full">
          <div className="mb-10 shrink-0">
            <h2 className="text-5xl md:text-[64px] font-bold text-gray-900 leading-[1.1] mb-4 tracking-tight">
              Book an <br /> Appointment
            </h2>
            <p className="text-gray-500 text-lg">
              Schedule your visit online. We will confirm your appointment via phone or email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bbg-white p-6 sm:p-10 rounded-4xl shadow-xl border border-gray-100 flex flex-col flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <User className="absolute left-4 top-10.5 text-gray-400" size={20} />
                <input
                  type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                  placeholder="Your full name" required className={inputBgClass}
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <Phone className="absolute left-4 top-10.5 text-gray-400" size={20} />
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="+234 812 987 4300" required className={inputBgClass}
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                <Users className="absolute left-4 top-10.5 text-gray-400" size={20} />
                <select
                  name="department" value={formData.department} onChange={handleChange} required
                  className={`${inputBgClass} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>General Consultation</option>
                  <option value="maternity">Maternity</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date" name="date" value={formData.date} onChange={handleChange} required
                  className={`bg-[#F2F7F2] w-full rounded-xl px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4F7733]/50 transition-all ${!formData.date && 'text-gray-400'}`}
                />
              </div>
            </div>

            <div className="mb-8 flex flex-col flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2 shrink-0">Additional Notes (Optional)</label>
              <textarea
                name="notes" value={formData.notes} onChange={handleChange}
                placeholder="Briefly describe your symptoms..."
                className="bg-[#F2F7F2] w-full rounded-xl p-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F7733]/50 transition-all resize-none flex-1 min-h-30"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-gray-100 mt-auto shrink-0">
              <div className="flex items-center gap-2 text-[#4F7733]">
                <Lock size={18} />
                <span className="text-sm font-medium">Your data is secure</span>
              </div>
              <Button type="submit" variant="primary" className="w-full sm:w-auto px-8 py-4 bg-[#4F7733]">
                Confirm Booking <Check size={20} className="ml-2" />
              </Button>
            </div>
          </form>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex items-end justify-between mb-10 shrink-0">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Our Specialists</h2>
              <p className="text-gray-500 text-lg">Highly qualified professionals.</p>
            </div>
            <a href="#all-specialists" className="hidden sm:flex items-center gap-2 text-[#4F7733] font-semibold hover:underline">
              See All <ArrowRight size={20} />
            </a>
          </div>

          <div className="flex flex-col gap-6">
            {specialists.map((specialist) => (
              <SpecialistCard key={specialist.id} {...specialist} />
            ))}
          </div>

          <a href="#all-specialists" className="sm:hidden flex items-center justify-center gap-2 text-[#4F7733] font-semibold mt-8 hover:underline">
            See All <ArrowRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};