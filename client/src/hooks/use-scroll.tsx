import { useEffect, useState } from "react";

interface ScrollState {
  scrollY: number;
  isScrolled: boolean;
  isScrollingUp: boolean;
}

export function useScroll(threshold: number = 50): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    isScrolled: false,
    isScrollingUp: false
  });
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > threshold;
      const isScrollingUp = scrollY < lastScrollY;
      
      setScrollState({
        scrollY,
        isScrolled,
        isScrollingUp
      });
      
      lastScrollY = scrollY;
    };
    
    window.addEventListener("scroll", updateScrollState, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, [threshold]);
  
  return scrollState;
}
