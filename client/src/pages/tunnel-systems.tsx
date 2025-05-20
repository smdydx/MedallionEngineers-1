import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { Check, ChevronRight, Download } from "lucide-react";

export default function TunnelSystems() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1523323471545-ffa4d44687b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Tunnel Systems"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Tunnel Systems</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Comprehensive solutions for ventilation, safety, lighting, and operational systems
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
              <span className="text-primary font-medium">Tunnel Systems</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Integrated Tunnel Systems Solutions</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Medallion Engineers delivers comprehensive and integrated solutions for tunnel systems 
                  that ensure safety, efficiency, and optimal performance. Our expert team specializes in 
                  designing advanced systems tailored to each tunnel's specific requirements and operational needs.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  From ventilation and fire safety to traffic management and communication networks, 
                  we provide end-to-end solutions that adhere to international standards and best practices 
                  while incorporating innovative technologies to enhance tunnel operations.
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
                  src="https://images.unsplash.com/photo-1544987195-ceefa271f5be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Tunnel Systems Control Room"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Core Systems */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Core Tunnel Systems"
              subtitle="Essential systems ensuring safety, efficiency, and comfort"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Ventilation Systems",
                  description: "Advanced ventilation solutions to maintain air quality, manage smoke in fire situations, and control temperature inside tunnels.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Fire & Safety Systems",
                  description: "Comprehensive fire detection, suppression, and emergency response systems to protect tunnel users and infrastructure.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  )
                },
                {
                  title: "Lighting Systems",
                  description: "Energy-efficient lighting solutions that enhance visibility, safety, and user comfort throughout the tunnel length.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Traffic Management",
                  description: "Intelligent traffic monitoring and control systems to optimize flow, enhance safety, and respond to incidents promptly.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  )
                }
              ].map((system, i) => (
                <motion.div
                  key={system.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {system.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{system.title}</h3>
                  <p className="text-neutral-700 text-sm">{system.description}</p>
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
        
        {/* Detailed Services */}
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
                  <h2 className="text-3xl font-bold text-primary mb-6">Our Comprehensive Services</h2>
                  <p className="text-neutral-700 leading-relaxed mb-8">
                    We provide a full spectrum of tunnel systems services, from concept development to implementation 
                    and ongoing maintenance. Our holistic approach ensures that all systems work together 
                    seamlessly to create safe, efficient, and sustainable tunnel operations.
                  </p>
                </motion.div>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "System Design & Engineering",
                      items: [
                        "Ventilation system design and analysis",
                        "Fire life safety system design",
                        "Lighting design and calculations",
                        "Traffic management system design",
                        "Power supply and distribution systems"
                      ]
                    },
                    {
                      title: "System Integration",
                      items: [
                        "SCADA and control system integration",
                        "Communication networks",
                        "Emergency response systems",
                        "Building management system integration",
                        "IoT and smart infrastructure solutions"
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
                <div className="sticky top-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                      alt="Tunnel Control Systems"
                      className="rounded-lg shadow-md w-full h-auto mb-8"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                      <h3 className="text-xl font-bold text-primary mb-4">System Testing & Commissioning</h3>
                      <p className="text-neutral-700 mb-6">
                        Our team provides comprehensive testing and commissioning services to ensure all 
                        tunnel systems perform as designed and meet required standards:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">Factory acceptance testing</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">Site acceptance testing</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">Integrated system testing</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">Performance verification</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">Operational readiness testing</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <a 
                          href="/contact" 
                          className="text-primary hover:text-secondary font-medium inline-flex items-center transition-colors duration-300"
                        >
                          Request our testing services
                          <ChevronRight className="ml-1 h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Additional Systems */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Additional Specialized Systems</h2>
              <p className="text-neutral-300">
                Beyond core systems, we provide expertise in specialized tunnel technologies 
                that enhance safety, efficiency, and user experience.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Environmental Monitoring",
                  description: "Advanced sensors and systems to monitor air quality, visibility, and environmental conditions inside tunnels.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )
                },
                {
                  title: "Communication Systems",
                  description: "Reliable communication networks for emergency services, maintenance personnel, and public announcements.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )
                },
                {
                  title: "Power Distribution",
                  description: "Reliable power supply and distribution systems with redundancy for critical tunnel operations.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "CCTV & Surveillance",
                  description: "Advanced video monitoring systems for traffic surveillance, security, and incident detection.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Automated Incident Detection",
                  description: "AI-powered systems that automatically detect traffic incidents, fire, smoke, and other hazards.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )
                },
                {
                  title: "Access Control Systems",
                  description: "Secure access management for restricted areas, emergency exits, and maintenance spaces.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  )
                }
              ].map((system, i) => (
                <motion.div
                  key={system.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {system.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{system.title}</h3>
                  <p className="text-neutral-400 text-sm">{system.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Case Study */}
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
                  Case Study
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Mumbai Coastal Road Tunnel</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Medallion Engineers delivered comprehensive tunnel systems design and integration for the 
                  3.4 km Mumbai Coastal Road Tunnel, implementing state-of-the-art ventilation, safety, 
                  and traffic management systems.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h4 className="font-bold text-primary mb-2">Project Scope</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Design and implementation of longitudinal ventilation system</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Fire detection and suppression systems</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Integration of traffic management and CCTV systems</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Design of central control and SCADA system</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <a 
                  href="/featured-projects" 
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
                >
                  View more case studies
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
                  src="https://images.unsplash.com/photo-1544204170-33fea2c47383?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Mumbai Coastal Road Tunnel"
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
                  title: "Infrastructure Development",
                  description: "Comprehensive infrastructure solutions from planning and design to construction management and commissioning.",
                  image: "https://images.unsplash.com/photo-1586102080596-f52dfdcc5583?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/infrastructure"
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