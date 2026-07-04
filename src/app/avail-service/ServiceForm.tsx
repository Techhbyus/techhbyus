"use client";

import { useState } from "react";
import type { ServiceRequestPayload, ServiceRequestResponse } from "@/types/serviceRequest";

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: ServiceRequestPayload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      business: String(formData.get("business") ?? ""),
      service: String(formData.get("service") ?? ""),
      details: String(formData.get("details") ?? ""),
    };

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ServiceRequestResponse = await response.json();

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
          rows={5}
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
