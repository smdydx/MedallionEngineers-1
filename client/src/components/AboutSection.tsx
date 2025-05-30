import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { SectionTitle } from "./ui/section-title";
import { Award, CheckCircle, LightbulbIcon, Users } from "lucide-react";

export function AboutSection() {
  // Define animation variants here to avoid type issues
  const staggerContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-neutral-100">
      <Container>
        <SectionTitle
          title="About Us"
          subtitle="Delivering engineering excellence through innovation and precision"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeftVariants}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Engineering team at work"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-primary text-white py-3 px-5 rounded shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-bold">15+ Years</p>
              <p className="text-sm">of Excellence</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
            className="space-y-6"
          >
            <motion.h3
              variants={fadeInUpVariants}
              className="text-2xl font-bold text-primary font-heading mb-4"
            >
              Medallion Engineers Private Limited
            </motion.h3>
            
            <motion.p
              variants={fadeInUpVariants}
              className="text-neutral-700 mb-6 leading-relaxed"
            >
              <span className="font-semibold text-primary">Medallion Engineers Private Limited</span> is a highly professional engineering firm specializing in civil 
              infrastructure development with a focus on tunnel construction and structural engineering. 
              With a team of experienced engineers and industry experts, we deliver innovative solutions 
              for complex engineering challenges.
            </motion.p>
            
            <motion.p
              variants={fadeInUpVariants}
              className="text-neutral-700 mb-6 leading-relaxed"
            >
              Our commitment to excellence, precision, and sustainable development has established us 
              as a trusted partner for government agencies, private developers, and construction 
              companies across India and beyond.
            </motion.p>
            
            <motion.div
              variants={slideInRightVariants}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              {[
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Excellence",
                  description: "Committed to the highest standards"
                },
                {
                  icon: <LightbulbIcon className="h-8 w-8" />,
                  title: "Innovation",
                  description: "Creative solutions to complex problems"
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Teamwork",
                  description: "Collaborative approach to projects"
                },
                {
                  icon: <CheckCircle className="h-8 w-8" />,
                  title: "Reliability",
                  description: "Trusted to deliver on our promises"
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start"
                  custom={i}
                  variants={featureItemVariants}
                >
                  <div className="text-primary text-3xl mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-1">{feature.title}</h4>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
