import React from 'react';
import { ServiceHero } from '../../../components/shared/ServiceHero';
import { specialistContent } from './data/specialistData';
import { ClinicsGrid } from './components/ClinicsGrid';
import { SpecialistCard } from '../../../components/shared/SpecialistCard';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const SpecialistClinics: React.FC = () => {
    const { hero, doctors } = specialistContent;

    return (
        <main className="w-full">
            <ServiceHero
                titleDark={hero.title.dark}
                titleLight={hero.title.light}
                description={hero.subtitle}
                primaryAction={{ label: "Book Consultation", to: "/book" }}
                secondaryAction={{ label: "Contact Hospital", to: "/contact" }}
            />

            <ClinicsGrid />

            <section className="py-12 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#F0F2F5] rounded-[40px] p-8 md:p-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A2B48] mb-8">About Our Specialists</h2>
                        <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed max-w-5xl">
                            <p>
                                At our hospital, patient care is led by highly qualified consultants across multiple specialties.
                                Each department is staffed with experienced physicians and surgeons who bring advanced training and a commitment to compassionate service.
                            </p>
                            <p>
                                Our specialists work closely with primary care doctors and diagnostic teams to ensure patients receive accurate evaluations.
                                Whether it’s a routine consultation or a complex procedure, care is always guided by senior consultants.
                            </p>
                            <p>
                                We believe in a collaborative approach: specialists coordinate with nurses, therapists, and support staff to provide holistic care
                                that addresses both medical needs and overall well-being.
                            </p>
                            <Link to="/book" className="inline-flex items-center gap-2 text-[#4F7733] font-bold mt-4 hover:underline">
                                Schedule a consultation with a specialist. <ArrowUpRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 md:px-8 bg-[#F1F3F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-left">
                        <h2 className="text-5xl md:text-7xl font-bold text-[#1A2B48] mb-4">Specialist Doctors</h2>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Consultants</h4>
                        <p className="text-gray-500 text-lg max-w-3xl">Our hospital is proud to have a team of highly experienced specialists...</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {doctors.map((doc) => (
                            <SpecialistCard key={doc.id} {...doc} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SpecialistClinics;