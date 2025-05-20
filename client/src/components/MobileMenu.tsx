import { MenuItem } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { companyInfo } from "@/lib/data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: MenuItem[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const [expandedSubmenus, setExpandedSubmenus] = useState<number[]>([]);

  const toggleSubmenu = (index: number) => {
    setExpandedSubmenus(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md z-50 border-t border-neutral-200 overflow-y-auto max-h-[80vh]"
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-1">
              {links.map((link, index) => (
                <div key={`menu-item-${index}`}>
                  <motion.div
                    className="flex items-center justify-between text-neutral-800 hover:text-primary font-medium py-3 px-2 transition-colors duration-300 border-b border-neutral-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <a
                      href={link.href}
                      className={link.submenu ? "flex-1" : "flex-1 flex items-center justify-between"}
                      onClick={(e) => {
                        if (link.submenu?.length) {
                          e.preventDefault();
                          toggleSubmenu(index);
                        } else {
                          onClose();
                        }
                      }}
                    >
                      <span>{link.title}</span>
                      {!link.submenu && <ChevronRight className="h-4 w-4 text-primary" />}
                    </a>
                    {link.submenu && (
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="p-2 focus:outline-none"
                      >
                        <ChevronDown
                          className={`h-4 w-4 text-neutral-500 transition-transform duration-300 ${
                            expandedSubmenus.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </motion.div>
                  
                  {/* Submenu Items */}
                  {link.submenu && (
                    <AnimatePresence>
                      {expandedSubmenus.includes(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-neutral-50 pl-4 overflow-hidden"
                        >
                          {link.submenu.map((subItem, subIndex) => (
                            <motion.a
                              key={`submenu-item-${subIndex}`}
                              href={subItem.href}
                              className="flex items-center justify-between py-2 px-3 text-sm text-neutral-700 hover:text-primary border-b border-neutral-100 last:border-b-0"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * subIndex }}
                              onClick={onClose}
                            >
                              <span>{subItem.title}</span>
                              <ChevronRight className="h-3 w-3 text-neutral-400" />
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4 mt-4 border-t border-neutral-200"
              >
                <div className="text-sm text-neutral-500 mb-2 font-medium">Contact Us</div>
                <a 
                  href={`tel:${companyInfo.phone}`} 
                  className="flex items-center text-neutral-800 font-medium mb-2 hover:text-primary"
                >
                  <span className="text-primary mr-2">{companyInfo.phone}</span>
                </a>
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="text-primary font-medium hover:underline"
                >
                  {companyInfo.email}
                </a>
              </motion.div>
              
              <motion.a
                href="/contact"
                className="mt-4 bg-primary hover:bg-secondary text-white py-3 px-5 rounded-md text-center font-medium transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={onClose}
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
