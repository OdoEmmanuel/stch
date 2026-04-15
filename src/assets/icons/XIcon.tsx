import React from 'react';

interface XIconProps {
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

const XIcon: React.FC<XIconProps> = ({ 
  size,
  width = size ?? 24, 
  height = size ?? 24, 
  className = '' 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5012 4.49951C22.5012 2.84201 21.1587 1.49951 19.5012 1.49951H4.50122C2.84372 1.49951 1.50122 2.84201 1.50122 4.49951V19.4995C1.50122 21.157 2.84372 22.4995 4.50122 22.4995H19.5012C21.1587 22.4995 22.5012 21.157 22.5012 19.4995V4.49951Z"
        fill="#1F1F2A"
      />
      <path
        d="M5.65241 18.1036H7.15241L11.1574 13.5511L14.6412 18.0961H18.7137L13.3699 11.0311L17.8924 5.89355H16.3924L12.6762 10.1161L9.48866 5.8973H5.28491L10.4562 12.6436L5.64866 18.1073L5.65241 18.1036ZM7.56866 7.01855H8.93366L16.4562 16.9711H15.1999L7.57241 7.01855H7.56866Z"
        fill="white"
      />
    </svg>
  );
};

export default XIcon;