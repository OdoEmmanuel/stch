import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import XIcon from "../../assets/icons/XIcon";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import logoWebp from "../../assets/logo.webp";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFB] pt-20 pb-10 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <img
              src={logoWebp}
              alt="St. Timothy Hospital"
              className="h-16 w-fit object-contain"
            />
            <p className="text-gray-500 text-lg leading-relaxed max-w-70">
              Adding Life to Years through affordable, patient-centered care
              grounded in faith.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <XIcon size={20} />, href: "#" },
                { icon: <InstagramIcon size={20} />, href: "#" },
                { icon: <LinkedinIcon size={20} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-300 flex items-center justify-center text-gray-700 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-8">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4 text-gray-500">
              {[
                "About Us",
                "Our Services",
                "Find a Doctor",
                "Book Appointment",
                "Careers",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-[#4F7733] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-8">
              Departments
            </h4>
            <ul className="flex flex-col gap-4 text-gray-500">
              {[
                "Maternity & Child Care",
                "Cardiology",
                "Surgery",
                "Dental Clinic",
                "Laboratory",
              ].map((dept) => (
                <li key={dept}>
                  <Link
                    to={`/departments/${dept.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="hover:text-[#4F7733] transition-colors"
                  >
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-gray-900 font-bold text-lg mb-8">Contact Us</h4>
            <div className="flex flex-col gap-6 text-gray-500">
              <div className="flex gap-4">
                <MapPin className="text-[#4F7733] shrink-0" size={24} />
                <span className="text-sm md:text-base leading-snug">
                  123 Catholic Mission Road, Ojodu Berger, Lagos, Nigeria.
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-[#4F7733] shrink-0" size={20} />
                <span className="text-sm md:text-base">+234 800 123 4567</span>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-[#4F7733] shrink-0" size={20} />
                <span className="text-sm md:text-base">info@stch.org</span>
              </div>
              <div className="flex gap-4 items-center">
                <MessageCircle className="text-[#4F7733] shrink-0" size={20} />
                <span className="text-sm md:text-base font-medium">
                  +234 800 987 6543
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            ©{currentYear} St. Timothy Catholic Hospital. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-900">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
