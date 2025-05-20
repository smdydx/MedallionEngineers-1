import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Us</h1>
              <p className="text-xl max-w-3xl mx-auto text-blue-100">
                Leading Engineering Excellence in India since 2010
              </p>
            </motion.div>
          </Container>
        </div>
        
        {/* Company Overview */}
        <section id="overview" className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary font-heading mb-6">Medallion Group India</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Founded in 2010, Medallion Engineers Private Limited has established itself as a leading engineering consultancy firm in India, specializing in infrastructure development, tunnel engineering, and comprehensive project management solutions.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  With headquarters in Delhi and presence across major cities in India, we have successfully delivered over 200 projects across various sectors including transportation, urban development, and water infrastructure.
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
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Medallion Engineers Office"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Mission & Vision */}
        <section id="mission" className="py-20 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Our Mission & Vision"
              subtitle="Committed to excellence in engineering and sustainable development"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 gap-10 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-neutral-700 leading-relaxed">
                  To deliver innovative, sustainable, and cost-effective engineering solutions that exceed client expectations while prioritizing safety, quality, and environmental responsibility.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Excellence in every project we undertake</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Creating infrastructure that improves lives</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Contributing to sustainable development goals</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-neutral-700 leading-relaxed">
                  To be recognized as the premier engineering consultancy in India, known for technical excellence, innovation, and contribution to transformative infrastructure projects across the nation.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Leading technological advancement in engineering</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Setting new standards for quality and innovation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">Expanding our footprint across South Asia</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Core Values */}
        <section id="values" className="py-20 bg-white">
          <Container>
            <SectionTitle
              title="Our Core Values"
              subtitle="The principles that guide our work and company culture"
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  title: "Excellence",
                  description: "Striving for the highest standards in everything we do, from project delivery to client interactions.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Integrity",
                  description: "Acting with honesty, transparency, and ethical conduct in all our business dealings and relationships.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  )
                },
                {
                  title: "Innovation",
                  description: "Embracing creative thinking and technological advancement to develop cutting-edge solutions for complex challenges.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Sustainability",
                  description: "Committing to environmentally responsible practices and designing solutions that contribute to a sustainable future.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 p-6 rounded-lg text-center"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-neutral-700 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Company History Timeline */}
        <section className="py-20 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Our Journey"
              subtitle="The evolution of Medallion Engineers Private Limited"
              align="center"
            />
            
            <div className="relative mt-12 pl-8 border-l-2 border-primary/30">
              {[
                {
                  year: "2010",
                  title: "Company Founded",
                  description: "Medallion Engineers Private Limited was established in Delhi with a focus on civil engineering projects."
                },
                {
                  year: "2013",
                  title: "Expansion to Mumbai",
                  description: "Opened our second office in Mumbai to better serve clients in Western India."
                },
                {
                  year: "2015",
                  title: "First Major Tunnel Project",
                  description: "Successfully completed our first major tunnel infrastructure project in the Himalayan region."
                },
                {
                  year: "2018",
                  title: "ISO Certification",
                  description: "Received ISO 9001:2015 certification for our quality management systems."
                },
                {
                  year: "2020",
                  title: "10th Anniversary",
                  description: "Celebrated 10 years of excellence with over 150 successful projects completed."
                },
                {
                  year: "2023",
                  title: "International Expansion",
                  description: "Started operations in neighboring countries with our first international project in Nepal."
                }
              ].map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-[41px] w-5 h-5 bg-primary rounded-full border-4 border-white" />
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-neutral-700">{milestone.description}</p>
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