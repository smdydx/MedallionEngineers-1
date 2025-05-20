import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function TransportationProjects() {
  const transportationProjects = [
    {
      id: 1,
      title: "Delhi Metro Extension Tunnel",
      category: "Rail",
      location: "Delhi, India",
      year: "2022",
      description: "A 5.8 km tunnel extension for the Delhi Metro system featuring complex geological conditions and proximity to existing structures. The project included two underground stations and innovative soil stabilization techniques.",
      highlights: [
        "Twin-tunnel design with 5.8 meter internal diameter",
        "Design for NATM and TBM construction methods",
        "Integration with existing metro infrastructure",
        "Advanced ground improvement techniques",
        "Real-time settlement monitoring system"
      ],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 2,
      title: "Mumbai Coastal Road Tunnel",
      category: "Road",
      location: "Mumbai, India",
      year: "2023",
      description: "A 3.4 km underwater tunnel for Mumbai's Coastal Road Project, featuring state-of-the-art systems for ventilation, safety, and traffic management. The project required complex coordination with multiple stakeholders and careful environmental management.",
      highlights: [
        "India's longest underwater road tunnel",
        "Advanced ventilation and safety systems",
        "Integrated traffic management design",
        "Special waterproofing for marine conditions",
        "Environmental monitoring and protection measures"
      ],
      image: "https://images.unsplash.com/photo-1545823833-c0fe58d9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 3,
      title: "Ganga Bridge Infrastructure",
      category: "Bridge",
      location: "Patna, Bihar",
      year: "2021",
      description: "A 1.2 km cable-stayed bridge over the Ganga River, providing essential connectivity between previously isolated communities. The project addressed complex foundation challenges in the riverbed and incorporated flood resilience measures.",
      highlights: [
        "Cable-stayed design with 300m main span",
        "Deep foundation work in varying river conditions",
        "Flood-resilient approach structures",
        "Aesthetic lighting design",
        "Dedicated pedestrian and cycling lanes"
      ],
      image: "https://images.unsplash.com/photo-1545703549-7bdb1d01b734?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 4,
      title: "Bengaluru Metro Elevated Section",
      category: "Rail",
      location: "Bengaluru, Karnataka",
      year: "2022",
      description: "A 12 km elevated metro section connecting key commercial and residential areas of Bengaluru. The project involved complex urban construction logistics and minimizing disruption to existing traffic and utilities.",
      highlights: [
        "Pre-cast segmental viaduct construction",
        "Five elevated stations with modern design",
        "Integration with existing transportation hubs",
        "Traffic management during construction",
        "Noise and vibration mitigation systems"
      ],
      image: "https://images.unsplash.com/photo-1504387841597-85e85f3cbafc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 5,
      title: "Chennai-Salem Highway",
      category: "Road",
      location: "Tamil Nadu",
      year: "2023",
      description: "A 277 km six-lane expressway connecting Chennai and Salem, featuring modern safety features and environmental considerations. The project included numerous bridges, underpasses, and wildlife crossings.",
      highlights: [
        "Intelligent Transportation System implementation",
        "Wildlife crossings and ecological corridors",
        "Advanced stormwater management",
        "Rest areas with EV charging facilities",
        "Noise barriers in populated areas"
      ],
      image: "https://images.unsplash.com/photo-1545678567-a71548c3c06a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: 6,
      title: "Hyderabad Airport Metro Link",
      category: "Rail",
      location: "Hyderabad, Telangana",
      year: "2022",
      description: "A 30 km metro rail link connecting Hyderabad city center with the international airport, including both underground and elevated sections. The project featured advanced signaling systems and airport-specific design requirements.",
      highlights: [
        "Mixed underground and elevated alignment",
        "Special airport terminal integration",
        "Baggage handling considerations",
        "Driverless train technology",
        "24-hour operation capability"
      ],
      image: "https://images.unsplash.com/photo-1515281239448-2abe329fe5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
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
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Transportation Projects"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Transportation Projects</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Engineering excellence in tunnel, bridge, highway, and railway infrastructure
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
              <span className="text-primary font-medium">Transportation Projects</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Transportation Infrastructure Expertise</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, we have established ourselves as leaders in transportation 
                  infrastructure development across India. Our portfolio spans complex tunnels, bridges, 
                  highways, and rail systems that have transformed connectivity and mobility in urban 
                  and rural areas.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our multidisciplinary approach brings together expertise in structural design, 
                  geotechnical engineering, transportation planning, and construction management to 
                  deliver integrated solutions that address the unique challenges of each project. We 
                  are committed to developing infrastructure that is not only functional and efficient 
                  but also sustainable and aesthetically pleasing.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">28+</div>
                    <div className="text-neutral-700 text-sm">Tunnel Projects</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">42+</div>
                    <div className="text-neutral-700 text-sm">Bridge Projects</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">15+</div>
                    <div className="text-neutral-700 text-sm">Metro Projects</div>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md text-center">
                    <div className="text-primary text-2xl font-bold mb-1">35+</div>
                    <div className="text-neutral-700 text-sm">Highway Projects</div>
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
                  src="https://images.unsplash.com/photo-1530043195663-e5fc60a000cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Transportation Infrastructure"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Project Categories */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Transportation Solutions"
              subtitle="Our expertise across diverse transportation infrastructure sectors"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Tunnels",
                  description: "Specialized expertise in underground transportation infrastructure including road and rail tunnels with advanced ventilation and safety systems.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  link: "/tunnel-structures"
                },
                {
                  title: "Bridges",
                  description: "Innovative bridge solutions from simple spans to complex cable-stayed and suspension bridges for river crossings and urban connectivity.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  link: "/structural-engineering"
                },
                {
                  title: "Highways",
                  description: "Comprehensive highway design and engineering services incorporating modern safety features, environmental considerations, and smart technologies.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  ),
                  link: "/infrastructure"
                },
                {
                  title: "Rail Systems",
                  description: "Specialized rail infrastructure including metro systems, high-speed corridors, and conventional railways with modern signaling and communication systems.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  ),
                  link: "/infrastructure"
                }
              ].map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{category.title}</h3>
                  <p className="text-neutral-700 text-sm mb-4">{category.description}</p>
                  <a 
                    href={category.link} 
                    className="inline-flex items-center text-primary hover:text-secondary text-sm font-medium transition-colors duration-300"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Project Showcase */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Featured Transportation Projects"
              subtitle="Showcasing our landmark achievements in transportation infrastructure"
              align="center"
            />
            
            <div className="mt-12 space-y-16">
              {transportationProjects.map((project, index) => (
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
                      
                      <div className="bg-neutral-50 p-6 rounded-lg mb-6">
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
                  
                  {index < transportationProjects.length - 1 && (
                    <div className="border-b border-neutral-200 mt-16"></div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Technical Expertise */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
              <p className="text-neutral-300">
                Our specialized technical capabilities for transportation infrastructure projects
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Advanced Structural Analysis",
                  description: "Sophisticated finite element modeling and analysis for complex structural systems in bridges, tunnels, and elevated structures.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Geotechnical Engineering",
                  description: "Specialized expertise in soil-structure interaction, foundation design, and ground improvement techniques for challenging site conditions.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                },
                {
                  title: "Transportation Planning",
                  description: "Comprehensive traffic analysis, demand forecasting, and network planning to optimize transportation system performance and capacity.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )
                },
                {
                  title: "Seismic Design",
                  description: "Expert analysis and design for seismic resilience in transportation infrastructure, ensuring safety and serviceability during and after seismic events.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: "Intelligent Transportation Systems",
                  description: "Integration of smart technologies for traffic management, monitoring, and user information systems in modern transportation infrastructure.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Environmental Engineering",
                  description: "Comprehensive environmental impact assessment and mitigation strategies to minimize ecological footprint of transportation projects.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((expertise, i) => (
                <motion.div
                  key={expertise.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {expertise.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{expertise.title}</h3>
                  <p className="text-neutral-400 text-sm">{expertise.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Sustainable Transportation */}
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
                  Future-Ready Infrastructure
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Sustainable Transportation Solutions</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, we are committed to developing transportation infrastructure 
                  that not only meets current needs but also addresses long-term sustainability goals. 
                  Our approach integrates environmental considerations, resource efficiency, and 
                  climate resilience into every project.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Low-Carbon Materials</h3>
                      <p className="text-neutral-700 text-sm">Utilizing sustainable construction materials and techniques to reduce the carbon footprint of transportation projects.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Energy Efficiency</h3>
                      <p className="text-neutral-700 text-sm">Integrating energy-efficient systems for lighting, ventilation, and operations in tunnels, bridges, and rail infrastructure.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Climate Resilience</h3>
                      <p className="text-neutral-700 text-sm">Designing transportation infrastructure to withstand extreme weather events and adapt to changing climate conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Ecological Integration</h3>
                      <p className="text-neutral-700 text-sm">Incorporating wildlife crossings, habitat restoration, and other measures to minimize ecological impacts of transportation corridors.</p>
                    </div>
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
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Sustainable Transportation"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* More Project Categories */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Explore More Projects"
              subtitle="Discover our work across different sectors"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Urban Development",
                  description: "Integrated urban infrastructure projects enhancing livability and sustainability in cities across India.",
                  image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/urban-development"
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