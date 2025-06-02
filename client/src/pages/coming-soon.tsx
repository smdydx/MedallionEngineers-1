import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Mail, MessageCircle, MapPin, Calendar } from "lucide-react";
import img from "../assets/demo.jpg";
import heroVideo from "../assets/photo3.mp4";
import headerImage from "../assets/header.jpg";

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

  // Set body padding and margin to 0
  React.useEffect(() => {
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    return () => {
      document.body.style.padding = "";
      document.body.style.margin = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white p-0 m-0">
      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-0 m-0">
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
          <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-20 text-center text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Company Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <img
                src={img}
                alt="Medallion Engineers Private Limited"
                className="mx-auto h-32 sm:h-36 md:h-40 lg:h-48 w-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block bg-blue-600/20 backdrop-blur-sm text-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg md:text-xl font-medium border border-blue-400/30"
            >
              <Calendar className="inline h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-6 mr-2" />
              Coming Soon....
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight px-2"
            >
              Medallion Engineers
              <span className="block text-blue-300">Private Limited</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-2"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed font-bold">
                Leading engineering consultancy firm specializing in
                infrastructure development, tunnel engineering, and
                comprehensive project management solutions.
              </p>

              <div className="text-left max-w-4xl mx-auto text-gray-200 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  Founded in 2025, Medallion Engineers Private Limited has
                  established itself as a leading engineering consultancy firm
                  in India, specializing in infrastructure development, tunnel
                  engineering, and comprehensive project management solutions.
                </p>

                <p className="hidden sm:block">
                  With our headquarters in Delhi and presence across major
                  cities in India, we are delivering projects across various
                  sectors including transportation, urban development, water
                  infrastructure, and industrial facilities.
                </p>

                <p className="hidden md:block">
                  Our team of over 20 highly qualified engineers and specialists
                  brings together expertise in structural engineering,
                  geotechnical engineering, project management, and systems
                  integration to provide holistic solutions to complex
                  engineering challenges.
                </p>
              </div>
            </motion.div>

            {/* Statistics - Hidden on small screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12"
            ></motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 px-4"
            >
              <Button
                onClick={handleLaunch}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    Loading...
                  </div>
                ) : (
                  "Launch Website"
                )}
              </Button>

              <Button
                onClick={handleEmail}
                variant="outline"
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Header Image Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-4 sm:mb-6 md:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Engineering Excellence in Action
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Witness our commitment to precision and innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg"
          >
            <img
              src={headerImage}
              alt="Medallion Engineers - Engineering Excellence"
              className="w-full h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Key Services Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Expertise
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive engineering solutions across multiple disciplines
              and sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
                {
                  title: "Infrastructure Development",
                  description: "Comprehensive infrastructure solutions for sustainable urban and regional development projects.",
                  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: "Tunnel Engineering",
                  description: "Advanced tunneling solutions for transportation and utility infrastructure projects.",
                  image: "https://images.unsplash.com/photo-1545193544-312983719627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Project Management",
                  description: "End-to-end project management services ensuring efficient coordination and timely delivery.",
                  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                },
                {
                  title: "Construction Equipment",
                  description: "Modern construction equipment and machinery solutions for enhanced project efficiency.",
                  image: "https://images.unsplash.com/photo-1559664417-8ed1e1b4acf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Mining & Geotechnical",
                  description: "Specialized expertise in mining engineering and geotechnical analysis for challenging projects.",
                  image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  title: "Financial Services",
                  description: "Comprehensive financial solutions and advisory services for infrastructure projects.",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                  icon: (
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((service, index) => (
              <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src={img}
                  alt="Medallion Engineers"
                  className="h-10 w-auto"
                />
                <h3 className="text-lg font-bold">Medallion Engineers Pvt. Ltd.</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Leading engineering consultancy firm specializing in infrastructure development, tunnel engineering, and comprehensive project management solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">info@medallionindia.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300 text-sm">+91-99343 20355</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300 text-sm">New Delhi, India</span>
                </div>
              </div>
            </div>

            </div>

          {/* Map Section */}
          <div className="mt-12">
            <h3 className="text-lg font-bold mb-6 text-center">Our Location</h3>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-semibold">New Delhi Office</span>
              </div>
              <p className="text-gray-300 mb-4">
                Medallion Engineers Private Limited<br />
                New Delhi, India
              </p>
              <div className="bg-gray-700 rounded-lg p-8 border-2 border-dashed border-gray-600">
                <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Medallion Engineers Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Icons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {/* WhatsApp Icon */}
        <motion.button
          onClick={handleWhatsApp}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            WhatsApp
          </div>
        </motion.button>

        {/* Email Icon */}
        <motion.button
          onClick={handleEmail}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
          aria-label="Send us an email"
        >
          <Mail className="h-6 w-6" />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Email
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default ComingSoon;