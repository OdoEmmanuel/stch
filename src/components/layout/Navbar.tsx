import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavigation } from '../../data/navigation';
import { Button } from '../shared/Button';

interface NavbarProps {
  logo: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white rounded-full shadow-lg px-4 md:px-6 py-2 flex items-center justify-between">
      <Link to="/" className="shrink-0">
        <img src={logo} alt="St. Timothy Hospital" className="h-8 md:h-16 w-auto" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-8 text-[#333333]">
        {mainNavigation.map((item) => (
          <li
            key={item.label}
            className="relative group py-4"
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to={item.href}
              onClick={(e) => item.hasDropdown && e.preventDefault()}
              className="flex items-center gap-1 text-lg font-medium cursor-pointer transition-colors hover:text-[#4F7733]"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                />
              )}
            </Link>

            {/* Desktop Dropdown */}
            <AnimatePresence>
              {activeDropdown === item.label && item.dropdownItems && (
                <motion.ul
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100 z-60"
                >
                  {item.dropdownItems.map((subItem) => (
                    <li key={subItem.label} className="border-b border-gray-50 last:border-0">
                      <Link
                        to={subItem.href}
                        className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-[#4F7733] transition-colors text-[15px] leading-tight"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      {/* Desktop Action Button */}
      <div className="hidden lg:block">
        <Button variant="primary" className="py-2.5 px-6 text-lg">Book an Appointment</Button>
      </div>

      {/* Mobile Hamburger */}
      <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white mt-4 rounded-3xl shadow-2xl p-6 lg:hidden flex flex-col gap-4 border border-gray-100"
          >
            {mainNavigation.map((item) => (
              <div key={item.label} className="flex flex-col">
                <div
                  className="flex items-center justify-between text-lg font-semibold py-2 border-b border-gray-50"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  <Link to={item.href} onClick={() => !item.hasDropdown && setIsOpen(false)}>{item.label}</Link>
                  {item.hasDropdown && <ChevronDown size={20} className={activeDropdown === item.label ? 'rotate-180' : ''} />}
                </div>

                {/* Mobile Sub-items Accordion */}
                {activeDropdown === item.label && item.dropdownItems && (
                  <div className="flex flex-col bg-gray-50 rounded-lg mt-2">
                    {item.dropdownItems.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="px-4 py-3 text-gray-600 border-b border-white last:border-0"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button variant="primary" className="w-full mt-4">Book Appointment</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};