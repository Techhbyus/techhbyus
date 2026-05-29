import ServiceCards from "../components/ServiceCards";
import { services } from "../data";

export const metadata = {
  title: "Services | TechByus",
  description:
      "Helping small businesses grow through website development, hosting, maintenance, business consulting, and digital growth solutions.",
};

export default function ServicesPage() {
  return (
      <main>

        {/* Hero Section */}
        <section className="section services page-section">
          <div className="section-heading reveal">

            <p className="eyebrow">Our Services</p>

            <h1>
              Helping Small Businesses Grow Digitally
            </h1>

            <p>
              At TechByus, we help businesses build professional websites,
              grow their online presence, expand their business model,
              and reach more customers through smart digital solutions.
            </p>

          </div>

          <ServiceCards services={services} />
        </section>

        {/* About Services */}
        <section className="section reveal">
          <div className="content-wrapper">

            <h2>
              Your Business Growth Partner
            </h2>

            <p>
              We believe every small business deserves a strong digital presence.
              Our mission is to help businesses grow with modern websites,
              reliable hosting, maintenance support, and business consulting.
            </p>

            <p>
              We don’t just create websites — we help businesses build trust,
              improve visibility, attract customers, and create long-term
              growth opportunities.
            </p>

          </div>
        </section>

        {/* Business Growth */}
        <section className="section reveal">
          <div className="content-wrapper">

            <h2>
              What We Help Businesses With
            </h2>

            <div className="services-list">

              <div className="service-item">
                <h3>Website Development</h3>
                <p>
                  Modern and professional websites designed to help your business
                  stand out online and build customer trust.
                </p>
              </div>

              <div className="service-item">
                <h3>Website Hosting & Maintenance</h3>
                <p>
                  Secure hosting, updates, technical support, and maintenance
                  services to keep your website running smoothly.
                </p>
              </div>

              <div className="service-item">
                <h3>Business Growth Consulting</h3>
                <p>
                  Helping businesses improve their online presence, reach more
                  customers, and grow with smart digital strategies.
                </p>
              </div>

              <div className="service-item">
                <h3>Business Model Expansion</h3>
                <p>
                  We help businesses explore new ideas, expand services,
                  and create scalable business opportunities.
                </p>
              </div>

              <div className="service-item">
                <h3>Audience Growth</h3>
                <p>
                  Helping businesses increase visibility, grow their audience,
                  and connect with the right customers online.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section reveal">
          <div className="section-heading">

            <p className="eyebrow">Let’s Grow Together</p>

            <h2>
              Ready to Build and Grow Your Business?
            </h2>

            <p>
              Partner with TechByus and let us help you create a stronger
              digital future through technology, consulting, and business growth solutions.
            </p>

            <a href="/contact" className="primary-btn">
              Contact Us
            </a>

          </div>
        </section>

      </main>
  );
}