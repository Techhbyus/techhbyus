"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // Visible now OR already above the viewport (scrolled past) — both should show immediately
      if (rect.top < window.innerHeight) element.classList.add("is-visible");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
