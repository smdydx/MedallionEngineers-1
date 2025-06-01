
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Building2, Sparkles, Star } from 'lucide-react';
import { MedallionLogo } from '@/assets/medallion-logo';

export default function ComingSoon() {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = () => {
    setIsLaunching(true);
    
    // 3 सेकंड बाद home page पर redirect करें
    setTimeout(() => {
      window.location.href = '/home';
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <MedallionLogo className="w-32 h-32 md:w-40 md:h-40" color="#60A5FA" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
              MEDALLION
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                ENGINEERS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-light tracking-wide">
              Engineering Excellence • Building Tomorrow
            </p>
          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-blue-500/30 px-8 py-4 rounded-full shadow-2xl mb-8"
          >
            <div className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-white text-lg font-bold tracking-wide">
                COMING SOON
              </span>
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Company Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            {/* Company Image */}
            <div className="mb-8 flex justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                src="/attached_assets/1000357991.png"
                alt="Medallion Engineers Private Limited"
                className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 shadow-2xl"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Medallion Engineers Private Limited
              </h3>
              
              <div className="space-y-4 text-slate-200 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-cyan-400">Founded in 2010</strong>, Medallion Engineers Private Limited has established itself as a 
                  <strong className="text-blue-300"> leading engineering consultancy firm in India</strong>, specializing in infrastructure 
                  development, tunnel engineering, and comprehensive project management solutions.
                </p>
                
                <p className="text-lg">
                  With our <strong className="text-cyan-400">headquarters in Delhi</strong> and presence across major cities in India, 
                  we have successfully delivered <strong className="text-blue-300">over 200 projects</strong> across various sectors 
                  including transportation, urban development, water infrastructure, and industrial facilities.
                </p>
                
                <p className="text-lg">
                  Our team of <strong className="text-cyan-400">over 50 highly qualified engineers</strong> and specialists brings 
                  together expertise in structural engineering, geotechnical engineering, project management, and systems integration 
                  to provide <strong className="text-blue-300">holistic solutions to complex engineering challenges</strong>.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">2010</div>
                  <div className="text-sm text-slate-300">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">200+</div>
                  <div className="text-sm text-slate-300">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-slate-300">Engineers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">Delhi</div>
                  <div className="text-sm text-slate-300">Headquarters</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Launch Button */}
          <AnimatePresence>
            {!isLaunching ? (
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                onClick={handleLaunch}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Rocket className="mr-4 h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />
                LAUNCH WEBSITE
                <Star className="ml-4 h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                {/* Loading Animation */}
                <div className="relative mb-8">
                  <motion.div
                    className="w-24 h-24 border-4 border-cyan-500/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-cyan-400 rounded-full"></div>
                  </motion.div>
                  <Building2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-cyan-400" />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Website Launch हो रही है...
                  </h3>
                  <p className="text-slate-300 text-lg">
                    कृपया थोड़ा इंतज़ार करें
                  </p>
                </motion.div>

                {/* Progress Dots */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex space-x-2 mt-6"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-cyan-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats Preview */}
          {!isLaunching && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
            >
              {[
                { value: "200+", label: "Projects" },
                { value: "15+", label: "Years" },
                { value: "50+", label: "Engineers" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-16 h-16 border border-cyan-300/20 rotate-45 hidden lg:block animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full hidden lg:block animate-ping"></div>
    </div>
  );
}
