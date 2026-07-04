// DRAFT — not wired into page.tsx yet. See REVAMP.md, Step 9. There's a
// marker comment in page.tsx (right below the hero section) showing where
// this goes. Renders nothing if there are no real testimonials, so it's
// also safe against being wired in before any quotes exist.
import { testimonials } from "@/data/testimonials";

export default function TestimonialStrip() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section testimonial-strip">
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <blockquote className="testimonial-card reveal" key={testimonial.attribution}>
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <cite>{testimonial.attribution}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
