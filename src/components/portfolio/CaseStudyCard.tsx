import Image from "next/image";
import type { CaseStudy } from "@/data/portfolio";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="case-study-card reveal">
      <h2>{study.title}</h2>

      <div className="case-study-block">
        <h3>The Problem</h3>
        <p>{study.problem}</p>
      </div>

      <div className="case-study-block">
        <h3>What We Built</h3>
        <p>{study.whatWeBuilt}</p>
      </div>

      <div className="case-study-block">
        <h3>The Outcome</h3>
        <p>{study.outcome}</p>
      </div>

      {study.screenshot && (
        <Image
          className="case-study-screenshot"
          src={study.screenshot}
          alt={`${study.title} screenshot`}
          width={1200}
          height={800}
        />
      )}

      {study.testimonial && (
        <blockquote className="case-study-quote">{study.testimonial}</blockquote>
      )}
    </article>
  );
}
