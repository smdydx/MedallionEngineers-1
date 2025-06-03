import React, { useState, useEffect, useRef } from "react";
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

        {/* Hero Content */}
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-3 pt-2 pb-6 sm:px-4 sm:pt-4 sm:pb-8 md:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8"
            >
              {/* Company Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-3 sm:mb-4 md:mb-6 lg:mb-8 flex justify-center px-2"
              >
                <img
                  src={img}
                  alt="Medallion Engineers Private Limited"
                  className="h-24 w-auto max-w-[95%] object-contain 
                           xs:h-28 
                           sm:h-32 sm:max-w-[85%] 
                           md:h-36 md:max-w-[75%] 
                           lg:h-40 lg:max-w-[65%] 
                           xl:h-44 xl:max-w-[55%] 
                           2xl:h-48"
                  style={{
                    filter: "brightness(1.2) contrast(1.1) drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                  }}
                  loading="eager"
                  onError={(e) => {
                    console.error("Logo failed to load:", e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center bg-blue-600/25 backdrop-blur-sm text-blue-100 px-3 py-2 rounded-full text-xs font-medium border border-blue-400/30
                         sm:px-4 sm:py-2 sm:text-sm 
                         md:px-6 md:py-3 md:text-base 
                         lg:text-lg xl:text-xl"
              >
                <Calendar className="inline h-3 w-3 mr-2 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                Coming Soon....
                <motion.button
                  onClick={toggleVideoPlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-2 p-1 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300
                           sm:ml-3 sm:p-1.5 
                           md:p-2"
                  aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                >
                  {isVideoPlaying ? (
                    <Pause className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                  ) : (
                    <Play className="h-2.5 w-2.5 ml-0.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                  )}
                </motion.button>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg leading-tight px-2 text-center font-bold
                         xs:text-xl 
                         sm:text-2xl sm:leading-tight 
                         md:text-3xl md:leading-tight 
                         lg:text-4xl lg:leading-tight 
                         xl:text-5xl xl:leading-tight 
                         2xl:text-6xl 2xl:leading-tight"
              >
                <span className="block">Medallion Engineers</span>
                <span className="block text-blue-300 mt-1 sm:mt-2">Private Limited</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-full max-w-5xl mx-auto space-y-3 px-3 sm:space-y-4 sm:px-4 md:px-6"
              >
                <p className="text-xs leading-relaxed font-medium text-blue-100 text-center
                           sm:text-sm sm:font-semibold 
                           md:text-base 
                           lg:text-lg 
                           xl:text-xl 
                           2xl:text-2xl">
                  Leading engineering consultancy firm specializing in
                  infrastructure development, tunnel engineering, and
                  comprehensive project management solutions.
                </p>

                <div className="text-center w-full max-w-4xl mx-auto text-gray-200 space-y-2 text-xs leading-relaxed
                             sm:space-y-3 sm:text-sm 
                             md:text-base md:space-y-4 
                             lg:text-lg">
                  <p className="px-1">
                    Medallion Engineers Private Limited has established itself as
                    a leading engineering consultancy firm in India, specializing
                    in infrastructure development, tunnel engineering, and
                    comprehensive project management solutions.
                  </p>

                  <p className="hidden sm:block px-1">
                    With our headquarters in Delhi and presence across major
                    cities in India, we are delivering projects across various
                    sectors including transportation, urban development, water
                    infrastructure, and industrial facilities.
                  </p>

                  <p className="hidden lg:block px-1">
                    Our team of over 20 highly qualified engineers and specialists
                    brings together expertise in structural engineering,
                    geotechnical engineering, project management, and systems
                    integration to provide holistic solutions to complex
                    engineering challenges.
                  </p>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col gap-3 justify-center mt-4 px-3 w-full max-w-sm mx-auto
                         sm:flex-row sm:gap-4 sm:max-w-lg sm:mt-6 
                         md:mt-8 
                         lg:mt-10"
              >
                <Button
                  onClick={handleLaunch}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 text-sm font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 w-full
                           sm:px-6 sm:py-3 sm:text-base sm:w-auto 
                           md:px-8 md:py-4 
                           lg:text-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2 sm:h-4 sm:w-4"></div>
                      Loading...
                    </div>
                  ) : (
                    "Launch Website"
                  )}
                </Button>

                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 w-full
                           sm:px-6 sm:py-3 sm:text-base sm:w-auto 
                           md:px-8 md:py-4 
                           lg:text-lg"
                >
                  <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
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
