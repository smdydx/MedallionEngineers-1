import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ChevronRight } from "lucide-react";

export default function CoreValues() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Core Values"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Core Values</h1>
              <p className="text-lg md:text-xl text-blue-50">
                The principles that guide our decisions, shape our culture, and define who we are
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
              <span className="text-primary font-medium">Core Values</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Our Guiding Principles</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, our core values are more than just words on a page – they are the 
                  fundamental beliefs and principles that guide our decisions, actions, and interactions every day. 
                  They reflect who we are as a company and what we stand for.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  These values unite us as a team, shape our company culture, and drive our approach to 
                  engineering and client service. They are the standards against which we measure ourselves 
                  and they help us maintain our commitment to excellence in everything we do.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Our core values are not just aspirational – they are woven into our daily operations, our 
                  hiring and professional development processes, and our strategic decisions. They help us 
                  stay true to our mission and work toward our vision for the future.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Team Collaboration"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Our Core Values"
              subtitle="The principles that define who we are"
              align="center"
            />
            
            <div className="mt-12 space-y-12">
              {[
                {
                  title: "Excellence",
                  description: "We pursue excellence in everything we do, setting high standards and continuously improving our methods, processes, and solutions.",
                  details: [
                    "Delivering quality that exceeds expectations",
                    "Continuous learning and development of skills",
                    "Attention to detail in all aspects of our work",
                    "Taking pride in our deliverables and outcomes",
                    "Measuring and improving our performance"
                  ],
                  image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  color: "bg-blue-600"
                },
                {
                  title: "Integrity",
                  description: "We conduct our business with honesty, transparency, and ethical practices, building trust with our clients, partners, and communities.",
                  details: [
                    "Being truthful and transparent in our communication",
                    "Honoring our commitments and promises",
                    "Making ethical decisions, even when difficult",
                    "Maintaining confidentiality and respecting privacy",
                    "Taking responsibility for our actions"
                  ],
                  image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  color: "bg-green-600"
                },
                {
                  title: "Innovation",
                  description: "We foster a culture of innovation and creative problem-solving, embracing new technologies and methodologies to deliver forward-thinking solutions.",
                  details: [
                    "Encouraging creative thinking and new ideas",
                    "Embracing technological advancements",
                    "Taking calculated risks to drive progress",
                    "Challenging conventional approaches",
                    "Investing in research and development"
                  ],
                  image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  color: "bg-purple-600"
                },
                {
                  title: "Sustainability",
                  description: "We are committed to environmental stewardship and sustainable practices, designing solutions that minimize ecological impact and conserve resources.",
                  details: [
                    "Minimizing environmental impacts in our designs",
                    "Considering lifecycle impacts of our solutions",
                    "Promoting resource efficiency and conservation",
                    "Supporting renewable energy and clean technologies",
                    "Advocating for sustainable development principles"
                  ],
                  image: "https://images.unsplash.com/photo-1500964757637-c85e8c4c42af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  color: "bg-emerald-600"
                },
                {
                  title: "Collaboration",
                  description: "We believe in the power of teamwork and partnership, working closely with clients, communities, and stakeholders to achieve shared goals.",
                  details: [
                    "Valuing diverse perspectives and expertise",
                    "Building strong relationships with stakeholders",
                    "Promoting open communication and idea sharing",
                    "Supporting team members and celebrating success",
                    "Creating inclusive working environments"
                  ],
                  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  color: "bg-amber-600"
                },
                {
                  title: "Responsibility",
                  description: "We take accountability for our work and its impact, prioritizing safety, quality, and the well-being of communities and the environment.",
                  details: [
                    "Prioritizing health and safety in all operations",
                    "Taking ownership of our decisions and actions",
                    "Considering the social impact of our projects",
                    "Acting with a long-term perspective",
                    "Being conscientious corporate citizens"
                  ],
                  image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  color: "bg-red-600"
                }
              ].map((value, index) => (
                <div key={value.title} className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <div className={`inline-block ${value.color} px-4 py-2 rounded-md text-white font-medium text-sm mb-6`}>
                      Core Value {index + 1}
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-6">{value.title}</h2>
                    <p className="text-neutral-700 leading-relaxed mb-6">
                      {value.description}
                    </p>
                    <div className="space-y-3">
                      {value.details.map((detail, i) => (
                        <div key={i} className="flex items-start">
                          <div className={`${value.color}/20 p-1 rounded-full mr-3 mt-1`}>
                            <svg className={`w-4 h-4 text-${value.color.replace('bg-', '')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-neutral-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>
                  
                  {index < 5 && <div className="col-span-full border-b border-neutral-200"></div>}
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Living Our Values */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Living Our Values"
              subtitle="How we put our values into practice every day"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "In Our Projects",
                  description: "We bring our values to life in every project we undertake, from initial planning to final delivery. Our commitment to excellence, sustainability, and responsibility guides our engineering solutions and ensures that we create infrastructure that serves communities and protects the environment.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: "In Our Workplace",
                  description: "Our values shape our company culture and work environment. We foster collaboration, innovation, and integrity among our team members, creating a supportive atmosphere where everyone can contribute their best work, develop professionally, and take pride in our shared accomplishments.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: "In Our Community",
                  description: "We extend our values beyond our projects and workplace into the communities where we operate. Through community engagement, educational initiatives, and responsible corporate citizenship, we strive to make a positive impact and contribute to sustainable development at the local and national level.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 p-8 rounded-lg"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-neutral-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Values in Action</h2>
              <p className="text-neutral-300">
                Hear from our team members, clients, and partners about how our values make a difference.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Medallion Engineers consistently demonstrates their commitment to excellence and innovation. Their sustainable approach to infrastructure projects has not only met our technical requirements but also aligned with our environmental goals.",
                  author: "Rajesh Kumar",
                  position: "Chief Infrastructure Officer, Delhi Metro Rail Corporation",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                },
                {
                  quote: "Working at Medallion has been incredibly rewarding. Our core values aren't just words on the wall – they guide our daily decisions and create a supportive environment where we can collaborate and innovate to solve complex engineering challenges.",
                  author: "Priya Sharma",
                  position: "Senior Structural Engineer, Medallion Engineers",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                },
                {
                  quote: "The integrity and responsibility that Medallion brings to every project set them apart. They don't just deliver technical expertise; they genuinely care about the long-term impact of their work on communities and the environment.",
                  author: "Anand Patel",
                  position: "Director, Urban Development Authority, Mumbai",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-neutral-300 italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-neutral-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Learn More About Us */}
        <section className="py-16 bg-white">
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
                  title: "Mission & Vision",
                  description: "Discover our guiding principles and aspirations that drive our work and shape our future direction.",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/mission-vision"
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
                  className="bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden shadow-sm group"
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