import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp';
  children: React.ReactNode;
  icon?: React.ReactNode;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  className = '',
  to,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center cursor-pointer justify-center px-6 py-3 rounded-full font-medium transition-all duration-300';

  const variants = {
    primary: 'bg-[#4F7733] text-white hover:bg-[#3f5e29]',
    outline: 'bg-transparent border border-white text-white hover:bg-white/20 backdrop-blur-sm',
    whatsapp: 'bg-transparent border border-white text-white hover:bg-white/20 backdrop-blur-sm'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};