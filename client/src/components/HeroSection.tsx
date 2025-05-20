import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  // Define animations directly in component to avoid type issues
  const staggerContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleInVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const fadeInVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-0 h-screen flex items-center bg-gradient-to-r from-primary to-secondary hero-animation overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1577190651915-5a11212d3d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Engineering Infrastructure"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-secondary/60 mix-blend-multiply"></div>
      </div>
      
      <Container className="relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center md:text-left md:items-start"
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="flex items-center justify-center md:justify-start mb-4"
            variants={scaleInVariants}
          >
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg inline-block">
              <motion.div 
                className="text-white text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Welcome to Medallion Engineers
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6"
            variants={fadeInUpVariants}
          >
            Building The Future<br />
            <span className="text-blue-200 relative">
              Engineering Excellence
              <motion.span 
                className="absolute bottom-1 left-0 w-full h-1 bg-white"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
              ></motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white max-w-2xl mb-8"
            variants={fadeInUpVariants}
          >
            Medallion Engineers Private Limited delivers innovative engineering solutions with 
            precision and expertise for infrastructure development projects.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            variants={fadeInVariants}
          >
            <motion.a 
              href="#projects" 
              className="bg-white text-primary px-8 py-3 rounded-md font-medium transition duration-300 hover:bg-blue-100 text-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium transition duration-300 hover:bg-white hover:text-primary hover:bg-opacity-100 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium">Scroll Down</span>
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
