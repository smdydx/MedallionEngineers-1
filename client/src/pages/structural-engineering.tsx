import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { Check, ChevronRight, Download } from "lucide-react";

export default function StructuralEngineering() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Structural Engineering"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
          </div>
          
          <Container className="relative z-10 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Structural Engineering</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Innovative structural solutions for complex infrastructure and building projects
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
              <a href="/services" className="text-neutral-600 hover:text-primary transition-colors">Services</a>
              <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
              <span className="text-primary font-medium">Structural Engineering</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Excellence in Structural Engineering</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, our structural engineering team delivers innovative, 
                  cost-effective solutions for complex infrastructure and building projects across India. 
                  We combine technical expertise with creative problem-solving to tackle the most 
                  challenging structural engineering requirements.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  From concept design to detailed analysis and construction support, our 
                  multidisciplinary approach ensures that structures are not only safe and 
                  durable but also efficient, sustainable, and aesthetically pleasing.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                  <a 
                    href="/contact" 
                    className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
                  >
                    Discuss Your Project
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
                  >
                    Download Portfolio
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Structural Engineering Project"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Our Expertise */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Our Expertise"
              subtitle="Comprehensive structural engineering capabilities across diverse sectors"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Transportation Infrastructure",
                  description: "Specialized design and analysis for bridges, tunnels, metro stations, and other transportation structures.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  )
                },
                {
                  title: "Commercial Buildings",
                  description: "Innovative structural solutions for office buildings, retail centers, and mixed-use developments.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: "Industrial Structures",
                  description: "Specialized design for industrial facilities, power plants, and manufacturing complexes.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                },
                {
                  title: "Water Infrastructure",
                  description: "Design and analysis for dams, water treatment plants, reservoirs, and other hydraulic structures.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Special Structures",
                  description: "Engineering of unique and complex structures like stadiums, tall towers, and long-span roofs.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                },
                {
                  title: "Renovation & Retrofitting",
                  description: "Expert assessment and strengthening of existing structures to extend service life or meet new requirements.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  )
                }
              ].map((expertise, i) => (
                <motion.div
                  key={expertise.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {expertise.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{expertise.title}</h3>
                  <p className="text-neutral-700 text-sm">{expertise.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Detailed Services */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Our Services"
              subtitle="Comprehensive structural engineering solutions tailored to your needs"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                {[
                  {
                    title: "Concept & Schematic Design",
                    items: [
                      "Conceptual structural system development",
                      "Feasibility studies and options analysis",
                      "Preliminary structural layouts and sizing",
                      "Coordination with architectural and other disciplines",
                      "Preliminary cost estimation"
                    ]
                  },
                  {
                    title: "Detailed Design & Documentation",
                    items: [
                      "Comprehensive structural analysis and design calculations",
                      "Production of detailed structural drawings",
                      "Development of technical specifications",
                      "Preparation of tender documentation",
                      "Construction phasing and sequencing plans"
                    ]
                  }
                ].map((service, index) => (
                  <motion.div 
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-neutral-50 p-6 rounded-lg"
                  >
                    <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Analysis & Simulation",
                    items: [
                      "Advanced 3D finite element analysis",
                      "Dynamic and seismic analysis",
                      "Structural optimization studies",
                      "Material behavior and fatigue analysis",
                      "Buckling and stability assessments"
                    ]
                  },
                  {
                    title: "Construction Support",
                    items: [
                      "Technical clarification and RFI responses",
                      "Shop drawing and submittal reviews",
                      "Site inspections and quality assurance",
                      "Construction sequence verification",
                      "As-built documentation review"
                    ]
                  }
                ].map((service, index) => (
                  <motion.div 
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (0.1 * index) }}
                    viewport={{ once: true }}
                    className="bg-neutral-50 p-6 rounded-lg"
                  >
                    <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-primary/5 p-6 rounded-lg border border-primary/20"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">Specialized Services</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">Seismic retrofitting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">Vibration analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">Blast design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">Wind engineering</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">Structural health monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">Forensic engineering</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Featured Project */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-blue-900/50 px-4 py-2 rounded-md text-blue-200 font-medium text-sm mb-4">
                  Featured Project
                </div>
                <h2 className="text-3xl font-bold mb-6">Chennai Mixed-Use Tower</h2>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Our structural engineering team designed this 42-story mixed-use tower in Chennai, 
                  implementing an innovative diagrid structural system that provided both 
                  architectural expression and structural efficiency.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-neutral-800 p-4 rounded-md">
                    <h4 className="font-bold text-blue-200 mb-2">Engineering Highlights</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300">Diagrid structural system reducing steel usage by 20%</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300">Advanced 3D modeling and wind tunnel testing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300">Performance-based seismic design approach</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300">Innovative foundation system on challenging soil</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <a 
                  href="/featured-projects" 
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors duration-300 font-medium"
                >
                  View more projects
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Chennai Mixed-Use Tower"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Our Approach */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Our Approach"
              subtitle="Delivering excellence through a systematic and collaborative process"
              align="center"
            />
            
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Understand",
                  description: "We begin by thoroughly understanding your project needs, constraints, and aspirations.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                  number: "01"
                },
                {
                  title: "Innovate",
                  description: "We explore innovative solutions and apply our expertise to develop optimal structural concepts.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  number: "02"
                },
                {
                  title: "Analyze",
                  description: "We conduct rigorous analysis using state-of-the-art tools to validate and refine our designs.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  number: "03"
                },
                {
                  title: "Deliver",
                  description: "We provide clear, detailed documentation and support throughout construction to ensure successful implementation.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                  number: "04"
                }
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 p-6 rounded-lg relative group hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="absolute -top-3 -right-3 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-neutral-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Related Services */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Related Services"
              subtitle="Explore our complementary engineering expertise"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Tunnel Structures",
                  description: "Expert design and engineering of tunnel structure components including linings, portals, and cross passages.",
                  image: "https://images.unsplash.com/photo-1545193544-312983719627?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/tunnel-structures"
                },
                {
                  title: "Tunnel Systems",
                  description: "Comprehensive design and integration of essential tunnel systems including ventilation, safety, and traffic management.",
                  image: "https://images.unsplash.com/photo-1523323471545-ffa4d44687b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/tunnel-systems"
                },
                {
                  title: "Project Management",
                  description: "End-to-end project management services ensuring efficient coordination, quality control, and timely delivery.",
                  image: "https://images.unsplash.com/photo-1507208773393-40d9fc670c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/project-management"
                }
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-neutral-600 mb-6 text-sm">{service.description}</p>
                    <a
                      href={service.link}
                      className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium"
                    >
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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