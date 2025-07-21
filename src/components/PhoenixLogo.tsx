import React from 'react';

interface PhoenixLogoProps {
  className?: string;
}

const PhoenixLogo: React.FC<PhoenixLogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="phoenixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e50914" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>
      </defs>
      
      {/* Phoenix body */}
      <path
        d="M50 10 C60 20, 70 30, 65 45 C60 60, 55 70, 50 80 C45 70, 40 60, 35 45 C30 30, 40 20, 50 10 Z"
        fill="url(#phoenixGradient)"
        className="drop-shadow-sm"
      />
      
      {/* Phoenix wings */}
      <path
        d="M35 35 C20 25, 15 40, 25 50 C35 45, 40 40, 35 35 Z"
        fill="url(#phoenixGradient)"
        opacity="0.8"
      />
      <path
        d="M65 35 C80 25, 85 40, 75 50 C65 45, 60 40, 65 35 Z"
        fill="url(#phoenixGradient)"
        opacity="0.8"
      />
      
      {/* Phoenix tail feathers */}
      <path
        d="M45 75 C40 85, 35 90, 30 85 C35 80, 40 75, 45 75 Z"
        fill="url(#phoenixGradient)"
        opacity="0.6"
      />
      <path
        d="M55 75 C60 85, 65 90, 70 85 C65 80, 60 75, 55 75 Z"
        fill="url(#phoenixGradient)"
        opacity="0.6"
      />
      
      {/* Phoenix head crest */}
      <path
        d="M45 15 C48 5, 52 5, 55 15 C52 12, 48 12, 45 15 Z"
        fill="url(#phoenixGradient)"
        opacity="0.9"
      />
      
      {/* Eye */}
      <circle cx="48" cy="25" r="2" fill="white" />
      <circle cx="48" cy="25" r="1" fill="#1f2937" />
    </svg>
  );
};

export default PhoenixLogo;