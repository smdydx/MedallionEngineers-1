import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Map, Mail, Phone } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-primary py-24 md:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
              <p className="text-xl max-w-3xl mx-auto text-blue-100">
                Get in touch with our team for your engineering and infrastructure needs
              </p>
            </motion.div>
          </Container>
        </div>
        
        {/* Quick Contact Information */}
        <section className="py-12 bg-white">
          <Container>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-6 rounded-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4">
                  <Map className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Our Office</h3>
                <p className="text-neutral-700">{companyInfo.address}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-6 rounded-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Phone</h3>
                <p className="text-neutral-700">
                  Mobile: <a href={`tel:${companyInfo.phone}`} className="text-primary hover:underline">{companyInfo.phone}</a>
                </p>
                <p className="text-neutral-700">
                  Landline: <a href={`tel:${companyInfo.landline}`} className="text-primary hover:underline">{companyInfo.landline}</a>
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-6 rounded-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Email</h3>
                <p className="text-neutral-700">
                  <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">{companyInfo.email}</a>
                </p>
              </motion.div>
            </div>
          </Container>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-20 bg-neutral-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary font-heading mb-6">Send Us a Message</h2>
                <p className="text-neutral-700 leading-relaxed mb-8">
                  Have questions about our services or want to discuss a potential project? 
                  Fill out the form and our team will get back to you as soon as possible.
                </p>
                <ContactForm />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-primary font-heading mb-6">Contact Information</h2>
                <ContactInfo />
                
                {/* Map Placeholder */}
                <div className="mt-8 rounded-lg overflow-hidden shadow-md bg-white p-4">
                  <div className="w-full h-64 bg-neutral-200 rounded-lg flex items-center justify-center">
                    <p className="text-neutral-600">Google Maps Integration</p>
                  </div>
                  <p className="text-sm text-neutral-500 mt-2 text-center">
                    Our office location at B335/5(New B-930), Ground floor, Sangam Gali, New Ashok Nagar, Delhi-110096
                  </p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}