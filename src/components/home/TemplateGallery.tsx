// Style previews only — no real template demos exist yet, so there is no
// "View Demo" link (see REVAMP.md). Swap the placeholder preview box for a
// real screenshot per template once one exists.
import { templateGalleryItems } from "@/data/site";

export default function TemplateGallery() {
  return (
    <section className="section template-section">
      <div className="section-heading reveal">
        <p className="eyebrow">Website Templates For Every Business</p>
        <h2>Choose a Style. We Build It for You.</h2>
      </div>
      <div className="template-grid">
        {templateGalleryItems.map((item) => (
          <article className="template-card reveal" key={item.title}>
            <div className="template-preview">{item.tag}</div>
            <div className="template-card-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
