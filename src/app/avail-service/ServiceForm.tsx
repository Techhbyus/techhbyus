"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import { useSearchParams } from "next/navigation";
import { serviceOptions } from "@/data/site";
import type { ServiceRequestPayload, ServiceRequestResponse } from "@/types/serviceRequest";

const OTHER_VALUE = "__other__";
const TOTAL_STEPS = 3;

export default function ServiceForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";
  const packageName = searchParams.get("package");

  const [step, setStep] = useState(0);
  const [service, setService] = useState(serviceOptions.includes(serviceParam) ? serviceParam : "");
  const [customService, setCustomService] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState(packageName ? `Interested in the ${packageName} package.` : "");
  const [stepError, setStepError] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const resolvedService = service === OTHER_VALUE ? customService.trim() : service;

  function goNext() {
    if (step === 0 && !resolvedService) {
      setStepError(service === OTHER_VALUE ? "Tell us what you need." : "Pick one to continue.");
      return;
    }
    if (step === 1 && (!name.trim() || !contact.trim())) {
      setStepError("Fill in both fields to continue.");
      return;
    }
    setStepError("");
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }

  function goBack() {
    setStepError("");
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleStepKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      goNext();
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data: ServiceRequestPayload = {
      name: name.trim(),
      email: contact.trim(),
      service: resolvedService,
      details: details.trim(),
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
        setFormMessage(`Thanks, ${data.name}. We'll review your request and be in touch shortly.`);
        setStep(0);
        setService("");
        setCustomService("");
        setName("");
        setContact("");
        setDetails("");
      } else {
        setFormMessage("We couldn't submit your request. Try again.");
      }
    } catch {
      setFormMessage("We couldn't reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <div className="step-progress" aria-hidden="true">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <span key={i} className={`step-dot ${i <= step ? "active" : ""}`} />
        ))}
      </div>
      <p className="step-label">Step {step + 1} of {TOTAL_STEPS}</p>

      {step === 0 && (
        <div className="step-panel">
          <h3 className="step-heading">What do you need?</h3>
          <div className="step-pills" role="group" aria-label="What do you need">
            {serviceOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`step-pill ${service === option ? "selected" : ""}`}
                onClick={() => {
                  setService(option);
                  setStepError("");
                }}
              >
                {option}
              </button>
            ))}
            <button
              type="button"
              className={`step-pill ${service === OTHER_VALUE ? "selected" : ""}`}
              onClick={() => {
                setService(OTHER_VALUE);
                setStepError("");
              }}
            >
              Something else
            </button>
          </div>

          {service === OTHER_VALUE && (
            <input
              type="text"
              className="step-other-input"
              placeholder="Tell us what you need"
              value={customService}
              onChange={(e) => setCustomService(e.target.value)}
              onKeyDown={handleStepKeyDown}
              autoFocus
            />
          )}
        </div>
      )}

      {step === 1 && (
        <div className="step-panel">
          <h3 className="step-heading">Your details</h3>
          <label>
            Name or Organization
            <input
              type="text"
              placeholder="Your name or business name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleStepKeyDown}
              autoFocus
            />
          </label>
          <label>
            Email or Phone
            <input
              type="text"
              placeholder="you@example.com or your phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              onKeyDown={handleStepKeyDown}
            />
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="step-panel">
          <h3 className="step-heading">Anything else? (optional)</h3>
          <label>
            Details
            <textarea
              rows={3}
              placeholder="A few words about what you're looking for."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              autoFocus
            />
          </label>
        </div>
      )}

      <input
        type="text"
        name="company_site"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
      />

      {stepError && (
        <p className="step-error" role="alert">
          {stepError}
        </p>
      )}

      <div className="step-nav">
        {step > 0 && (
          <button type="button" className="btn secondary" onClick={goBack}>
            Back
          </button>
        )}
        {step < TOTAL_STEPS - 1 ? (
          <button type="button" className="btn primary" onClick={goNext}>
            Continue
          </button>
        ) : (
          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        )}
      </div>

      <p className="form-note">We reply within 24 hours.</p>

      <p className="form-message" role="status" aria-live="polite">
        {formMessage}
      </p>
    </form>
  );
}
