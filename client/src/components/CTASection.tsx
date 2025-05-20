import { Container } from "./ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 bg-primary relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
          alt="Engineering Blueprint"
          className="w-full h-full object-cover"
        />
      </div>
      <Container className="relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with Medallion Engineers for innovative engineering solutions that stand the test of time.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-blue-100 px-8 py-4 rounded-md font-bold text-lg"
            asChild
          >
            <a href="#contact">Contact Us Today</a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
