import physioImg from '../../../../assets/therapy-physio.webp';
import nutritionImg from '../../../../assets/therapy-nutrition.webp';
import counselingImg from '../../../../assets/therapy-counseling.webp';

export const therapyContent = {
  hero: {
    title: { dark: "Therapy &", light: "Rehabilitation" },
    subtitle: "Helping patients regain strength, mobility, and overall well-being through personalized therapy and rehabilitation programs. Our dedicated team combines expert techniques with compassionate care to support recovery after injury, surgery, or illness. With a focus on restoring independence and improving quality of life, we guide every patient on their journey toward renewed health and confidence."
  },
  clinics: [
    {
      type: 'Physiotherapy Clinic',
      badge: 'Daily',
      description: 'Exercises and treatments to restore mobility.',
      stats: [
        { label: '5 Physiotherapists' },
        { label: 'Mon - Sat: 8am - 6pm' },
        { label: 'Rehabilitation Center, Ground Floor' }
      ],
      image: physioImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    },
    {
      type: 'Nutritional Services',
      badge: 'Daily',
      description: 'Diet plans tailored to recovery and wellness.',
      stats: [
        { label: '3 Nutritionists/Dietitians' },
        { label: 'Mon - Fri: 9am - 5pm' },
        { label: 'Rehabilitation Center, First Floor' }
      ],
      image: nutritionImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Contact us', href: '/contact' }
    },
    {
      type: 'Counseling',
      badge: 'Daily',
      description: 'Emotional and psychological support for patients and families.',
      stats: [
        { label: '4 Licensed Counselors' },
        { label: 'Mon to Fri: 10am – 5pm' },
        { label: 'Main Hospital Building, Second Floor' }
      ],
      image: counselingImg,
      primaryAction: { label: 'Book a Consultation', href: '/book' },
      secondaryAction: { label: 'Speak With a Doctor', href: '/contact' }
    }
  ],
  supportCards: [
    {
      title: "Injury Rehabilitation",
      description: "Structured programs to restore mobility, reduce pain, and rebuild strength after accidents or surgeries."
    },
    {
      title: "Physical Therapy Programs",
      description: "Customized exercise and therapy sessions that improve flexibility, balance, and endurance."
    },
    {
      title: "Mental Health Support",
      description: "Counseling and emotional care to help patients cope with stress, trauma, or lifestyle changes during recovery."
    },
    {
      title: "Nutritional Guidance",
      description: "Diet plans tailored to promote healing, boost immunity, and support long-term wellness."
    }
  ]
};