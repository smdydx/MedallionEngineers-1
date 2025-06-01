import { cn } from "@/lib/utils";
import medallionLogo from "@/assets/logo.jpg";

interface LogoProps {
  className?: string;
  color?: "white" | "primary";
  size?: "sm" | "md" | "lg" | "xl";
  showFullName?: boolean;
}

export function Logo({
  className,
  color = "primary",
  size = "md",
  showFullName = false,
}: LogoProps) {
  // Size mapping
  const sizeClasses: Record<string, string> = {
    sm: "h-8",
    md: "h-[8rem]",
    lg: "h-16",
    xl: "h-24",
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex-shrink-0">
        <img
  src={medallionLogo}
  alt="Medallion Engineers"
  className={cn(sizeClasses[size] || sizeClasses["md"], "object-contain")}
  style={{
    height: size === "md" ? "8rem" : undefined,
    filter: color === "white" ? "brightness(0) invert(1)" : "none"
  }}
/>
      </div>

      {showFullName && (
        <div
          className={cn(
            "font-bold tracking-wide ml-3",
            size === "sm"
              ? "text-[10px]"
              : size === "md"
              ? "text-xs"
              : size === "lg"
              ? "text-sm"
              : "text-base",
            color === "primary" ? "text-primary" : "text-white"
          )}
        >
          MEDALLION ENGINEERS PVT. LTD.
        </div>
      )}
    </div>
  );
}