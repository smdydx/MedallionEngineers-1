import { Container } from "./ui/container";
import { SectionTitle } from "./ui/section-title";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive engineering solutions for infrastructure development"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
