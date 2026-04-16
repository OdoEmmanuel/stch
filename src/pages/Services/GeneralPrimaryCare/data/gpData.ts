import emergencyImg from '../../../../assets/gp-emergency.webp';
import consultationImg from '../../../../assets/gp-consultation.webp'
import deptImg from '../../../../assets/gp-about-dept.webp';

export const gpContent = {
  hero: {
    title: { dark: "General & Primary", light: "Care" },
    subtitle: "Accessible and compassionate healthcare designed to support your everyday medical needs, from routine check-ups and preventive care to urgent concerns that require immediate attention"
  },
  careCards: [
     {
      type: 'Emergency',
      badge: '24/7',
      description: 'Immediate care for urgent medical situations, ensuring patients receive timely treatment.',
      stats: [
        { label: '8 Emergency Physicians' },
        { label: 'Open 24/7, all day' },
        { label: 'Main Hospital Building, Ground floor' }
      ],
      image: emergencyImg,
      primaryAction: { label: 'Emergency: +234 816 3452 908', href: 'tel:+2348163452908' },
    },
    {
      type: 'General Consultation',
      badge: 'Daily',
      description: 'Routine medical checkups, preventive screenings, and diagnosis for everyday health concerns.',
      stats: [
        { label: '12 Primary Care Physician' },
        { label: 'Mon - Sat: 8am - 8pm' },
        { label: 'Main Hospital Building, Second floor' }
      ],
      image: consultationImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    }
  ],
  about: {
    title: "About the Department",
    text: "Our primary care department is the first point of contact for patients. We provide compassionate care, quick diagnosis, and personalized treatment plans. When specialized care is needed, our team ensures smooth referrals to expert consultants.",
    image: deptImg,
    checkpoints: ["Fever or illness", "Routine health checks", "Sudden health concerns", "Minor injuries"]
  }
};