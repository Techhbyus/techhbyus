"use client";

import { useState } from "react";

const serviceOptions = [
  "Business Website",
  "Landing Page",
  "E-commerce Website",
  "Website Redesign",
  "Website Hosting & Maintenance",
  "Business Growth Consulting",
  "Audience Growth Strategy",
  "Business Model Expansion",
];

export default function ServiceForm() {
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      business: formData.get("business"),
      service: formData.get("service"),
      details: formData.get("details"),
    };

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormMessage(`Thank you ${data.name}! We'll review your request and be in touch shortly.`);
        event.currentTarget.reset();
      } else {
        setFormMessage("We couldn't submit your request. Please try again.");
      }
    } catch {
      setFormMessage("We couldn't reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <label>
        Your Name
        <input type="text" name="name" placeholder="Enter your full name" required />
      </label>

      <label>
        Business Email
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>

      <label>
        Company / Business Name
        <input type="text" name="business" placeholder="Enter your business name" />
      </label>

      <label>
        Service Needed
        <select name="service" required>
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>

      <label>
        Project Details
        <textarea
          name="details"
          rows="5"
          placeholder="Tell us about your business, goals, and what you want to achieve."
        />
      </label>

      <button className="btn primary form-submit" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Request"}
      </button>

      <p className="form-message" role="status" aria-live="polite">
        {formMessage}
      </p>
    </form>
  );
}
