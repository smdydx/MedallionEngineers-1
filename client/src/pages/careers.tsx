import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { ChevronRight, MapPin, FileText, Mail } from "lucide-react";

export default function Careers() {
  // const openPositions = [
  //   {
  //     id: 1,
  //     title: "Senior Tunnel Engineer",
  //     department: "Engineering",
  //     location: "Delhi, India",
  //     type: "Full-time",
  //     description: "We are seeking an experienced Senior Tunnel Engineer to join our expanding tunnel engineering team. This role involves leading the design and analysis of complex tunnel projects, providing technical guidance to junior engineers, and collaborating with multidisciplinary teams.",
  //     requirements: [
  //       "Master's degree in Civil Engineering with specialization in Tunnel/Geotechnical Engineering",
  //       "8+ years of experience in tunnel design and construction",
  //       "Proficiency in tunnel design software (e.g., PLAXIS, RS3, Phase2)",
  //       "Experience with NATM and TBM tunneling methods",
  //       "Strong analytical and problem-solving skills"
  //     ],
  //     responsibilities: [
  //       "Lead the structural design of tunnel projects from concept to detailed design",
  //       "Perform complex geotechnical and structural analyses for tunnel projects",
  //       "Provide technical oversight and mentorship to junior engineers",
  //       "Interface with clients and contractors on technical matters",
  //       "Ensure design compliance with relevant codes and standards"
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "Structural Design Engineer",
  //     department: "Engineering",
  //     location: "Mumbai, India",
  //     type: "Full-time",
  //     description: "We are looking for a talented Structural Design Engineer to join our Mumbai office. The successful candidate will be involved in the design of various infrastructure projects including bridges, buildings, and specialized structures.",
  //     requirements: [
  //       "Bachelor's or Master's degree in Civil/Structural Engineering",
  //       "4+ years of experience in structural design and analysis",
  //       "Proficiency in structural analysis software (e.g., STAAD, ETABS, SAP2000)",
  //       "Experience with reinforced concrete and steel design",
  //       "Knowledge of relevant Indian and international design codes"
  //     ],
  //     responsibilities: [
  //       "Develop structural designs for various infrastructure projects",
  //       "Perform structural calculations and analysis",
  //       "Prepare technical reports and design documentation",
  //       "Collaborate with architectural and MEP teams",
  //       "Participate in design reviews and quality assurance processes"
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: "Transportation Engineer",
  //     department: "Engineering",
  //     location: "Bangalore, India",
  //     type: "Full-time",
  //     description: "We are seeking a Transportation Engineer to join our growing transportation infrastructure team. This role involves planning, designing, and analyzing transportation systems including highways, railways, and urban transit networks.",
  //     requirements: [
  //       "Bachelor's or Master's degree in Civil Engineering with specialization in Transportation",
  //       "5+ years of experience in transportation planning and design",
  //       "Proficiency in transportation modeling software",
  //       "Experience with highway/railway design and traffic analysis",
  //       "Knowledge of transportation planning principles and practices"
  //     ],
  //     responsibilities: [
  //       "Design transportation infrastructure including roads, highways, and transit systems",
  //       "Conduct traffic impact studies and analysis",
  //       "Develop transportation master plans",
  //       "Coordinate with urban planning and environmental teams",
  //       "Ensure compliance with transportation regulations and standards"
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: "BIM Specialist",
  //     department: "Digital Engineering",
  //     location: "Delhi/Mumbai/Bangalore (Hybrid)",
  //     type: "Full-time",
  //     description: "We are looking for a skilled BIM Specialist to enhance our digital engineering capabilities. This role involves implementing BIM processes, developing 3D models, and coordinating BIM integration across disciplines for complex infrastructure projects.",
  //     requirements: [
  //       "Bachelor's degree in Civil Engineering, Architecture, or related field",
  //       "3+ years of experience in BIM implementation for infrastructure projects",
  //       "Advanced proficiency in Revit, Civil 3D, and Navisworks",
  //       "Experience with BIM coordination and clash detection",
  //       "Knowledge of BIM standards and workflows"
  //     ],
  //     responsibilities: [
  //       "Develop and maintain 3D BIM models for infrastructure projects",
  //       "Coordinate BIM implementation across disciplines",
  //       "Establish BIM protocols and standards",
  //       "Provide BIM training and support to project teams",
  //       "Generate visualizations and simulations for project presentations"
  //     ]
  //   },
  //   {
  //     id: 5,
  //     title: "Environmental Engineer",
  //     department: "Environmental",
  //     location: "Delhi, India",
  //     type: "Full-time",
  //     description: "We are seeking an Environmental Engineer to support our commitment to sustainable infrastructure development. This role involves environmental impact assessments, sustainability analyses, and developing mitigation strategies for infrastructure projects.",
  //     requirements: [
  //       "Bachelor's or Master's degree in Environmental Engineering or related field",
  //       "4+ years of experience in environmental consulting for infrastructure projects",
  //       "Experience with environmental impact assessments and compliance",
  //       "Knowledge of environmental regulations and permitting processes",
  //       "Strong analytical and report writing skills"
  //     ],
  //     responsibilities: [
  //       "Conduct environmental impact assessments for infrastructure projects",
  //       "Develop environmental management and mitigation plans",
  //       "Ensure regulatory compliance and permit acquisition",
  //       "Integrate sustainable design principles into infrastructure projects",
  //       "Coordinate with stakeholders on environmental matters"
  //     ]
  //   },
  //   {
  //     id: 6,
  //     title: "Project Manager",
  //     department: "Project Management",
  //     location: "Mumbai, India",
  //     type: "Full-time",
  //     description: "We are looking for an experienced Project Manager to lead infrastructure project teams. This role involves overseeing project planning, execution, and delivery while ensuring client satisfaction, quality standards, and financial performance.",
  //     requirements: [
  //       "Bachelor's degree in Civil Engineering or related field",
  //       "7+ years of experience in project management for infrastructure projects",
  //       "PMP certification preferred",
  //       "Strong leadership, communication, and client management skills",
  //       "Experience with project management tools and methodologies"
  //     ],
  //     responsibilities: [
  //       "Lead project teams from inception to completion",
  //       "Develop and monitor project schedules, budgets, and resources",
  //       "Manage client relationships and stakeholder communications",
  //       "Identify and mitigate project risks",
  //       "Ensure quality control and contract compliance"
  //     ]
  //   }
  // ];

  const benefits = [
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, mentorship programs, and career advancement paths to help you reach your full potential.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Work on Impactful Projects",
      description: "Contribute to significant infrastructure projects that shape communities and improve quality of life across India.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Collaborative Environment",
      description: "Work alongside industry experts in a supportive and collaborative culture that values teamwork and innovation.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Comprehensive Benefits",
      description: "Competitive compensation, health insurance, retirement benefits, and work-life balance to support your overall wellbeing.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Learning & Development",
      description: "Access to training programs, conference participation, and educational resources to keep your skills at the cutting edge.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Innovation Culture",
      description: "Be part of a culture that encourages creative thinking, problem-solving, and the exploration of new technologies and approaches.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
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
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Careers at Medallion Engineers"
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
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">Build Your Career With Us</h1>
              <p className="text-lg md:text-xl text-blue-50">
                Join our team of talented professionals and make an impact through innovative engineering solutions
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
              <span className="text-primary font-medium">Careers</span>
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
                <h2 className="text-3xl font-bold text-primary mb-6">Join Our Team of Innovators</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, we believe that our people are our greatest asset. We're looking 
                  for talented, passionate individuals who share our commitment to excellence, innovation, 
                  and sustainable development.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Working with us means being part of a collaborative team that tackles some of India's 
                  most challenging and impactful infrastructure projects. From tunnel engineering to 
                  sustainable urban development, our diverse portfolio offers opportunities to grow your 
                  skills and make a meaningful difference.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  We invest in our people through continuous learning opportunities, mentorship programs, 
                  and a supportive work environment that encourages innovation and personal growth. If you're 
                  ready to take the next step in your career journey, explore our current openings and join 
                  our team of engineering professionals.
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
                  alt="Medallion Engineers Team"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Why Join Us */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Why Join Medallion Engineers"
              subtitle="The benefits of building your career with us"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-neutral-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Our Culture */}
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
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Team Collaboration"
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Team Discussion"
                    className="rounded-lg shadow-md w-full h-auto mt-8"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Team Working Together"
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Team Celebration"
                    className="rounded-lg shadow-md w-full h-auto mt-8"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="inline-block bg-primary/10 px-4 py-2 rounded-md text-primary font-medium text-sm mb-6">
                  Our Culture
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">A Culture of Excellence and Collaboration</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers, we've cultivated a culture that values technical excellence, 
                  collaborative problem-solving, and continuous innovation. Our diverse team brings together 
                  different perspectives and expertise to tackle complex engineering challenges.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  We believe in maintaining a healthy work-life balance, celebrating team achievements, 
                  and creating an inclusive environment where everyone feels valued and empowered to 
                  contribute their best work.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Open communication and knowledge sharing</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Recognition and appreciation of contributions</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Support for professional development and growth</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Commitment to diversity, equity, and inclusion</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Current Openings */}
        {/* <section className="py-16 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Current Openings"
              subtitle="Explore our available positions and find your next career opportunity"
              align="center"
            />
            
            <div className="mt-12 space-y-8">
              {openPositions.map((position) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200"
                >
                  <div className="p-6 border-b border-neutral-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                          {position.department}
                        </span>
                        <span className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-neutral-700 text-sm mb-4">
                      <MapPin className="h-4 w-4 text-neutral-500 mr-1" />
                      {position.location}
                    </div>
                    
                    <p className="text-neutral-700 mb-4">{position.description}</p>
                    
                    <div className="collapse-content">
                      <div className="mb-4">
                        <h4 className="font-bold text-primary mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                              <span className="text-neutral-700 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-primary mb-2">Responsibilities:</h4>
                        <ul className="space-y-1">
                          {position.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></div>
                              <span className="text-neutral-700 text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-neutral-50 flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
                    >
                      Apply Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center border border-primary text-primary hover:bg-primary/5 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      Job Description
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section> */}
        
        {/* Application Process */}
        <section className="py-16 bg-neutral-900 text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Application Process</h2>
              <p className="text-neutral-300">
                A straightforward journey from application to joining our team
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Application",
                  description: "Submit your application through our online portal with your resume, cover letter, and portfolio if applicable.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  number: "01"
                },
                {
                  title: "Initial Screening",
                  description: "Our HR team reviews your application and conducts a preliminary phone interview to understand your background and aspirations.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                  number: "02"
                },
                {
                  title: "Technical Interview",
                  description: "Selected candidates participate in a technical interview with senior engineers to assess expertise and problem-solving abilities.",
                  icon: (
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  number: "03"
                },
                {
                  title: "Final Interview & Offer",
                  description: "Final candidates meet with department leaders for a comprehensive discussion, followed by an offer if there's a strong match.",
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
        
        {/* Internship Program */}
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
                  Internship Program
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Launch Your Career with Our Internship Program</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Our internship program provides students and recent graduates with valuable hands-on 
                  experience working on real infrastructure projects. As an intern at Medallion Engineers, 
                  you'll gain practical skills, receive mentorship from experienced professionals, and get 
                  a glimpse into the exciting world of engineering consultancy.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-8">
                  We offer internships across various departments including structural engineering, 
                  tunnel engineering, transportation planning, and digital engineering. Many of our 
                  interns go on to become full-time employees, making this an excellent pathway to 
                  starting your career with us.
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  Learn About Internships
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
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Engineering Interns"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Contact & FAQ */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary mb-6">Contact Our Recruitment Team</h2>
                <p className="text-neutral-700 mb-6">
                  Have questions about our open positions or application process? Our recruitment team is here to help. 
                  Reach out to us for any career-related inquiries.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span className="text-neutral-700">careers@medallionindia.com</span>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span className="text-neutral-700">HR Department, Medallion Engineers Pvt. Ltd.<br />B335/5(New B-930), Sangam Gali, New Ashok Nagar, Delhi-110096</span>
                  </div>
                  
                  <div>
                    <a 
                      href="mailto:careers@medallionindia.com" 
                      className="inline-flex items-center bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
                    >
                      Email Recruitment Team
                      <Mail className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {[
                    {
                      question: "What should I include in my application?",
                      answer: "Your application should include an updated resume/CV, a cover letter explaining your interest in the position and Medallion Engineers, and any relevant portfolio or work samples for technical positions."
                    },
                    {
                      question: "How long does the application process take?",
                      answer: "Our typical hiring process takes 3-4 weeks from application to offer, though this may vary depending on the position and the volume of applications we receive."
                    },
                    {
                      question: "Do you offer remote work options?",
                      answer: "We offer flexible work arrangements including hybrid options for many positions. Specific arrangements depend on the role and department requirements."
                    },
                    {
                      question: "What growth opportunities are available?",
                      answer: "We provide numerous growth pathways including technical specialization, project management tracks, and leadership development programs to help you advance your career."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-primary mb-2">{faq.question}</h3>
                      <p className="text-neutral-700 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}