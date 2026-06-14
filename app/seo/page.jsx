import Link from "next/link";
import { seoItems } from "../data";

export const metadata = {
  title: "SEO Services | TechByus",
  description:
      "Professional SEO services from TechByus helping businesses improve visibility, reach more customers, and grow online.",
};

export default function SeoPage() {
  return (
      <main>

        {/* Hero Section */}
        <section className="section seo page-section">

          <div className="section-heading reveal">

            <p className="eyebrow">SEO Services</p>

            <h1>
              Helping Businesses Grow Through Smart SEO Strategies
            </h1>

            <p>
              At TechByus, we help businesses improve their online visibility,
              attract the right audience, and grow their digital presence through
              modern SEO solutions and optimization strategies.
            </p>

          </div>

          {/* SEO Cards */}
          <div className="seo-layout">

            {seoItems.map((item) => (
                <div className="seo-panel reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
            ))}

          </div>

        </section>

        {/* About SEO */}
        <section className="section reveal">

          <div className="content-wrapper">

            <h2>
              Why SEO Matters for Your Business
            </h2>

            <p>
              Having a website is only the first step. Your business also needs
              visibility so potential customers can discover your services online.
            </p>

            <p>
              Our SEO services focus on improving your search engine presence,
              increasing website traffic, and helping your business appear in
              front of the right audience.
            </p>

          </div>

        </section>

        {/* What We Offer */}
        <section className="section reveal">

          <div className="content-wrapper">

            <h2>
              What Our SEO Services Include
            </h2>

            <div className="services-list">

              <div className="service-item">
                <h3>Website SEO Optimization</h3>
                <p>
                  Optimizing your website structure, content, and performance
                  for better search engine rankings.
                </p>
              </div>

              <div className="service-item">
                <h3>Technical SEO</h3>
                <p>
                  Improving website speed, mobile responsiveness,
                  indexing, and technical performance.
                </p>
              </div>

              <div className="service-item">
                <h3>Local SEO</h3>
                <p>
                  Helping local businesses appear in local searches
                  and attract nearby customers.
                </p>
              </div>

              <div className="service-item">
                <h3>Keyword Research</h3>
                <p>
                  Finding the right keywords your audience is searching for
                  to improve visibility and traffic.
                </p>
              </div>

              <div className="service-item">
                <h3>Content Optimization</h3>
                <p>
                  Improving website content to make it more valuable,
                  searchable, and user-friendly.
                </p>
              </div>

              <div className="service-item">
                <h3>Performance & Growth Tracking</h3>
                <p>
                  Monitoring website growth, search performance,
                  and audience engagement over time.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA Section */}
        <section className="section reveal">

          <div className="section-heading">

            <p className="eyebrow">Grow Online</p>

            <h2>
              Ready to Improve Your Online Visibility?
            </h2>

            <p>
              Partner with TechByus and let us help your business
              reach more customers through professional SEO services
              and digital growth strategies.
            </p>

            <Link href="/avail-service" className="btn primary">
              Get Started
            </Link>

          </div>

        </section>

      </main>
  );
}