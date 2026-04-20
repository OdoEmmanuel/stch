import React from 'react';
import { OutreachHero } from './components/OutreachHero';
import { MissionSection } from './components/MissionSection';
import { CommunityImpact } from './components/CommunityImpact';
import { OutreachPrograms } from './components/OutreachPrograms';
import { OutreachStories } from './components/OutreachStories';
import { OutreachGallery } from './components/OutreachGallery';

const OutreachPage: React.FC = () => {
    return (
        <main className="w-full">
            <OutreachHero />
            <MissionSection />
            <CommunityImpact />
            <OutreachPrograms />
            <OutreachStories />
            <OutreachGallery />
        </main>
    );
};

export default OutreachPage;