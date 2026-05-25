import ServiceCards from "../components/ServiceCards";
import { services } from "../data";

export const metadata = {
  title: "Services | TechByus",
  description: "Website design, landing page, e-commerce and redesign services from TechByus.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section services page-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Services</p>
          <h1>Everything your business website needs</h1>
          <p>Choose a focused service or combine them into a complete website launch package.</p>
        </div>
        <ServiceCards services={services} />
      </section>
    </main>
  );
}
