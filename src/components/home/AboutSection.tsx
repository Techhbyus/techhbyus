import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

// TODO(manual input): replace photo paths with real phone photos of Naman
// and Aarti in public/assets/team/ before this section goes live.
const teamMembers: TeamMember[] = [
  {
    name: "Naman",
    role: "Full-Stack Developer",
    bio: "B.Tech in Computer Science. Works full-time at a product-based e-commerce company, builds TechByus nights and weekends.",
    photo: "/assets/team/naman.jpg",
  },
  {
    name: "Aarti",
    role: "Full-Stack Developer",
    bio: "B.Tech in Computer Science. Works full-time at a product-based e-commerce company, builds TechByus nights and weekends.",
    photo: "/assets/team/aarti.jpg",
  },
];

export default function AboutSection() {
  return (
    <section className="section about-team-section">
      <div className="section-heading reveal">
        <p className="eyebrow">The People Behind TechByus</p>
        <h2>Two engineers, one studio.</h2>
      </div>
      <p className="about-team-story reveal">
        We started TechByus because we wanted ownership of our own work - building things end to end, not just executing someone else&apos;s spec. We also kept noticing the same gap: real business software priced for enterprise budgets, out of reach for small and mid-size businesses. TechByus exists to make that kind of work - proper booking systems, dashboards, platforms - accessible at a price small businesses can actually afford.
      </p>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <article className="team-card reveal" key={member.name}>
            <Image
              className="team-photo"
              src={member.photo}
              alt={member.name}
              width={160}
              height={160}
            />
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p>{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
