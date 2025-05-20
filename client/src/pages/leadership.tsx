import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ChevronRight, Linkedin, Mail, Phone } from "lucide-react";

export default function Leadership() {
  const leadershipTeam = [
    {
      id: 1,
      name: "Afroz Alam",
      position: "Founder & Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      description: "With over 25 years of experience in civil engineering and infrastructure development, Afroz founded Medallion Engineers in 2010. His visionary leadership has guided the company's growth into one of India's most respected engineering consultancies, with a focus on excellence and sustainability.",
      education: [
        "M.Tech. in Structural Engineering, IIT Delhi",
        "B.Tech. in Civil Engineering, BIT Mesra"
      ],
      expertise: [
        "Infrastructure Project Leadership",
        "Strategic Business Development",
        "Tunnel Engineering",
        "Public-Private Partnerships"
      ],
      achievements: [
        "Recipient of the Outstanding Engineer Award from the Institution of Engineers (India)",
        "Led projects worth over ₹2000 crores across India",
        "Published author in multiple engineering journals",
        "Advisory board member for national infrastructure initiatives"
      ],
      contact: {
        email: "afroz.alam@medallionindia.com",
        phone: "+91 9934320255",
        linkedin: "https://linkedin.com/in/afrozalam"
      }
    },
    {
      id: 2,
      name: "Rajiv Sharma",
      position: "Chief Technical Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      description: "Rajiv brings 20 years of specialized experience in structural and geotechnical engineering to his role as CTO. With a Ph.D. in Structural Engineering and expertise in tunnel design, he oversees all technical aspects of Medallion's projects, ensuring innovation and excellence in engineering solutions.",
      education: [
        "Ph.D. in Structural Engineering, IIT Bombay",
        "M.Tech. in Geotechnical Engineering, IIT Roorkee",
        "B.Tech. in Civil Engineering, NIT Warangal"
      ],
      expertise: [
        "Tunnel Engineering",
        "Structural Analysis",
        "Computational Engineering",
        "Seismic Design"
      ],
      achievements: [
        "Developed proprietary tunnel lining design methodology",
        "Published over 15 research papers in international journals",
        "Technical adviser to Delhi Metro Rail Corporation",
        "Recipient of the Young Engineer Award from the Indian Society of Structural Engineers"
      ],
      contact: {
        email: "rajiv.sharma@medallionindia.com",
        linkedin: "https://linkedin.com/in/rajivsharma"
      }
    },
    {
      id: 3,
      name: "Priya Verma",
      position: "Director of Operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      description: "As Director of Operations, Priya oversees project delivery and operational excellence at Medallion Engineers. With 15 years of experience in project management and civil engineering, she ensures that our projects are executed efficiently, on schedule, and to the highest quality standards.",
      education: [
        "MBA in Project Management, ISB Hyderabad",
        "B.Tech. in Civil Engineering, Delhi Technological University"
      ],
      expertise: [
        "Project Management",
        "Quality Assurance Systems",
        "Risk Management",
        "Process Optimization"
      ],
      achievements: [
        "Successfully delivered over 50 major infrastructure projects",
        "Implemented enterprise-wide project management system",
        "Reduced project delivery timelines by 15%",
        "Certified PMP and PRINCE2 Practitioner"
      ],
      contact: {
        email: "priya.verma@medallionindia.com",
        phone: "+91 9912345678",
        linkedin: "https://linkedin.com/in/priyaverma"
      }
    },
    {
      id: 4,
      name: "Sanjay Patel",
      position: "Director of Business Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      description: "Sanjay leads Medallion's business development initiatives, focusing on strategic growth, client relationships, and new market opportunities. With over 18 years in the infrastructure sector, he combines technical knowledge with business acumen to drive the company's expansion across India and South Asia.",
      education: [
        "MBA, XLRI Jamshedpur",
        "B.Tech. in Civil Engineering, VNIT Nagpur"
      ],
      expertise: [
        "Business Strategy",
        "Market Analysis",
        "Client Relationship Management",
        "Public Sector Engagement"
      ],
      achievements: [
        "Expanded company presence to 5 new cities",
        "Secured contracts worth ₹500+ crores in FY 2022-23",
        "Established partnerships with international engineering firms",
        "Developed Medallion's corporate social responsibility program"
      ],
      contact: {
        email: "sanjay.patel@medallionindia.com",
        linkedin: "https://linkedin.com/in/sanjaypatel"
      }
    },
    {
      id: 5,
      name: "Anita Gupta",
      position: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      description: "Anita oversees Medallion's financial strategy and operations, bringing 16 years of experience in financial management within the engineering and construction sectors. Her expertise in financial planning, risk management, and strategic investment has been instrumental in the company's sustainable growth.",
      education: [
        "Chartered Accountant, ICAI",
        "MBA in Finance, FMS Delhi",
        "B.Com (Hons), Delhi University"
      ],
      expertise: [
        "Financial Strategy",
        "Project Financing",
        "Risk Management",
        "Compliance & Governance"
      ],
      achievements: [
        "Secured project financing of ₹300+ crores",
        "Implemented robust financial control systems",
        "Achieved 20% reduction in operational costs",
        "Led successful ERP implementation across the organization"
      ],
      contact: {
        email: "anita.gupta@medallionindia.com",
        linkedin: "https://linkedin.com/in/anitagupta"
      }
    },
    {
      id: 6,
      name: "Vikram Singh",
      position: "Director of Innovation & Technology",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
      description: "Vikram leads Medallion's innovation initiatives, focusing on digital transformation, advanced engineering tools, and sustainable technologies. With a background in both engineering and computer science, he drives the adoption of cutting-edge technologies to enhance the company's service offerings and operational efficiency.",
      education: [
        "M.S. in Computer Science, Stanford University",
        "B.Tech. in Civil Engineering, IIT Madras"
      ],
      expertise: [
        "Digital Twin Technology",
        "BIM Implementation",
        "AI in Engineering",
        "Sustainable Technologies"
      ],
      achievements: [
        "Developed Medallion's Digital Engineering Practice",
        "Led implementation of company-wide BIM adoption",
        "Spearheaded R&D partnerships with academic institutions",
        "Awarded innovation grant from Ministry of Science & Technology"
      ],
      contact: {
        email: "vikram.singh@medallionindia.com",
        linkedin: "https://linkedin.com/in/vikramsingh"
      }
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
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Leadership Team"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Leadership Team</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Meet the visionaries who drive Medallion Engineers forward with expertise, innovation, and integrity
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
              <span className="text-primary font-medium">Leadership Team</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Leading with Excellence and Vision</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, our leadership team brings together decades of expertise in 
                  engineering, project management, and business development. Their collective experience 
                  and diverse perspectives drive our company's growth, innovation, and commitment to excellence.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our leaders are not just accomplished professionals; they are passionate advocates for 
                  sustainable development, technological innovation, and engineering excellence. Under their 
                  guidance, Medallion Engineers has established itself as a trusted partner for complex 
                  infrastructure projects across India.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Each member of our leadership team contributes unique strengths and expertise, working 
                  together to fulfill our mission of delivering innovative and sustainable engineering 
                  solutions that create lasting positive impact for communities.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Leadership Meeting"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Leadership Profiles */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Meet Our Leaders"
              subtitle="The team driving Medallion Engineers' success and innovation"
              align="center"
            />
            
            <div className="mt-16 space-y-20">
              {leadershipTeam.map((leader, index) => (
                <div key={leader.id} id={`leader-${leader.id}`} className="scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`grid md:grid-cols-3 gap-12 items-start ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`${index % 2 === 1 ? 'md:order-2 md:col-span-2' : 'md:col-span-2'}`}>
                      <h2 className="text-3xl font-bold text-primary mb-2">{leader.name}</h2>
                      <p className="text-secondary font-medium mb-6">{leader.position}</p>
                      
                      <p className="text-neutral-700 leading-relaxed mb-8">
                        {leader.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="font-bold text-primary mb-3">Education</h4>
                          <ul className="space-y-2">
                            {leader.education.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                                <span className="text-neutral-700 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-primary mb-3">Areas of Expertise</h4>
                          <ul className="space-y-2">
                            {leader.expertise.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                                <span className="text-neutral-700 text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="font-bold text-primary mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {leader.achievements.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                              <span className="text-neutral-700 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        {leader.contact.email && (
                          <a 
                            href={`mailto:${leader.contact.email}`}
                            className="inline-flex items-center bg-neutral-50 hover:bg-neutral-100 px-4 py-2 rounded-md text-neutral-700 text-sm transition-colors duration-300"
                          >
                            <Mail className="h-4 w-4 mr-2 text-primary" />
                            {leader.contact.email}
                          </a>
                        )}
                        
                        {leader.contact.phone && (
                          <a 
                            href={`tel:${leader.contact.phone}`}
                            className="inline-flex items-center bg-neutral-50 hover:bg-neutral-100 px-4 py-2 rounded-md text-neutral-700 text-sm transition-colors duration-300"
                          >
                            <Phone className="h-4 w-4 mr-2 text-primary" />
                            {leader.contact.phone}
                          </a>
                        )}
                        
                        {leader.contact.linkedin && (
                          <a 
                            href={leader.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-neutral-50 hover:bg-neutral-100 px-4 py-2 rounded-md text-neutral-700 text-sm transition-colors duration-300"
                          >
                            <Linkedin className="h-4 w-4 mr-2 text-primary" />
                            LinkedIn Profile
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  {index < leadershipTeam.length - 1 && (
                    <div className="border-b border-neutral-200 mt-20"></div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Leadership Principles</h2>
              <p className="text-neutral-300">
                The core principles that guide our leadership approach and decision-making
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Integrity",
                  description: "Leading with honesty, transparency, and ethical conduct in all business dealings and professional relationships.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Excellence",
                  description: "Striving for the highest standards of quality and performance in everything we do, from technical solutions to client service.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                {
                  title: "Innovation",
                  description: "Fostering a culture of creativity, continuous improvement, and forward-thinking to develop pioneering solutions for complex challenges.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Client Focus",
                  description: "Prioritizing client needs and objectives, building strong relationships based on trust, and delivering solutions that exceed expectations.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: "Team Empowerment",
                  description: "Developing and supporting our team members, recognizing their contributions, and creating an environment where everyone can excel.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: "Social Responsibility",
                  description: "Leading with a commitment to social impact, environmental stewardship, and positive contributions to the communities we serve.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
        
        {/* Join Our Team */}
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
                  Join Our Team
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Build Your Career with Medallion Engineers</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, we're always looking for talented professionals to join our team. 
                  We offer a dynamic work environment that fosters innovation, professional growth, and 
                  meaningful contributions to impactful projects.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-8">
                  Our leadership team is committed to mentoring the next generation of engineering 
                  leaders and creating opportunities for career advancement. If you're passionate about 
                  engineering excellence and want to be part of an organization that values your 
                  contributions, we invite you to explore career opportunities with us.
                </p>
                
                <a 
                  href="/careers" 
                  className="inline-flex items-center bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  Explore Career Opportunities
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Team Collaboration"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Related Pages */}
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
                  description: "Learn about our history, structure, and what makes Medallion Engineers a leader in the industry.",
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/company-overview"
                },
                {
                  title: "Our Mission & Vision",
                  description: "Discover our guiding principles and aspirations that drive our work and shape our future direction.",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/mission-vision"
                },
                {
                  title: "Technical Experts",
                  description: "Meet our team of specialized engineers and technical professionals who bring expertise to every project.",
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                  link: "/experts"
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