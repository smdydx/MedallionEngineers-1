import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Mail, MessageCircle, Phone, MapPin, Calendar } from "lucide-react";
import img from "../assets/demo.jpg";
import heroVideo from "../assets/photo3.mp4";

const ComingSoon: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLaunch = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/home";
    }, 2000);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/+919934320355", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@medallionindia.com";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm border-b border-gray-100 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold text-gray-800">
              Medallion Engineers Private Limited
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmail}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">Contact</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Company Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <img
                src={img}
                alt="Medallion Engineers Private Limited"
                className="mx-auto h-32 md:h-40 w-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block bg-blue-600/20 backdrop-blur-sm text-blue-100 px-6 py-3 rounded-full text-sm font-medium border border-blue-400/30"
            >
              <Calendar className="inline h-4 w-4 mr-2" />
              Coming Soon....
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-7xl font-bold leading-tight"
            >
              Medallion Engineers
              <span className="block text-blue-300">Private Limited</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Leading engineering consultancy firm specializing in
                infrastructure development, tunnel engineering, and
                comprehensive project management solutions.
              </p>

              <div className="text-left max-w-4xl mx-auto text-gray-200 space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  Founded in 2025, Medallion Engineers Private Limited has
                  established itself as a leading engineering consultancy firm
                  in India, specializing in infrastructure development, tunnel
                  engineering, and comprehensive project management solutions.
                </p>

                <p>
                  With our headquarters in Delhi and presence across major
                  cities in India, we are delivering projects across various
                  sectors including transportation, urban development, water
                  infrastructure, and industrial facilities.
                </p>

                <p>
                  Our team of over 20 highly qualified engineers and specialists
                  brings together expertise in structural engineering,
                  geotechnical engineering, project management, and systems
                  integration to provide holistic solutions to complex
                  engineering challenges.
                </p>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
            >
              {[
                { number: "10+", label: "Projects Delivered" },
                { number: "20+", label: "Expert Engineers" },
                { number: "1+", label: "Major Cities" },
                { number: "2025", label: "Established" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
              <Button
                onClick={handleLaunch}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Loading...
                  </div>
                ) : (
                  "Launch Website"
                )}
              </Button>

              <Button
                onClick={handleEmail}
                variant="outline"
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Key Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions across multiple disciplines
              and sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Infrastructure Development",
                description:
                  "Complex engineering solutions for transportation, urban development, and industrial facilities with focus on sustainability and innovation.",
                icon: "🏗️",
              },
              {
                title: "Tunnel Engineering",
                description:
                  "Specialized expertise in underground construction, tunnel systems, and subsurface infrastructure with advanced technology.",
                icon: "🚇",
              },
              {
                title: "Project Management",
                description:
                  "End-to-end project delivery with quality assurance, timeline management, and comprehensive oversight across all phases.",
                icon: "📋",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-gray-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to discuss your engineering project? Contact our team for
              consultation and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center cursor-pointer"
              onClick={handleEmail}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">info@medallionindia.com</p>
              <div className="text-blue-600 font-medium">Send Message →</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center cursor-pointer"
              onClick={handleWhatsApp}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">+91-99343 20355</p>
              <div className="text-green-600 font-medium">Chat Now →</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">New Delhi, India</p>
              <div className="text-purple-600 font-medium">View Location →</div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ComingSoon;
