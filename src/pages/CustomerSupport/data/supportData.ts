import { MessageCircle, Phone, Mail, FileText } from 'lucide-react';
import { type ComponentType } from 'react';
import supportHeroImg from '../../../assets/support-hero.webp';
import { Calendar, Wallet, Clock, Ambulance, Users, Stethoscope } from 'lucide-react';

export interface FAQCategory {
    title: string;
    icon: ComponentType<{ className?: string; size?: number }>;
    color: string;
    items: FAQItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HelpCard {
  title: string;
  description: string;
  actionLabel: string;
  to: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  color: string;
  bgColor: string;
}

export const supportContent = {
  hero: {
    title: "Customer Support",
    description: "We're here to help you 24/7. Get instant support, find answers, or connect with our care team.",
    image: supportHeroImg
  },
  helpCards: [
    {
      title: "Whatsapp Chat",
      description: "Instant support via Whatsapp. Available 24/7 for urgent queries.",
      actionLabel: "Chat Now",
      to: "https://wa.me/yournumber",
      icon: MessageCircle,
      color: "bg-[#22C55E]",
      bgColor: "bg-[#F0FDF4]"
    },
    {
      title: "Call Us",
      description: "Speak directly with our support team. Mon-Sun 6am-10pm.",
      actionLabel: "+234 800 123 4567",
      to: "tel:+2348001234567",
      icon: Phone,
      color: "bg-[#3B82F6]",
      bgColor: "bg-[#EFF6FF]"
    },
    {
      title: "Email Support",
      description: "Send detailed queries. Response within 2 hours",
      actionLabel: "Email Us",
      to: "mailto:info@stch.org",
      icon: Mail,
      color: "bg-[#A855F7]",
      bgColor: "bg-[#FAF5FF]"
    },
    {
      title: "Contact Form",
      description: "Submit detailed requests with attachments if needed.",
      actionLabel: "Fill Form",
      to: "/contact",
      icon: FileText,
      color: "bg-[#F97316]",
      bgColor: "bg-[#FFF7ED]"
    }
  ]
};



export const faqData: FAQCategory[] = [
  {
    title: "Appointments & Booking",
    icon: Calendar,
    color: "text-blue-600",
    items: [
      { question: "How do I book an Appointment?", answer: "Lorem ipsum dolor sit amet consectetur. Mattis massa dolor sit at sapien tincidunt. At placerat amet enim augue." },
      { question: "Can I reschedule my appointment?", answer: "Yes, you can reschedule via your patient portal or by calling our support line at least 24 hours in advance." },
      { question: "What are your consultation hours?", answer: "Our general consultation hours are Mon-Sat, 8am to 8pm." }
    ]
  },
  {
    title: "Billing & Payment",
    icon: Wallet,
    color: "text-green-600",
    items: [
      { question: "What payment methods do you accept?", answer: "We accept cash, debit/credit cards, and bank transfers at our payment counters." },
      { question: "Do you accept health insurance?", answer: "Yes, we partner with major HMOs and insurance providers. Please check our insurance page for a full list." },
      { question: "Can I get a payment plan?", answer: "For major procedures, we offer flexible payment installments. Speak with our billing department for details." }
    ]
  },
  {
    title: "Visiting Hours", // Corrected title based on content in image
    icon: Clock,
    color: "text-orange-600",
    items: [
      { question: "What are the visiting hours?", answer: "General visiting hours are 10am - 12pm and 4pm - 7pm daily." },
      { question: "Is parking available?", answer: "Yes, free parking is available for patients and visitors within the hospital premises." }
    ]
  },
  {
    title: "Emergency & Urgent Care",
    icon: Ambulance,
    color: "text-red-600",
    items: [
      { question: "Do you have 24/7 emergency services?", answer: "Yes, our emergency department is fully staffed and operational 24 hours a day, 7 days a week." },
      { question: "What should I do in a medical emergency?", answer: "Call our emergency line immediately at +234 816 3452 908 or proceed to the Ground Floor emergency wing." }
    ]
  }
];

export const quickLinks = [
  { title: "Our Doctors", subtitle: "Meet our medical team", to: "/services/specialist-clinics", icon: Users, color: "bg-blue-600" },
  { title: "Medical Services", subtitle: "Browse our specialties", to: "/services/general-primary-care", icon: Stethoscope, color: "bg-green-700" },
  { title: "Book Appointment", subtitle: "Schedule your visit", to: "/book", icon: Calendar, color: "bg-orange-600" }
];