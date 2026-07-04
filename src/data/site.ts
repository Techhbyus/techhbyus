import {
  BriefcaseBusiness,
  Globe2,
  Handshake,
  Megaphone,
  Rocket,
  Settings,
  Sparkles,
  TrendingUp,
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
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Avail service", href: "/avail-service" },
  { label: "SEO", href: "/seo" },
];

// Canonical "what do you need" options — shared by the avail-service form
// and the pricing tier CTAs (each tier's ctaService must match one exactly).
export const serviceOptions: string[] = [
  "New website",
  "Existing site — fixes & features",
  "Custom platform / web app",
  "SEO",
  "Maintenance",
];

export const pricingTiers: PricingTier[] = [
  {
    title: "Starter / Landing Site",
    priceLabel: "Starting from ₹15,000",
    features: [
      "Up to 3 pages (Home, About, Contact)",
      "Contact form wired to your email",
      "Mobile-responsive layout",
      "Basic on-page SEO (titles, meta descriptions)",
      "1 round of revisions",
    ],
    ctaService: "New website",
  },
  {
    title: "Business Website",
    priceLabel: "Starting from ₹25,000",
    features: [
      "Up to 8 pages",
      "Contact or enquiry form with service routing",
      "On-page SEO across every page",
      "2 rounds of revisions",
      "Post-launch content updates handled by us — no CMS login needed",
    ],
    ctaService: "New website",
  },
  {
    title: "Custom Platform / Web App",
    priceLabel: "Custom quote",
    features: [
      "Custom interactive features — booking flows, dashboards, calculators",
      "Database-backed logic (MySQL) when the project needs real data, not just pages",
      "Third-party integrations (payments, calendars, APIs) as needed",
      "Ongoing support and maintenance available",
    ],
    ctaService: "Custom platform / web app",
  },
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

// Home page data
export const missionItems: string[] = [
  "Custom interactive UI - booking flows, dashboards, calculators - not static templates",
  "Next.js, React, TypeScript, Tailwind - the stack behind production apps",
  "MySQL-backed features when your site needs real logic, not just pages",
  "Typical build: 4-6 weeks from kickoff to launch",
  "Two developers, every line of code - no outsourced templates",
];

// Used on home page — overview grid (different from /services accordion)
export const homeServices: IconedItem[] = [
  {
    title: "Website Development",
    text: "Professional, modern, and responsive websites that represent your brand and help convert visitors into customers.",
    Icon: Globe2,
  },
  {
    title: "Business Growth Consulting",
    text: "We help businesses improve their digital strategy, customer reach, and overall business growth.",
    Icon: TrendingUp,
  },
  {
    title: "Business Model Expansion",
    text: "Looking to expand your services or scale your business? We help you identify opportunities and create strategies for long-term growth.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Branding & Online Presence",
    text: "Build a strong online identity with professional branding, social media guidance, and digital visibility strategies.",
    Icon: Sparkles,
  },
  {
    title: "Audience Growth",
    text: "We help you reach the right audience and grow your customer base using smart digital marketing and engagement strategies.",
    Icon: Megaphone,
  },
  {
    title: "Technical Support & Maintenance",
    text: "Reliable support and maintenance services to ensure your digital platforms stay secure and updated.",
    Icon: Settings,
  },
];

export const reasons: IconedItem[] = [
  { title: "Custom Builds, Not Templates", text: "React and Next.js applications with real logic - interactive tools, booking systems, admin panels - not a theme with your logo swapped in.", Icon: Sparkles },
  { title: "Modern, Typed Stack", text: "TypeScript in strict mode, Tailwind CSS, and a MySQL-backed backend when a project needs one - the same stack used for production software.", Icon: Settings },
  { title: "4-6 Week Delivery", text: "Most projects go from kickoff to launch in 4-6 weeks, including custom features.", Icon: Rocket },
  { title: "Direct Access to the Builders", text: "You work directly with the two developers building your project - no account managers, no outsourcing.", Icon: Handshake },
  { title: "Built to Scale", text: "Architecture that holds up as your business grows, not a static site you rebuild in a year.", Icon: TrendingUp },
];

export const processSteps: ProcessStep[] = [
  { title: "Understand Your Business", text: "We learn about your goals, challenges, and vision." },
  { title: "Create the Right Strategy", text: "We build a roadmap for your website, branding, and growth plan." },
  { title: "Build & Launch", text: "Our team develops professional digital solutions tailored to your business." },
  { title: "Grow Together", text: "We continue supporting your business growth and audience expansion." },
];

export const featureItems: string[] = [
  "Build a professional online presence",
  "Reach more customers",
  "Improve business credibility",
  "Expand your business model",
  "Grow your audience",
  "Increase digital visibility",
  "Build trust with customers",
  "Create long-term growth opportunities",
];
