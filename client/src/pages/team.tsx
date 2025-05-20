import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { TeamMember } from "@/components/TeamMember";
import { teamMembers } from "@/lib/data";
import { CTASection } from "@/components/CTASection";

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-secondary py-24 md:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Team</h1>
              <p className="text-xl max-w-3xl mx-auto text-blue-100">
                Meet the experts behind our engineering excellence
              </p>
            </motion.div>
          </Container>
        </div>
        
        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <Container>
            <SectionTitle
              title="Leadership Team"
              subtitle="The visionaries driving Medallion Engineers forward"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {teamMembers.map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </Container>
        </section>
        
        {/* Technical Experts */}
        <section className="py-20 bg-neutral-50">
          <Container>
            <SectionTitle
              title="Our Technical Experts"
              subtitle="Specialized professionals across engineering disciplines"
              align="center"
            />
            
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  name: "Dr. Rajan Sharma",
                  position: "Structural Engineering Lead",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                },
                {
                  name: "Priya Verma",
                  position: "Geotechnical Specialist",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                },
                {
                  name: "Arjun Mehta",
                  position: "Transportation Engineer",
                  image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                },
                {
                  name: "Nisha Kapoor",
                  position: "Environmental Engineer",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                }
              ].map((expert, i) => (
                <motion.div
                  key={expert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md text-center"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-neutral-900">{expert.name}</h3>
                    <p className="text-primary font-medium text-sm">{expert.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Join Our Team */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary font-heading mb-6">Join Our Team</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  At Medallion Engineers Private Limited, we're always looking for talented professionals who are passionate about engineering and infrastructure development.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  We offer a collaborative work environment, challenging projects, and opportunities for professional growth and development.
                </p>
                <div className="space-y-4">
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h4 className="font-bold text-primary">Structural Engineer</h4>
                    <p className="text-sm text-neutral-600">Delhi | Full-time</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h4 className="font-bold text-primary">Project Manager</h4>
                    <p className="text-sm text-neutral-600">Mumbai | Full-time</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-md">
                    <h4 className="font-bold text-primary">Civil Engineer</h4>
                    <p className="text-sm text-neutral-600">Delhi | Full-time</p>
                  </div>
                </div>
                <button className="mt-8 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition duration-300">
                  View All Openings
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
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