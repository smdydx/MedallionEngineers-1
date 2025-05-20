import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: "Delhi Metro Extension Tunnel",
      category: "Transportation",
      location: "Delhi, India",
      year: "2022",
      description: "A 5.8 km tunnel extension for the Delhi Metro system featuring complex geological conditions and proximity to existing structures. The project included two underground stations and innovative soil stabilization techniques.",
      challenges: [
        "Complex geology with varying rock and soil conditions",
        "High water table requiring specialized waterproofing",
        "Proximity to existing structures and infrastructure",
        "Dense urban environment with limited access",
        "Strict settlement control requirements"
      ],
      solutions: [
        "Hybrid segmental lining design with variable thickness",
        "Advanced ground improvement techniques",
        "Real-time settlement monitoring system",
        "Carefully planned construction sequencing",
        "Specialized TBM operation protocol"
      ],
      results: [
        "Successful tunnel completion with minimal surface disruption",
        "Surface settlements kept below 10mm threshold",
        "Excellent waterproofing performance",
        "Completed 3 months ahead of schedule",
        "Zero major safety incidents"
      ],
      image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      services: ["Tunnel Design", "Structural Engineering", "Construction Management"]
    },
    {
      id: 2,
      title: "Himalayan Mountain Tunnel",
      category: "Infrastructure",
      location: "Himachal Pradesh, India",
      year: "2023",
      description: "A 4.2 km tunnel through challenging Himalayan terrain, providing essential transportation connectivity to remote regions. The project implemented innovative rock stabilization techniques and specialized ventilation systems.",
      challenges: [
        "Extreme geological conditions with hard rock and fault zones",
        "High altitude environment with logistical challenges",
        "High overburden pressure up to 1000m",
        "Extreme temperature variations",
        "Limited site access and difficult mobilization"
      ],
      solutions: [
        "Advanced drill-and-blast methodology with controlled blasting",
        "Systematic rock mass classification and support design",
        "Custom-designed ventilation system for high altitude",
        "Specialized grouting program for water control",
        "Comprehensive risk management approach"
      ],
      results: [
        "Successful tunnel breakthrough despite challenging conditions",
        "Excellent rock stability with minimal overbreak",
        "Effective water management with minimal inflow",
        "Enhanced connectivity for local communities",
        "Project completed within budget despite challenges"
      ],
      image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      services: ["Tunnel Design", "Geotechnical Engineering", "Project Management"]
    },
    {
      id: 3,
      title: "Mumbai Coastal Road Tunnel",
      category: "Transportation",
      location: "Mumbai, India",
      year: "2023",
      description: "A 3.4 km underwater tunnel for Mumbai's Coastal Road Project, featuring state-of-the-art systems for ventilation, safety, and traffic management. The project required complex coordination with multiple stakeholders and careful environmental management.",
      challenges: [
        "Underwater construction with complex geology",
        "High hydrostatic pressures and seawater intrusion",
        "Strict environmental compliance requirements",
        "Integration with existing road networks",
        "Multiple stakeholder coordination"
      ],
      solutions: [
        "Specialized TBM with high pressure capability",
        "Comprehensive ground treatment program",
        "Advanced environmental monitoring systems",
        "Integrated traffic management design",
        "Stakeholder management program"
      ],
      results: [
        "Successful completion of India's longest underwater road tunnel",
        "Significant traffic congestion reduction",
        "Minimal environmental impact during construction",
        "Enhanced coastal protection features",
        "Recognition with national infrastructure award"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      services: ["Tunnel Systems", "Structural Engineering", "Environmental Management"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1583508805133-8fd01e208e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Featured Projects"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70"></div>
          </div>
          
          <Container className="relative z-10 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Featured Projects</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Showcasing our landmark achievements in engineering excellence across India
              </p>
            </motion.div>
          </Container>
        </div>
        
        {/* Breadcrumbs */}
        <div className="bg-neutral-100 py-3 border-b border-neutral-200">
          <Container>
            <div className="flex items-center text-sm">
              <a href="/" className="text-neutral-600 hover:text-primary transition-colors">Home</a>
              <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
              <a href="/projects" className="text-neutral-600 hover:text-primary transition-colors">Projects</a>
              <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
              <span className="text-primary font-medium">Featured Projects</span>
            </div>
          </Container>
        </div>
        
        {/* Project Showcase */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Our Landmark Projects"
              subtitle="Demonstrating engineering excellence and innovation across diverse challenges"
              align="center"
            />
            
            <div className="mt-12 space-y-16">
              {featuredProjects.map((project, index) => (
                <div key={project.id} id={`project-${project.id}`} className="scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`grid md:grid-cols-2 gap-12 items-start ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="bg-primary/10 px-3 py-1 inline-block rounded-full text-primary text-sm font-medium mb-4">
                        {project.category} • {project.year}
                      </div>
                      <h2 className="text-3xl font-bold text-primary mb-4">{project.title}</h2>
                      <p className="text-neutral-700 mb-6">
                        <span className="font-semibold">Location:</span> {project.location}
                      </p>
                      <p className="text-neutral-700 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-neutral-50 p-4 rounded-lg">
                          <h4 className="font-bold text-primary mb-3 text-sm">Services Provided</h4>
                          <ul className="space-y-1">
                            {project.services.map((service, i) => (
                              <li key={i} className="text-neutral-700 text-sm flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <a 
                        href={`#project-details-${project.id}`} 
                        className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
                      >
                        View project details
                        <ChevronRight className="ml-1 h-5 w-5" />
                      </a>
                    </div>
                    
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="relative rounded-lg overflow-hidden shadow-lg group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 w-full">
                            <p className="text-white font-medium">{project.title}</p>
                            <p className="text-blue-100 text-sm">{project.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Project Details Section */}
                  <div id={`project-details-${project.id}`} className="mt-16 scroll-mt-24">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-neutral-50 p-6 rounded-lg h-full">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-primary mb-4">Challenges</h3>
                          <ul className="space-y-3">
                            {project.challenges.map((item, i) => (
                              <li key={i} className="text-neutral-700 text-sm flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-neutral-50 p-6 rounded-lg h-full">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-primary mb-4">Our Solutions</h3>
                          <ul className="space-y-3">
                            {project.solutions.map((item, i) => (
                              <li key={i} className="text-neutral-700 text-sm flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-neutral-50 p-6 rounded-lg h-full">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <h3 className="text-lg font-bold text-primary mb-4">Results & Impact</h3>
                          <ul className="space-y-3">
                            {project.results.map((item, i) => (
                              <li key={i} className="text-neutral-700 text-sm flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {index < featuredProjects.length - 1 && (
                    <div className="border-b border-neutral-200 my-16"></div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* More Projects */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Explore More Projects</h2>
              <p className="text-neutral-700">
                Discover our extensive portfolio of successful projects across various sectors and regions.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Transportation Projects",
                  description: "Bridges, highways, railways, and metro systems that connect communities and improve mobility.",
                  image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/transportation-projects"
                },
                {
                  title: "Urban Development",
                  description: "Sustainable urban infrastructure that enhances livability and supports economic growth.",
                  image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/urban-development"
                },
                {
                  title: "Infrastructure Projects",
                  description: "Essential infrastructure including water systems, energy facilities, and public buildings.",
                  image: "https://images.unsplash.com/photo-1566464636043-ffc7298ea64b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/infrastructure-projects"
                }
              ].map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg shadow-md"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-blue-100 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                    <a
                      href={category.link}
                      className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-300 text-sm font-medium"
                    >
                      Explore projects
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}