import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ChevronRight, Mail, Linkedin } from "lucide-react";

export default function Experts() {
  const technicalExperts = [
    {
      id: 1,
      name: "Dr. Amit Kumar",
      title: "Lead Tunnel Engineer",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      expertise: [
        "Tunnel design and construction",
        "Underground excavation",
        "Geotechnical engineering",
        "TBM operations"
      ],
      description: "Dr. Amit Kumar leads our tunnel engineering team with over 15 years of experience in the design and construction of complex tunnel projects. His expertise spans conventional and mechanized tunneling methods, ground improvement techniques, and tunnel support systems.",
      education: "Ph.D. in Geotechnical Engineering, IIT Delhi",
      projects: [
        "Delhi Metro Phase IV Tunnels",
        "Himalayan Highway Tunnel Project",
        "Mumbai Coastal Road Tunnel"
      ],
      contact: {
        email: "amit.kumar@medallionindia.com",
        linkedin: "https://linkedin.com/in/amitkumar"
      }
    },
    {
      id: 2,
      name: "Sunita Mehta",
      title: "Senior Structural Engineer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      expertise: [
        "Concrete structures",
        "Bridge design",
        "Earthquake engineering",
        "Advanced structural analysis"
      ],
      description: "Sunita brings 12 years of experience in structural design for infrastructure projects, specializing in bridge engineering and seismic design. Her analytical skills and innovative approach have been instrumental in the successful delivery of our most challenging structural projects.",
      education: "M.Tech in Structural Engineering, NIT Warangal",
      projects: [
        "Ganga River Bridge Project",
        "Chennai Elevated Highway",
        "Bangalore Metro Viaducts"
      ],
      contact: {
        email: "sunita.mehta@medallionindia.com",
        linkedin: "https://linkedin.com/in/sunitamehta"
      }
    },
    {
      id: 3,
      name: "Rahul Sharma",
      title: "Water Systems Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      expertise: [
        "Water treatment systems",
        "Hydraulic modeling",
        "Stormwater management",
        "Drought resilience planning"
      ],
      description: "Rahul is our lead water infrastructure specialist with 10 years of experience in designing water supply, treatment, and distribution systems. His focus on sustainable water solutions has helped municipalities across India address water scarcity and quality challenges.",
      education: "M.S. in Environmental Engineering, University of California, Berkeley",
      projects: [
        "Bangalore Water Supply Project",
        "Chennai Desalination Plant",
        "Hyderabad Stormwater Management System"
      ],
      contact: {
        email: "rahul.sharma@medallionindia.com",
        linkedin: "https://linkedin.com/in/rahulsharma"
      }
    },
    {
      id: 4,
      name: "Deepa Patel",
      title: "Transportation Systems Engineer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      expertise: [
        "Traffic engineering",
        "Highway design",
        "Transportation planning",
        "Intelligent transport systems"
      ],
      description: "Deepa specializes in transportation infrastructure with 11 years of experience in highway design, traffic engineering, and intelligent transportation systems. Her expertise in traffic modeling and road safety audits has enhanced the efficiency and safety of numerous transportation projects.",
      education: "M.Tech in Transportation Engineering, IIT Madras",
      projects: [
        "Mumbai-Pune Expressway Expansion",
        "Delhi Smart Traffic Management System",
        "Kolkata Urban Mobility Plan"
      ],
      contact: {
        email: "deepa.patel@medallionindia.com",
        linkedin: "https://linkedin.com/in/deepapatel"
      }
    },
    {
      id: 5,
      name: "Arjun Singh",
      title: "Geotechnical Specialist",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      expertise: [
        "Foundation engineering",
        "Soil mechanics",
        "Ground improvement",
        "Slope stability analysis"
      ],
      description: "Arjun is our senior geotechnical specialist with 14 years of experience in soil investigation, foundation design, and ground improvement techniques. His expertise in tackling challenging ground conditions has been crucial for infrastructure projects in diverse geological settings across India.",
      education: "M.S. in Geotechnical Engineering, University of Illinois Urbana-Champaign",
      projects: [
        "Mumbai High-Rise Foundation Systems",
        "Himalayan Road Network Slope Stabilization",
        "Chennai Coastal Reclamation Project"
      ],
      contact: {
        email: "arjun.singh@medallionindia.com",
        linkedin: "https://linkedin.com/in/arjunsingh"
      }
    },
    {
      id: 6,
      name: "Meera Reddy",
      title: "Environmental Engineer",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      expertise: [
        "Environmental impact assessment",
        "Wastewater treatment",
        "Air quality management",
        "Sustainable infrastructure"
      ],
      description: "Meera leads our environmental engineering team with 12 years of experience in environmental impact assessments, pollution control, and sustainable infrastructure design. Her commitment to ecological preservation ensures that our projects meet stringent environmental standards while minimizing impact.",
      education: "M.S. in Environmental Engineering, Stanford University",
      projects: [
        "Mumbai Wastewater Treatment Facility",
        "Delhi Air Quality Management System",
        "Goa Coastal Zone Management Plan"
      ],
      contact: {
        email: "meera.reddy@medallionindia.com",
        linkedin: "https://linkedin.com/in/meerareddy"
      }
    },
    {
      id: 7,
      name: "Vijay Mishra",
      title: "BIM and Digital Engineering Specialist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      expertise: [
        "Building Information Modeling",
        "Digital twins",
        "4D construction simulation",
        "Virtual design and construction"
      ],
      description: "Vijay leads our digital engineering initiatives with 9 years of experience in implementing advanced BIM processes, digital twins, and computational design. His expertise has transformed our project delivery methodology, enhancing coordination and reducing errors across complex infrastructure projects.",
      education: "M.S. in Construction Engineering and Management, Georgia Tech",
      projects: [
        "Hyderabad Metro BIM Implementation",
        "Mumbai Airport Terminal Digital Twin",
        "Delhi Smart City Digital Infrastructure"
      ],
      contact: {
        email: "vijay.mishra@medallionindia.com",
        linkedin: "https://linkedin.com/in/vijaymishra"
      }
    },
    {
      id: 8,
      name: "Neha Kapoor",
      title: "Electrical Systems Engineer",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      expertise: [
        "Power distribution systems",
        "Renewable energy integration",
        "Tunnel electrical systems",
        "Smart grid technologies"
      ],
      description: "Neha specializes in electrical engineering for infrastructure projects with 10 years of experience in power systems, lighting design, and renewable energy integration. Her expertise ensures reliable and efficient electrical solutions for complex facilities and transportation systems.",
      education: "M.Tech in Electrical Engineering, IIT Bombay",
      projects: [
        "Delhi Metro Traction Power System",
        "Bangalore Solar Integration Project",
        "Mumbai Tunnel Lighting and Power Systems"
      ],
      contact: {
        email: "neha.kapoor@medallionindia.com",
        linkedin: "https://linkedin.com/in/nehakapoor"
      }
    }
  ];

  // Group experts by specialty category
  const expertCategories = [
    {
      title: "Tunnel & Underground Engineering",
      experts: technicalExperts.filter(expert => 
        expert.expertise.some(e => e.toLowerCase().includes("tunnel") || 
                              e.toLowerCase().includes("underground") || 
                              e.toLowerCase().includes("geotechnical"))
      )
    },
    {
      title: "Structural & Civil Engineering",
      experts: technicalExperts.filter(expert => 
        expert.expertise.some(e => e.toLowerCase().includes("structural") || 
                              e.toLowerCase().includes("bridge") || 
                              e.toLowerCase().includes("concrete"))
      )
    },
    {
      title: "Environmental & Water Systems",
      experts: technicalExperts.filter(expert => 
        expert.expertise.some(e => e.toLowerCase().includes("water") || 
                              e.toLowerCase().includes("environment") || 
                              e.toLowerCase().includes("wastewater"))
      )
    },
    {
      title: "Transportation & Infrastructure",
      experts: technicalExperts.filter(expert => 
        expert.expertise.some(e => e.toLowerCase().includes("transportation") || 
                              e.toLowerCase().includes("traffic") || 
                              e.toLowerCase().includes("highway"))
      )
    },
    {
      title: "Digital Engineering & Technology",
      experts: technicalExperts.filter(expert => 
        expert.expertise.some(e => e.toLowerCase().includes("bim") || 
                              e.toLowerCase().includes("digital") || 
                              e.toLowerCase().includes("electrical"))
      )
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
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Technical Experts"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Technical Experts</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Meet our specialized team of engineering professionals who bring unparalleled expertise to every project
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
              <span className="text-primary font-medium">Technical Experts</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Technical Excellence at the Core</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, our technical experts are the foundation of our engineering excellence. 
                  With specialized knowledge across diverse disciplines, our team brings depth of experience, 
                  innovative thinking, and practical problem-solving skills to every project.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our experts hold advanced degrees from prestigious institutions and have honed their 
                  skills through years of practical experience on complex projects. They remain at the 
                  forefront of their fields through continuous learning, research, and participation in 
                  professional organizations.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  This exceptional technical team works collaboratively across disciplines, enabling us 
                  to deliver integrated solutions that address the multifaceted challenges of modern 
                  infrastructure development. Their expertise is complemented by our commitment to 
                  innovation, quality, and sustainable engineering practices.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Technical Team Meeting"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Areas of Expertise */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Areas of Technical Expertise"
              subtitle="Specialized knowledge across key engineering disciplines"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Tunnel Engineering",
                  description: "Specialized expertise in tunnel design, construction methods, geotechnical assessments, and tunnel support systems for transportation and utility tunnels.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Structural Engineering",
                  description: "Advanced analysis and design of concrete, steel, and composite structures for bridges, buildings, and specialized infrastructure components.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: "Geotechnical Engineering",
                  description: "Soil and rock mechanics, foundation design, ground improvement techniques, and slope stability analysis for challenging site conditions.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                },
                {
                  title: "Transportation Engineering",
                  description: "Highway design, traffic analysis, intelligent transportation systems, and transit planning for efficient and safe mobility solutions.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  )
                },
                {
                  title: "Water Resources Engineering",
                  description: "Design of water supply, treatment, and distribution systems, stormwater management, and hydraulic modeling for sustainable water infrastructure.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Digital Engineering",
                  description: "BIM implementation, digital twins, computational design, and advanced visualization techniques for enhanced project delivery and performance.",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {expertise.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{expertise.title}</h3>
                  <p className="text-neutral-700 text-sm">{expertise.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Featured Experts by Category */}
        {expertCategories.map((category, categoryIndex) => (
          <section key={category.title} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
            <Container>
              <SectionTitle
                title={category.title}
                subtitle={`Our specialists in ${category.title.toLowerCase()}`}
                align="center"
              />
              
              <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.experts.map((expert, i) => (
                  <motion.div
                    key={expert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-1">{expert.name}</h3>
                      <p className="text-secondary font-medium text-sm mb-4">{expert.title}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-primary text-sm mb-2">Areas of Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {expert.expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-neutral-700 text-sm mb-4 line-clamp-3">{expert.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mt-4">
                        {expert.contact.email && (
                          <a 
                            href={`mailto:${expert.contact.email}`}
                            className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 text-sm"
                          >
                            <Mail className="h-4 w-4 mr-1" />
                            Email
                          </a>
                        )}
                        
                        {expert.contact.linkedin && (
                          <a 
                            href={expert.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 text-sm"
                          >
                            <Linkedin className="h-4 w-4 mr-1" />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>
        ))}
        
        {/* Technical Publications */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Technical Publications & Research</h2>
              <p className="text-neutral-300">
                Our experts contribute to the advancement of engineering knowledge through research, 
                publications, and presentations at international conferences.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Advancements in TBM Tunneling for Challenging Ground Conditions in Urban India",
                  authors: "Dr. Amit Kumar, Arjun Singh",
                  publication: "International Journal of Tunneling and Underground Space Technology, 2022"
                },
                {
                  title: "Seismic Performance of Cable-Stayed Bridges: Case Studies from Indian Infrastructure Projects",
                  authors: "Sunita Mehta, Rajiv Sharma",
                  publication: "Journal of Bridge Engineering, 2023"
                },
                {
                  title: "Water Resource Management Strategies for Water-Stressed Urban Areas in India",
                  authors: "Rahul Sharma, Meera Reddy",
                  publication: "Journal of Water Resources Planning and Management, 2021"
                },
                {
                  title: "Implementation of BIM and Digital Twins for Infrastructure Asset Management in India",
                  authors: "Vijay Mishra, Vikram Singh",
                  publication: "Automation in Construction, 2022"
                },
                {
                  title: "Sustainable Approaches to Highway Design in Environmentally Sensitive Areas",
                  authors: "Deepa Patel, Meera Reddy",
                  publication: "Transportation Research Record, 2023"
                },
                {
                  title: "Renewable Energy Integration in Infrastructure Projects: Case Studies from India",
                  authors: "Neha Kapoor, Rahul Sharma",
                  publication: "Journal of Energy Engineering, 2022"
                }
              ].map((publication, i) => (
                <motion.div
                  key={publication.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{publication.title}</h3>
                  <p className="text-neutral-400 text-sm mb-2">By: {publication.authors}</p>
                  <p className="text-blue-300 text-sm italic">{publication.publication}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <a 
                href="#" 
                className="inline-flex items-center bg-blue-900/50 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                View All Publications
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </Container>
        </section>
        
        {/* Professional Development */}
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
                  Continuous Learning
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Professional Development & Knowledge Sharing</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, we invest in the continuous professional development of our 
                  technical experts. Through regular training programs, conference participation, and 
                  collaboration with academic institutions, our team stays at the forefront of engineering 
                  innovation and best practices.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our experts also share their knowledge through internal technical forums, mentoring 
                  programs, and industry workshops. This culture of knowledge sharing ensures that expertise 
                  is transferred across our organization and contributes to the professional growth of 
                  our entire team.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Regular technical training and workshop programs</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Participation in national and international conferences</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Collaborative research with academic institutions</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Internal knowledge sharing through technical forums</span>
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
                  src="https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Knowledge Sharing Session"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Join Our Team */}
        <section className="py-16 bg-neutral-50">
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
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Engineering Team"
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
                  Careers
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Join Our Technical Team</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  We're always looking for talented engineers and technical specialists to join our team. 
                  At Medallion Engineers, you'll have the opportunity to work on challenging and impactful 
                  projects while growing your expertise alongside some of the best minds in the industry.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-8">
                  We offer a collaborative work environment, opportunities for professional development, 
                  and a culture that values innovation and technical excellence. If you're passionate about 
                  engineering and want to make a difference through your work, we'd love to hear from you.
                </p>
                
                <a 
                  href="/careers" 
                  className="inline-flex items-center bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  View Open Positions
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Related Pages */}
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
                  title: "Leadership Team",
                  description: "Meet our executive leadership who guide the strategic direction and growth of Medallion Engineers.",
                  image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/leadership"
                },
                {
                  title: "Careers",
                  description: "Explore job opportunities and learn about what it's like to work at Medallion Engineers.",
                  image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/careers"
                },
                {
                  title: "Projects",
                  description: "See our technical expertise in action through our portfolio of successful projects.",
                  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/projects"
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