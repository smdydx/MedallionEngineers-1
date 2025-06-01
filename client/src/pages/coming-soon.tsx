import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import img from "../assets/demo.jpg";

const ComingSoon: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLaunch = () => {
    setIsLoading(true);
    // Simulate loading and redirect to main site
    setTimeout(() => {
      window.location.href = "/home";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center p-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
        >
          {/* Company Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={img}
              alt="Medallion Engineers Private Limited"
              className="mx-auto h-32 md:h-40 w-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Medallion Engineers Private Limited
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl text-blue-100 mb-6 font-semibold">
              Coming Soon.....
            </h2>

            <div className="text-left max-w-3xl mx-auto text-blue-100 space-y-4 text-sm md:text-base">
              <p>
                Founded in 2025, Medallion Engineers Private Limited has
                established itself as a leading engineering consultancy firm in
                India, specializing in infrastructure development, tunnel
                engineering, and comprehensive project management solutions.
              </p>

              <p>
                With our headquarters in Delhi and presence across major cities
                in India, we are delivering projects across various sectors
                including transportation, urban development, water
                infrastructure, and industrial facilities.
              </p>

              <p>
                Our team of over 20 highly qualified engineers and specialists
                brings together expertise in structural engineering,
                geotechnical engineering, project management, and systems
                integration to provide holistic solutions to complex engineering
                challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              onClick={handleLaunch}
              disabled={isLoading}
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-900 mr-2"></div>
                  Loading...
                </div>
              ) : (
                "Launch Website"
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
