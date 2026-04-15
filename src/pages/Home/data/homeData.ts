import React from "react";
import hero1 from '../../../assets/hero-1.webp';
import hero2 from '../../../assets/hero-2.webp';
import hero3 from '../../../assets/hero-3.webp';
import HeartbeatIcon from "../../../assets/icons/HeartbeatIcon";
import DentalIcon from "../../../assets/icons/DentalIcon";
import ConsultationIcon from "../../../assets/icons/ConsultationIcon";
import doctor1 from '../../../assets/doctor1.webp';
import doctor2 from '../../../assets/doctor2.webp';
import impact1 from '../../../assets/impact1.webp';
import impact2 from '../../../assets/impact2.webp';
import impact3 from '../../../assets/impact3.webp';
import impact4 from '../../../assets/impact4.webp';
import impact5 from '../../../assets/impact5.webp';
import {
  Baby,
  FlaskConical,
  Eye,
  Brain,
} from "lucide-react";


export interface HeroSlide {
  image: string;
  title: string;
  description: string;
}

export interface DepartmentItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgColor: string;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  rating: number;
  description: string;
  image: string;
  isHighlighted?: boolean;
}

export interface ImpactItem {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  to: string;
}

export const departments: DepartmentItem[] = [
  {
    title: "Maternity",
    subtitle: "Antenatal & Delivery",
    icon: React.createElement(Baby, { className: "text-[#E91E63]", size: 28 }),
    bgColor: "bg-[#FDF2F7]",
  },
  {
    title: "Consultation",
    subtitle: "General Practice",
    icon: React.createElement(ConsultationIcon, {
      className: "text-[#2196F3]",
      size: 28,
    }),
    bgColor: "bg-[#F0F7FF]",
  },
  {
    title: "Cardiology",
    subtitle: "Heart Health",
    icon: React.createElement(HeartbeatIcon, { className: "text-[#F44336]", size: 28 }),
    bgColor: "bg-[#FFF2F2]",
  },
  {
    title: "Laboratory",
    subtitle: "Tests & Analysis",
    icon: React.createElement(FlaskConical, {
      className: "text-[#673AB7]",
      size: 28,
    }),
    bgColor: "bg-[#F5F3FF]",
  },
  {
    title: "Dental",
    subtitle: "Oral Care",
    icon: React.createElement(DentalIcon, {
      className: "text-[#10B981]",
      size: 28,
    }),
    bgColor: "bg-[#F0FDF4]",
  },
  {
    title: "Eye Clinic",
    subtitle: "Optometry",
    icon: React.createElement(Eye, { className: "text-[#F97316]", size: 28 }),
    bgColor: "bg-[#FFF7ED]",
  },
  {
    title: "Psychiatric",
    subtitle: "Mental Health",
    icon: React.createElement(Brain, { className: "text-[#6366F1]", size: 28 }),
    bgColor: "bg-[#EEF2FF]",
  },
];

export const heroSlides: HeroSlide[] = [
  {
    image: hero1,
    title: "CONSULT WITH OUR \n DOCTORS",
    description: "We provide safe, high-quality care rooted in respect and compassion. At St. Timothy Hospital, our doctors serve with expertise and faith-driven dedication."
  },
  {
    image: hero2,
    title: "COMPASSIONATE \n EXCELLENCE IN CARE",
    description: "At St. Timothy Hospital, we deliver exceptional healthcare across disciplines, blending medical expertise with compassion and faith to serve our community with dignity."
  },
  {
    image: hero3,
    title: "ADDING LIFE TO YEARS \n THROUGH FAITH AND CARE",
    description: "Affordable, patient-centered care grounded in Catholic values. We provide specialized medical services with compassion and professionalism."
  }
];

export const specialists: Specialist[] =[
  {
    id: '1',
    name: 'Dr. William James',
    role: 'NEUROLOGIST',
    rating: 4.9,
    description: 'Specialist in brain, spinal cord, and nervous system disorders. Provides advanced diagnostics and treatment for conditions such as epilepsy, stroke, and migraines.',
    image: doctor1,
    isHighlighted: true,
  },
  {
    id: '2',
    name: 'Dr. Sarah Connor',
    role: 'PEDIATRICIAN',
    rating: 4.8,
    description: 'Provides oral health care, preventive checkups, and treatment for dental conditions.', // Copied exactly from your design text
    image: doctor2,
    isHighlighted: false,
  }
];

export const aboutContent = {
  image: hero1,
  badge: "ABOUT US",
  title: "Healthcare Rooted in Compassion",
  description: "St. Timothy Catholic Hospital is dedicated to providing affordable, patient-centered care. Our mission is to add life to years through comprehensive medical services, specialized clinics, and a compassionate professional team. We serve families, mothers, elderly, and everyone.",
  features: [
    "Efficient Insurance & HMO Partners",
    "Special Focus on Maternity & Child Care",
    "Community Outreach Programs",
    "Safe & Clean Environment"
  ]
};

export const impactItems: ImpactItem[] = [
  {
    id: '1',
    image: impact1,
    category: 'Medical Mission',
    title: 'Free Medical Outreach',
    description: 'Building healthcare to underserved communities with free consultations and drugs.',
    to: '/outreach/medical-mission'
  },
  {
    id: '2',
    image: impact2,
    category: 'School Health',
    title: 'School Health Programs',
    description: 'Educating the next generation on hygiene, nutrition, and disease prevention.',
    to: '/outreach/school-health'
  },
  {
    id: '3',
    image: impact3,
    category: 'Medical Mission',
    title: 'Church Medical Missions',
    description: 'Providing free medical care through parish-based outreach.',
    to: '/outreach/church-missions'
  },
  {
    id: '4',
    image: impact4,
    category: 'Health Education',
    title: 'Health Education Seminars',
    description: 'Raising awareness on preventive care and healthy living.',
    to: '/outreach/seminars'
  },
  {
    id: '5',
    image: impact5,
    category: 'Maternal Education',
    title: 'Mother and Child Seminars',
    description: 'Regular workshop for expectant mothers on antenatal care and nutruition.',
    to: '/outreach/workshops'
  }
];