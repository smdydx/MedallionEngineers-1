import { Container } from "./ui/container";
import { SectionTitle } from "./ui/section-title";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <Container>
        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch with our team for your engineering needs"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          
          <div>
            <ContactInfo />
          </div>
        </div>
      </Container>
    </section>
  );
}
