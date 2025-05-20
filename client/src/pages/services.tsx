import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-primary py-24 md:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Services</h1>
              <p className="text-xl max-w-3xl mx-auto text-blue-100">
                Comprehensive engineering solutions to meet your infrastructure needs
              </p>
            </motion.div>
          </Container>
        </div>
        
        {/* Tunnel Construction */}
        <section id="tunnel" className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary font-heading mb-6">Tunnel Construction & Systems</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Medallion Engineers specializes in the design, construction, and management of complex tunnel 
                  infrastructure projects across India. Our team brings extensive experience in handling diverse 
                  geological conditions and implementing innovative tunnel construction techniques.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Tunnel design & engineering</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Geotechnical investigations & analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Tunnel ventilation & safety systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">TBM (Tunnel Boring Machine) operations</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  Request Consultation
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1545193544-312983719627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Tunnel Construction"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-44">
                  <div className="text-primary font-bold text-3xl">15+</div>
                  <div className="text-neutral-700 text-sm">Tunnel Projects Completed</div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Structural Engineering */}
        <section id="structural" className="py-20 bg-neutral-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1520432348-4883e1ee0e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Structural Engineering"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-44">
                  <div className="text-primary font-bold text-3xl">100+</div>
                  <div className="text-neutral-700 text-sm">Structural Projects</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl font-bold text-primary font-heading mb-6">Structural Engineering</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our structural engineering team delivers innovative and cost-effective solutions for 
                  complex infrastructure challenges. We utilize advanced computational tools and 
                  methodologies to ensure structural integrity and compliance with safety standards.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Bridge design & analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">High-rise building structural systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Seismic assessment & retrofitting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Special structures & foundations</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  Request Consultation
                </a>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Infrastructure Development */}
        <section id="infrastructure" className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary font-heading mb-6">Infrastructure Development</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Medallion Engineers provides comprehensive infrastructure development services, from 
                  concept to completion. We specialize in transportation, water management, and urban 
                  infrastructure projects that contribute to sustainable development.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Highway & transportation systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Urban water supply networks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Stormwater management systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Land development & master planning</span>
                  </li>
                </ul>
                <a 
                  href="/contact" 
                  className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  Request Consultation
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Infrastructure Development"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-44">
                  <div className="text-primary font-bold text-3xl">50+</div>
                  <div className="text-neutral-700 text-sm">Urban Infrastructure Projects</div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Engineering Consultation */}
        <section id="consultation" className="py-20 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Engineering Consultation & Project Management"
              subtitle="Expert guidance throughout the entire project lifecycle"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Feasibility Studies</h3>
                <p className="text-neutral-700 text-sm">
                  Comprehensive analysis of project viability, including technical, economic, and environmental assessments.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Project Planning</h3>
                <p className="text-neutral-700 text-sm">
                  Detailed project planning services, including scope definition, scheduling, and resource allocation.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Design Reviews</h3>
                <p className="text-neutral-700 text-sm">
                  Expert review of engineering designs to ensure compliance with standards and optimization of solutions.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Performance Monitoring</h3>
                <p className="text-neutral-700 text-sm">
                  Ongoing monitoring and evaluation of project performance against established metrics and benchmarks.
                </p>
              </motion.div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md mt-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <h3 className="text-2xl font-bold text-primary mb-4">Need Expert Engineering Consultation?</h3>
                  <p className="text-neutral-700 mb-6">
                    Our team of experienced engineers provides tailored consultation services to address your specific 
                    project needs. Whether you're in the planning, design, or implementation phase, we can offer valuable 
                    insights and solutions.
                  </p>
                  <a 
                    href="/contact" 
                    className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300"
                  >
                    Schedule a Consultation
                  </a>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Our Consultation Process</h4>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                      <span className="text-neutral-700 text-sm">Initial meeting to understand project requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                      <span className="text-neutral-700 text-sm">Preliminary assessment and proposal development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                      <span className="text-neutral-700 text-sm">Detailed analysis and solution development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                      <span className="text-neutral-700 text-sm">Implementation support and ongoing guidance</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Other Services */}
        <section id="management" className="py-20 bg-white">
          <Container>
            <SectionTitle
              title="Additional Engineering Services"
              subtitle="Complementary solutions to meet all your engineering needs"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </Container>
        </section>
        
        {/* Client Testimonials */}
        <section className="py-20 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Client Testimonials"
              subtitle="What our clients say about our engineering services"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  name: "Rajiv Sharma",
                  position: "Project Director, Delhi Metro Rail Corporation",
                  quote: "Medallion Engineers provided exceptional tunnel design services for our metro extension project. Their innovative solutions helped us overcome challenging geological conditions while maintaining the highest safety standards."
                },
                {
                  name: "Priya Verma",
                  position: "Chief Engineer, Mumbai Municipal Corporation",
                  quote: "We've worked with Medallion on several urban infrastructure projects. Their attention to detail and commitment to quality is impressive. They consistently deliver on time and within budget."
                },
                {
                  name: "Arun Patel",
                  position: "Director, National Highways Authority of India",
                  quote: "The structural engineering team at Medallion demonstrated exceptional expertise in our highway bridge project. Their innovative design solutions resulted in significant cost savings without compromising on quality or safety."
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-neutral-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-neutral-500 font-medium">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-primary">{testimonial.name}</div>
                      <div className="text-neutral-600 text-sm">{testimonial.position}</div>
                    </div>
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