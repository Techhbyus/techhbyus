import type { Metadata } from "next";
import { processSteps, reasons } from "@/data/site";
import AboutSection from "@/components/home/AboutSection";

export const metadata: Metadata = {
  title: "About | Techhbyus",
  description: "Two engineers building websites and business tools for growing businesses — who we are and how we work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Techhbyus",
    description: "Two engineers building websites and business tools for growing businesses — who we are and how we work.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />

      <section className="section why-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Why Work With Us</p>
          <h2>What that means for your project.</h2>
        </div>
        <div className="reason-grid">
          {reasons.map(({ title, text, Icon }) => (
            <article className="reason-card reveal" key={title}>
              <Icon size={24} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading reveal">
          <p className="eyebrow">How We Work</p>
          <h2>The same process, every project.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map(({ title, text }, index) => (
            <article className="process-step reveal" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
