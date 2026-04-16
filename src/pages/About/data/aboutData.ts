import React from 'react';
import { Heart, Scale, ShieldCheck, Handshake } from 'lucide-react';
import aboutHeroImg from '../../../assets/about-hero.webp';
import missionImg from '../../../assets/mission-bg.webp';
import visionImg from '../../../assets/vision-bg.webp';
import chaplaincyImg from '../../../assets/chaplaincy.webp';
import becauseOfYou1 from '../../../assets/because1.webp';
import becauseOfYou2 from '../../../assets/because2.webp';
import leader1 from '../../../assets/leader1.webp';
import leader2 from '../../../assets/leader2.webp';
import leader3 from '../../../assets/leader3.webp';

export const aboutContent = {
  hero: {
    image: aboutHeroImg,
    title: "About St. Timothy Catholic Hospital",
    description: "St. Timothy Catholic Hospital was established as part of our parish's mission to bring healing and hope to the community. Guided by Christ's teaching, we see every act of care as service to God and a reflection of His love. Our team blends medical excellence with compassion, ensuring that each patient is treated with dignity and respect. Every recovery is a testimony to our shared commitment to serve humanity through Christ. In all we do, we take your health to heart."
  },
  missionVision: {
    title: "Our Mission & Vision",
    subtitle: "Guided by our slogan \"Adding Life to Years\", we are committed to enhancing the quality of life for every patient we serve.",
    mission: {
      title: "Our Mission",
      text: "To provide exceptional, compassionate healthcare services rooted in Catholic values, ensuring affordable and accessible medical care that honors the dignity of every person we serve.",
      image: missionImg
    },
    vision: {
      title: "Our Vision",
      text: "To be the leading Catholic healthcare institution in Nigeria, recognized for excellence in patient care, medical innovation, and community service while staying true to our spiritual foundation.",
      image: visionImg
    }
  }
};

export const identityContent = {
  title: "Our Identity",
  description: "Our faith guides every aspect of our healthcare ministry, ensuring compassionate care that honors human identity.",
  values: [
    {
      title: "Compassion",
      subtitle: "Caring for each patient with love and understanding",
      icon: React.createElement(Heart, { className: "text-[#5B7FFF]", size: 28, fill: "currentColor" }),
      iconBgColor: "bg-[#E8EFFF]"
    },
    {
      title: "Justice",
      subtitle: "Ensuring fair and equitable healthcare for all",
      icon: React.createElement(Scale, { className: "text-[#E9A050]", size: 28 }),
      iconBgColor: "bg-[#FFF4E8]"
    },
    {
      title: "Integrity",
      subtitle: "Upholding the highest ethical standards",
      icon: React.createElement(ShieldCheck, { className: "text-[#4FD1C5]", size: 28 }),
      iconBgColor: "bg-[#E6FFFA]"
    },
    {
      title: "Service",
      subtitle: "Dedicated to serving our community's health needs",
      icon: React.createElement(Handshake, { className: "text-[#B794F4]", size: 28 }),
      iconBgColor: "bg-[#F3E8FF]"
    }
  ]
};

export const chaplaincyContent = {
  title: "Chaplaincy & Spiritual Care",
  description: "Our dedicated chaplaincy team provides spiritual support, prayer services, and sacraments to patients and families during their healing journey. We honor all faiths while maintaining our Catholic foundation.",
  image: chaplaincyImg,
  spiritualItems: [
    "24/7 Spiritual Support",
    "Interfaith Counseling",
    "Daily Mass & Prayer Services"
  ],
  accreditations: [
    "Nigerian Medical Association Certified",
    "Catholic Health Association Member",
    "ISO 9001:2015 Quality Management"
  ]
};

export const becauseOfYouContent = {
  title: "Because of You...",
  bullets: [
    "Our hospital provides patients with modern treatment and compassionate care.",
    "We support breakthrough initiatives that bring healing closer to home.",
    "We attract dedicated professionals who serve with skill and faith.",
    "We are able to extend care to the most vulnerable in our parish and community.",
    "We continue to grow as a place where faith and medicine work hand in hand to restore hope."
  ],
  images: [becauseOfYou1, becauseOfYou2]
};

export const leadershipAndStats = {
  leaders: [
    { name: "Dr. Michael Adebayo", role: "Chief Medical Director", bio: "25+ years in healthcare leadership", image: leader1 },
    { name: "Sister Mary Catherine", role: "Health Administrator", bio: "Healthcare ministry expert", image: leader2 },
    { name: "Mrs. Grace Okonkwo", role: "Director of Nursing", bio: "Patient care excellence advocate", image: leader3 }
  ],
  stats: [
    { label: "Years of Service", value: "15+", gradient: "from-[#1E40AF] to-[#3B82F6]" },
    { label: "Patient Served", value: "50K+", gradient: "from-[#064E3B] to-[#10B981]" },
    { label: "Medical Staff", value: "120+", gradient: "from-[#78350F] to-[#D97706]" },
    { label: "Patient Satisfaction", value: "98%", gradient: "from-[#581C87] to-[#A855F7]" }
  ]
};

export const historyTimeline = {
  title: "Our History",
  subtitle: "A journey of faith, healing, and services to the Ojodu Community and beyond.",
  events:[
    {
      year: "2008",
      title: "Foundation & Establishment",
      description: "St. Timothy Catholic Hospital was founded with the mission to provide affordable, quality healthcare to the Ojodu community.",
      color: "#2252CE"
    },
    {
      year: "2012",
      title: "Expansion of Services",
      description: "Added specialized clinics including maternity services, pediatrics, and emergency care to better serve our growing community.",
      color: "#0D9488" 
    },
    {
      year: "2018",
      title: "Technology Integration",
      description: "Implemented modern medical equipment and digital health records system to enhance patient care and operational efficiency.",
      color: "#F5761E"
    },
    {
      year: "2023",
      title: "Community Outreach Expansion",
      description: "Launched comprehensive community health programs and mobile clinic services to reach underserved areas.",
      color: "#9F46F1"
    }
  ]
};