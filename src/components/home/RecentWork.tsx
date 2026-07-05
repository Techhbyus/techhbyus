// Empty-gated like TestimonialStrip.tsx — reuses src/data/portfolio.ts rather
// than a new data model. Only case studies with a `screenshot` set (i.e. the
// client has actually signed off, see REVAMP.md Step 7) are shown; renders
// null until at least one exists.
import Image from "next/image";
import { caseStudies } from "@/data/portfolio";

export default function RecentWork() {
  const approved = caseStudies.filter((study) => study.screenshot);
  if (approved.length === 0) return null;

  return (
    <section className="section recent-work-section">
      <div className="section-heading reveal">
        <p className="eyebrow">Our Recent Work</p>
        <h2>Real projects, real outcomes.</h2>
      </div>
      <div className="recent-work-grid">
        {approved.map((study) => (
          <article className="recent-work-card reveal" key={study.slug}>
            <div className="recent-work-media">
              <Image src={study.screenshot as string} alt={study.title} width={640} height={400} />
            </div>
            <div className="recent-work-body">
              <div>
                <h3>{study.title}</h3>
                <span>{study.outcome}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
