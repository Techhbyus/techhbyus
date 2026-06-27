"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Split element text into word spans. Returns words array + DOM restore function.
function splitWords(el) {
  const original = el.innerHTML;
  el.innerHTML = el.textContent
    .trim()
    .split(/\s+/)
    .map(w => `<span class="st-word-wrap"><span class="st-word">${w}</span></span>`)
    .join(" ");
  return {
    words: Array.from(el.querySelectorAll(".st-word")),
    restore: () => { el.innerHTML = original; },
  };
}

export default function GSAPAnimations() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Hard skip: respect OS-level reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => {
        gsap.set(el, { opacity: 1, x: 0, y: 0 });
      });
      return;
    }

    const restorers = [];
    const handled   = new Set(); // elements handled here, skipped by catch-all loops

    const ctx = gsap.context(() => {

      // ────────────────────────────────────────────────────────────────────
      // HERO — timed entrance sequence (load, not scroll-triggered)
      // ────────────────────────────────────────────────────────────────────
      const hero = document.querySelector(".home-hero");
      if (hero) {
        const content   = hero.querySelector(".home-hero-content");
        const eyebrow   = hero.querySelector(".eyebrow");
        const heroH1    = hero.querySelector("h1");
        const lead      = hero.querySelector(".home-hero-lead");
        const heroCopy  = hero.querySelector(".home-hero-copy");
        const actions   = hero.querySelector(".hero-actions");
        const panel     = hero.querySelector(".growth-panel");
        const metrics   = Array.from(hero.querySelectorAll(".growth-metrics span"));

        // Prevent catch-all loops from double-animating hero elements
        if (content) handled.add(content);
        if (panel)   handled.add(panel);

        // The hero wrapper has reveal-left CSS (opacity:0). Clear that instantly
        // so we can animate children individually instead.
        if (content) gsap.set(content, { x: 0, opacity: 1 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Eyebrow label
        if (eyebrow) {
          gsap.set(eyebrow, { y: 20, opacity: 0 });
          tl.to(eyebrow, { y: 0, opacity: 1, duration: 0.55 }, 0.05);
        }

        // H1 — word-by-word slide up through clip masks
        if (heroH1) {
          gsap.set(heroH1, { opacity: 1 }); // container visible; words are clipped
          const { words, restore } = splitWords(heroH1);
          restorers.push(restore);
          gsap.set(words, { y: "115%", display: "inline-block" });
          tl.to(words, {
            y: "0%",
            duration: 0.85,
            stagger: 0.055,
            ease: "power4.out",
          }, 0.14);
        }

        // Lead → copy → CTA, staggered after heading lands
        const bodyEls = [lead, heroCopy, actions].filter(Boolean);
        if (bodyEls.length) {
          gsap.set(bodyEls, { y: 22, opacity: 0 });
          tl.to(bodyEls, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, 0.5);
        }

        // Growth panel slides in from right, parallel with heading
        if (panel) {
          gsap.set(panel, { x: 48, opacity: 0 });
          tl.to(panel, { x: 0, opacity: 1, duration: 0.95, ease: "power3.out" }, 0.08);
        }

        // Metric badges stagger in after panel settles
        if (metrics.length) {
          gsap.set(metrics, { y: 12, opacity: 0 });
          tl.to(metrics, { y: 0, opacity: 1, duration: 0.42, stagger: 0.08 }, 0.75);
        }

        // Scroll parallax: panel image drifts subtly upward as hero scrolls away
        const panelImg = panel?.querySelector("img");
        if (panelImg) {
          gsap.to(panelImg, {
            yPercent: -9,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      }

      // ────────────────────────────────────────────────────────────────────
      // SECTION HEADINGS — word-split reveal, fires on all pages
      // ────────────────────────────────────────────────────────────────────
      gsap.utils.toArray(".section-heading").forEach(heading => {
        const eyebrow = heading.querySelector(".eyebrow");
        const h2      = heading.querySelector("h2");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power3.out" },
        });

        if (eyebrow) {
          gsap.set(eyebrow, { y: 14, opacity: 0 });
          tl.to(eyebrow, { y: 0, opacity: 1, duration: 0.5 });
        }

        if (h2) {
          // h2 container stays opacity:1; the individual words are clipped
          gsap.set(h2, { opacity: 1 });
          const { words, restore } = splitWords(h2);
          restorers.push(restore);
          gsap.set(words, { y: "108%", display: "inline-block" });
          tl.to(
            words,
            { y: "0%", duration: 0.72, stagger: 0.033, ease: "power3.out" },
            eyebrow ? "-=0.3" : 0
          );
        }
      });

      // ────────────────────────────────────────────────────────────────────
      // MISSION LIST — pills slide from left with stagger
      // ────────────────────────────────────────────────────────────────────
      const missionItems = gsap.utils.toArray(".mission-list li");
      if (missionItems.length) {
        gsap.set(missionItems, { x: -24, opacity: 0 });
        gsap.to(missionItems, {
          x: 0, opacity: 1, duration: 0.52, ease: "power2.out", stagger: 0.075,
          scrollTrigger: { trigger: ".mission-list", start: "top 86%" },
        });
      }

      // ────────────────────────────────────────────────────────────────────
      // GRID SECTIONS — scale-up + fade (safe inside overflow:hidden parents)
      // y-translate would get clipped at parent edge, so we use scale instead
      // ────────────────────────────────────────────────────────────────────
      [
        { items: ".home-service-card", trigger: ".home-service-grid" },
        { items: ".reason-card",       trigger: ".reason-grid"       },
        { items: ".process-step",      trigger: ".process-grid"      },
        { items: ".about-layout p",    trigger: ".about-layout"      },
      ].forEach(({ items, trigger }) => {
        const els    = gsap.utils.toArray(items);
        const parent = document.querySelector(trigger);
        if (!els.length || !parent) return;

        gsap.set(els, { scale: 0.96, opacity: 0 });
        gsap.to(els, {
          scale: 1, opacity: 1, duration: 0.58, stagger: 0.065, ease: "power2.out",
          scrollTrigger: { trigger: parent, start: "top 86%" },
        });
      });

      // ────────────────────────────────────────────────────────────────────
      // FEATURE LIST — scrub reveal tied to scroll progress
      // The copy column is already position:sticky so this creates the effect
      // of items appearing one-by-one as you scroll past the section.
      // ────────────────────────────────────────────────────────────────────
      const featureSection = document.querySelector(".feature-section");
      const featureItems   = gsap.utils.toArray(".feature-list span");
      if (featureSection && featureItems.length) {
        gsap.set(featureItems, { scale: 0.94, opacity: 0 });
        gsap.to(featureItems, {
          scale: 1, opacity: 1, stagger: 0.11, ease: "none",
          scrollTrigger: {
            trigger: featureSection,
            start: "top 60%",
            end: "bottom 48%",
            scrub: 1,
          },
        });
      }

      // ────────────────────────────────────────────────────────────────────
      // CATCH-ALL REVEAL LOOPS
      // Handles all remaining .reveal / .reveal-left / .reveal-right elements
      // on any page. Elements already handled above are skipped via `handled`.
      // ────────────────────────────────────────────────────────────────────
      gsap.utils.toArray(".reveal").forEach(el => {
        if (handled.has(el) || el.closest(".home-hero")) return;
        gsap.fromTo(el,
          { y: 28, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.68, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      gsap.utils.toArray(".reveal-left").forEach(el => {
        if (handled.has(el) || el.closest(".home-hero")) return;
        gsap.fromTo(el,
          { x: -32, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.72, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });

      gsap.utils.toArray(".reveal-right").forEach(el => {
        if (handled.has(el) || el.closest(".home-hero")) return;
        gsap.fromTo(el,
          { x: 32, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.72, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });

    });

    return () => {
      ctx.revert();
      restorers.forEach(r => r()); // restore split H1/H2 innerHTML on route change
    };
  }, [pathname]);

  return null;
}
