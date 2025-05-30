import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Container } from "./ui/container";
import { navigationItems, companyInfo } from "@/lib/data";
import { Menu, X, Phone, Mail, ChevronRight, MapPin } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { NavMenu } from "./NavMenu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScroll(50);

  // Close mobile menu when route changes or on wider screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Bar with Contact Info */}
      {/* <div className="hidden md:block bg-primary text-white py-2">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center hover:text-blue-100 transition-colors">
                <Phone className="h-3 w-3 mr-1" />
                <span>{companyInfo.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center hover:text-blue-100 transition-colors">
                <Mail className="h-3 w-3 mr-1" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-center text-blue-100">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="truncate max-w-[200px]">Delhi, India</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/about" className="text-xs hover:text-blue-100 transition-colors">About Us</a>
              <a href="/projects" className="text-xs hover:text-blue-100 transition-colors">Projects</a>
              <a href="/contact" className="text-xs hover:text-blue-100 transition-colors">Contact</a>
            </div>
          </div>
        </Container>
      </div> */}
      
      {/* Main Navigation */}
      <header 
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "py-3 md:py-4"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <a href="/" className="block">
                <Logo size="md" showFullName={false} />
              </a>
            </motion.div>
            
            {/* Desktop Navigation with Submenus */}
            <div className="hidden lg:block">
              <NavMenu items={navigationItems} />
            </div>
            
            {/* Contact Button & Social Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              <div className="flex items-center space-x-3 mr-4">
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a
                  href="/contact"
                  className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                >
                  Get in Touch
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
            </div>
            
            {/* Tablet Contact Button */}
            <div className="hidden md:block lg:hidden">
              <a
                href="/contact"
                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            
            {/* Mobile Menu Toggle */}
            <motion.div 
              className="md:hidden flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-800 hover:text-primary focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>
        </Container>

        {/* Mobile Menu with Submenu Support */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          links={navigationItems}
        />
      </header>
    </>
  );
}