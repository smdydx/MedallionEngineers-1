import React from "react";

interface CompanyLogoProps {
  className?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ 
  className,
  color = "#1D5EA8",
  width = "100%",
  height = "100%"
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={width}
      height={height}
      className={className}
    >
      {/* Gear outer circle */}
      <path
        d="M200,80 C150,80 110,120 110,170 C110,220 150,260 200,260 C250,260 290,220 290,170 C290,120 250,80 200,80 Z"
        fill="none"
        stroke={color}
        strokeWidth="20"
      />
      
      {/* Gear teeth */}
      <path
        d="M200,60 L200,30 M230,65 L245,40 M255,85 L280,70 M270,115 L300,115 M270,145 L295,165 M255,170 L275,195 M230,190 L245,215 M200,195 L200,225 M170,190 L155,215 M145,170 L125,195 M130,145 L105,165 M130,115 L100,115 M145,85 L120,70 M170,65 L155,40"
        stroke={color}
        strokeWidth="15"
      />
      
      {/* Buildings */}
      <g transform="translate(140, 120)">
        {/* Main skyscrapers */}
        <rect x="20" y="60" width="30" height="100" fill={color} />
        <rect x="60" y="50" width="30" height="110" fill={color} />
        <rect x="100" y="70" width="30" height="90" fill={color} />
        
        {/* Circle in middle building */}
        <circle cx="75" cy="80" r="10" fill="white" />
        
        {/* Construction crane */}
        <rect x="10" y="40" width="10" height="120" fill={color} />
        <polygon points="10,40 60,40 60,50 10,50" fill={color} />
        <polygon points="60,40 100,15 100,25 60,50" fill={color} />
      </g>
      
      {/* Foundation arch */}
      <path d="M140,220 Q200,250 260,220" stroke={color} strokeWidth="10" fill="none" />
      
      {/* MEDALLION text at bottom */}
      <text
        x="200"
        y="350"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill={color}
      >
        MEDALLION
      </text>
    </svg>
  );
};