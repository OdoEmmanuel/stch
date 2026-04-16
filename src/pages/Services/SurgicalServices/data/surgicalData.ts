import generalSurgeryImg from '../../../../assets/surgery-general.webp';
import specializedSurgeryImg from '../../../../assets/surgery-specialized.webp';

export const surgicalContent = {
  hero: {
    title: { dark: "Surgical", light: "Services" },
    subtitle: "Safe and professional surgical procedures performed by experienced surgeons, combining advanced technology with compassionate care. Our surgical team is dedicated to precision, safety, and successful outcomes — from routine operations to complex procedures — ensuring every patient receives expert treatment in a trusted environment."
  },
  procedures: [
    {
      type: 'General Surgery',
      badge: 'Scheduled',
      description: 'Appendectomy, hernia repair, and other routine procedures.',
      stats: [
        { label: '4 Surgeons' },
        { label: 'Mon to Fri: 7am – 4pm' },
        { label: 'Surgical Center, 3rd floor' }
      ],
      image: generalSurgeryImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    },
    {
      type: 'Specialized Surgery',
      badge: 'Scheduled',
      description: 'Orthopedic, cardiac, and neurosurgical operations.',
      stats: [
        { label: '4 Surgeons' },
        { label: 'Mon to Fri: 7am – 4pm' },
        { label: 'Surgical Center, 3rd floor' }
      ],
      image: specializedSurgeryImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    }
  ],
  process: {
    steps: ["Consultation", "Diagnosis and preparation", "Surgical procedure", "Post-surgery care"],
    facilities: ["Modern operating theater", "Recovery rooms", "Surgical specialists"]
  }
};