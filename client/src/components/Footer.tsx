import { Container } from "./ui/container";
import { Logo } from "./Logo";
import { companyInfo, quickLinks, serviceLinks } from "@/lib/data";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Clock, ArrowRight, Instagram, ChevronRight, CalendarClock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* Footer CTA Section */}
      <div className="bg-primary py-10 border-b border-blue-800">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to discuss your project?</h3>
              <p className="text-blue-100 max-w-md">
                Contact our engineering team today for a consultation about your infrastructure needs.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white text-primary hover:bg-blue-100 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Main Footer */}
      <Container className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo color="white" className="mb-4" />
            <p className="text-blue-200 mb-4">
              {companyInfo.shortDesc}
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href={companyInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 transition-colors duration-300 p-2 rounded-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={companyInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 transition-colors duration-300 p-2 rounded-md"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 transition-colors duration-300 p-2 rounded-md"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 transition-colors duration-300 p-2 rounded-md"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            
            {/* ISO Certifications */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center bg-blue-800/30 px-3 py-2 rounded-md">
                <span className="text-xs font-medium mr-2">ISO 9001:2015</span>
                <span className="text-xs text-blue-200">Quality Management</span>
              </div>
              <div className="flex items-center bg-blue-800/30 px-3 py-2 rounded-md">
                <span className="text-xs font-medium mr-2">ISO 14001:2015</span>
                <span className="text-xs text-blue-200">Environmental Management</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="h-3 w-3 text-blue-200 mr-2" />
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="flex items-center">
                <ChevronRight className="h-3 w-3 text-blue-200 mr-2" />
                <a
                  href="/careers"
                  className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Careers
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-3 w-3 text-blue-200 mr-2" />
                <a
                  href="/news"
                  className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  News & Updates
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-3 w-3 text-blue-200 mr-2" />
                <a
                  href="/faq"
                  className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="h-3 w-3 text-blue-200 mr-2" />
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="flex items-center">
                <ChevronRight className="h-3 w-3 text-blue-200 mr-2" />
                <a
                  href="/services#consultation"
                  className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Engineering Consultation
                </a>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-3 w-3 text-blue-200 mr-2" />
                <a
                  href="/services#management"
                  className="text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-blue-200 h-5 w-5 flex-shrink-0" />
                <span className="text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-blue-200 h-5 w-5 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-blue-200 transition-colors duration-300">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-200 h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-blue-200 transition-colors duration-300">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-3 text-blue-200 h-5 w-5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Monday - Friday</p>
                  <p className="text-blue-200">9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-bold mb-2">Subscribe to our Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-blue-800 text-white placeholder-blue-300 px-3 py-2 rounded-l-md text-sm flex-grow focus:outline-none"
                />
                <button className="bg-white text-primary px-3 py-2 rounded-r-md hover:bg-blue-100 transition-colors duration-300">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-900 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-xs mb-4 md:mb-0">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a
                href="/privacy-policy"
                className="text-blue-200 hover:text-white text-xs transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-blue-200 hover:text-white text-xs transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="text-blue-200 hover:text-white text-xs transition-colors duration-300"
              >
                Sitemap
              </a>
              <a
                href="/accessibility"
                className="text-blue-200 hover:text-white text-xs transition-colors duration-300"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
