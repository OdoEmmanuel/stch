import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import { Button } from '../shared/Button';

interface NavbarProps {
  logo: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white rounded-full shadow-lg px-4 md:px-6 py-2 flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="St. Timothy Hospital" className="h-8 md:h-16 w-auto" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-8 text-[#333333]">
        {mainNavigation.map((item) => (
          <li key={item.label}>
            <Link to={item.href} className="flex items-center gap-1 text-lg font-medium hover:text-[#4F7733] transition-colors">
              {item.label}
              {item.hasDropdown && <ChevronDown size={16} />}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Action Button */}
      <div className="hidden lg:block">
        <Button variant="primary" className="py-2 px-5 text-lg">Book an Appointment</Button>
      </div>

      {/* Mobile Hamburger */}
      <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-2xl shadow-xl p-6 lg:hidden flex flex-col gap-4">
          {mainNavigation.map((item) => (
            <Link key={item.label} to={item.href} className="text-lg font-medium border-b pb-2">
              {item.label}
            </Link>
          ))}
          <Button variant="primary" className="w-full">Book Appointment</Button>
        </div>
      )}
    </nav>
  );
};