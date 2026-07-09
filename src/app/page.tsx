import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import {
  contactInfo,
  heroChecklist,
  homeServices,
  processSteps,
  reasons,
} from "@/data/site";
import StatsBand from "@/components/home/StatsBand";
import TemplateGallery from "@/components/home/TemplateGallery";
import PricingTables from "@/components/home/PricingTables";
import TrustBadges from "@/components/home/TrustBadges";
import AboutSection from "@/components/home/AboutSection";
import RecentWork from "@/components/home/RecentWork";
import TestimonialStrip from "@/components/home/TestimonialStrip";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Techhbyus | We build, optimize, and maintain your digital presence.",
    description: "Techhbyus builds, optimizes, and maintains websites for growing businesses — from ready-to-launch packages to fully custom platforms.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <section className="home-hero section">
        <div className="home-hero-content reveal-left">
          <p className="eyebrow">Your Digital Partner For Growth</p>
          <h1>
            We build, optimize, and maintain your{" "}
            <span className="accent">digital presence</span>.
          </h1>
          <p className="home-hero-lead">
            Professional websites that attract customers, rank on Google, and stay maintained — without the hassle.
          </p>
          <ul className="hero-checklist reveal">
            {heroChecklist.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link className="btn primary" href="/avail-service">
              Get Free Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="btn secondary" href="/pricing">
              View Pricing
            </Link>
          </div>
          <p className="hero-contact-note">
            Prefer email? <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
        </div>
        <div className="growth-panel reveal-right" aria-label="Techhbyus website preview">
          <div className="laptop-mockup">
            <div className="laptop-screen">
              <Image src="/assets/hero-workspace.png" alt="Techhbyus website preview" width={1600} height={1000} priority />
            </div>
            <div className="laptop-base" />
          </div>
        </div>
      </section>

      <StatsBand />

      <TemplateGallery />

      <section className="section pricing-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Simple Plans. Powerful Results.</p>
          <h2>Straightforward packages, not a mystery quote.</h2>
        </div>
        <PricingTables />
        <p className="section-more-link reveal">
          <Link href="/pricing">See full pricing details &amp; plan comparison →</Link>
        </p>
      </section>

      <TrustBadges />

      <section className="section why-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Why Choose Techhbyus?</p>
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

      <AboutSection />

      <section className="section home-services">
        <div className="section-heading reveal">
          <p className="eyebrow">What We Do</p>
          <h2>Everything your business needs online.</h2>
        </div>
        <div className="home-service-grid">
          {homeServices.map(({ title, text, Icon }) => (
            <article className="home-service-card reveal" key={title}>
              <span className="home-card-icon"><Icon size={24} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Our Process</p>
          <h2>A clear process from idea to launch.</h2>
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
      </section>

      <RecentWork />

      <TestimonialStrip />

      <section className="final-cta reveal">
        <div className="final-cta-inner">
          <div className="final-cta-copy">
            <p className="eyebrow">Ready to Grow Your Business?</p>
            <h2>Let&apos;s build a website that converts visitors into customers.</h2>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" href="/avail-service">Book Free Consultation</Link>
            <Link className="btn secondary" href="/avail-service">
              Get a Quote
              <Rocket size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
