"use client";

import { useState } from "react";

export default function AvailServicePage() {
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    setFormMessage(
        `Thank you ${data.get("name").trim()}! Your ${
            data.get("service").trim()
        } request has been submitted successfully. Our team will contact you soon.`
    );

    event.currentTarget.reset();
  }

  return (
      <main>
        <section className="section avail page-section reveal">

          {/* Left Content */}
          <div className="avail-copy">

            <p className="eyebrow">Get Started</p>

            <h1>
              Let’s Build & Grow Your Business Together
            </h1>

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

          {/* Form */}
          <form className="service-form" onSubmit={handleSubmit}>

            <label>
              Your Name
              <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
              />
            </label>

            <label>
              Business Email
              <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
              />
            </label>

            <label>
              Company / Business Name
              <input
                  type="text"
                  name="business"
                  placeholder="Enter your business name"
              />
            </label>

            <label>
              Service Needed
              <select name="service" required>
                <option value="">Select a service</option>

                <option>Business Website</option>

                <option>Landing Page</option>

                <option>E-commerce Website</option>

                <option>Website Redesign</option>

                <option>Website Hosting & Maintenance</option>

                <option>Business Growth Consulting</option>

                <option>Audience Growth Strategy</option>

                <option>Business Model Expansion</option>
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

            <button
                className="btn primary form-submit"
                type="submit"
            >
              Submit Request
            </button>

            <p
                className="form-message"
                role="status"
                aria-live="polite"
            >
              {formMessage}
            </p>

          </form>

        </section>
      </main>
  );
}