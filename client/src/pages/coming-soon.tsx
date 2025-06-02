
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, MessageCircle, MapPin, Calendar, Phone, Clock, Send, Building, Users, Award, Globe } from "lucide-react";
import img from "../assets/demo.jpg";
import heroVideo from "../assets/photo3.mp4";
import headerImage from "../assets/header.jpg";

const ComingSoon: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your enquiry! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
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

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12"
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full mx-auto mb-2">
                  <Building className="h-6 w-6 text-blue-300" />
                </div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-blue-200 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-300" />
                </div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-blue-200 text-sm">Expert Engineers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full mx-auto mb-2">
                  <Award className="h-6 w-6 text-blue-300" />
                </div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full mx-auto mb-2">
                  <Globe className="h-6 w-6 text-blue-300" />
                </div>
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-blue-200 text-sm">Cities Presence</div>
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

      {/* Enhanced Contact Section with Enquiry Form */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="bg-gray-50 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Submit Your Enquiry
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Ready to discuss your engineering project? Fill out the form below or contact our team directly for consultation and support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us an Enquiry</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project consultation, Service enquiry, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Enquiry
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information and Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer"
                  onClick={handleEmail}
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-3">info@medallionindia.com</p>
                  <div className="text-blue-600 font-medium">Send Message →</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer"
                  onClick={handleWhatsApp}
                >
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-3">+91-99343 20355</p>
                  <div className="text-green-600 font-medium">Chat Now →</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1"
                >
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-1">Mobile: +91-99343 20355</p>
                  <p className="text-gray-600 mb-3">Landline: +91-11-XXXX-XXXX</p>
                  <div className="text-purple-600 font-medium">Call Now →</div>
                </motion.div>
              </div>

              {/* Office Location with Map */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Our Office</h3>
                    <p className="text-gray-600 text-sm">Head Office - New Delhi</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Medallion Engineers Private Limited</strong><br />
                    B335/5 (New B-930), Ground Floor<br />
                    Sangam Gali, New Ashok Nagar<br />
                    Delhi - 110096, India
                  </p>
                </div>

                {/* Google Maps Embed */}
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2336!2d77.30244!3d28.62745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456a36b3b7%3A0x2b2b2d5e5e5e5e5e!2sNew%20Ashok%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Medallion Engineers Office Location"
                  ></iframe>
                </div>

                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <div>
                    <p><strong>Business Hours:</strong></p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Professional Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <img src={img} alt="Medallion Engineers" className="h-12 w-auto mr-3" />
                <div>
                  <h3 className="text-xl font-bold">Medallion Engineers</h3>
                  <p className="text-sm text-gray-400">Private Limited</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading engineering consultancy firm specializing in infrastructure development, 
                tunnel engineering, and comprehensive project management solutions across India.
              </p>
              
              {/* ISO Certifications */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-900/30 text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                  ISO 9001:2015
                </span>
                <span className="bg-green-900/30 text-green-200 px-3 py-1 rounded-full text-xs font-medium">
                  ISO 14001:2015
                </span>
                <span className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-xs font-medium">
                  MSME Certified
                </span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-blue-600 transition-colors duration-300 p-2 rounded-md">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-600 transition-colors duration-300 p-2 rounded-md">
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-600 transition-colors duration-300 p-2 rounded-md">
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Our Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Projects</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">News & Updates</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    B335/5 (New B-930), Ground Floor<br />
                    Sangam Gali, New Ashok Nagar<br />
                    Delhi - 110096, India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-400 mr-2" />
                  <p className="text-gray-300 text-sm">+91-99343 20355</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-400 mr-2" />
                  <p className="text-gray-300 text-sm">info@medallionindia.com</p>
                </div>
                <div className="flex items-start">
                  <Clock className="h-4 w-4 text-gray-400 mt-1 mr-2" />
                  <div className="text-gray-300 text-sm">
                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Medallion Engineers Private Limited. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
