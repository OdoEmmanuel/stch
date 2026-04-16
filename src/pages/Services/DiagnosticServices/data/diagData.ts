import labImg from '../../../../assets/diag-lab.webp';
import radiologyImg from '../../../../assets/diag-radiology.webp';
import ultrasoundImg from '../../../../assets/diag-ultrasound.webp';

export const diagContent = {
  hero: {
    title: { dark: "Diagnostic", light: "Services" },
    subtitle: "Accurate testing and advanced imaging provide the clarity needed for effective diagnosis and treatment, helping patients and doctors make confident decisions for better health."
  },
  services: [
    {
      type: 'Laboratory',
      badge: 'Daily',
      description: 'Blood tests, pathology, and routine screenings.',
      stats: [
        { label: '6 Laboratory Scientists' },
        { label: 'Mon - Sat: 7am - 7pm' },
        { label: 'Main Hospital Building, Ground floor' }
      ],
      image: labImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    },
    {
      type: 'Radiology & Imaging',
      badge: 'Daily',
      description: 'X-rays, CT scans, and MRI imaging.',
      stats: [
        { label: '4 Radiologists' },
        { label: 'Mon - Fri: 8am - 6pm' },
        { label: 'Diagnostic Center, First Floor' }
      ],
      image: radiologyImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Contact us', href: '/contact' }
    },
    {
      type: 'Ultrasound/Scan',
      badge: 'Daily',
      description: 'Safe imaging for pregnancy, abdominal, and internal diagnostics.',
      stats: [
        { label: '3 Sonographers' },
        { label: 'Mon to Sat: 9am - 6pm' },
        { label: 'Main Hospital Building, Second Floor' }
      ],
      image: ultrasoundImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    }
  ],
  whySection: {
    title: "Why Diagnostics Matter",
    paragraphs: [
      "Accurate diagnostics are the foundation of effective healthcare. By identifying medical conditions early, doctors can begin treatment before illnesses progress, improving recovery outcomes and reducing complications.",
      "Diagnostic tests—whether laboratory analysis, radiology imaging, or ultrasound scans—provide vital information that guides physicians in making precise decisions. This ensures patients receive the right care at the right time, avoiding unnecessary treatments and promoting overall well-being.",
      "In short, diagnostics empower both doctors and patients with clarity, confidence, and a pathway to better health. We emphasize holistic care for mothers and children, combining medical expertise with emotional support. From antenatal visits to child growth monitoring, our team ensures families feel safe and cared for."
    ]
  }
};