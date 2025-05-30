
import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { ArrowRight, Shield, Target, Zap, Building2, Users, Award, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center lg:justify-start mb-6"
            >
              <div className="relative bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-full shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-semibold tracking-wide">
                    🏆 ISO 9001:2015 Certified Engineering Firm
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                MEDALLION
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 relative">
                  ENGINEERS
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                  />
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 font-light tracking-wide">
                Engineering Excellence • Building Tomorrow
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl"
            >
              Transforming infrastructure dreams into reality with cutting-edge engineering solutions, 
              innovative design methodologies, and unwavering commitment to excellence.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#projects"
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Building2 className="mr-3 h-6 w-6" />
                Explore Projects
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group relative border-2 border-slate-400/30 hover:border-cyan-400 text-white hover:bg-cyan-500/10 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-xl flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                Get Consultation
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Building2, value: "200+", label: "Projects", color: "from-cyan-400 to-blue-400" },
                { icon: Users, value: "15+", label: "Years", color: "from-blue-400 to-purple-400" },
                { icon: Award, value: "50+", label: "Engineers", color: "from-purple-400 to-pink-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-4"
            >
              {/* Excellence Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Quality Assurance</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    ISO 9001:2015 certified processes ensuring world-class engineering standards and project excellence.
                  </p>
                </div>
              </motion.div>

              {/* Innovation Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Innovation</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Cutting-edge technology and innovative methodologies for next-generation infrastructure solutions.
                  </p>
                </div>
              </motion.div>

              {/* Results Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl group overflow-hidden"
              >
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Proven Results</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    200+ successful projects with 100% on-time delivery track record across India.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="relative bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-2xl border border-cyan-300/30 rounded-3xl p-8 shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Vision?</h4>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Let our expert engineers turn your infrastructure dreams into extraordinary reality with precision and excellence.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center bg-white text-slate-900 px-6 py-3 rounded-2xl font-bold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-white/60 hover:text-cyan-400 transition-colors duration-300 group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium mb-2 group-hover:text-cyan-400 transition-colors">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-cyan-400 transition-colors">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-cyan-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.a>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-16 h-16 border border-cyan-300/20 rotate-45 hidden lg:block animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full hidden lg:block animate-ping"></div>
    </section>
  );
}
