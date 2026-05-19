import React from 'react';

export const CommInIcon = ({ className = "w-14 h-14 md:w-20 md:h-20" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-40" />
    <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
    <circle cx="50" cy="50" r="6" fill="currentColor" className="animate-pulse" />
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
  </svg>
);

export const GuidancePathIcon = ({ className = "w-14 h-14 md:w-20 md:h-20" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50 C 35 20, 45 80, 60 50 C 70 30, 75 40, 80 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-80" strokeDasharray="120" strokeDashoffset="0">
      <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="4s" repeatCount="indefinite" />
    </path>
    <circle cx="80" cy="50" r="5" fill="currentColor" className="animate-pulse" />
    <circle cx="20" cy="50" r="3" fill="currentColor" className="opacity-40" />
  </svg>
);

export const LifeGuideIcon = ({ className = "w-14 h-14 md:w-20 md:h-20" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-70 origin-center" style={{ transform: 'rotate(45deg)' }}>
      <animate attributeName="stroke-dasharray" values="132 57;187 2;132 57" dur="4s" repeatCount="indefinite" />
    </circle>
    <path d="M50 25 L50 75 M25 50 L75 50 M32 32 L68 68 M32 68 L68 32" stroke="currentColor" strokeWidth="1" className="opacity-40" />
    <circle cx="50" cy="50" r="12" fill="currentColor" className="opacity-20" />
    <circle cx="50" cy="50" r="4" fill="currentColor">
      <animate attributeName="r" values="4;5.5;4" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);
