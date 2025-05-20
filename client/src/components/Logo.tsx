import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  color?: "white" | "primary";
  size?: "sm" | "md" | "lg";
  showFullName?: boolean;
}

export function Logo({ className, color = "primary", size = "md", showFullName = true }: LogoProps) {
  // Size mapping
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  // Color mapping
  const logoColor = color === "primary" ? "#1D5EA8" : "#FFFFFF";
  
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          className={cn(sizeClasses[size])}
          style={{ filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.2))" }}
        >
          {/* Gear circle */}
          <path 
            d="M400,100 C320,100 250,170 250,250 C250,330 320,400 400,400 C480,400 550,330 550,250 C550,170 480,100 400,100 Z M400,118 C470,118 530,178 530,250 C530,322 470,382 400,382 C330,382 270,322 270,250 C270,178 330,118 400,118 Z" 
            fill={logoColor} 
          />
          
          {/* Gear teeth */}
          <path 
            d="M400,80 L400,40 L380,40 L380,80 Z M480,95 L500,60 L480,50 L460,85 Z M540,150 L580,130 L570,110 L530,130 Z M550,250 L590,250 L590,230 L550,230 Z M540,350 L580,370 L570,390 L530,370 Z M480,405 L500,440 L480,450 L460,415 Z M400,420 L400,460 L380,460 L380,420 Z M320,405 L300,440 L280,430 L300,395 Z M260,350 L220,370 L210,350 L250,330 Z M250,250 L210,250 L210,230 L250,230 Z M260,150 L220,130 L210,150 L250,170 Z M320,95 L300,60 L280,70 L300,105 Z" 
            fill={logoColor} 
          />
          
          {/* Buildings and crane */}
          <g transform="translate(255, 150)">
            {/* Buildings */}
            <rect x="40" y="100" width="60" height="180" fill={logoColor} />
            <rect x="120" y="60" width="50" height="220" fill={logoColor} />
            <rect x="190" y="100" width="60" height="180" fill={logoColor} />
            
            {/* Middle building with circle window */}
            <circle cx="145" cy="140" r="15" fill="white" />
            
            {/* Construction crane */}
            <rect x="0" y="60" width="15" height="220" fill={logoColor} />
            <polygon points="0,60 70,60 70,75 0,75" fill={logoColor} />
            <polygon points="70,60 170,25 170,40 70,75" fill={logoColor} />
          </g>
          
          {/* Foundation arc */}
          <path d="M290,400 Q400,440 510,400" stroke="white" strokeWidth="20" fill="none" />
          
          {/* MEDALLION Text */}
          <text
            x="400"
            y="520"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="80"
            fontWeight="bold"
            fill={logoColor}
          >
            MEDALLION
          </text>
        </svg>
      </div>
      
      {showFullName && (
        <div className={cn(
          "font-bold tracking-wide ml-3",
          size === "sm" ? "text-[10px]" : 
          size === "md" ? "text-xs" : 
          "text-sm",
          color === "primary" ? "text-primary" : "text-white"
        )}>
          MEDALLION ENGINEERS PVT. LTD.
        </div>
      )}
    </div>
  );
}
