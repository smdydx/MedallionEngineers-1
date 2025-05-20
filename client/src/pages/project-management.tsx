import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { Check, ChevronRight, Download } from "lucide-react";

export default function ProjectManagement() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Project Management"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Project Management</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Strategic, efficient, and comprehensive management of complex engineering projects
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
              <span className="text-primary font-medium">Project Management</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Expert Project Management Solutions</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Medallion Engineers delivers comprehensive project management services that ensure 
                  successful planning, execution, and delivery of complex infrastructure and engineering projects. 
                  Our experienced team of project managers combines technical expertise with strategic 
                  management skills to navigate challenges and deliver exceptional results.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  We tailor our approach to each project's unique requirements, implementing 
                  proven methodologies and best practices while maintaining flexibility to adapt 
                  to changing conditions and emerging needs throughout the project lifecycle.
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
                    Download Methodology
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
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Project Management Team"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Project Management Phases */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Our Project Management Approach"
              subtitle="Comprehensive methodology across all project phases"
              align="center"
            />
            
            <div className="mt-12">
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>
                
                {[
                  {
                    title: "Initiation & Planning",
                    description: "Defining project scope, objectives, and requirements while developing comprehensive execution strategies.",
                    items: [
                      "Project charter development",
                      "Stakeholder identification and analysis",
                      "Scope definition and work breakdown structure",
                      "Schedule development and critical path analysis",
                      "Budget estimation and resource planning"
                    ],
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    )
                  },
                  {
                    title: "Execution & Control",
                    description: "Implementing the project plan while monitoring progress and making adjustments to ensure objectives are met.",
                    items: [
                      "Team coordination and task management",
                      "Progress tracking and performance reporting",
                      "Quality assurance and control",
                      "Risk monitoring and mitigation",
                      "Change management and issue resolution"
                    ],
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Completion & Handover",
                    description: "Finalizing all project activities, documenting outcomes, and transferring deliverables to stakeholders.",
                    items: [
                      "Final deliverable verification",
                      "Documentation compilation and handover",
                      "Client acceptance and signoff",
                      "Lessons learned documentation",
                      "Post-implementation review and support"
                    ],
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )
                  }
                ].map((phase, index) => (
                  <div key={phase.title} className="relative z-10 mb-16 last:mb-0">
                    <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Timeline Circle */}
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                          {phase.icon}
                        </div>
                      </div>
                      
                      {/* Content Box */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                        <motion.div
                          initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className={`bg-white p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:rounded-r-none' : 'md:rounded-l-none'}`}
                        >
                          <div className="flex md:hidden items-center mb-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                              {phase.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary">{phase.title}</h3>
                          </div>
                          
                          <h3 className="hidden md:block text-xl font-bold text-primary mb-3">{phase.title}</h3>
                          <p className="text-neutral-700 mb-4">{phase.description}</p>
                          
                          <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                            {phase.items.map((item, i) => (
                              <li key={i} className={`flex items-start ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                <Check className={`h-5 w-5 text-primary ${index % 2 === 0 ? 'md:order-2 md:ml-2 mr-2 md:mr-0' : 'mr-2'} flex-shrink-0 mt-0.5`} />
                                <span className="text-neutral-700 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                      
                      {/* Empty Space for Alternate Layout */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        
        {/* Key Services */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Our Project Management Services</h2>
                <p className="text-neutral-700 leading-relaxed mb-8">
                  We offer a comprehensive range of project management services tailored to the 
                  specific needs of infrastructure and engineering projects. Our experienced team 
                  ensures successful delivery across all phases of the project lifecycle.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Pre-Construction Services",
                      items: [
                        "Feasibility studies and option analysis",
                        "Project definition and scope development",
                        "Budget estimation and financial planning",
                        "Scheduling and resource allocation",
                        "Risk assessment and mitigation planning"
                      ]
                    },
                    {
                      title: "Construction Phase Management",
                      items: [
                        "Contractor coordination and management",
                        "Schedule monitoring and control",
                        "Cost tracking and management",
                        "Quality assurance and control",
                        "Health, safety, and environmental management"
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
              </motion.div>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-bold text-primary mb-3">Project Controls & Monitoring</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Earned value management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Performance measurement and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Change management and claim resolution</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Risk monitoring and mitigation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Document control and information management</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-bold text-primary mb-3">Specialized Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">PMO (Project Management Office) setup and operation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Program management for multi-project initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Project recovery and turnaround</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Contract administration and procurement management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Stakeholder engagement and communication management</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                    alt="Project Management Team Meeting"
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Our Methodology */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Project Management Methodology</h2>
              <p className="text-neutral-300">
                We combine industry standards with our proven approach, tailored to the unique 
                requirements of each project to ensure consistent success.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                {
                  title: "Clear Governance",
                  description: "Established project governance structure with defined roles, responsibilities, and decision-making processes.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Adaptive Planning",
                  description: "Flexible planning approach that balances detailed front-end planning with agility to respond to changing conditions.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )
                },
                {
                  title: "Integrated Control",
                  description: "Comprehensive monitoring of schedule, cost, scope, quality, and risk through integrated project control systems.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Stakeholder Focus",
                  description: "Proactive stakeholder engagement and communication to ensure alignment and manage expectations throughout the project.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white text-primary hover:bg-blue-100 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Schedule a Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Hyderabad Metro Rail Project</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Medallion Engineers provided comprehensive project management services for key 
                  sections of the Hyderabad Metro Rail Project, one of India's largest infrastructure 
                  projects, ensuring on-time and within-budget delivery.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h4 className="font-bold text-primary mb-2">Project Management Highlights</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Coordination of multiple construction packages and contractors</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Implementation of integrated schedule management system</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Effective stakeholder management in dense urban environment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Successful management of complex utility relocations</span>
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
                  src="https://images.unsplash.com/photo-1493464184762-290e9c236d79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Hyderabad Metro Rail Project"
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
                  title: "Structural Engineering",
                  description: "Innovative structural solutions for complex infrastructure and building projects across diverse sectors.",
                  image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/structural-engineering"
                },
                {
                  title: "Infrastructure Development",
                  description: "Comprehensive infrastructure solutions for sustainable urban and regional development projects.",
                  image: "https://images.unsplash.com/photo-1566184399667-d20fadb22e38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/infrastructure"
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