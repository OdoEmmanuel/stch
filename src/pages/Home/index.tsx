import React from 'react';
import { Hero } from './components/Hero';
import { heroSlides } from './data/homeData';
import { Departments } from './components/Departments';
import { Appointment } from './components/Appointment';
import { About } from './components/About';
import { CommunityImpact } from './components/CommunityImpact';
import { StatsAndSupport } from './components/StatsAndSupport';

const Home: React.FC = () => {
  return (
    <div className="relative w-full overflow-x-hidden antialiased font-sans">
      {/* Navbar is removed from here - it's now in App.tsx */}
      <Hero slides={heroSlides} />
      <Departments />
      <Appointment />
      <About />
      <CommunityImpact />
      <StatsAndSupport />
    </div>
  );
};

export default Home;