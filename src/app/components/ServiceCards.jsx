"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ServiceCards({ services }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="service-grid">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <article className={`service-card ${isOpen ? "open" : ""}`} key={service.title}>
            <button className="service-card-button" type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
              <span className="service-icon">{String(index + 1).padStart(2, "0")}</span>
              <span className="service-title">
                <h3>{service.title}</h3>
                <ChevronDown className="service-chevron" size={20} aria-hidden="true" />
              </span>
              <span className="service-summary">{service.text}</span>
            </button>
            <div className="service-detail">
              <p>{service.detail}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
