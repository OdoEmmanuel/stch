import cardioImg from "../../../../assets/clinic-cardio.webp";
import orthoImg from "../../../../assets/clinic-ortho.webp";
import urologyImg from "../../../../assets/clinic-urology.webp";
import neuroImg from "../../../../assets/clinic-neuro.webp";
import entImg from "../../../../assets/clinic-ent.webp";
import eyeImg from "../../../../assets/clinic-eye.webp";
import dentalImg from "../../../../assets/clinic-dental.webp";
import psychImg from "../../../../assets/clinic-psych.webp";

import doc1 from "../../../../assets/doctor1.webp";
import doc2 from "../../../../assets/doctor2.webp";

export const specialistContent = {
  hero: {
    title: { dark: "Specialist", light: "Clinics" },
    subtitle:
      "Our Specialist Clinics provide expert diagnosis and advanced treatment across a wide range of medical disciplines. With highly experienced specialists, state-of-the-art facilities, and a patient-centered approach, we deliver personalized care for complex conditions, ensuring that every patient receives the highest standard of medical expertise and support.",
  },

  clinics: [
    {
      type: "Cardiology",
      badge: "Weekly",
      description: "Heart health, diagnostics, and treatment.",
      stats: [
        { label: "3 Cardiologists" },
        { label: "Tue, Thu, Sat: 9am - 3pm" },
        { label: "Diagnostic Center, Ground Floor" },
      ],
      image: cardioImg,
      primaryAction: { label: "Book a Consultation", href: "/book" },
    },
    {
      type: "Orthopedic",
      badge: "Daily",
      description: "Bone, joint, and muscle care.",
      stats: [
        { label: "3 Orthopedic Surgeons" },
        { label: "Mon - Fri: 8am - 6pm" },
        { label: "Specialist Clinics Wing, Ground Floor" },
      ],
      image: orthoImg,
      primaryAction: { label: "Book a Consultation", href: "/book" },
    },
    {
      type: "Urology",
      badge: "Daily",
      description: "Kidney and urinary tract health.",
      stats: [
        { label: "3 Urology Consultants" },
        { label: "Mon - Sat: 8am - 6pm" },
        { label: "Mon - Fri: 9am - 5pm" },
      ],
      image: urologyImg,
      primaryAction: { label: "Book a Consultation", href: "/book" },
    },
    {
      type: "Neurosurgery",
      badge: "Daily",
      description: "Brain and nervous system treatments.",
      stats: [
        { label: "4 Neurosurgeons" },
        { label: "Mon - Fri: 8am - 4pm" },
        { label: "Main Hospital Building, Surgical Dept, 2nd Floor" },
      ],
      image: neuroImg,
      primaryAction: { label: "Book a Consultation", href: "/book" },
    },
    {
      type: "ENT Clinic",
      badge: "Daily",
      description: "Ear, nose, and throat care.",
      stats: [
        { label: "3 ENT Specialists" },
        { label: "Mon - Sat: 9am - 6pm" },
        { label: "Specialist Clinics Wing, Ground Floor" },
      ],
      image: entImg,
      primaryAction: { label: "Book a Consultation", href: "/book" },
    },
    {
      type: "Eye Clinic",
      badge: "Daily",
      description:
        "Vision testing, corrective procedures, and eye disease management.",
      stats: [
        { label: "4 Ophthalmologists" },
        { label: "Mon - Sat: 8am - 6pm" },
        { label: "Specialist Clinics Wing, Second Floor" },
      ],
      image: eyeImg,
      primaryAction: { label: "Book a Consultation", href: "/book" },
    },
    {
      type: "Dental Services",
      badge: "Daily",
      description: "Oral health, preventive care, and surgical dentistry.",
      stats: [
        { label: "4 Dentists" },
        { label: "Mon - Fri: 9am - 5pm" },
        { label: "Dental Clinic, First floor" },
      ],
      image: dentalImg,
      primaryAction: { label: "Book a Consultation", href: "/book" },
    },
    {
      type: "Psychiatric Clinic",
      badge: "Daily",
      description: "Mental health support, counseling, and therapy.",
      stats: [
        { label: "3 Psychiatric Consultants" },
        { label: "Mon - Fri: 10am - 5pm" },
        { label: "Specialist Clinics Wing, Third Floor" },
      ],
      image: psychImg,
      primaryAction: { label: "Book a Consultation", href: "/book" },
    },
  ],

  doctors: [
    {
      id: "1",
      name: "Dr. Grace Nwosu",
      role: "PEDIATRICIAN",
      rating: 4.8,
      description:
        "Dedicated to children's health. Provides preventive care, vaccinations, and treatment for common illnesses.",
      image: doc1,
      isHighlighted: true,
    },
    {
      id: "2",
      name: "Dr. Chioma Eze",
      role: "OPTICIAN",
      rating: 4.9,
      description:
        "Provides vision testing, corrective lenses, and guidance for eye health.",
      image: doc2,
      isHighlighted: true,
    },
    {
      id: "3",
      name: "Dr. Philip Ho",
      role: "UROLOGY SPECIALIST",
      rating: 4.8,
      description: "Focused on kidney, bladder, and urinary tract health.",
      image: doc1,
      isHighlighted: true,
    },
    {
      id: "4",
      name: "Dr. Nathanael Nickel",
      role: "ENT SPECIALIST",
      rating: 4.7,
      description: "Providing care for ear, nose, and throat conditions.",
      image: doc2,
      isHighlighted: true,
    },
    {
      id: "5",
      name: "Dr. Emmanuel Okeke",
      role: "DENTIST",
      rating: 4.8,
      description:
        "Provides oral health care, preventive checkups, and treatment for dental conditions.",
      image: doc1,
      isHighlighted: true,
    },
    {
      id: "6",
      name: "Dr. William James",
      role: "NEUROLOGIST",
      rating: 4.9,
      description:
        "Specialist in brain, spinal cord, and nervous system disorders. Provides advanced diagnostics.",
      image: doc2,
      isHighlighted: true,
    },
    {
      id: "7",
      name: "Dr. Samuel Adeyemi",
      role: "NEUROLOGIST",
      rating: 4.8,
      description:
        "Specialist in brain, spinal cord, and nervous system disorders. Focus on stroke and migraines.",
      image: doc1,
      isHighlighted: true,
    },
    {
      id: "8",
      name: "Dr. Audrey Looi",
      role: "OPHTHALMOLOGIST",
      rating: 4.8,
      description: "Expert in vision care and eye disease management.",
      image: doc2,
      isHighlighted: true,
    },
    {
      id: "9",
      name: "Dr. Mary Ellen Pace",
      role: "PSYCHIATRIST",
      rating: 4.8,
      description:
        "Supporting mental health with diagnosis, therapy, and counseling.",
      image: doc1,
      isHighlighted: true,
    },
    {
      id: "10",
      name: "Dr. Mark Okafor",
      role: "UROLOGY SPECIALIST",
      rating: 5.0,
      description: "Expert in bone, joint, and muscle care.",
      image: doc2,
      isHighlighted: true,
    },
  ],
};
