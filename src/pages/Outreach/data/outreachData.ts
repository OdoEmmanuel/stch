import outreachHeroImg from '../../../assets/outreach-hero.webp';
import missionImg from '../../../assets/outreach-mission.webp';

import program1 from '../../../assets/outreach-mobile.webp';
import program2 from '../../../assets/outreach-maternal.webp';
import program3 from '../../../assets/outreach-immunization.webp';
import program4 from '../../../assets/outreach-senior.webp';
import program5 from '../../../assets/outreach-meds.webp';
import program6 from '../../../assets/outreach-workshop.webp';

import mariaImg from '../../../assets/maria.webp';
import johnImg from '../../../assets/john.webp';
import gallery1 from '../../../assets/gallery1.webp';
import gallery2 from '../../../assets/gallery2.webp';
import gallery3 from '../../../assets/gallery3.webp';
import gallery4 from '../../../assets/gallery4.webp';
import gallery5 from '../../../assets/gallery5.webp';

export const outreachContent = {
  hero: {
    image: outreachHeroImg,
    title: "Community Outreach",
    description: "Serving our community with compassion through our Catholic mission, medical camps, and outreach programs. We are committed to extending care beyond hospital walls, reaching those in need with essential health services, education, and support. By fostering partnerships, promoting wellness, and offering hope, our outreach initiatives embody the spirit of service and ensure that every member of the community feels valued and cared for."
  },
  mission: {
    title: "Our Catholic Mission",
    subtitle: "At STCH Hospital, we are guided by Catholic values of compassion, dignity, and service to all. Our mission extends beyond hospital walls to reach underserved communities.",
    image: missionImg,
    features: [
      {
        title: "Faith-Based Care",
        description: "Integrating spiritual support with medical excellence",
        iconType: "plus"
      },
      {
        title: "Serving the Vulnerable",
        description: "Reaching those who need healthcare the most",
        iconType: "heart"
      },
      {
        title: "Community Partnership",
        description: "Working with parishes and local organizations",
        iconType: "hands"
      }
    ]
  }
};

export const impactStats = [
  { label: "People Served Annually", value: 12500, suffix: "+", color: "#1E40AF" },
  { label: "Medical Camps This Year", value: 45, suffix: "+", color: "#0D9488" },
  { label: "Partner Parishes", value: 28, suffix: "", color: "#EA580C" },
  { label: "Active Volunteers", value: 200, suffix: "+", color: "#9333EA" },
];

export const outreachPrograms = [
  {
    title: "Mobile Medical Clinics",
    description: "Free health screenings, consultations, and basic treatment in underserved areas. Monthly visits to 8 communities.",
    image: program1,
    schedule: "Every Saturday, 9am - 3pm",
    location: "Various location in Ojodu",
    iconName: "AmbulanceIcon",
    metaIconName: "MapPin"
  },
  {
    title: "Maternal Health Initiative",
    description: "Prenatal care, delivery support, and postnatal follow-up for expectant mothers in needs. Free delivery services available.",
    image: program2,
    schedule: "Weekly classes in Wednesdays",
    location: "150+ mothers supported annually",
    iconName: "Baby",
    metaIconName: "Users"
  },
  {
    title: "Child Immunization Drives",
    description: "Free vaccination campaigns ensuring all children have access to essential immunizations and preventive care.",
    image: program3,
    schedule: "Quarterly campaigns",
    location: "2,000+ children vaccinated yearly",
    iconName: "Syringe",
    metaIconName: "Users"
  },
  {
    title: "Senior Citizen Care",
    description: "Home visits, health monitoring, and medication support for elderly parishioners and community members.",
    image: program4,
    schedule: "Bi-weekly home visits",
    location: "80+ seniors enrolled",
    iconName: "WalkingCaneIcon",
    metaIconName: "Home"
  },
  {
    title: "Medication Assistance",
    description: "Subsidized and free medications for chronic conditions, ensuring continuity of care for those in financial need.",
    image: program5,
    schedule: "Ongoing program",
    location: "300+ patients supported",
    iconName: "Pill",
    metaIconName: "HandHeart"
  },
  {
    title: "Health Education Workshops",
    description: "Community seminars on diseases prevention, nutrition, hygiene, and healthy living practices.",
    image: program6,
    schedule: "Monthly workshops",
    location: "50-100 attendees per session",
    iconName: "ScreenIcon",
    metaIconName: "Users"
  }
];

export const outreachStories = [
  {
    name: "Maria's Story",
    program: "Safe Delivery Program",
    story: "\"I had no money for hospital delivery. STCH's outreach team found me during their mobile clinic visit. They took care of everything - prenatal care, delivery, and postnatal checkups. My baby is healthy and I'm forever grateful.\"",
    outcome: "Healthy baby delivered, mother and child thriving",
    image: mariaImg
  },
  {
    name: "John's Story",
    program: "Diabetes Management Program",
    story: "\"The free diabetes screening camp saved my life. They detected my condition early and enrolled me in their medication assistance program. Now I can afford my insulin and live a normal life.\"",
    outcome: "Diabetes under control, quality of life restored",
    image: johnImg
  }
];

export const outreachGallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5
];