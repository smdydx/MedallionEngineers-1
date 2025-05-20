import { Container } from "./ui/container";
import { SectionTitle } from "./ui/section-title";
import { TeamMember } from "./TeamMember";
import { teamMembers } from "@/lib/data";

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Our Leadership"
          subtitle="Meet the experts behind our engineering excellence"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
