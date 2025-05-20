import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function InfrastructureProjects() {
  const infrastructureProjects = [
    {
      id: 1,
      title: "Bangalore Water Supply Project",
      category: "Water Infrastructure",
      location: "Bangalore, Karnataka",
      year: "2022",
      description: "A comprehensive water supply system upgrade for Bangalore, including new treatment facilities, distribution networks, and smart metering systems to address water scarcity and improve service efficiency.",
      highlights: [
        "400 MLD water treatment plant with advanced filtration",
        "200 km of upgraded distribution pipelines",
        "Smart water metering system covering 250,000 connections",
        "SCADA-based monitoring and control system",
        "Non-revenue water reduction from 45% to 20%"
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 2,
      title: "Delhi Solar Power Integration",
      category: "Energy Infrastructure",
      location: "Delhi, India",
      year: "2023",
      description: "A large-scale renewable energy project integrating solar power generation into Delhi's urban infrastructure, including rooftop installations on public buildings and solar canopies over parking areas and roadways.",
      highlights: [
        "25 MW total installed capacity across 150 public buildings",
        "10 MW of solar canopies over parking areas",
        "Grid integration with battery storage systems",
        "Smart energy management system",
        "Annual CO2 reduction of 40,000 tons"
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 3,
      title: "Mumbai Advanced Wastewater Treatment",
      category: "Environmental Infrastructure",
      location: "Mumbai, Maharashtra",
      year: "2022",
      description: "A state-of-the-art wastewater treatment facility for Mumbai's western suburbs, incorporating advanced treatment technologies and water reclamation systems for non-potable reuse.",
      highlights: [
        "300 MLD treatment capacity with tertiary treatment",
        "Water reclamation for industrial and landscape irrigation",
        "Nutrient recovery and biosolids management",
        "Energy-efficient design with biogas utilization",
        "Treated water meeting stringent environmental standards"
      ],
      image: "https://images.unsplash.com/photo-1617760583354-0dbdce71de92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 4,
      title: "Chennai Integrated Solid Waste Management",
      category: "Environmental Infrastructure",
      location: "Chennai, Tamil Nadu",
      year: "2023",
      description: "A comprehensive solid waste management system for Chennai incorporating waste segregation, collection, treatment, and resource recovery to improve sanitation and environmental conditions.",
      highlights: [
        "Mechanized waste segregation facilities for 4,000 tons daily",
        "Waste-to-energy plant generating 15 MW power",
        "Composting facilities for organic waste",
        "Material recovery facilities for recyclables",
        "GPS-tracked collection fleet with route optimization"
      ],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 5,
      title: "Hyderabad Flood Management System",
      category: "Water Infrastructure",
      location: "Hyderabad, Telangana",
      year: "2022",
      description: "A comprehensive flood management system for Hyderabad incorporating stormwater infrastructure, flood monitoring, and early warning systems to enhance urban resilience to extreme weather events.",
      highlights: [
        "100 km of upgraded stormwater drainage networks",
        "5 flood retention basins with 20 million m³ capacity",
        "Real-time rainfall and flood monitoring systems",
        "Early warning system with mobile alerts",
        "Integration with urban development planning"
      ],
      image: "https://images.unsplash.com/photo-1546471180-335a013cb87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 6,
      title: "Kolkata Healthcare Facilities Network",
      category: "Social Infrastructure",
      location: "Kolkata, West Bengal",
      year: "2023",
      description: "A network of modern healthcare facilities across Kolkata, including primary health centers, diagnostic facilities, and specialized treatment centers to improve healthcare accessibility and quality.",
      highlights: [
        "10 new primary healthcare centers in underserved areas",
        "Central diagnostic facility with telemedicine capabilities",
        "Emergency response system with ambulance network",
        "Digital health records system",
        "Sustainable design with energy-efficient features"
      ],
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
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
              src="https://images.unsplash.com/photo-1566464636043-ffc7298ea64b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Infrastructure Projects"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Infrastructure Projects</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Developing essential infrastructure systems that power communities and protect environments
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
              <span className="text-primary font-medium">Infrastructure Projects</span>
            </div>
          </Container>
        </div>
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Essential Infrastructure Solutions</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, we develop critical infrastructure systems that form the 
                  backbone of communities and support economic development across India. Our expertise 
                  spans water and wastewater systems, energy infrastructure, environmental facilities, 
                  and social infrastructure projects.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our integrated approach combines technical excellence with innovative solutions to 
                  address complex challenges while promoting sustainability, resilience, and social 
                  equity. We work closely with government agencies, utilities, and private developers 
                  to deliver infrastructure that meets current needs while adapting to future demands.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">30+</div>
                    <div className="text-neutral-700 text-sm">Water Projects</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">25+</div>
                    <div className="text-neutral-700 text-sm">Energy Projects</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">20+</div>
                    <div className="text-neutral-700 text-sm">Waste Management</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">15+</div>
                    <div className="text-neutral-700 text-sm">Social Infrastructure</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1543674892-7d64d45b2140?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Infrastructure Project"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Infrastructure Categories */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Infrastructure Expertise"
              subtitle="Our capabilities across essential infrastructure systems"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Water Infrastructure",
                  description: "Water supply, treatment, distribution, and stormwater management systems that ensure water security and quality for communities.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Environmental Infrastructure",
                  description: "Wastewater treatment, solid waste management, and pollution control systems that protect public health and natural environments.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Energy Infrastructure",
                  description: "Power generation, transmission, and distribution systems with a focus on renewable energy and smart grid technologies.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Social Infrastructure",
                  description: "Healthcare facilities, educational institutions, and community buildings that support social well-being and development.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{category.title}</h3>
                  <p className="text-neutral-700 text-sm">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Project Showcase */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Featured Infrastructure Projects"
              subtitle="Developing essential systems that power communities and protect environments"
              align="center"
            />
            
            <div className="mt-12 space-y-16">
              {infrastructureProjects.map((project, index) => (
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
                      
                      <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                        <h4 className="font-bold text-primary mb-4">Project Highlights</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                              <span className="text-neutral-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
                  
                  {index < infrastructureProjects.length - 1 && (
                    <div className="border-b border-neutral-200 mt-16"></div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Sustainable Infrastructure */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Sustainable Infrastructure Approach</h2>
              <p className="text-neutral-300">
                Our commitment to developing infrastructure that balances environmental stewardship, 
                social responsibility, and economic viability for long-term sustainability.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Resource Efficiency",
                  description: "Designing infrastructure that minimizes consumption of energy, water, and materials throughout its lifecycle while maintaining optimal performance.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Circular Economy",
                  description: "Implementing systems that recover and reuse resources, minimize waste generation, and create closed-loop processes in infrastructure operations.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )
                },
                {
                  title: "Climate Resilience",
                  description: "Building infrastructure that can withstand and adapt to changing climate conditions and extreme weather events to ensure long-term reliability.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )
                },
                {
                  title: "Low-Carbon Solutions",
                  description: "Prioritizing infrastructure designs and technologies that minimize greenhouse gas emissions during construction and operation phases.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Ecosystem Protection",
                  description: "Designing infrastructure that minimizes impacts on natural ecosystems and incorporates nature-based solutions where possible.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Community Benefit",
                  description: "Ensuring infrastructure projects provide equitable access to services and create economic and social benefits for local communities.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((principle, i) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{principle.title}</h3>
                  <p className="text-neutral-400 text-sm">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Our Approach */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-md text-primary font-medium text-sm mb-6">
                  Our Methodology
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Integrated Infrastructure Approach</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Needs Assessment</h3>
                      <p className="text-neutral-700 text-sm">
                        Comprehensive analysis of infrastructure requirements, capacity gaps, 
                        and future demands to establish a solid foundation for project development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Systems Planning</h3>
                      <p className="text-neutral-700 text-sm">
                        Strategic planning that considers the integration of infrastructure systems, 
                        optimal resource utilization, and long-term sustainability objectives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Technical Design</h3>
                      <p className="text-neutral-700 text-sm">
                        Detailed engineering designs that incorporate innovative solutions, 
                        appropriate technologies, and compliance with relevant standards and regulations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Implementation Support</h3>
                      <p className="text-neutral-700 text-sm">
                        Comprehensive project management, construction supervision, and technical 
                        guidance to ensure successful implementation and quality assurance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">05</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Operational Excellence</h3>
                      <p className="text-neutral-700 text-sm">
                        Development of operation and maintenance strategies, monitoring protocols, 
                        and capacity building to ensure long-term performance and sustainability.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Infrastructure Approach"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* More Project Categories */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Explore More Projects"
              subtitle="Discover our work across different sectors"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
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
                  title: "Featured Projects",
                  description: "Our most innovative and impactful projects showcasing engineering excellence across diverse challenges.",
                  image: "https://images.unsplash.com/photo-1583508805133-8fd01e208e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/featured-projects"
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