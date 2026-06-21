import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CircleCheck,
  SearchCheck,
} from "lucide-react";
import {
  featureItems,
  homeServices,
  missionItems,
  processSteps,
  reasons,
  testimonials,
} from "./data";

export default function Home() {
  return (
    <main>
      <section className="home-hero section">
        <div className="home-hero-content reveal-left">
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
        <div className="growth-panel reveal-right" aria-label="TechByus growth focus">
          <Image src="/assets/hero-workspace.png" alt="TechByus digital growth workspace" width={1600} height={1000} priority />
          <div className="growth-metrics">
            <span><strong>Websites</strong>Launch-ready digital presence</span>
            <span><strong>Strategy</strong>Clear growth roadmap</span>
            <span><strong>Support</strong>Long-term partnership</span>
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div className="trust-inner">
          <div className="reveal-left">
            <p className="eyebrow">Why Businesses Trust TechByus</p>
            <h2>You are safe choosing TechByus as your digital growth partner.</h2>
            <p>We work as the bridge between your business goals and modern technology solutions.</p>
            <strong>We do not just create websites - we help businesses build their future.</strong>
          </div>
          <ul className="mission-list reveal-right" aria-label="TechByus mission">
            {missionItems.map((item) => (
              <li key={item}>
                <CircleCheck size={20} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section about-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Your Growth Partner in the Digital World</p>
          <h2>Consulting, technology, and practical growth support in one place.</h2>
        </div>
        <div className="about-layout">
          <p className="reveal">
            TechByus is a consulting and technology company focused on helping businesses establish a strong digital presence and unlock new growth opportunities.
          </p>
          <p className="reveal">
            Whether you are a startup, local business, personal brand, or growing company, we provide the right solutions to help you succeed online.
          </p>
          <p className="reveal">
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
          {homeServices.map(({ title, text, Icon }) => (
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
          {reasons.map(({ title, text, Icon }) => (
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
          <div className="section-heading reveal">
            <p className="eyebrow">How We Work</p>
            <h2>A clear process from idea to growth.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map(({ title, text }, index) => (
              <article className="process-step reveal" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-section">
        <div className="feature-copy reveal-left">
          <p className="eyebrow">More Than a Website</p>
          <h2>We Help You Build More Than a Website</h2>
          <p>At TechByus, we help you connect your brand, customers, credibility, and long-term digital opportunities.</p>
        </div>
        <div className="feature-list reveal-right">
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
