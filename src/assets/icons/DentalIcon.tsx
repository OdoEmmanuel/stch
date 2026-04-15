import React from 'react';

interface DentalIconProps {
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

const DentalIcon: React.FC<DentalIconProps> = ({ 
  size,
  width = size ?? 20, 
  height = size ?? 20, 
  className = '' 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 0C2 0 0 3 0 6C0 8.11 1 11 2 12C3 13 4 20 6 20C10.54 20 8 13 10 13C12 13 9.46 20 14 20C16 20 17 13 18 12C19 11 20 8.11 20 6C20 3 18 0 15 0C12 0 12 1 10 1C8 1 8 0 5 0Z"
        fill="#14B8A6"
      />
    </svg>
  );
};

export default DentalIcon;