import Link from "next/link";
import { ecommercePricingTiers, normalPricingTiers, type PricingTier } from "@/data/site";

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article className={`pricing-card reveal ${tier.featured ? "featured" : ""}`}>
      {tier.badge && <span className="pricing-badge">{tier.badge}</span>}
      <h3>{tier.title}</h3>
      <p className="pricing-price">{tier.priceLabel}</p>
      <ul className="check-list">
        {tier.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      {tier.note && <p className="pricing-note">{tier.note}</p>}
      <Link
        className={`btn ${tier.featured ? "primary" : "secondary"} pricing-cta`}
        href={`/avail-service?service=${encodeURIComponent(tier.ctaService)}&package=${encodeURIComponent(tier.title)}`}
      >
        {tier.featured ? `Choose ${tier.title}` : "Get Started"}
      </Link>
    </article>
  );
}

export default function PricingTables() {
  return (
    <div className="pricing-columns">
      <div className="pricing-group">
        <h3 className="pricing-group-title">Normal Websites</h3>
        <div className="pricing-grid normal">
          {normalPricingTiers.map((tier) => (
            <PricingCard tier={tier} key={tier.title} />
          ))}
        </div>
      </div>

      <div className="pricing-group">
        <h3 className="pricing-group-title">E-Commerce Websites</h3>
        <div className="pricing-grid ecommerce">
          {ecommercePricingTiers.map((tier) => (
            <PricingCard tier={tier} key={tier.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
