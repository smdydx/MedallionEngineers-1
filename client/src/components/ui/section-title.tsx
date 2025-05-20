import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
  align?: "center" | "left" | "right";
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "center"
}: SectionTitleProps) {
  return (
    <div className={cn(
      "max-w-4xl mx-auto mb-16",
      align === "center" && "text-center",
      align === "left" && "text-left ml-0 mr-auto",
      align === "right" && "text-right mr-0 ml-auto",
      className
    )}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-neutral-900 font-heading mb-4"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "5rem" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={cn(
          "w-20 h-1 bg-primary mb-6",
          align === "center" && "mx-auto",
          align === "left" && "mr-auto",
          align === "right" && "ml-auto"
        )}
      />
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg text-neutral-700"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
