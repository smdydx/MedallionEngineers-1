import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll";
import { Service } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { ref, isVisible } = useAnimationOnScroll();

  return (
    <div
      ref={ref}
      className={cn(
        "service-card bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll",
        isVisible && "visible"
      )}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900 mb-3">
          {service.title}
        </h3>
        <p className="text-neutral-700 mb-4">
          {service.description}
        </p>
        <a
          href="#"
          className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors duration-300"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
