import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { Check, ChevronRight, Download } from "lucide-react";

export default function TunnelStructures() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Tunnel Structure"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Tunnel Structures</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Innovative and sustainable structural solutions for complex tunnel infrastructure projects
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
              <span className="text-primary font-medium">Tunnel Structures</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Expert Tunnel Structure Solutions</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Medallion Engineers specializes in the design, analysis, and construction of robust 
                  tunnel structures that meet the highest standards of safety, durability, and sustainability. 
                  Our team of experienced engineers brings extensive expertise in addressing the unique 
                  challenges of tunnel infrastructure.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  From conceptualization to construction supervision, we provide end-to-end solutions 
                  for various tunnel structure types, including transportation tunnels, water conveyance 
                  tunnels, and utility tunnels.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                  <a 
                    href="/contact" 
                    className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
                  >
                    Contact Our Experts
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-md font-medium transition duration-300 flex items-center justify-center"
                  >
                    Download Brochure
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
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Tunnel Construction Project"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Our Approach */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Our Approach"
              subtitle="Comprehensive tunnel structure solutions from concept to completion"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Design Excellence",
                  description: "Innovative structural designs that optimize safety, efficiency, and cost-effectiveness while meeting all technical requirements.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Advanced Analysis",
                  description: "Sophisticated computational modeling and analysis to predict structural behavior under various loading conditions and scenarios.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Construction Support",
                  description: "Expert guidance and supervision during construction to ensure structural integrity and compliance with design specifications.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                }
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-neutral-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Services Offered */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Our Tunnel Structure Services</h2>
                <p className="text-neutral-700 leading-relaxed mb-8">
                  We offer a comprehensive range of services to address every aspect of tunnel structure 
                  design and construction, ensuring optimal performance, safety, and longevity of the 
                  infrastructure.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Structural Design & Engineering",
                      items: [
                        "Tunnel lining design (segmental, cast-in-place, shotcrete)",
                        "Cross passage design",
                        "Portal structures",
                        "Shafts and adits",
                        "Temporary support systems"
                      ]
                    },
                    {
                      title: "Geotechnical Assessment",
                      items: [
                        "Site investigation interpretation",
                        "Ground behavior prediction",
                        "Rock mass classification",
                        "Soil-structure interaction analysis",
                        "Settlement prediction and mitigation"
                      ]
                    },
                    {
                      title: "Structural Analysis",
                      items: [
                        "2D and 3D finite element analysis",
                        "Seismic analysis and design",
                        "Ground-structure interaction modeling",
                        "Stress and deformation analysis",
                        "Stability assessment"
                      ]
                    }
                  ].map((service) => (
                    <div key={service.title} className="bg-neutral-50 p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                      <ul className="space-y-2">
                        {service.items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="text-primary hover:text-secondary font-medium inline-flex items-center transition-colors duration-300"
                  >
                    Request a consultation
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </a>
                </div>
              </motion.div>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                    alt="Tunnel Structure Design"
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-primary/5 p-6 rounded-lg border border-primary/20"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">Why Choose Medallion Engineers?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Over 12 years of specialized experience in tunnel structures</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Team of engineers with advanced qualifications and expertise</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">State-of-the-art analysis and design methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Proven track record in complex and challenging projects</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">Commitment to innovation and sustainable solutions</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Featured Case Study */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6">Featured Case Study</h2>
                  <h3 className="text-xl font-bold text-blue-300 mb-4">Delhi Metro Extension Tunnel</h3>
                  <p className="text-neutral-300 leading-relaxed mb-6">
                    Medallion Engineers provided comprehensive structural design and construction supervision 
                    for a 5.8 km tunnel extension of the Delhi Metro system, navigating through challenging 
                    urban environments and varying geological conditions.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="bg-blue-900/50 p-2 rounded-md mr-4">
                        <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-100">Challenge</h4>
                        <p className="text-sm text-neutral-400">
                          Complex geology with varying rock and soil conditions, high water table, and proximity to existing structures.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-900/50 p-2 rounded-md mr-4">
                        <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-100">Solution</h4>
                        <p className="text-sm text-neutral-400">
                          Developed a hybrid segmental lining design with variable thickness and specialized reinforcement patterns based on geological zones.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-900/50 p-2 rounded-md mr-4">
                        <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-100">Results</h4>
                        <p className="text-sm text-neutral-400">
                          Successfully completed the tunnel with optimal structural performance, minimal surface settlement, and excellent waterproofing.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="/featured-projects" 
                    className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors duration-300"
                  >
                    Read the full case study
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </a>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <img
                  src="https://images.unsplash.com/photo-1586102080596-f52dfdcc5583?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Delhi Metro Tunnel Project"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Related Services */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Related Services"
              subtitle="Explore our complementary engineering expertise"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Tunnel Systems",
                  description: "Comprehensive design and integration of essential tunnel systems including ventilation, lighting, fire safety, and traffic management.",
                  image: "https://images.unsplash.com/photo-1597743847632-3308cb831a25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/tunnel-systems"
                },
                {
                  title: "Structural Engineering",
                  description: "Expert structural design and analysis services for a wide range of infrastructure projects beyond tunnels.",
                  image: "https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/structural-engineering"
                },
                {
                  title: "Project Management",
                  description: "Comprehensive project management services ensuring seamless coordination, efficient resource utilization, and timely delivery.",
                  image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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