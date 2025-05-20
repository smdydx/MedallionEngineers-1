import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/container";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.mp4";
interface Slide {
  image: string;
  title: string;
  subtitle: string;
  badge?: string;
  cta: {
    primary: {
      text: string;
      link: string;
    };
    secondary: {
      text: string;
      link: string;
    };
  };
}

export function HeroSlider() {
  const slides: Slide[] = [
  {
    image: photo3,
    title: "Building The Future",
    subtitle: "Engineering Excellence with Precision and Innovation",
    badge: "Leading Engineering Firm",
    cta: {
      primary: {
        text: "Our Projects",
        link: "/projects"
      },
      secondary: {
        text: "Contact Us",
        link: "/contact"
      }
    }
  },
  {
    image: photo1,
    title: "Infrastructure Experts",
    subtitle: "Transforming Landscapes Through Innovative Engineering",
    badge: "200+ Projects Completed",
    cta: {
      primary: {
        text: "Our Services",
        link: "/services"
      },
      secondary: {
        text: "About Us",
        link: "/about"
      }
    }
  },
  {
    image: photo2,
    title: "Engineering Excellence",
    subtitle: "Creating Sustainable Solutions for Tomorrow",
    badge: "Since 2010",
    cta: {
      primary: {
        text: "Meet Our Team",
        link: "/team"
      },
      secondary: {
        text: "Learn More",
        link: "/about"
      }
    }
  }
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    })
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const navigateSlide = useCallback((newDirection: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(newDirection);
    
    if (newDirection > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating, slides.length]);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      navigateSlide(1);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [navigateSlide, isPaused]);

  return (
    <section id="home" className="relative h-[90vh] md:h-screen overflow-hidden">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="absolute inset-0 z-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 z-0">
  {slides[currentIndex].image.endsWith(".mp4") ? (
    <video
      src={slides[currentIndex].image}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  ) : (
    <img
      src={slides[currentIndex].image}
      alt="Hero Image"
      className="w-full h-full object-cover"
    />
  )}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-secondary/80 mix-blend-multiply"></div>
  {/* Animated pattern overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiBNMTYgMTRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNCAtMS44IDQtNCA0IC00LTEuOC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
</div>
          
          <Container className="relative z-10 h-full flex items-center">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="text-white max-w-3xl px-4 md:px-0"
            >
              {slides[currentIndex].badge && (
                <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <span className="text-xs md:text-sm font-medium">{slides[currentIndex].badge}</span>
                </div>
              )}
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-4 md:mb-6">
                {slides[currentIndex].title}
                <br />
                <span className="text-blue-200 relative inline-block">
                  {slides[currentIndex].subtitle}
                  <motion.span 
                    className="absolute bottom-1 left-0 w-full h-1 bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1 }}
                  ></motion.span>
                </span>
              </h1>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8">
                <a 
                  href={slides[currentIndex].cta.primary.link} 
                  className="bg-white text-primary px-6 md:px-8 py-3 rounded-md font-medium transition duration-300 hover:bg-blue-100 text-center group text-sm md:text-base flex items-center justify-center"
                >
                  {slides[currentIndex].cta.primary.text}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={slides[currentIndex].cta.secondary.link} 
                  className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-md font-medium transition duration-300 hover:bg-white hover:text-primary hover:bg-opacity-100 text-center text-sm md:text-base"
                >
                  {slides[currentIndex].cta.secondary.text}
                </a>
              </div>
              
              {/* Highlighted features */}
              <div className="hidden md:flex space-x-6 mt-12">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-blue-100">ISO Certified</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-blue-100">Award Winning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-blue-100">Nationwide Services</span>
                </div>
              </div>
            </motion.div>
          </Container>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Buttons */}
      <div className="absolute z-20 bottom-1/2 transform translate-y-1/2 left-2 md:left-8">
        <button
          onClick={() => navigateSlide(-1)}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition duration-300 border border-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>
      
      <div className="absolute z-20 bottom-1/2 transform translate-y-1/2 right-2 md:right-8">
        <button
          onClick={() => navigateSlide(1)}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition duration-300 border border-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute z-20 bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6 md:w-8" : "bg-white/50 w-2 md:w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="flex flex-col items-center group">
          <span className="mb-1 md:mb-2 text-xs md:text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Scroll Down</span>
          <svg className="h-4 w-4 md:h-6 md:w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
      
      {/* Mobile scroll indicator */}
      <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center md:hidden">
        <div className="w-1/3 h-1 bg-white/20 rounded-full">
          <motion.div 
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}