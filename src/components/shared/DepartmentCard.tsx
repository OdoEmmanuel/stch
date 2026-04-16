import React from 'react';

interface DepartmentCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgColor?: string;      // Background of the card itself
  iconBgColor?: string;  // Background of the icon circle
  className?: string;    // For extra tweaks like borders
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({ 
  title, 
  subtitle, 
  icon, 
  bgColor = 'bg-white',
  iconBgColor = 'bg-white',
  className = ''
}) => {
  return (
    <div className={`rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl group ${bgColor} ${className}`}>
      <div className={`rounded-full p-4 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm ${iconBgColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">{subtitle}</p>
    </div>
  );
};