import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ChevronRight } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Mission and Vision"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Mission & Vision</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Defining our purpose and guiding our journey to engineering excellence
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
              <span className="text-primary font-medium">Mission & Vision</span>
            </div>
          </Container>
        </div>
        
        {/* Mission Section */}
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
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Engineering Sustainable Infrastructure for a Better Future</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, our mission is to deliver innovative and sustainable engineering 
                  solutions that address complex infrastructure challenges, improve quality of life, and 
                  create lasting positive impact for communities across India.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  We are committed to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Providing technical excellence in all our engineering services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Developing sustainable solutions that balance environmental, social, and economic considerations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Fostering collaborative partnerships with clients, communities, and stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Contributing to India's infrastructure development and economic growth</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Engineering Mission"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Vision Section */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1507208773393-40d9fc670c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Engineering Vision"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="inline-block bg-secondary/10 px-4 py-2 rounded-md text-secondary font-medium text-sm mb-6">
                  Our Vision
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">To Be India's Most Trusted Engineering Partner</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our vision is to become India's most trusted and respected engineering consultancy, 
                  recognized for our technical excellence, innovation, and commitment to sustainable 
                  development. We aspire to be the partner of choice for complex infrastructure projects 
                  that shape the future of our nation.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  By 2030, we aim to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Lead the advancement of tunnel engineering and infrastructure development in India</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Establish Medallion Engineers as a benchmark for sustainable infrastructure solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Expand our presence across South Asia while maintaining our commitment to excellence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Nurture the next generation of engineering talent through our work and initiatives</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Guided by Strong Values"
              subtitle="The principles that drive our decisions and actions"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Excellence",
                  description: "We pursue excellence in everything we do, setting high standards and continuously improving our methods, processes, and solutions.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Integrity",
                  description: "We conduct our business with honesty, transparency, and ethical practices, building trust with our clients, partners, and communities.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Innovation",
                  description: "We foster a culture of innovation and creative problem-solving, embracing new technologies and methodologies to deliver forward-thinking solutions.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Sustainability",
                  description: "We are committed to environmental stewardship and sustainable practices, designing solutions that minimize ecological impact and conserve resources.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Collaboration",
                  description: "We believe in the power of teamwork and partnership, working closely with clients, communities, and stakeholders to achieve shared goals.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: "Responsibility",
                  description: "We take accountability for our work and its impact, prioritizing safety, quality, and the well-being of communities and the environment.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
                  className="bg-neutral-50 p-6 rounded-lg"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-neutral-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="/core-values" 
                className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
              >
                Learn more about our core values
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>
        
        {/* Strategic Goals */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Strategic Goals</h2>
              <p className="text-neutral-300">
                The key objectives that guide our growth and development as we work toward our vision.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Technical Leadership",
                  description: "Maintain our position at the forefront of engineering innovation, continuously advancing our technical capabilities and expertise.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Sustainable Growth",
                  description: "Achieve strategic business growth while maintaining our commitment to quality, sustainability, and positive social impact.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                },
                {
                  title: "Talent Development",
                  description: "Attract, develop, and retain the best engineering talent, fostering a culture of continuous learning and professional growth.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                },
                {
                  title: "Environmental Leadership",
                  description: "Lead the industry in sustainable engineering practices, minimize our carbon footprint, and develop environmentally responsible solutions.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((goal, i) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {goal.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{goal.title}</h3>
                  <p className="text-neutral-400">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Message from Director */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500"
                  alt="Afroz Alam - Director"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-md text-primary font-medium text-sm mb-6">
                  Message from the Director
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Shaping a Sustainable Future</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 leading-relaxed">
                    "At Medallion Engineers, our mission and vision guide everything we do. We believe that 
                    engineering is not just about building structures, but about creating solutions that 
                    improve lives, strengthen communities, and protect our environment.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    As we look to the future, we are committed to pushing the boundaries of innovation, 
                    embracing sustainable practices, and contributing to India's infrastructure development. 
                    Our team of dedicated professionals works tirelessly to turn this vision into reality, 
                    project by project.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    We invite you to join us on this journey as we work together to build a better, 
                    more sustainable future for generations to come."
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-bold text-primary">Afroz Alam</p>
                  <p className="text-neutral-700">Director, Medallion Engineers Pvt. Ltd.</p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Learn More About Us */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Learn More About Us"
              subtitle="Explore other aspects of our company"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Company Overview",
                  description: "Learn about our history, leadership, and what makes Medallion Engineers a leader in the industry.",
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/company-overview"
                },
                {
                  title: "Core Values",
                  description: "Discover the fundamental principles that guide our decisions, actions, and company culture.",
                  image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/core-values"
                },
                {
                  title: "Our History",
                  description: "Take a journey through our company's evolution and key milestones since our founding in 2010.",
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