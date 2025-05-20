import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll";
import { Project } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { ref, isVisible } = useAnimationOnScroll();

  return (
    <div
      ref={ref}
      className={cn(
        "project-card relative rounded-lg overflow-hidden shadow-lg animate-on-scroll",
        isVisible && "visible"
      )}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <div className="project-overlay absolute inset-0 bg-primary bg-opacity-0 flex flex-col justify-end p-6">
        <div className="bg-black bg-opacity-70 p-4 rounded-lg">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-neutral-200 mb-3">{project.description}</p>
          <a
            href="#"
            className="text-white hover:text-blue-200 font-medium inline-flex items-center"
          >
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
