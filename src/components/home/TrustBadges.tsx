import { trustBadges } from "@/data/site";

export default function TrustBadges() {
  return (
    <div className="section">
      <div className="trust-badges reveal">
        {trustBadges.map(({ title, text, Icon }) => (
          <div className="trust-badge" key={title}>
            <Icon size={22} aria-hidden="true" />
            <div>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
