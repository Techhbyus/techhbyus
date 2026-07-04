import ServiceForm from "./ServiceForm";

export const metadata = {
  title: "Avail a Service | TechByus",
  description: "Tell us about your business and what you need. TechByus will review your goals and provide tailored digital solutions.",
  alternates: { canonical: "/avail-service" },
  openGraph: {
    title: "Avail a Service | TechByus",
    description: "Tell us about your business and what you need. TechByus will review your goals and provide tailored digital solutions.",
    url: "/avail-service",
  },
};

export default function AvailServicePage() {
  return (
    <main>
      <section className="section avail page-section reveal">

        <div className="avail-copy">
          <p className="eyebrow">Get Started</p>
          <h1>Let's Build & Grow Your Business Together</h1>
          <p>
            At TechByus, we help businesses build professional websites,
            improve their online presence, grow their audience,
            and expand their business through smart digital solutions.
          </p>
          <p>
            Fill out the form and share your business requirements with us.
            Our team will review your goals and provide the best solutions
            tailored to your business needs.
          </p>
          <ul className="check-list">
            <li>Professional website development</li>
            <li>Business growth consulting</li>
            <li>Website hosting & maintenance</li>
            <li>Audience growth strategies</li>
            <li>Business model expansion guidance</li>
            <li>Personalized digital solutions</li>
          </ul>
        </div>

        <ServiceForm />

      </section>
    </main>
  );
}
