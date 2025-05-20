import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-secondary py-24 md:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Projects</h1>
              <p className="text-xl max-w-3xl mx-auto text-blue-100">
                Delivering excellence in engineering across India
              </p>
            </motion.div>
          </Container>
        </div>
        
        {/* Featured Projects */}
        <section id="featured" className="py-20 bg-white">
          <Container>
            <SectionTitle
              title="Featured Projects"
              subtitle="Our landmark achievements in engineering excellence"
              align="center"
            />
            
            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-neutral-50 rounded-lg overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                    alt="Delhi Metro Extension Project"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Completed 2022
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">Delhi Metro Extension Project</h3>
                  <p className="text-neutral-700 mb-4">
                    Medallion Engineers provided structural engineering services for the 5.8 km extension 
                    of the Delhi Metro system, including two underground stations and complex soil stabilization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Transportation</span>
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Urban</span>
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Tunnel Engineering</span>
                  </div>
                  <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                    View Project Details
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-neutral-50 rounded-lg overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                    alt="Himalayan Mountain Tunnel"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Completed 2023
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">Himalayan Mountain Tunnel</h3>
                  <p className="text-neutral-700 mb-4">
                    Our team designed and managed the construction of a 4.2 km tunnel through challenging
                    Himalayan terrain, implementing innovative rock stabilization techniques and ventilation systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Infrastructure</span>
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Tunnel Engineering</span>
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Mountain Region</span>
                  </div>
                  <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                    View Project Details
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Transportation Projects */}
        <section id="transportation" className="py-20 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Transportation Projects"
              subtitle="Connecting India through innovative infrastructure"
              align="left"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {projects.filter(project => project.id < 4).map((project, index) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Container>
        </section>
        
        {/* Urban Development Projects */}
        <section id="urban" className="py-20 bg-white">
          <Container>
            <SectionTitle
              title="Urban Development"
              subtitle="Building sustainable cities for tomorrow"
              align="left"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {projects.filter(project => project.id >= 4 && project.id < 7).map((project, index) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Container>
        </section>
        
        {/* Water Infrastructure */}
        <section id="water" className="py-20 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Water Infrastructure"
              subtitle="Providing sustainable water solutions"
              align="left"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {projects.filter(project => project.id >= 7).map((project, index) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </Container>
        </section>
        
        {/* Project Statistics */}
        <section className="py-20 bg-primary text-white">
          <Container>
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-blue-100">Completed Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Indian States</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Infrastructure Awards</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">12+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}