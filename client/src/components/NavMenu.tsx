import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  href: string;
}

interface NavMenuProps {
  items: MenuItem[];
  className?: string;
}

export function NavMenu({ items, className }: NavMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -5, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const handleMouseEnter = (index: number) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
    setHoverTimeout(timeout as unknown as ReturnType<typeof setTimeout>);
  };

  useEffect(() => {
    // Clear timeout when component unmounts
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={menuRef} 
      className={cn("flex space-x-8", className)}
    >
      {items.map((item, i) => (
        <div 
          key={item.title}
          className="relative"
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            custom={i}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            className="relative"
          >
            <a
              href={item.href}
              className={cn(
                "text-neutral-800 hover:text-primary font-medium transition-colors duration-300 flex items-center relative group py-2",
                item.submenu && activeSubmenu === i ? "text-primary" : ""
              )}
              onClick={(e) => {
                if (item.submenu && item.submenu.length > 0) {
                  e.preventDefault();
                  setActiveSubmenu(activeSubmenu === i ? null : i);
                }
              }}
            >
              {item.title}
              {item.submenu && item.submenu.length > 0 && (
                <ChevronDown 
                  className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-300",
                    activeSubmenu === i ? "rotate-180" : ""
                  )} 
                />
              )}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </a>
          </motion.div>

          {item.submenu && (
            <AnimatePresence>
              {activeSubmenu === i && (
                <motion.div
                  variants={submenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 z-50 min-w-[220px] bg-white rounded-md shadow-lg py-2 mt-1"
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <motion.a
                      key={subItem.title}
                      href={subItem.href}
                      className="block px-4 py-2 text-neutral-700 hover:bg-primary hover:text-white text-sm transition-colors duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: 0.05 * subIndex, duration: 0.2 } 
                      }}
                    >
                      {subItem.title}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
}