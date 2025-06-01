
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Calendar,
  Building2,
  Users,
  Award,
  Target,
  ArrowRight,
  Play,
  Pause
} from "lucide-react";
import img from "../assets/demo.jpg";
import videoSrc from "../assets/photo3.mp4";

const ComingSoon: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 px-6 py-4 sticky top-0 z-50"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-xl">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">
                  Medallion Engineers
                </div>
                <div className="text-sm text-gray-600">Private Limited</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmail}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                <Mail className="h-5 w-5" />
                <span className="hidden sm:inline">Contact</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="hidden sm:inline font-medium">WhatsApp</span>
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold shadow-sm"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Launching Soon
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
                  >
                    Engineering
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                      Excellence
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                  >
                    Founded in 2025, Medallion Engineers Private Limited has established itself as a leading engineering consultancy firm in India, specializing in infrastructure development, tunnel engineering, and comprehensive project management solutions.
                  </motion.p>
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="grid grid-cols-3 gap-6"
                >
                  {[
                    { icon: Building2, number: "10+", label: "Projects" },
                    { icon: Users, number: "20+", label: "Engineers" },
                    { icon: Award, number: "100%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    onClick={handleLaunch}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Loading...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Target className="mr-2 h-5 w-5" />
                        Launch Website
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    )}
                  </Button>

                  <Button
                    onClick={handleEmail}
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Column - Visual with Video */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                  {/* Video Section */}
                  <div className="relative mb-8">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <video
                        ref={videoRef}
                        className="w-full h-64 object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={videoSrc} type="video/mp4" />
                      </video>
                    </div>
                    <button
                      onClick={toggleVideo}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      {isVideoPlaying ? (
                        <Pause className="h-5 w-5 text-gray-700" />
                      ) : (
                        <Play className="h-5 w-5 text-gray-700" />
                      )}
                    </button>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Engineering Excellence Since 2025
                      </h3>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/50">
                          <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                          <div className="text-gray-600 text-sm font-medium">Projects Completed</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/50">
                          <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                          <div className="text-gray-600 text-sm font-medium">Expert Engineers</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-200 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-gray-50/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Delivering comprehensive engineering solutions across multiple disciplines
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Infrastructure Development",
                  description: "Complex engineering solutions for transportation and urban development"
                },
                {
                  icon: Target,
                  title: "Tunnel Engineering",
                  description: "Specialized expertise in underground construction and systems"
                },
                {
                  icon: Users,
                  title: "Project Management",
                  description: "End-to-end project delivery with quality assurance"
                },
                {
                  icon: Award,
                  title: "Quality Engineering",
                  description: "Commitment to excellence in every project we undertake"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Ready to discuss your engineering project? Contact our team for consultation and support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200 text-center cursor-pointer group"
                onClick={handleEmail}
              >
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl">Email Us</h3>
                <p className="text-gray-700 mb-4 font-medium">info@medallionindia.com</p>
                <div className="text-blue-600 font-semibold flex items-center justify-center">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border border-green-200 text-center cursor-pointer group"
                onClick={handleWhatsApp}
              >
                <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl">WhatsApp</h3>
                <p className="text-gray-700 mb-4 font-medium">+91-99343 20355</p>
                <div className="text-green-600 font-semibold flex items-center justify-center">
                  Chat Now <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-purple-200 text-center group"
              >
                <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl">Visit Us</h3>
                <p className="text-gray-700 mb-4 font-medium">New Delhi, India</p>
                <div className="text-purple-600 font-semibold flex items-center justify-center">
                  View Location <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ComingSoon;
