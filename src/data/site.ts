import {
  Globe2,
  Handshake,
  Headset,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

// phone left blank until a dedicated business number/WhatsApp is set up
export const contactInfo: ContactInfo = {
  email: "info@techhbyus.com",
  phone: "",
};

export interface ServiceItem {
  title: string;
  text: string;
  detail: string;
  points: string[];
}

export interface SeoItem {
  title: string;
  text: string;
}

export interface IconedItem {
  title: string;
  text: string;
  Icon: LucideIcon;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface PricingTier {
  title: string;
  priceLabel: string;
  features: string[];
  ctaService: string;
  badge?: string;
  note?: string;
  featured?: boolean;
}

export interface TemplateItem {
  title: string;
  text: string;
  tag: string;
}

export interface TrustBadge {
  title: string;
  text: string;
  Icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
}

// EMPTY ON PURPOSE — no verified numbers exist yet (2-person, pre-legal
// studio). Do not add a placeholder like "50+ projects" here. Add real
// figures only when they're true, same rule as testimonials.ts.
export const statItems: StatItem[] = [];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Avail service", href: "/avail-service" },
];

// Canonical "what do you need" options — shared by the avail-service form
// and the pricing tier CTAs (each tier's ctaService must match one exactly).
export const serviceOptions: string[] = [
  "New website",
  "E-commerce store",
  "Existing site — fixes & features",
  "Custom platform / web app",
  "SEO",
  "Maintenance",
];

export const normalPricingTiers: PricingTier[] = [
  {
    title: "Starter",
    priceLabel: "₹5,999",
    features: [
      "Responsive design",
      "Up to 2 pages",
      "Contact form",
      "Mobile friendly",
      "Domain support — you own it, we help set it up",
    ],
    ctaService: "New website",
  },
  {
    title: "Pro",
    priceLabel: "₹7,999",
    badge: "Most Popular",
    featured: true,
    features: [
      "Up to 4 pages",
      "SEO — 3 months",
      "Database maintenance — 3 months",
      "WhatsApp integration",
      "Google Maps embed",
      "Domain support — you own it, we help set it up",
    ],
    ctaService: "New website",
  },
  {
    title: "Premium",
    priceLabel: "₹11,999",
    features: [
      "Up to 8 pages",
      "SEO — 12 months",
      "Database maintenance — 9 months",
      "Performance optimization",
      "Analytics setup",
      "Priority support",
      "Domain support — you own it, we help set it up",
    ],
    ctaService: "New website",
  },
];

export const ecommercePricingTiers: PricingTier[] = [
  {
    title: "Base Plan",
    priceLabel: "₹19,999",
    features: [
      "Up to 3 pages",
      "Product catalog",
      "Shopping cart",
      "Payment gateway",
      "Mobile responsive",
      "Domain support — you own it, we help set it up",
    ],
    ctaService: "E-commerce store",
  },
  {
    title: "Premium Plan",
    priceLabel: "₹29,999",
    featured: true,
    features: [
      "Up to 5 pages",
      "Payment gateway",
      "API integrations",
      "Database maintenance — 3 months",
      "Admin dashboard",
      "Order management",
      "Inventory system",
      "Domain support — you own it, we help set it up",
    ],
    note: "Third-party API subscription charges not included.",
    ctaService: "E-commerce store",
  },
];

export const templateGalleryItems: TemplateItem[] = [
  {
    title: "Creative & DIY Website",
    text: "Built for artisans, crafters, and creative businesses to show their work and take orders.",
    tag: "Creative",
  },
  {
    title: "Restaurant Website",
    text: "Menus, location, and ordering info laid out for restaurants, cafes, and food businesses.",
    tag: "Food & Beverage",
  },
  {
    title: "Salon & Beauty Website",
    text: "Booking-first layouts for salons, spas, and beauty clinics.",
    tag: "Salon & Beauty",
  },
  {
    title: "Clothing Brand Website",
    text: "Product-forward layouts for fashion brands and online stores.",
    tag: "Retail",
  },
];

export const trustBadges: TrustBadge[] = [
  { title: "Own Your Domain", text: "Full control, no lock-in", Icon: Globe2 },
  { title: "SEO Optimized", text: "Rank higher on Google", Icon: Search },
  { title: "Mobile Friendly", text: "100% responsive", Icon: Smartphone },
  { title: "Secure & Fast", text: "Speed optimized", Icon: ShieldCheck },
  { title: "Ongoing Support", text: "We're always here", Icon: Headset },
];

// Used on /services page — accordion cards with detail + bullet points
export const services: ServiceItem[] = [
  {
    title: "Business Websites",
    text: "Clean, professional pages for startups, shops, consultants and service providers.",
    detail: "A complete website presence with clear sections, strong calls to action and mobile-first layouts.",
    points: ["Homepage and service sections", "Lead-focused call-to-action areas", "Responsive setup for all screens"],
  },
  {
    title: "Landing Pages",
    text: "Campaign pages designed around clear messaging, strong calls to action and lead capture.",
    detail: "Focused pages built for ads, launches, offers or single-service campaigns.",
    points: ["Conversion-focused page flow", "Contact or enquiry form", "Fast-loading page structure"],
  },
  {
    title: "E-commerce Setup",
    text: "Product pages, checkout-ready layouts and store foundations for online selling.",
    detail: "Storefront foundations that present products clearly and guide visitors toward purchase.",
    points: ["Product display sections", "Category and offer structure", "Checkout-ready planning"],
  },
  {
    title: "Website Redesign",
    text: "Refresh outdated sites with better structure, speed, mobile usability and visuals.",
    detail: "A sharper version of your existing website with improved usability, message clarity and visual consistency.",
    points: ["Modern visual refresh", "Cleaner content layout", "Improved mobile experience"],
  },
];

export const seoItems: SeoItem[] = [
  {
    title: "On-page SEO",
    text: "Clear headings, metadata, keyword-focused content sections and internal linking.",
  },
  {
    title: "Performance",
    text: "Lightweight pages, compressed assets and responsive loading for a faster user experience.",
  },
  {
    title: "Local growth",
    text: "Service pages and conversion points that support local discovery and customer enquiries.",
  },
];

// Home page — hero checklist (below the hero copy, matches the 5-item
// brief: no "free domain" claim here, domain is client-owned per pricing).
export const heroChecklist: string[] = [
  "Website Development",
  "SEO Optimization",
  "Hosting Setup & Support",
  "Database Maintenance",
  "Ongoing Technical Support",
];

// Used on home page — overview grid (different from /services accordion)
export const homeServices: IconedItem[] = [
  {
    title: "Website Development",
    text: "Professional, responsive websites built from a template or fully custom, depending on what your business needs.",
    Icon: Globe2,
  },
  {
    title: "E-Commerce Stores",
    text: "Sell online with secure payments, order management, and an inventory system built in.",
    Icon: ShoppingCart,
  },
  {
    title: "SEO Optimization",
    text: "Get discovered on Google and turn search traffic into enquiries.",
    Icon: Search,
  },
  {
    title: "Database Management",
    text: "Secure database maintenance and backups so your site runs smoothly without you thinking about it.",
    Icon: ShieldCheck,
  },
  {
    title: "Website Maintenance",
    text: "Regular updates, bug fixes, backups and monitoring after launch.",
    Icon: Wrench,
  },
  {
    title: "Business Automation",
    text: "Custom integrations — forms, APIs, CRMs, booking flows — for businesses that have outgrown a template.",
    Icon: Sparkles,
  },
];

export const reasons: IconedItem[] = [
  { title: "Fast Delivery", text: "Most sites go from kickoff to launch in days, not months.", Icon: Rocket },
  { title: "Direct Access to the Builders", text: "You work directly with the two developers building your site — no account managers.", Icon: Handshake },
  { title: "Custom Builds When You Need Them", text: "Outgrown a template? We build booking flows, dashboards, and custom logic too.", Icon: Sparkles },
  { title: "Built to Scale", text: "Architecture that holds up as your business grows, not a site you rebuild in a year.", Icon: TrendingUp },
];

export interface ComparisonRow {
  feature: string;
  starter: string;
  pro: string;
  premium: string;
}

// Feature comparison for the 3 normal-website tiers — shown on /pricing.
// Values must stay in sync with normalPricingTiers above.
export const pricingComparison: ComparisonRow[] = [
  { feature: "Domain", starter: "You own it", pro: "You own it", premium: "You own it" },
  { feature: "Pages included", starter: "2", pro: "4", premium: "8" },
  { feature: "Responsive design", starter: "✓", pro: "✓", premium: "✓" },
  { feature: "SEO", starter: "—", pro: "3 months", premium: "12 months" },
  { feature: "Database maintenance", starter: "—", pro: "3 months", premium: "9 months" },
  { feature: "WhatsApp integration", starter: "—", pro: "✓", premium: "✓" },
  { feature: "Performance optimization", starter: "—", pro: "—", premium: "✓" },
  { feature: "Priority support", starter: "—", pro: "—", premium: "✓" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const pricingFaqs: FaqItem[] = [
  {
    question: "Why isn't a domain included?",
    answer: "You register and own your domain directly, in your own account. It costs about the same either way, but it means the domain is always yours — no lock-in, no handoff risk. We help you register and connect it either way.",
  },
  {
    question: "What happens when my SEO or maintenance period ends?",
    answer: "Nothing stops working. You can renew maintenance as a simple add-on whenever you're ready, or keep running the site as-is.",
  },
  {
    question: "Can I upgrade to a higher plan later?",
    answer: "Yes. Start with Starter and move to Pro or Premium whenever your business needs more pages, SEO, or support.",
  },
  {
    question: "Do e-commerce plans include payment gateway fees?",
    answer: "The payment gateway integration is included in the build. The gateway provider's own transaction fees are separate, same as any online store.",
  },
];

export const processSteps: ProcessStep[] = [
  { title: "Discovery", text: "We understand your business and goals." },
  { title: "Planning", text: "We plan the structure and strategy." },
  { title: "Design", text: "We design a modern, engaging UI/UX." },
  { title: "Development", text: "We build with clean, scalable code." },
  { title: "Testing", text: "We test thoroughly for a bug-free experience." },
  { title: "Launch", text: "We deploy and make your website live." },
  { title: "Support", text: "We provide ongoing support and maintenance." },
];
