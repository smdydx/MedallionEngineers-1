import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll";
import { TeamMember as TeamMemberType } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Linkedin, Mail, Phone } from "lucide-react";

interface TeamMemberProps {
  member: TeamMemberType;
}

export function TeamMember({ member }: TeamMemberProps) {
  const { ref, isVisible } = useAnimationOnScroll();

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll",
        isVisible && "visible"
      )}
    >
      <div className="h-72 overflow-hidden bg-neutral-200">
        <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.position}</p>
        <p className="text-neutral-700 mb-4">
          {member.description}
        </p>
        <div className="flex justify-center space-x-4">
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              className="text-neutral-600 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.links.email && (
            <a
              href={`mailto:${member.links.email}`}
              className="text-neutral-600 hover:text-primary transition-colors duration-300"
              aria-label="Send email"
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
          {member.links.phone && (
            <a
              href={`tel:${member.links.phone}`}
              className="text-neutral-600 hover:text-primary transition-colors duration-300"
              aria-label="Call phone number"
            >
              <Phone className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
