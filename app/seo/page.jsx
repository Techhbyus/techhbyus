import { seoItems } from "../data";

export const metadata = {
  title: "SEO | TechByus",
  description: "SEO foundations, performance and local growth services from TechByus.",
};

export default function SeoPage() {
  return (
    <main>
      <section className="section seo page-section">
        <div className="section-heading reveal">
          <p className="eyebrow">SEO</p>
          <h1>Built so customers can find you</h1>
          <p>We structure your site with the technical and content foundations that search engines expect.</p>
        </div>
        <div className="seo-layout">
          {seoItems.map((item) => (
            <div className="seo-panel reveal" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>
          ))}
        </div>
      </section>
    </main>
  );
}
