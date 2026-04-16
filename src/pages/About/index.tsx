import React from 'react';
import { AboutHero } from './components/AboutHero';
import { MissionVision } from './components/MissionVision';
import { OurIdentity } from './components/OurIdentity';
import { ChaplaincyAndAccreditation } from './components/ChaplaincyAndAccreditation';
import { BecauseOfYou } from './components/BecauseOfYou';
import { LeadershipStats } from './components/LeadershipStats';
import { OurHistory } from './components/OurHistory';
import { AboutCTA } from './components/AboutCTA';

const About: React.FC = () => {
    return (
        <main className="w-full">
            <AboutHero />
            <MissionVision />
            <OurIdentity />
            <ChaplaincyAndAccreditation />
            <BecauseOfYou />
            <LeadershipStats />
            <OurHistory />
            <AboutCTA />
        </main>
    );
};

export default About;