import type { Metadata } from "next";
import Link from "next/link";
import { pricingComparison, pricingFaqs } from "@/data/site";
import PricingTables from "@/components/home/PricingTables";
import TrustBadges from "@/components/home/TrustBadges";

export const metadata: Metadata = {
  title: "Pricing | Techhbyus",
  description: "Simple, transparent pricing for business websites and e-commerce stores — no hidden fees, no mystery quotes.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Techhbyus",
    description: "Simple, transparent pricing for business websites and e-commerce stores — no hidden fees, no mystery quotes.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <main>
      <section className="section page-section pricing-hero">
        <div className="section-heading reveal">
          <p className="eyebrow">Pricing</p>
          <h1>Simple Plans. Powerful Results.</h1>
          <p>
            Every package is a fixed price, not a quote you have to chase. Pick the tier that
            matches your business today — you can move up whenever you need more.
          </p>
        </div>
      </section>

      <section className="section pricing-section">
        <PricingTables />
      </section>

      <section className="section">
        <div className="section-heading reveal">
          <p className="eyebrow">Compare Plans</p>
          <h2>Every plan at a glance.</h2>
        </div>
        <div className="comparison-table-wrap reveal">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Pro</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              {pricingComparison.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.starter}</td>
                  <td>{row.pro}</td>
                  <td>{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <TrustBadges />

      <section className="section">
        <div className="section-heading reveal">
          <p className="eyebrow">Questions</p>
          <h2>Pricing FAQ.</h2>
        </div>
        <div className="services-list reveal">
          {pricingFaqs.map((faq) => (
            <div className="service-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <div className="final-cta-inner">
          <div className="final-cta-copy">
            <p className="eyebrow">Still Not Sure Which Plan?</p>
            <h2>Tell us about your business, we&apos;ll recommend a plan.</h2>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" href="/avail-service">Get Free Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
