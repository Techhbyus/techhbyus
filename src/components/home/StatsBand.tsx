// DRAFT — not wired into page.tsx yet. Renders nothing until statItems has
// real, verified numbers (see site.ts). There's a marker comment in page.tsx
// showing where this goes.
import { statItems } from "@/data/site";

export default function StatsBand() {
  if (statItems.length === 0) return null;

  return (
    <div className="stats-band-wrap">
      <div className="stats-band">
        {statItems.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
