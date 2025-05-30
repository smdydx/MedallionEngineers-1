import { cn } from "@/lib/utils";
import medallionLogo from "@/assets/medallion-logo.png";

interface LogoProps {
  className?: string;
  color?: "white" | "primary";
  size?: "sm" | "md" | "lg";
  showFullName?: boolean;
}

export function Logo({ className, color = "primary", size = "md", showFullName = false }: LogoProps) {
  // Size mapping
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex-shrink-0">
        <img
          src={medallionLogo}
          alt="Medallion Engineers"
          className={cn(sizeClasses[size], "object-contain")}
          style={{ filter: color === "white" ? "brightness(0) invert(1)" : "none" }}
        />
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