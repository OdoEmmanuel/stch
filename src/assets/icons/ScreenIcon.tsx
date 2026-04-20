import React from 'react';

interface ScreenIconProps {
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

const ScreenIcon: React.FC<ScreenIconProps> = ({ 
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
        d="M14 21H16M14 21C13.6022 21 13.2206 20.842 12.9393 20.5607C12.658 20.2794 12.5 19.8978 12.5 19.5V17H12M14 21H10M12 17H11.5V19.5C11.5 19.8978 11.342 20.2794 11.0607 20.5607C10.7794 20.842 10.3978 21 10 21M12 17V21M10 21H8M16 3H8C5.172 3 3.757 3 2.879 3.879C2 4.757 2 6.172 2 9V11C2 13.828 2 15.243 2.879 16.121C3.757 17 5.172 17 8 17H16C18.828 17 20.243 17 21.121 16.121C22 15.243 22 13.828 22 11V9C22 6.172 22 4.757 21.121 3.879C20.243 3 18.828 3 16 3Z"
        stroke="#0D9488"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.5C12.5304 10.5 13.0391 10.2893 13.4142 9.91421C13.7893 9.53914 14 9.03043 14 8.5C14 7.96957 13.7893 7.46086 13.4142 7.08579C13.0391 6.71071 12.5304 6.5 12 6.5C11.4696 6.5 10.9609 6.71071 10.5858 7.08579C10.2107 7.46086 10 7.96957 10 8.5C10 9.03043 10.2107 9.53914 10.5858 9.91421C10.9609 10.2893 11.4696 10.5 12 10.5ZM12 10.5C11.2044 10.5 10.4413 10.8161 9.87868 11.3787C9.31607 11.9413 9 12.7044 9 13.5M12 10.5C12.7956 10.5 13.5587 10.8161 14.1213 11.3787C14.6839 11.9413 15 12.7044 15 13.5"
        stroke="#0D9488"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ScreenIcon;