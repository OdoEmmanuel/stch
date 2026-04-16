import pharmacyImg from '../../../../assets/pharmacy-main.webp';
import counselingImg from '../../../../assets/pharmacy-counseling.webp';

export const pharmacyContent = {
  hero: {
    title: { dark: "Pharmacy", light: "Services" },
    subtitle: "Providing safe, reliable medications and professional pharmaceutical guidance to support every stage of care. Our pharmacy team ensures accuracy, accessibility, and personalized attention, helping patients understand their prescriptions and manage their health with confidence. With a commitment to quality and compassion, we deliver trusted solutions that promote wellness and peace of mind."
  },
  sections: [
    {
      type: 'Pharmacy',
      badge: 'Daily',
      description: 'Prescription and over-the-counter medications.',
      stats: [
        { label: '6 Licensed Pharmacists' },
        { label: 'Mon to Sat: 8am – 8pm' },
        { label: 'Main Hospital Building, Ground Floor' }
      ],
      image: pharmacyImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    },
    {
      type: 'Medication Counseling',
      badge: 'Daily',
      description: 'Guidance on dosage, side effects, and safe use.',
      stats: [
        { label: '3 Clinical Pharmacists' },
        { label: 'Mon to Fri: 9am – 5pm' },
        { label: 'Pharmacy Counseling Room, Ground Floor' }
      ],
      image: counselingImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    }
  ],
  features: [
    {
      title: "Qualified pharmacists",
      description: "Our pharmacy is staffed by licensed professionals who ensure safe dispensing of medications and provide expert advice."
    },
    {
      title: "Quality medications",
      description: "We supply only approved, high-standard medicines to guarantee effective treatment and patient safety."
    },
    {
      title: "Prescription guidance",
      description: "Pharmacists offer counseling on proper dosage, possible side effects, and how to take medications correctly for the best results."
    }
  ]
};