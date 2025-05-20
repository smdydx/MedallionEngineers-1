import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      // Only show after a short delay for better user experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-neutral-900 text-white shadow-lg"
        >
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 pr-8">
              <h3 className="text-lg font-bold mb-2">Privacy & Cookies</h3>
              <p className="text-sm text-neutral-300">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleAccept}
                className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300"
              >
                Accept
              </button>
              <button
                onClick={handleClose}
                className="bg-transparent border border-white/20 hover:bg-white/10 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}