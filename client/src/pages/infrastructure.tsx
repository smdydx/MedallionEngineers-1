import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { Check, ChevronRight, Download } from "lucide-react";

export default function Infrastructure() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1609359705264-41f631a42ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Infrastructure Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/70"></div>
          </div>
          
          <Container className="relative z-10 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Infrastructure Development</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Comprehensive infrastructure solutions for sustainable urban and regional development
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
              <span className="text-primary font-medium">Infrastructure Development</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Infrastructure Solutions</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Medallion Engineers delivers integrated infrastructure development services that connect 
                  communities, enhance urban environments, and support sustainable growth across India. 
                  Our multidisciplinary approach addresses complex infrastructure challenges with innovative, 
                  efficient, and context-sensitive solutions.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  From transportation networks and urban utilities to water management systems and 
                  public facilities, we provide end-to-end services that transform concepts into 
                  reality while prioritizing environmental sustainability, social equity, and economic viability.
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
                    Download Capabilities
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
                  src="https://images.unsplash.com/photo-1566184399667-d20fadb22e38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Infrastructure Development Project"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Key Infrastructure Sectors */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Key Infrastructure Sectors"
              subtitle="Specialized expertise across diverse infrastructure domains"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Transportation",
                  description: "Development of roads, highways, bridges, railways, metros, and airports to enhance connectivity and mobility.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  )
                },
                {
                  title: "Urban Development",
                  description: "Integrated planning and development of urban infrastructure to create sustainable, livable cities.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: "Water Infrastructure",
                  description: "Design and development of water supply, treatment, distribution, and stormwater management systems.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Energy Systems",
                  description: "Development of power generation, transmission, and distribution infrastructure including renewable energy systems.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Environmental Infrastructure",
                  description: "Development of waste management, pollution control, and environmental restoration systems.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Public Facilities",
                  description: "Development of public buildings, community centers, healthcare facilities, and educational institutions.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                }
              ].map((sector, i) => (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{sector.title}</h3>
                  <p className="text-neutral-700 text-sm">{sector.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary hover:text-secondary mt-4 text-sm font-medium transition-colors duration-300"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Our Services */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-primary mb-6">Our Services</h2>
                  <p className="text-neutral-700 leading-relaxed mb-8">
                    Medallion Engineers provides end-to-end infrastructure development services 
                    that span the entire project lifecycle. Our integrated approach ensures 
                    consistency, efficiency, and excellence at every stage.
                  </p>
                </motion.div>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Planning & Feasibility",
                      items: [
                        "Infrastructure needs assessment",
                        "Feasibility studies and options analysis",
                        "Environmental impact assessment",
                        "Socio-economic benefit analysis",
                        "Financial viability assessment"
                      ]
                    },
                    {
                      title: "Design & Engineering",
                      items: [
                        "Conceptual and preliminary design",
                        "Detailed engineering design",
                        "Technical specifications development",
                        "Regulatory compliance and permitting",
                        "Cost estimation and budgeting"
                      ]
                    }
                  ].map((service) => (
                    <motion.div 
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-neutral-50 p-6 rounded-lg"
                    >
                      <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                      <ul className="space-y-2">
                        {service.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  {[
                    {
                      title: "Project Implementation",
                      items: [
                        "Procurement strategy and support",
                        "Contractor evaluation and selection",
                        "Construction supervision and management",
                        "Quality assurance and control",
                        "Progress monitoring and reporting"
                      ]
                    },
                    {
                      title: "Asset Management",
                      items: [
                        "Operations and maintenance planning",
                        "Performance monitoring systems",
                        "Life-cycle cost optimization",
                        "Asset condition assessment",
                        "Rehabilitation and upgrade planning"
                      ]
                    }
                  ].map((service, index) => (
                    <motion.div 
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
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
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                      alt="Infrastructure Implementation"
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold mb-4">Sustainable Infrastructure</h2>
              <p className="text-neutral-300">
                We are committed to developing infrastructure that meets present needs without 
                compromising the ability of future generations to meet their own needs.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Environmental Responsibility",
                  description: "Minimizing environmental impacts through resource efficiency, pollution prevention, and ecosystem protection.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Social Equity",
                  description: "Ensuring infrastructure benefits all segments of society through inclusive planning and equitable access.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Economic Viability",
                  description: "Developing infrastructure that delivers long-term economic benefits while optimizing lifecycle costs.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Climate Resilience",
                  description: "Designing infrastructure to withstand and adapt to climate change impacts and extreme weather events.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )
                },
                {
                  title: "Resource Efficiency",
                  description: "Optimizing the use of energy, water, and materials throughout the infrastructure lifecycle.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  )
                },
                {
                  title: "Community Engagement",
                  description: "Involving local communities in infrastructure planning and development to ensure relevance and acceptance.",
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
        
        {/* Featured Project */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-md text-primary font-medium text-sm mb-4">
                  Featured Project
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Bangalore Smart City Infrastructure</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Medallion Engineers played a key role in Bangalore's smart city initiative, 
                  delivering integrated urban infrastructure solutions that enhanced mobility, 
                  sustainability, and quality of life for residents.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h4 className="font-bold text-primary mb-2">Project Highlights</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Intelligent traffic management system reducing congestion by 30%</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Water supply optimization with 25% reduction in losses</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Integrated public transportation systems with digital connectivity</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Renewable energy integration for public infrastructure</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <a 
                  href="/infrastructure-projects" 
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
                >
                  View more projects
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Bangalore Smart City Project"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
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