import React from 'react';
import { Button } from '../components/shared/Button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8">
        <h1 className="text-[150px] md:text-[200px] font-black text-gray-50 leading-none">404</h1>
        <p className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-[#3A5A26]">
          Page Not Found
        </p>
      </div>
      <p className="text-gray-500 text-lg md:text-xl max-w-md mb-10">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button to="/" variant="primary" icon={<Home size={20} />}>
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;