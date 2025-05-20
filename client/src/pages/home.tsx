import { HeroSlider } from "@/components/HeroSlider";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TeamSection } from "@/components/TeamSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Initialize animation on scroll
  useEffect(() => {
    const checkInView = () => {
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      
      animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    // Check on initial load
    checkInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkInView);
    
    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
