export interface Testimonial {
  quote: string;
  attribution: string;
}

// EMPTY ON PURPOSE — no real client testimonial has been collected yet (see
// REVAMP.md, Step 7/9). Do not add a placeholder or fabricated quote here.
// When a client gives written words, add them here verbatim (trimmed for
// length only, never reworded) — ship this file empty until then.
export const testimonials: Testimonial[] = [];
