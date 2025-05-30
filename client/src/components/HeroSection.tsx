
import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { ArrowDown, Award, Users, Building, CheckCircle } from "lucide-react";

export function HeroSection() {
  // Define animations directly in component to avoid type issues
  const staggerContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUpVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const scaleInVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInLeftVariants = {
    initial: { opacity: 0, x: -60 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRightVariants = {
    initial: { opacity: 0, x: 60 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Engineering Excellence"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-blue-900/85 to-slate-900/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={staggerContainerVariants}
            initial="initial"
            animate="animate"
          >
            {/* Company Badge */}
            <motion.div
              className="inline-flex items-center justify-center lg:justify-start mb-6"
              variants={scaleInVariants}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-cyan-300" />
                  <span className="text-white text-sm font-semibold tracking-wide">
                    ISO 9001:2015 Certified
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              className="mb-6"
              variants={fadeInUpVariants}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2 tracking-wide">
                MEDALLION ENGINEERS
              </h2>
              <p className="text-lg text-white/80 font-medium">
                Private Limited
              </p>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6"
              variants={fadeInUpVariants}
            >
              Engineering Excellence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 relative">
                Building Tomorrow
                <motion.div 
                  className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
                />
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed"
              variants={fadeInUpVariants}
            >
              Delivering innovative engineering solutions with precision, expertise, and commitment 
              to excellence for infrastructure development projects across India.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={fadeInUpVariants}
            >
              <motion.a 
                href="#projects" 
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Building className="mr-2 h-5 w-5" />
                Explore Our Projects
                <motion.span 
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </motion.a>
              <motion.a 
                href="#contact" 
                className="group border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Consultation
                <motion.span 
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              variants={fadeInUpVariants}
            >
              {[
                { icon: Building, value: "200+", label: "Projects Completed" },
                { icon: Users, value: "15+", label: "Years Experience" },
                { icon: Award, value: "50+", label: "Expert Engineers" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mb-2">
                    <stat.icon className="h-6 w-6 text-cyan-300 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            className="space-y-6"
            variants={slideInRightVariants}
            initial="initial"
            animate="animate"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Quality Management Certified",
                  "Expert Team of Licensed Engineers",
                  "Cutting-edge Technology & Innovation",
                  "On-time Project Delivery Guarantee",
                  "Comprehensive Engineering Solutions"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-300 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <motion.div
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg border border-cyan-300/30 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-white mb-2">Ready to Start Your Project?</h4>
              <p className="text-white/80 text-sm mb-4">
                Get expert consultation and detailed project estimates
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
              >
                Contact Our Team
                <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
      >
        <a href="#about" className="flex flex-col items-center group">
          <span className="mb-2 text-xs font-medium group-hover:text-cyan-300 transition-colors">Discover More</span>
          <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-cyan-300 transition-colors" />
        </a>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-cyan-300/30 rotate-45 hidden lg:block"></div>
    </section>
  );
}
