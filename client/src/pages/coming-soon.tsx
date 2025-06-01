
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
                className="mx-auto h-20 sm:h-24 md:h-32 lg:h-40 w-auto"
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
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed">
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
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-100 text-sm sm:text-base">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-2">20+</div>
                <div className="text-blue-100 text-sm sm:text-base">Expert Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100 text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-2">5+</div>
                <div className="text-blue-100 text-sm sm:text-base">Cities</div>
              </div>
            </motion.div>

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
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engineering Excellence in Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Witness our commitment to precision and innovation
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={headerImage}
              alt="Medallion Engineers - Engineering Excellence"
              className="w-full h-auto object-cover"
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
                description:
                  "Complex engineering solutions for transportation, urban development, and industrial facilities with focus on sustainability and innovation.",
              },
              {
                title: "Construction Equipment",
                description:
                  "State-of-the-art construction equipment and machinery for efficient project execution, including tunneling, excavation, and heavy lifting.",
              },
              {
                title: "Tunnel Engineering",
                description:
                  "Specialized expertise in underground construction, tunnel systems, and subsurface infrastructure with advanced technology.",
              },
              {
                title: "Project Management",
                description:
                  "End-to-end project delivery with quality assurance, timeline management, and comprehensive oversight across all phases.",
              },
              {
                title: "Mining and Geotechnical",
                description:
                  "Expertise in mining operations, geotechnical investigations, and subsurface analysis to ensure safety and efficiency.",
              },
              {
                title: "Financial Services",
                description:
                  "Financial consulting and investment advisory services tailored for engineering projects, ensuring optimal resource allocation and risk management.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
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
        className="bg-gray-50 py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4 text-sm sm:text-base">
              Ready to discuss your engineering project? Contact our team for
              consultation and support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 text-center cursor-pointer"
              onClick={handleEmail}
            >
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Email Us</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">info@medallionindia.com</p>
              <div className="text-blue-600 font-medium text-sm sm:text-base">Send Message →</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 text-center cursor-pointer"
              onClick={handleWhatsApp}
            >
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">WhatsApp</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">+91-99343 20355</p>
              <div className="text-green-600 font-medium text-sm sm:text-base">Chat Now →</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 text-center sm:col-span-2 lg:col-span-1"
            >
              <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Visit Us</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">New Delhi, India</p>
              <div className="text-purple-600 font-medium text-sm sm:text-base">View Location →</div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ComingSoon;
