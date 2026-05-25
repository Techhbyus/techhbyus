import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero section reveal">
        <div className="hero-content">
          <p className="eyebrow">Website design, development and growth</p>
          <h1>We build website - you grow your business</h1>
          <p className="hero-copy">
            TechByus creates fast, responsive and search-ready websites that help local brands look credible, collect leads and convert visitors into customers.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="/avail-service">Avail service</Link>
            <Link className="btn secondary" href="/services">View services</Link>
          </div>
        </div>
        <div className="hero-media" aria-label="Modern website workspace illustration">
          <Image src="/assets/hero-workspace.png" alt="TechByus website design workspace" width={1600} height={1000} priority />
        </div>
      </section>
      <section className="section stats-band reveal" aria-label="Company highlights">
        <div><strong>Responsive</strong><span>Layouts for mobile, tablet and desktop</span></div>
        <div><strong>Dynamic</strong><span>Interactive pages and smooth navigation</span></div>
        <div><strong>SEO-ready</strong><span>Structure built for search visibility</span></div>
      </section>
    </main>
  );
}
