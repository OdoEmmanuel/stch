import maternityImg from '../../../../assets/mch-maternity.webp';
import pediatricsImg from '../../../../assets/mch-pediatrics.webp';
import gynecologyImg from '../../../../assets/mch-gynecology.webp';
import mchAboutImg from '../../../../assets/mch-about.webp';

export const mchContent = {
  hero: {
    title: { dark: "Maternal & Child", light: "Health" },
    subtitle: "Our Maternal and Child Health services offer complete support for mothers and children, including prenatal and postnatal care, newborn screenings, pediatric consultations, and family health education. We ensure a safe, nurturing environment where families receive the guidance and medical attention they need at every stage."
  },
  careSections: [
    {
      type: 'Maternity Services',
      badge: '24/7',
      description: 'Comprehensive prenatal, delivery, and postnatal care with experienced obstetricians and modern birthing facilities.',
      stats: [
        { label: '6 Emergency Physicians' },
        { label: 'Open 24/7, all day' },
        { label: 'Main Hospital Building, Ground floor' }
      ],
      image: maternityImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    },
    {
      type: 'Pediatrics',
      badge: 'Daily',
      description: 'Preventive and curative care for infants, toddlers, and children.',
      stats: [
        { label: '3 Pediatrics' },
        { label: 'Mon - Sat: 8am - 6pm' },
        { label: 'Children\'s Wing, First floor' }
      ],
      image: pediatricsImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Contact us', href: '/contact' }
    },
    {
      type: 'Gynecology',
      badge: 'Daily',
      description: 'Women\'s reproductive health, including screenings and treatments.',
      stats: [
        { label: '4 Gynecology Specialists' },
        { label: 'Mon - Fri: 9 AM – 6 PM' },
        { label: 'Location: Main Hospital Building, Second Floor' }
      ],
      image: gynecologyImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    }
  ],
  about: {
    title: "About the Department",
    text: "Our Women & Children's Care department is dedicated to supporting families with compassionate services for mothers, newborns, and children. As a trusted first stop, we provide accessible care and ensure smooth referrals to specialists when needed.",
    image: mchAboutImg
  }
};