import React from 'react';
import { SupportHero } from './components/SupportHero';
import { HelpCards } from './components/HelpCards';
import { OurIdentity } from '../About/components/OurIdentity';
import { FAQSection } from './components/FAQSection';
import { FeedbackForm } from './components/FeedbackForm';
import { QuickLinks } from './components/QuickLinks';

const CustomerSupport: React.FC = () => {
  return (
    <main className="w-full">
      <SupportHero />
      <HelpCards />
      <OurIdentity /> 
      <FAQSection />
      <FeedbackForm />
      <QuickLinks />
    </main>
  );
};

export default CustomerSupport;