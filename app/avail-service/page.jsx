"use client";

import { useState } from "react";

export default function AvailServicePage() {
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setFormMessage(`Thanks ${data.get("name").trim()}. Your ${data.get("service").trim()} request is ready for review.`);
    event.currentTarget.reset();
  }

  return (
    <main>
      <section className="section avail page-section reveal">
        <div className="avail-copy">
          <p className="eyebrow">Avail service</p>
          <h1>Tell us what you want to build</h1>
          <p>Select your project type, share your business details and we will prepare a practical website plan for you.</p>
          <ul className="check-list">
            <li>Quick project requirement collection</li>
            <li>Business-focused website recommendations</li>
            <li>Clear next steps for design and launch</li>
          </ul>
        </div>
        <form className="service-form" onSubmit={handleSubmit}>
          <label>Your name<input type="text" name="name" placeholder="Enter your name" required /></label>
          <label>Business email<input type="email" name="email" placeholder="you@example.com" required /></label>
          <label>Service needed<select name="service" required><option value="">Select a service</option><option>Business website</option><option>Landing page</option><option>E-commerce website</option><option>SEO improvement</option></select></label>
          <label>Project details<textarea name="details" rows="4" placeholder="Tell us about your business and website goal" /></label>
          <button className="btn primary form-submit" type="submit">Submit request</button>
          <p className="form-message" role="status" aria-live="polite">{formMessage}</p>
        </form>
      </section>
    </main>
  );
}
