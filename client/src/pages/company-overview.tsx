import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { Check, ChevronRight } from "lucide-react";

export default function CompanyOverview() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Medallion Engineers"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Company Overview</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Medallion Group India - Engineering Excellence Since 2010
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
              <a href="/about" className="text-neutral-600 hover:text-primary transition-colors">About Us</a>
              <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
              <span className="text-primary font-medium">Company Overview</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Medallion Engineers Private Limited</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Founded in 2010, Medallion Engineers Private Limited has established itself as a leading 
                  engineering consultancy firm in India, specializing in infrastructure development, tunnel 
                  engineering, and comprehensive project management solutions.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  With our headquarters in Delhi and presence across major cities in India, we have successfully 
                  delivered over 200 projects across various sectors including transportation, urban development, 
                  water infrastructure, and industrial facilities.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our team of over 50 highly qualified engineers and specialists brings together expertise in 
                  structural engineering, geotechnical engineering, project management, and systems integration 
                  to provide holistic solutions to complex engineering challenges.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="bg-neutral-50 p-4 rounded-md text-center flex-1 min-w-[120px]">
                    <div className="text-primary text-3xl font-bold mb-2">12+</div>
                    <div className="text-neutral-700 text-sm">Years of Experience</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center flex-1 min-w-[120px]">
                    <div className="text-primary text-3xl font-bold mb-2">200+</div>
                    <div className="text-neutral-700 text-sm">Projects Completed</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center flex-1 min-w-[120px]">
                    <div className="text-primary text-3xl font-bold mb-2">50+</div>
                    <div className="text-neutral-700 text-sm">Expert Engineers</div>
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
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Medallion Engineers Office"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Leadership */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Leadership Team"
              subtitle="The visionaries driving Medallion Engineers forward"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  name: "Afroz Alam",
                  position: "Director",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
                  description: "Afroz brings over 20 years of experience in civil engineering and infrastructure development. Under his leadership, Medallion Engineers has grown into one of India's most respected engineering consultancies.",
                  contact: {
                    email: "afroz.alam@medallionindia.com",
                    phone: "+91 9934320255"
                  }
                },
                {
                  name: "Rajiv Sharma",
                  position: "Chief Technical Officer",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
                  description: "With a Ph.D. in Structural Engineering and specialization in tunnel engineering, Rajiv leads our technical team, ensuring innovation and excellence in all our engineering solutions.",
                  contact: {
                    email: "rajiv.sharma@medallionindia.com"
                  }
                },
                {
                  name: "Priya Verma",
                  position: "Operations Director",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
                  description: "Priya oversees project delivery and operations, ensuring that our projects are executed efficiently, on schedule, and to the highest quality standards. Her background in project management has been instrumental in our success.",
                  contact: {
                    email: "priya.verma@medallionindia.com"
                  }
                }
              ].map((leader, i) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
                    <p className="text-secondary font-medium text-sm mb-4">{leader.position}</p>
                    <p className="text-neutral-700 text-sm mb-4">{leader.description}</p>
                    <div className="space-y-1">
                      {leader.contact.email && (
                        <a href={`mailto:${leader.contact.email}`} className="text-primary hover:text-secondary transition-colors text-sm flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {leader.contact.email}
                        </a>
                      )}
                      {leader.contact.phone && (
                        <a href={`tel:${leader.contact.phone}`} className="text-primary hover:text-secondary transition-colors text-sm flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {leader.contact.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a 
                href="/leadership" 
                className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
              >
                View our full leadership team
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </motion.div>
          </Container>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Engineering Team Working"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Medallion Engineers</h2>
                <p className="text-neutral-700 leading-relaxed mb-8">
                  What sets us apart is our commitment to excellence, innovation, and client satisfaction. 
                  We bring together world-class expertise, local knowledge, and a passion for engineering 
                  to deliver exceptional results on every project.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Technical Excellence",
                      description: "Our team comprises industry-leading experts with specialized knowledge in tunnel engineering, structural design, and infrastructure development."
                    },
                    {
                      title: "Innovative Solutions",
                      description: "We employ cutting-edge technologies and methodologies to develop innovative solutions for complex engineering challenges."
                    },
                    {
                      title: "Proven Track Record",
                      description: "With over 200 successful projects across India, we have demonstrated our capability to deliver high-quality results consistently."
                    },
                    {
                      title: "Client-Centric Approach",
                      description: "We prioritize understanding client needs and providing tailored solutions that align with their objectives and constraints."
                    },
                    {
                      title: "Sustainability Focus",
                      description: "We integrate sustainability principles into all our projects, ensuring environmentally responsible and future-proof solutions."
                    }
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-1">{point.title}</h3>
                        <p className="text-neutral-700 text-sm">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Our Approach */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Approach to Engineering</h2>
              <p className="text-neutral-300">
                We follow a comprehensive and collaborative approach to ensure the successful delivery 
                of every project, from initial concept to final implementation.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Understand",
                  description: "We begin by thoroughly understanding client requirements, project context, and objectives through comprehensive consultations and assessments.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                  number: "01"
                },
                {
                  title: "Analyze",
                  description: "Our team conducts in-depth analysis of technical, environmental, and economic factors to identify optimal solutions and potential challenges.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  number: "02"
                },
                {
                  title: "Design",
                  description: "We develop innovative and tailored engineering designs that balance technical excellence, sustainability, cost-effectiveness, and aesthetics.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  number: "03"
                },
                {
                  title: "Deliver",
                  description: "We ensure successful implementation through careful project management, quality control, and ongoing support throughout the project lifecycle.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  className="bg-neutral-800 p-6 rounded-lg relative"
                >
                  <div className="absolute -top-3 -right-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Certifications */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Certifications & Accreditations"
              subtitle="Meeting the highest standards of quality and excellence"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "ISO 9001:2015",
                  description: "Quality Management System certification, demonstrating our commitment to consistent quality and client satisfaction.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "ISO 14001:2015",
                  description: "Environmental Management System certification, reflecting our dedication to environmental responsibility in all operations.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "OHSAS 18001",
                  description: "Occupational Health and Safety Management certification, ensuring the highest standards for workplace safety.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                }
              ].map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 p-6 rounded-lg border border-neutral-200"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">{cert.title}</h3>
                  <p className="text-neutral-700 text-center">{cert.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-8 rounded-lg mt-12 text-center"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Industry Memberships</h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-neutral-700">Indian Society of Structural Engineers</div>
                <div className="text-neutral-700">Institution of Engineers (India)</div>
                <div className="text-neutral-700">International Tunnelling Association</div>
                <div className="text-neutral-700">Project Management Institute</div>
                <div className="text-neutral-700">Indian Geotechnical Society</div>
              </div>
            </motion.div>
          </Container>
        </section>
        
        {/* Learn More About Us */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Learn More About Us"
              subtitle="Explore our company values, mission, and journey"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Our Mission & Vision",
                  description: "Discover our guiding principles and aspirations that drive our work and shape our future direction.",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/mission-vision"
                },
                {
                  title: "Core Values",
                  description: "Learn about the fundamental values that form the foundation of our company culture and operations.",
                  image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/core-values"
                },
                {
                  title: "Our History",
                  description: "Explore our journey from our founding to becoming a leading engineering firm in India.",
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/history"
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-neutral-600 mb-6 text-sm">{item.description}</p>
                    <a
                      href={item.link}
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