// DRAFT — not routed yet. This is the intended content for /portfolio (or
// /work), built ahead of client sign-off (see REVAMP.md, Step 7/8). There is
// deliberately no src/app/portfolio/page.tsx yet: creating that file would
// make this content live at a guessable URL before either client has agreed
// to be shown. Once sign-off exists, wrap this in a page.tsx (see REVAMP.md
// for the exact steps) and add "Portfolio" to navItems in site.ts.
import Link from "next/link";
import { caseStudies } from "@/data/portfolio";
import CaseStudyCard from "./CaseStudyCard";

export default function PortfolioPageContent() {
  return (
    <main>
      <section className="section portfolio-hero">
        <div className="section-heading reveal">
          <p className="eyebrow">Our Work</p>
          <h1>Real platforms we&apos;ve built.</h1>
          <p>Two client projects, described honestly - no invented metrics, no stock-photo case studies.</p>
        </div>
      </section>

      <section className="section portfolio-list">
        {caseStudies.map((study) => (
          <CaseStudyCard study={study} key={study.slug} />
        ))}
      </section>

      <section className="final-cta reveal">
        <div className="final-cta-inner">
          <p className="eyebrow">Want Something Built For Your Business?</p>
          <h2>Let&apos;s talk about what you need.</h2>
          <div className="hero-actions">
            <Link className="btn primary" href="/avail-service">Get a Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
