import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  CircleCheck,
  Globe2,
  Handshake,
  Lightbulb,
  Megaphone,
  Rocket,
  SearchCheck,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const missionItems = [
  "Build your online identity",
  "Help your business grow faster",
  "Expand your reach to more customers",
  "Create smart digital strategies",
  "Support your long-term success",
];

const services = [
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

const reasons = [
  ["Trusted Partnership", "We work closely with you and treat your business goals like our own.", Handshake],
  ["Complete Digital Solutions", "From website development to business consulting, everything is managed in one place.", ShieldCheck],
  ["Customized Strategies", "Every business is unique, and we create personalized solutions that fit your vision.", Lightbulb],
  ["Focused on Growth", "Our goal is not just to build websites - it is to help your business grow continuously.", Rocket],
  ["Affordable & Scalable", "Smart solutions that work for both startups and growing businesses.", BadgeCheck],
];

const processSteps = [
  ["Understand Your Business", "We learn about your goals, challenges, and vision."],
  ["Create the Right Strategy", "We build a roadmap for your website, branding, and growth plan."],
  ["Build & Launch", "Our team develops professional digital solutions tailored to your business."],
  ["Grow Together", "We continue supporting your business growth and audience expansion."],
];

const featureItems = [
  "Build a professional online presence",
  "Reach more customers",
  "Improve business credibility",
  "Expand your business model",
  "Grow your audience",
  "Increase digital visibility",
  "Build trust with customers",
  "Create long-term growth opportunities",
];

const testimonials = [
  "TechByus helped us create a professional online presence and guided us through our business growth journey.",
  "Their team understood our vision and delivered solutions that truly helped our business grow.",
  "Reliable, professional, and growth-focused - exactly what we needed.",
];

export default function Home() {
  return (
    <main>
      <section className="home-hero section reveal">
        <div className="home-hero-content">
          <p className="eyebrow">Technology and business growth partner</p>
          <h1>We Help Businesses Grow Digitally</h1>
          <p className="home-hero-lead">
            Your business deserves more than just a website. At TechByus, we become your trusted technology and business growth partner - helping you build your online presence, expand your business model, reach more customers, and scale with confidence.
          </p>
          <p className="home-hero-copy">
            From professional website development to digital consulting and business expansion strategies, we help companies transform ideas into successful digital businesses.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="/avail-service">
              Start Your Project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="btn secondary" href="/avail-service">
              Book Free Consultation
            </Link>
          </div>
        </div>
        <div className="growth-panel" aria-label="TechByus growth focus">
          <Image src="/assets/hero-workspace.png" alt="TechByus digital growth workspace" width={1600} height={1000} priority />
          <div className="growth-metrics">
            <span><strong>Websites</strong>Launch-ready digital presence</span>
            <span><strong>Strategy</strong>Clear growth roadmap</span>
            <span><strong>Support</strong>Long-term partnership</span>
          </div>
        </div>
      </section>

      <section className="trust-band reveal">
        <div className="trust-inner">
          <div>
            <p className="eyebrow">Why Businesses Trust TechByus</p>
            <h2>You are safe choosing TechByus as your digital growth partner.</h2>
            <p>We work as the bridge between your business goals and modern technology solutions.</p>
            <strong>We do not just create websites - we help businesses build their future.</strong>
          </div>
          <ul className="mission-list" aria-label="TechByus mission">
            {missionItems.map((item) => (
              <li key={item}>
                <CircleCheck size={20} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section about-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Your Growth Partner in the Digital World</p>
          <h2>Consulting, technology, and practical growth support in one place.</h2>
        </div>
        <div className="about-layout">
          <p>
            TechByus is a consulting and technology company focused on helping businesses establish a strong digital presence and unlock new growth opportunities.
          </p>
          <p>
            Whether you are a startup, local business, personal brand, or growing company, we provide the right solutions to help you succeed online.
          </p>
          <p>
            We understand that every business is different. That is why we create customized strategies and digital solutions designed specifically for your goals.
          </p>
        </div>
      </section>

      <section className="section home-services">
        <div className="section-heading reveal">
          <p className="eyebrow">Our Services</p>
          <h2>Digital services built around business outcomes.</h2>
        </div>
        <div className="home-service-grid">
          {services.map(({ title, text, Icon }) => (
            <article className="home-service-card reveal" key={title}>
              <span className="home-card-icon"><Icon size={24} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ChevronRight className="card-arrow" size={20} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="section why-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Why Choose TechByus?</p>
          <h2>Built for businesses that want steady digital growth.</h2>
        </div>
        <div className="reason-grid">
          {reasons.map(([title, text, Icon]) => (
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

      <section className="process-band reveal">
        <div className="section process-section">
          <div className="section-heading">
            <p className="eyebrow">How We Work</p>
            <h2>A clear process from idea to growth.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map(([title, text], index) => (
              <article className="process-step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-section reveal">
        <div className="feature-copy">
          <p className="eyebrow">More Than a Website</p>
          <h2>We Help You Build More Than a Website</h2>
          <p>At TechByus, we help you connect your brand, customers, credibility, and long-term digital opportunities.</p>
        </div>
        <div className="feature-list">
          {featureItems.map((item) => (
            <span key={item}>
              <SearchCheck size={18} aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="section-heading reveal">
          <p className="eyebrow">What Clients Say</p>
          <h2>Growth-focused support businesses can trust.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((quote) => (
            <blockquote className="testimonial-card reveal" key={quote}>
              <p>"{quote}"</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="final-cta reveal">
        <div className="final-cta-inner">
          <p className="eyebrow">Ready to Grow Your Business?</p>
          <h2>Let TechByus become your digital bridge to success.</h2>
          <p>From building websites to expanding your business model, we help you move forward with confidence.</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/avail-service">Contact Us Today</Link>
            <Link className="btn secondary" href="/avail-service">Start Growing With Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
