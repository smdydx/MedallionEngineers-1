import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  Play,
  Pause,
} from "lucide-react";
import img from "../assets/demo.jpg";
import heroVideo from "../assets/photo3.mp4";
import headerImage from "../assets/header.jpg";
import infraImage from "../assets/Eng.jpg";
import tunnelImage from "../assets/T.jpg";
import projectMgmtImage from "../assets/IS.jpg";
import equipmentImage from "../assets/eqiment.jpg";
import miningImage from "../assets/mining.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { AlertTriangle } from "lucide-react";
import { CookieConsent } from "../components/CookieConsent";

const ComingSoon: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPermissionDialog, setShowPermissionDialog] = useState(false);
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [showCopyrightDialog, setShowCopyrightDialog] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLaunch = () => {
    setShowPermissionDialog(true);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/+919934320355", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@medallionindia.com";
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  useEffect(() => {
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
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 sm:bg-black/50 md:bg-black/40"></div>
        </div>
        {/* Logo and Coming Soon in Same Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4 sm:space-x-6"
        >
          <img
            src={img}
            alt="Medallion Engineers Private Limited"
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
          />
          <div className="bg-blue-600/20 backdrop-blur-sm text-blue-100 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-lg lg:text-xl font-medium border border-blue-400/30 flex items-center">
            <Calendar className="inline h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
            Coming Soon....
            <motion.button
              onClick={toggleVideoPlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-1 sm:ml-2 p-1 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? (
                <Pause className="h-3 w-3 sm:h-4 sm:w-4" />
              ) : (
                <Play className="h-3 w-3 sm:h-4 sm:w-4" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pb-20 text-center text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >

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
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-2 px-2
                         sm:text-xl sm:mb-3 
                         md:text-2xl md:mb-4 
                         lg:text-3xl 
                         xl:text-4xl">
              Engineering Excellence in Action
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto px-3
                        sm:text-base sm:px-4 
                        md:text-lg 
                        lg:text-xl">
              Witness our commitment to precision and innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-md shadow-lg
                     sm:rounded-lg 
                     md:rounded-xl"
          >
            <img
              src={headerImage}
              alt="Medallion Engineers - Engineering Excellence"
              className="w-full h-48 object-cover object-center
                       sm:h-56 
                       md:h-64 
                       lg:h-80 
                       xl:h-96 
                       2xl:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Key Services Section */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-3 px-2
                         sm:text-2xl sm:mb-4 
                         md:text-3xl md:mb-6 
                         lg:text-4xl">
              Our Expertise
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto px-3
                        sm:text-base sm:px-4 
                        md:text-lg 
                        lg:text-xl">
              Comprehensive engineering solutions across multiple disciplines
              and sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              {
                title: "Infrastructure Development",
                description:
                  "Comprehensive infrastructure solutions for sustainable urban and regional development projects.",
                image: projectMgmtImage,
              },
              {
                title: "Tunnel Engineering",
                description:
                  "Advanced tunneling solutions for transportation and utility infrastructure projects.",
                image: tunnelImage,
              },
              {
                title: "Project Management",
                description:
                  "End-to-end project management services ensuring efficient coordination and timely delivery.",
                image: infraImage,
              },
              {
                title: "Construction Equipment",
                description:
                  "Modern construction equipment and machinery solutions for enhanced project efficiency.",
                image: equipmentImage,
              },
              {
                title: "Mining & Geotechnical",
                description:
                  "Specialized expertise in mining engineering and geotechnical analysis for challenging projects.",
                image: miningImage,
              },
              {
                title: "Financial Services",
                description:
                  "Comprehensive financial solutions and advisory services for infrastructure projects.",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
              },
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
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
                  className="h-8 w-auto"
                />
                <h3 className="text-lg font-bold">
                  Medallion Engineers Pvt. Ltd.
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Renowned consulting firm with specialization in infrastructure
                planning, tunnel engineering, and integrated project delivery
                solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300 text-sm">
                    info@medallionindia.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300 text-sm">+91-99343 20355</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h3 className="text-lg font-bold mb-4 text-center">Our Location</h3>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-gray-300 mb-2">
                <br />
                New Delhi, India
              </p>
              <div className="bg-gray-700 rounded-lg p-6 border-2 border-dashed border-gray-600">
                <p className="text-gray-500 text-sm">
                  Interactive Map Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm mb-4">
              © 2025 Medallion Engineers Private Limited. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <button
                onClick={() => setShowPrivacyDialog(true)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowCopyrightDialog(true)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Copyright Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Icons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 sm:bottom-6 sm:right-6 sm:space-y-3">
        {/* WhatsApp Icon */}
        <motion.button
          onClick={handleWhatsApp}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full shadow-lg transition-all duration-300 group
                   sm:p-3"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                        sm:mr-3 sm:px-3 sm:text-sm">
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
          className="bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-full shadow-lg transition-all duration-300 group
                   sm:p-3"
          aria-label="Send us an email"
        >
          <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                        sm:mr-3 sm:px-3 sm:text-sm">
            Email
          </div>
        </motion.button>
      </div>

      {/* Permission Dialog */}
      <Dialog
        open={showPermissionDialog}
        onOpenChange={setShowPermissionDialog}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              <DialogTitle>Launch Permission Required</DialogTitle>
            </div>
            <DialogDescription className="text-left space-y-3 mt-4">
              <p>
                The website launch feature is currently under development and
                not yet available.
              </p>
              <p>
                <strong>Permission Status:</strong> Not Guaranteed
              </p>
              <p className="text-sm text-gray-600">
                We are working hard to bring you the full website experience.
                Please check back soon or contact us for updates.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-2 mt-6">
            <Button
              onClick={() => setShowPermissionDialog(false)}
              className="w-full"
            >
              I Understand
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowPermissionDialog(false);
                // This is where you'll later connect to Home page
                // window.location.href = '/home';
              }}
              className="w-full text-sm"
            >
              Notify Me When Ready
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Dialog */}
      <Dialog open={showPrivacyDialog} onOpenChange={setShowPrivacyDialog}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p>
              <strong>Effective Date:</strong> January 2025
            </p>

            <h3 className="font-semibold text-base">Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email
              address, phone number, and company details when you contact us or
              use our services.
            </p>

            <h3 className="font-semibold text-base">How We Use Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and improve our engineering services</li>
              <li>To communicate with you about projects and inquiries</li>
              <li>To comply with legal obligations</li>
              <li>To enhance website functionality and user experience</li>
            </ul>

            <h3 className="font-semibold text-base">Information Sharing</h3>
            <p>
              We do not sell, trade, or share your personal information with
              third parties except as required by law or with your explicit
              consent.
            </p>

            <h3 className="font-semibold text-base">Data Security</h3>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h3 className="font-semibold text-base">Cookies</h3>
            <p>
              Our website uses cookies to enhance user experience. You can
              control cookie settings through your browser preferences.
            </p>

            <h3 className="font-semibold text-base">Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at info@medallionindia.com
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <Button onClick={() => setShowPrivacyDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Copyright Policy Dialog */}
      <Dialog open={showCopyrightDialog} onOpenChange={setShowCopyrightDialog}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Copyright Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p>
              <strong>Effective Date:</strong> January 2025
            </p>

            <h3 className="font-semibold text-base">Copyright Ownership</h3>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Medallion Engineers
              Private Limited and is protected by copyright laws.
            </p>

            <h3 className="font-semibold text-base">Permitted Use</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                View and download content for personal, non-commercial use
              </li>
              <li>Print single copies for personal reference</li>
              <li>Share links to our content with proper attribution</li>
            </ul>

            <h3 className="font-semibold text-base">Prohibited Use</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reproduction or distribution without written permission</li>
              <li>Commercial use of any content</li>
              <li>Modification or creation of derivative works</li>
              <li>Removal of copyright notices</li>
            </ul>

            <h3 className="font-semibold text-base">Third-Party Content</h3>
            <p>
              Some images and content may be licensed from third parties. All
              rights belong to their respective owners.
            </p>

            <h3 className="font-semibold text-base">DMCA Compliance</h3>
            <p>
              We respect intellectual property rights. If you believe your
              copyrighted work has been used improperly, please contact us at
              info@medallionindia.com
            </p>

            <h3 className="font-semibold text-base">Contact Information</h3>
            <p>
              For copyright permissions or inquiries, contact:
              info@medallionindia.com
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <Button onClick={() => setShowCopyrightDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cookie Consent Component */}
      <CookieConsent />
    </div>
  );
};

export default ComingSoon;