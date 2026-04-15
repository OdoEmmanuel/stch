import React from 'react';

interface DepartmentCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgColor: string;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({ 
  title, 
  subtitle, 
  icon, 
  bgColor 
}) => {
  return (
    <div className={`${bgColor} rounded-4xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg group`}>
      <div className="bg-white rounded-full p-4 mb-4 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm font-medium">{subtitle}</p>
    </div>
  );
};