import {
  BadgeCheck,
  BriefcaseBusiness,
  Globe2,
  Handshake,
  Lightbulb,
  Megaphone,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Avail service", href: "/avail-service" },
  { label: "SEO", href: "/seo" },
];

// Used on /services page — accordion cards with detail + bullet points
export const services = [
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

export const seoItems = [
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
export const missionItems = [
  "Build your online identity",
  "Help your business grow faster",
  "Expand your reach to more customers",
  "Create smart digital strategies",
  "Support your long-term success",
];

// Used on home page — overview grid (different from /services accordion)
export const homeServices = [
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

export const reasons = [
  { title: "Trusted Partnership", text: "We work closely with you and treat your business goals like our own.", Icon: Handshake },
  { title: "Complete Digital Solutions", text: "From website development to business consulting, everything is managed in one place.", Icon: ShieldCheck },
  { title: "Customized Strategies", text: "Every business is unique, and we create personalized solutions that fit your vision.", Icon: Lightbulb },
  { title: "Focused on Growth", text: "Our goal is not just to build websites - it is to help your business grow continuously.", Icon: Rocket },
  { title: "Affordable & Scalable", text: "Smart solutions that work for both startups and growing businesses.", Icon: BadgeCheck },
];

export const processSteps = [
  { title: "Understand Your Business", text: "We learn about your goals, challenges, and vision." },
  { title: "Create the Right Strategy", text: "We build a roadmap for your website, branding, and growth plan." },
  { title: "Build & Launch", text: "Our team develops professional digital solutions tailored to your business." },
  { title: "Grow Together", text: "We continue supporting your business growth and audience expansion." },
];

export const featureItems = [
  "Build a professional online presence",
  "Reach more customers",
  "Improve business credibility",
  "Expand your business model",
  "Grow your audience",
  "Increase digital visibility",
  "Build trust with customers",
  "Create long-term growth opportunities",
];
