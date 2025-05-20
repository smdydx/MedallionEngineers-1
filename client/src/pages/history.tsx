import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ChevronRight } from "lucide-react";

export default function History() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Our History"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our History</h1>
              <p className="text-lg md:text-xl text-blue-50">
                The journey of Medallion Engineers from foundation to industry leadership
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
              <span className="text-primary font-medium">Our History</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Our Journey of Growth and Excellence</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Founded in 2010 by Afroz Alam, Medallion Engineers began as a small consultancy firm with 
                  a team of just five engineers specializing in structural design for commercial buildings 
                  in Delhi. From these humble beginnings, we have grown into one of India's premier 
                  engineering consultancies with expertise spanning multiple disciplines and sectors.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our journey reflects our commitment to excellence, innovation, and sustainable development. 
                  With each project, we have expanded our capabilities, refined our expertise, and strengthened 
                  our reputation for delivering high-quality engineering solutions that meet the complex 
                  challenges of modern infrastructure development.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Today, Medallion Engineers employs over 50 professionals across India and has successfully 
                  completed more than 200 projects across transportation, urban development, water infrastructure, 
                  and industrial sectors. Our growth story is a testament to our core values and the trust 
                  placed in us by our clients and partners.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Medallion Engineers Founding"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Timeline */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Our Milestone Journey"
              subtitle="Key moments that have shaped our company's growth and evolution"
              align="center"
            />
            
            <div className="mt-16 relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20"></div>
              
              {[
                {
                  year: "2010",
                  title: "Foundation",
                  description: "Medallion Engineers was founded by Afroz Alam in Delhi with a team of five engineers, focusing on structural design for commercial buildings.",
                  achievements: [
                    "Established office in New Ashok Nagar, Delhi",
                    "Completed first commercial building project",
                    "Secured first government contract"
                  ],
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                },
                {
                  year: "2013",
                  title: "Expansion into Infrastructure",
                  description: "Expanded services to include infrastructure development with a focus on transportation projects, adding geotechnical engineering to our expertise.",
                  achievements: [
                    "Hired first geotechnical specialists",
                    "Completed first highway overpass project",
                    "Established Quality Management System"
                  ],
                  image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                },
                {
                  year: "2015",
                  title: "Tunnel Engineering Specialization",
                  description: "Began specializing in tunnel engineering with our first major tunnel project for the Delhi Metro expansion, marking a significant milestone in our technical capabilities.",
                  achievements: [
                    "Completed first tunnel design project",
                    "Established dedicated tunnel engineering department",
                    "ISO 9001:2015 certification"
                  ],
                  image: "https://images.unsplash.com/photo-1545193544-312983719627?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                },
                {
                  year: "2018",
                  title: "National Expansion",
                  description: "Opened new offices in Mumbai and Bangalore, expanding our geographical presence and enabling us to serve clients across India more effectively.",
                  achievements: [
                    "Established Mumbai and Bangalore offices",
                    "Team grew to 30 professionals",
                    "100th project milestone achieved"
                  ],
                  image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                },
                {
                  year: "2020",
                  title: "Celebrating a Decade of Excellence",
                  description: "Celebrated our 10th anniversary with the launch of our Sustainability Initiative, committing to environmentally responsible engineering practices in all our projects.",
                  achievements: [
                    "Launched Medallion Sustainability Initiative",
                    "ISO 14001:2015 certification",
                    "150th project milestone"
                  ],
                  image: "https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                },
                {
                  year: "2023",
                  title: "Innovation and Digital Transformation",
                  description: "Implemented advanced digital technologies including BIM, AI-assisted design, and digital twins, elevating our service offerings and project delivery capabilities.",
                  achievements: [
                    "Established Digital Innovation Lab",
                    "Team expanded to 50+ professionals",
                    "200th project milestone"
                  ],
                  image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                }
              ].map((milestone, index) => (
                <div key={milestone.year} className="mb-24 last:mb-0 relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Circle on Timeline */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                          <div className="md:hidden mb-4 inline-block bg-primary px-4 py-2 rounded-md text-white font-bold">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-3">{milestone.title}</h3>
                          <p className="text-neutral-700 mb-6">{milestone.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-primary mb-2">Key Achievements:</h4>
                            <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                              {milestone.achievements.map((achievement, i) => (
                                <li key={i} className={`flex items-start ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                  <div className={`w-1.5 h-1.5 bg-primary rounded-full ${index % 2 === 0 ? 'md:order-2 md:ml-2 mr-2 md:mr-0 mt-2' : 'mr-2 mt-2'} flex-shrink-0`}></div>
                                  <span className="text-neutral-700 text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Image */}
                    <div className={`md:w-1/2 mt-6 md:mt-0 ${index % 2 === 0 ? '' : ''}`}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}
                      >
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <img 
                            src={milestone.image} 
                            alt={milestone.title} 
                            className="w-full h-auto"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Founder's Story */}
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
                  alt="Afroz Alam - Founder & Director"
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
                  Founder's Story
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">The Vision Behind Medallion Engineers</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 leading-relaxed">
                    "When I founded Medallion Engineers in 2010, I had a clear vision: to build a 
                    company that would combine technical excellence with a deep commitment to 
                    sustainable development. After years of working on infrastructure projects across 
                    India, I saw the need for an engineering consultancy that could deliver innovative 
                    solutions while being mindful of environmental and social impacts.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    We started small, with just five engineers working from a modest office in Delhi. 
                    Our first projects were challenging, but they allowed us to demonstrate our capabilities 
                    and build relationships based on trust and performance. As our reputation grew, so did 
                    our team and the scope of our projects.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    What has remained constant throughout our journey is our commitment to our core values 
                    and our belief that engineering has the power to transform lives and communities. Every 
                    project we undertake is an opportunity to make a positive impact, and this philosophy 
                    continues to drive us forward.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    As we look to the future, I am proud of what we have accomplished and excited about 
                    what lies ahead. With a team of talented professionals and a shared commitment to 
                    excellence, Medallion Engineers is well-positioned to continue its growth and contribute 
                    to India's infrastructure development for years to come."
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-bold text-primary">Afroz Alam</p>
                  <p className="text-neutral-700">Founder & Director, Medallion Engineers Pvt. Ltd.</p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Key Projects Over the Years */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Landmark Projects Through the Years"
              subtitle="Significant projects that have marked our journey and showcased our capabilities"
              align="center"
            />
            
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Ganga Bridge Infrastructure (2012)",
                  description: "Our first major infrastructure project, involving structural design and engineering for a 1.2 km bridge over the Ganga River.",
                  image: "https://images.unsplash.com/photo-1545703549-7bdb1d01b734?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  sector: "Transportation"
                },
                {
                  title: "Delhi Metro Tunnel Section (2015)",
                  description: "Our first tunnel project for the Delhi Metro expansion, marking our entry into specialized tunnel engineering services.",
                  image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  sector: "Transportation"
                },
                {
                  title: "Mumbai Office Tower (2016)",
                  description: "A 32-story commercial building in Mumbai showcasing our structural engineering expertise for high-rise buildings.",
                  image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  sector: "Commercial"
                },
                {
                  title: "Bangalore Water Treatment Facility (2018)",
                  description: "An advanced water treatment plant that demonstrated our capabilities in water infrastructure and environmental engineering.",
                  image: "https://images.unsplash.com/photo-1422246358533-95dcd3d48961?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  sector: "Water Infrastructure"
                },
                {
                  title: "Himalayan Mountain Tunnel (2020)",
                  description: "A challenging 4.2 km tunnel through the Himalayas, showcasing our ability to deliver complex projects in difficult terrain.",
                  image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  sector: "Infrastructure"
                },
                {
                  title: "Mumbai Coastal Road Tunnel (2023)",
                  description: "An underwater tunnel for Mumbai's Coastal Road Project, representing our most advanced tunnel engineering project to date.",
                  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  sector: "Transportation"
                }
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary text-xs font-medium mb-3">
                      {project.sector}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-neutral-600 mb-6 text-sm">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="/featured-projects" 
                className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium"
              >
                Explore our featured projects
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>
        
        {/* Future Vision */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-blue-900/50 px-4 py-2 rounded-md text-blue-200 font-medium text-sm mb-6">
                  Looking Forward
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  As we look to the future, Medallion Engineers is committed to building on our strong 
                  foundation while embracing new challenges and opportunities. Our vision for the next 
                  decade includes:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-900/50 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-300">Expanding our expertise in cutting-edge areas such as smart infrastructure, renewable energy integration, and resilient design</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-900/50 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-300">Growing our presence across South Asia while maintaining our commitment to excellence and client satisfaction</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-900/50 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-300">Further integrating digital technologies and advanced analytics into our engineering services</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-900/50 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-300">Deepening our commitment to sustainability and playing a leading role in the transition to low-carbon infrastructure</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-900/50 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-300">Nurturing the next generation of engineering talent through mentorship, education, and professional development</p>
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
                  src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Future Vision"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
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
                  description: "Learn about our leadership, structure, and what makes Medallion Engineers a leader in the industry.",
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
                  title: "Core Values",
                  description: "Explore the fundamental principles that guide our decisions, actions, and company culture.",
                  image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/core-values"
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