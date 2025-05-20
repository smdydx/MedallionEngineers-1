import { Container } from "./ui/container";
import { SectionTitle } from "./ui/section-title";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-primary bg-opacity-5">
      <Container>
        <SectionTitle
          title="Our Projects"
          subtitle="Showcasing our engineering excellence and innovation"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-secondary text-white"
          >
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
