"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { serviceOptions } from "@/data/site";
import type { ServiceRequestPayload, ServiceRequestResponse } from "@/types/serviceRequest";

export default function ServiceForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";
  const initialService = serviceOptions.includes(serviceParam) ? serviceParam : "";
  const packageName = searchParams.get("package");
  const initialDetails = packageName ? `Interested in the ${packageName} package.` : "";

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
      service: String(formData.get("service") ?? ""),
      details: String(formData.get("details") ?? ""),
      honeypot: String(formData.get("company_site") ?? ""),
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
        Email or Phone
        <input type="text" name="email" placeholder="you@example.com or your phone number" required />
      </label>

      <label>
        What Do You Need?
        <select name="service" required defaultValue={initialService}>
          <option value="">Select an option</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>

      <label>
        Anything Else? (optional)
        <textarea
          name="details"
          rows={3}
          placeholder="A few words about what you're looking for."
          defaultValue={initialDetails}
        />
      </label>

      <input
        type="text"
        name="company_site"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
      />

      <button className="btn primary form-submit" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Request"}
      </button>

      <p className="form-note">We reply within 24 hours.</p>

      <p className="form-message" role="status" aria-live="polite">
        {formMessage}
      </p>
    </form>
  );
}
