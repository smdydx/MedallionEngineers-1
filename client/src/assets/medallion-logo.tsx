import React from "react";

interface MedallionLogoProps {
  color?: string;
  className?: string;
}

export const MedallionLogo: React.FC<MedallionLogoProps> = ({ 
  color = "#1D5EA8", 
  className 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500" 
      className={className}
    >
      {/* Gear/Cog outer circle */}
      <path 
        d="M250,80 C191.5,80 144,127.5 144,186 C144,244.5 191.5,292 250,292 C308.5,292 356,244.5 356,186 C356,127.5 308.5,80 250,80 Z M250,50 C325.5,50 386,110.5 386,186 C386,261.5 325.5,322 250,322 C174.5,322 114,261.5 114,186 C114,110.5 174.5,50 250,50 Z" 
        fill={color}
      />
      
      {/* Gear teeth */}
      <path 
        d="M250,40 L265,10 L235,10 L250,40 Z M310,60 L340,40 L310,20 L310,60 Z M350,110 L390,105 L380,75 L350,110 Z M350,260 L390,265 L380,295 L350,260 Z M310,310 L340,330 L310,350 L310,310 Z M250,335 L265,365 L235,365 L250,335 Z M190,310 L160,330 L190,350 L190,310 Z M150,260 L110,265 L120,295 L150,260 Z M150,110 L110,105 L120,75 L150,110 Z M190,60 L160,40 L190,20 L190,60 Z" 
        fill={color}
      />
      
      {/* Buildings */}
      <g transform="translate(170, 140)">
        <rect x="10" y="40" width="40" height="100" fill={color} />
        <rect x="60" y="30" width="40" height="110" fill={color} />
        <rect x="110" y="50" width="40" height="90" fill={color} />
        
        {/* Circle in middle building */}
        <circle cx="80" cy="70" r="10" fill="white" />
        
        {/* Construction crane */}
        <rect x="20" y="20" width="8" height="120" fill={color} />
        <polygon points="20,20 60,20 60,28 20,28" fill={color} />
        <polygon points="60,20 100,0 100,8 60,28" fill={color} />
      </g>
      
      {/* Foundation arch */}
      <path d="M180,260 Q250,290 320,260" stroke={color} strokeWidth="10" fill="none" />
      
      {/* Company name text */}
      <text 
        x="250" 
        y="420" 
        textAnchor="middle" 
        fontFamily="Arial" 
        fontSize="40" 
        fontWeight="bold" 
        fill={color}
      >
        MEDALLION
      </text>
    </svg>
  );
};