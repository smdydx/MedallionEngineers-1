import React from "react";

export function MedallionLogo({ className, color = "#1D5EA8", width = 300, height = 300 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500" 
      width={width} 
      height={height}
      className={className}
    >
      {/* Gear/Cog */}
      <g fill={color}>
        <path d="M250,50 C239.5,50 229.4,51 219.4,52.8 L213.4,28.7 L186.6,28.7 L180.6,52.8 C170.6,51 160.5,50 150,50 C139.5,50 129.4,51 119.4,52.8 L113.4,28.7 L86.6,28.7 L80.6,52.8 C60.9,57.6 42.8,65.8 26.8,76.8 L10.9,58.6 L-9.1,75.9 L6.8,94.1 C-4.2,110.2 -12.4,128.2 -17.2,147.9 L-41.3,153.9 L-41.3,180.6 L-17.2,186.6 C-12.4,206.4 -4.2,224.4 6.8,240.4 L-9.1,259 L10.9,276.3 L26.8,258.1 C42.8,269.1 60.9,277.4 80.6,282.1 L86.6,306.3 L113.4,306.3 L119.4,282.1 C129.4,284 139.5,285 150,285 C160.5,285 170.6,284 180.6,282.1 L186.6,306.3 L213.4,306.3 L219.4,282.1 C239.1,277.4 257.2,269.1 273.2,258.1 L289.1,276.3 L309.1,259 L293.2,240.4 C304.2,224.4 312.4,206.4 317.2,186.6 L341.3,180.6 L341.3,153.9 L317.2,147.9 C312.4,128.2 304.2,110.2 293.2,94.1 L309.1,75.9 L289.1,58.6 L273.2,76.8 C257.2,65.8 239.1,57.6 219.4,52.8 L213.4,28.7 L186.6,28.7 L180.6,52.8 C170.6,51 160.5,50 150,50 Z" transform="translate(150, 85)"/>
      </g>

      {/* Buildings and construction elements */}
      <g transform="translate(170, 140)">
        {/* Buildings */}
        <rect x="0" y="100" width="50" height="100" fill={color} />
        <rect x="60" y="70" width="30" height="130" fill={color} />
        <rect x="100" y="110" width="50" height="90" fill={color} />
        
        {/* Circle in middle building */}
        <circle cx="75" cy="110" r="10" fill="white" />
        
        {/* Construction crane */}
        <rect x="20" y="60" width="10" height="140" fill={color} />
        <polygon points="20,60 60,60 60,70 20,70" fill={color} />
        <polygon points="60,60 100,30 100,40 60,70" fill={color} />
      </g>
      
      {/* Foundation arch */}
      <path d="M170,260 Q250,290 330,260" stroke={color} strokeWidth="10" fill="none" />
      
      {/* "MEDALLION" text */}
      <g transform="translate(130, 400)">
        <text fontSize="40" fontWeight="bold" fill={color}>MEDALLION</text>
      </g>
    </svg>
  );
}