import React, { useState } from 'react';
import { User, Phone } from 'lucide-react';
import { Button } from '../../../components/shared/Button';

export const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', type: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    alert("Thank you for your feedback!");
  };

  const inputClass = "w-full bg-white rounded-xl border border-gray-100 px-12 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F7733]/20 transition-all";

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-[80px] font-bold text-gray-900 mb-4">Patient Feedback & Complaints</h2>
        <p className="text-gray-500 text-lg md:text-xl mb-16">Your feedback helps us improve our services</p>

        <div className="max-w-5xl mx-auto bg-[#F1F3F0] rounded-[40px] p-8 md:p-16 text-left">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Full Name<span className="text-red-500">*</span></label>
              <User className="absolute left-4 top-13 text-gray-400" size={20} />
              <input 
                type="text" placeholder="Your full name" required
                className={inputClass}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Phone Number<span className="text-red-500">*</span></label>
              <Phone className="absolute left-4 top-13 text-gray-400" size={20} />
              <input 
                type="tel" placeholder="234 xxx xxxx xxx" required
                className={inputClass}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Email<span className="text-red-500">*</span></label>
              <input 
                type="email" placeholder="e.g yourwinzy@gmail.com" required
                className="w-full bg-white rounded-xl border border-gray-100 px-6 py-4 text-gray-900"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Feedback Type<span className="text-red-500">*</span></label>
              <select 
                className="w-full bg-white rounded-xl border border-gray-100 px-6 py-4  appearance-none cursor-pointer"
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="">Send feedback type</option>
                <option value="complaint">Complaint</option>
                <option value="suggestion">Suggestion</option>
                <option value="praise">Praise</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">Message<span className="text-red-500">*</span></label>
              <textarea 
                rows={8} placeholder="Please provide details about your feedback..." required
                className="w-full bg-white rounded-2xl border border-gray-100 px-6 py-6 text-gray-900 resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <Button type="submit" className="bg-[#4F7733] min-w-70 py-4 text-lg">
                Submit Feedback
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};