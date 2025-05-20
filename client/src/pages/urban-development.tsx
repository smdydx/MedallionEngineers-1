import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function UrbanDevelopment() {
  const urbanProjects = [
    {
      id: 1,
      title: "Mumbai Smart City Development",
      category: "Smart City",
      location: "Mumbai, Maharashtra",
      year: "2023",
      description: "A comprehensive smart city initiative in Mumbai incorporating intelligent transportation systems, integrated utility management, and sustainable urban design principles to enhance livability and efficiency.",
      highlights: [
        "Intelligent traffic management reducing congestion by 30%",
        "IoT-based utility monitoring and management system",
        "Integrated command and control center",
        "Energy-efficient street lighting with smart controls",
        "Public Wi-Fi and digital information kiosks"
      ],
      image: "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 2,
      title: "Bangalore Tech Corridor Development",
      category: "Urban Planning",
      location: "Bangalore, Karnataka",
      year: "2022",
      description: "A planned mixed-use development corridor connecting Bangalore's central business district with its tech parks, featuring integrated transit systems, commercial spaces, and residential areas designed for walkability and sustainability.",
      highlights: [
        "Transit-oriented development with multimodal connectivity",
        "Pedestrian-friendly street design and cycling infrastructure",
        "Mixed-use zoning for reduced commuting needs",
        "Green infrastructure including parks and water management",
        "Energy-efficient buildings with sustainability certifications"
      ],
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 3,
      title: "Chennai Coastal Resilience Project",
      category: "Sustainable Development",
      location: "Chennai, Tamil Nadu",
      year: "2022",
      description: "A coastal urban development project in Chennai designed to enhance resilience to flooding and sea-level rise while creating new public spaces and improving infrastructure for coastal communities.",
      highlights: [
        "Innovative flood protection infrastructure",
        "Restored coastal wetlands and mangroves",
        "Climate-adaptive public spaces and waterfronts",
        "Improved stormwater management systems",
        "Community engagement and participatory design process"
      ],
      image: "https://images.unsplash.com/photo-1517400821513-44a8d554f436?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 4,
      title: "Delhi Metro Transit Hub",
      category: "Transit-Oriented Development",
      location: "Delhi, India",
      year: "2021",
      description: "A major transit hub development around key Delhi Metro stations, creating vibrant mixed-use spaces that maximize public transportation accessibility while reducing vehicular dependence.",
      highlights: [
        "Integrated metro, bus, and last-mile connectivity",
        "High-density mixed-use development within walking distance",
        "Affordable housing component integrated with market-rate units",
        "Public plazas and community spaces",
        "Sustainable building design with rainwater harvesting"
      ],
      image: "https://images.unsplash.com/photo-1597743628162-23f77f498226?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 5,
      title: "Hyderabad Heritage District Revitalization",
      category: "Urban Renewal",
      location: "Hyderabad, Telangana",
      year: "2023",
      description: "A comprehensive urban renewal project in Hyderabad's historic district, balancing preservation of cultural heritage with infrastructure modernization and economic revitalization.",
      highlights: [
        "Restoration of historic buildings and structures",
        "Upgraded infrastructure with minimal visual impact",
        "Pedestrianization of key heritage zones",
        "Adaptive reuse of historic buildings for modern functions",
        "Cultural tourism development with interpretive elements"
      ],
      image: "https://images.unsplash.com/photo-1604335078067-9d8fd28d38e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Urban Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70"></div>
          </div>
          
          <Container className="relative z-10 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white max-w-2xl"
            >
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Urban Development</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Creating sustainable, resilient, and livable urban environments across India
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
              <a href="/projects" className="text-neutral-600 hover:text-primary transition-colors">Projects</a>
              <ChevronRight className="h-4 w-4 mx-2 text-neutral-400" />
              <span className="text-primary font-medium">Urban Development</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Shaping Sustainable Urban Futures</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, our urban development practice creates integrated, 
                  sustainable, and resilient urban environments that enhance quality of life while 
                  addressing the complex challenges facing India's rapidly growing cities.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our multidisciplinary approach brings together expertise in urban planning, 
                  infrastructure engineering, environmental design, and community engagement to 
                  deliver comprehensive solutions that balance social, economic, and environmental 
                  considerations. We work closely with government agencies, developers, and communities 
                  to create places that are not only functional but also vibrant, inclusive, and sustainable.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">15+</div>
                    <div className="text-neutral-700 text-sm">Smart City Projects</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">20+</div>
                    <div className="text-neutral-700 text-sm">Urban Renewal Projects</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">12+</div>
                    <div className="text-neutral-700 text-sm">Transit-Oriented Developments</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">10+</div>
                    <div className="text-neutral-700 text-sm">Waterfront Developments</div>
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
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Urban Development Project"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Urban Development Services */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Our Urban Development Services"
              subtitle="Comprehensive solutions for sustainable urban environments"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Smart City Solutions",
                  description: "Integrated technology systems to enhance urban operations, services, and quality of life, including IoT networks, data analytics, and digital infrastructure.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Urban Planning & Design",
                  description: "Comprehensive master planning, land use strategies, and urban design that create functional, sustainable, and aesthetically pleasing urban environments.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )
                },
                {
                  title: "Transit-Oriented Development",
                  description: "Mixed-use development around transportation hubs to maximize access to public transit and reduce car dependency, creating walkable, vibrant neighborhoods.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  )
                },
                {
                  title: "Urban Infrastructure",
                  description: "Design and implementation of essential urban infrastructure systems including water, wastewater, stormwater, power, and telecommunications networks.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: "Urban Regeneration",
                  description: "Revitalization of underutilized or distressed urban areas through strategic interventions that preserve heritage, improve infrastructure, and stimulate economic activity.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )
                },
                {
                  title: "Sustainable Urban Development",
                  description: "Planning and design that prioritizes environmental sustainability, resource efficiency, and climate resilience in urban development projects.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-neutral-700 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Urban Development Approach */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Urban Planning Process"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-md text-primary font-medium text-sm mb-6">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Integrated Urban Development Methodology</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Contextual Analysis</h3>
                      <p className="text-neutral-700 text-sm">
                        Comprehensive assessment of existing urban conditions, regulatory framework, 
                        environmental factors, and stakeholder needs to inform development strategies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Participatory Planning</h3>
                      <p className="text-neutral-700 text-sm">
                        Engagement with communities, government agencies, and other stakeholders 
                        to ensure inclusive and responsive development that addresses local needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Integrated Design</h3>
                      <p className="text-neutral-700 text-sm">
                        Multidisciplinary approach that integrates urban planning, infrastructure 
                        engineering, architecture, landscape design, and technology systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Sustainability Integration</h3>
                      <p className="text-neutral-700 text-sm">
                        Incorporation of sustainability principles throughout the development process, 
                        from resource-efficient design to resilience planning and green infrastructure.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary font-bold">05</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Implementation & Adaptation</h3>
                      <p className="text-neutral-700 text-sm">
                        Practical implementation strategies with phasing plans, financing mechanisms, 
                        and monitoring frameworks to ensure successful delivery and long-term success.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Project Showcase */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Featured Urban Development Projects"
              subtitle="Transformative urban projects enhancing livability and sustainability"
              align="center"
            />
            
            <div className="mt-12 space-y-16">
              {urbanProjects.map((project, index) => (
                <div key={project.id} id={`project-${project.id}`} className="scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`grid md:grid-cols-2 gap-12 items-start ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="bg-primary/10 px-3 py-1 inline-block rounded-full text-primary text-sm font-medium mb-4">
                        {project.category} • {project.year}
                      </div>
                      <h2 className="text-3xl font-bold text-primary mb-4">{project.title}</h2>
                      <p className="text-neutral-700 mb-6">
                        <span className="font-semibold">Location:</span> {project.location}
                      </p>
                      <p className="text-neutral-700 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                        <h4 className="font-bold text-primary mb-4">Project Highlights</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                              <span className="text-neutral-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="relative rounded-lg overflow-hidden shadow-lg group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 w-full">
                            <p className="text-white font-medium">{project.title}</p>
                            <p className="text-blue-100 text-sm">{project.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {index < urbanProjects.length - 1 && (
                    <div className="border-b border-neutral-200 mt-16"></div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Sustainable Urban Development */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Sustainable Urban Development Principles</h2>
              <p className="text-neutral-300">
                Our commitment to creating urban environments that are environmentally responsible, 
                socially equitable, and economically viable for future generations.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Resource Efficiency",
                  description: "Minimizing resource consumption through energy-efficient buildings, water conservation systems, and waste reduction strategies.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Green Infrastructure",
                  description: "Incorporating natural systems such as urban forests, bioswales, and green roofs to manage stormwater, reduce heat island effects, and enhance biodiversity.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Compact Development",
                  description: "Promoting higher-density, mixed-use development patterns that reduce travel distances, preserve open space, and create vibrant urban environments.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: "Walkable Communities",
                  description: "Creating pedestrian-friendly environments with accessible sidewalks, safe crossings, and active street frontages to promote walking and reduce car dependency.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                },
                {
                  title: "Climate Resilience",
                  description: "Designing urban areas to withstand and adapt to climate change impacts such as flooding, heat waves, and extreme weather events.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )
                },
                {
                  title: "Inclusive Design",
                  description: "Ensuring urban spaces and services are accessible and beneficial to people of all ages, abilities, incomes, and backgrounds to create equitable communities.",
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
        
        {/* More Project Categories */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Explore More Projects"
              subtitle="Discover our work across different sectors"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Transportation Projects",
                  description: "Bridges, highways, railways, and metro systems that connect communities and improve mobility.",
                  image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/transportation-projects"
                },
                {
                  title: "Infrastructure Projects",
                  description: "Essential infrastructure including water systems, energy facilities, and public buildings supporting economic growth.",
                  image: "https://images.unsplash.com/photo-1566464636043-ffc7298ea64b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/infrastructure-projects"
                },
                {
                  title: "Featured Projects",
                  description: "Our most innovative and impactful projects showcasing engineering excellence across diverse challenges.",
                  image: "https://images.unsplash.com/photo-1583508805133-8fd01e208e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/featured-projects"
                }
              ].map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-lg shadow-md"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-blue-100 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                    <a
                      href={category.link}
                      className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-300 text-sm font-medium"
                    >
                      Explore projects
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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