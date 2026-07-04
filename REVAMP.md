# TechByus Revamp — Progress Tracker

Running log of the 2026-07-05 trust/credibility revamp. Update this file as steps land instead of relying on chat history.

## ⚠ Live site is stale — deploy needed

Confirmed 2026-07-05 via direct fetch of `techhbyus.com`: it's hosted on **Vercel** and still serving the **old** copy ("We Help Businesses Grow Digitally," old trust section, no pricing, no contact info). Steps 1-9 were committed and pushed to `naman/nextjs-ts-restructure` on 2026-07-05, but **that's a feature branch, not what Vercel deploys from** — pushing it does not put any of this in front of real visitors. Merging it into whatever branch (`main`/`master`) is wired to the production Vercel deployment is still the single highest-priority action.

## Done

- **Committed & pushed** (2026-07-05): steps 1-9 landed in 4 commits on `naman/nextjs-ts-restructure` (`7a2df42`, `85fccfb`, `2559fc8`, `819fd99`), audited for duplication first (see git log). Confirm what branch Vercel actually builds from before assuming this is live — see the warning above.
- **Stack migration** (2026-07-04): moved to `src/` layout, React 19 + TypeScript strict mode, controller/service/repository backend split. See `CLAUDE.md` for the architecture.
- **Visual redesign** (June 2026): void-black / Acronym / Plum-Voltage design system, particle hero, animated nav.
- **Step 1 — Hero + trust copy rewrite**: killed the "grow your business digitally" buzzword copy in `page.tsx` hero and trust-band, plus `missionItems`/`reasons` in `site.ts`. Replaced with concrete, verifiable facts — real stack, real shipped work (PrimeCare-style body-mapping tool, a job-matching platform for a recruitment consultancy), real 4-6 week turnaround.
- **Step 2 — Contact info + low-friction form + spam protection**: added `contactInfo` (email live, phone slot empty) to `site.ts`, rendered in `Footer.tsx` and near the hero CTA. Cut `ServiceForm.tsx` from 5 fields to 4 (name, email-or-phone, 4-option "what do you need" dropdown, optional short detail). Added a honeypot field (`company_site`) checked server-side in `serviceRequestController.ts`. Added "We reply within 24 hours" note.
- **Step 3 — Pricing tiers**: added a "Services & Packages" homepage section (`pricing-section` in `page.tsx`) with 3 tiers from `pricingTiers` in `site.ts` — Starter/Landing Site (Starting from ₹15,000), Business Website (Starting from ₹25,000), Custom Platform/Web App (Custom quote). Each tier's CTA deep-links to `/avail-service` with the dropdown and detail field pre-filled via query params (`?service=...&package=...`), using `useSearchParams` + a `Suspense` boundary.
- **Step 4 — About/Team section (drafted, not live)**: built `src/components/home/AboutSection.tsx` — two team cards (Naman, Aarti), founding story paragraph, both real and typechecked. **Not imported or rendered anywhere yet** — there's a marker comment in `page.tsx` where it will go once ready. Not linked from nav either.
- **Step 5 — Security headers + form hardening**: added a `headers()` function in `next.config.js` — HSTS (`max-age=63072000; includeSubDomains; preload`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and a permissive starting `Content-Security-Policy` (`default-src 'self'`, `'unsafe-inline'` for script/style since there's no nonce middleware yet). Confirmed HTTPS is already enforced (Vercel auto-redirects `http://` → `https://`, verified via `curl -I`). Hardened `serviceRequestService.ts` — server-side trim + max-length checks on every field (name/email/business/service/details), independent of the client-side form. Added an in-memory per-IP rate limiter (`src/server/helpers/rateLimiter.ts`, 5 requests / 10 minutes) wired into `serviceRequestController.ts` ahead of the honeypot and validation checks. All verified locally: headers present on every response, overlong/empty fields correctly rejected with 400, 6th+ rapid request correctly gets 429.
- **Step 8 — Portfolio/case-study page (drafted, not routed)**: built `src/data/portfolio.ts` (`caseStudies`, anonymized descriptors — "Physiotherapy Booking Platform" / "Overseas Recruitment Job-Matching Platform"), `src/components/portfolio/CaseStudyCard.tsx`, and `src/components/portfolio/PortfolioPageContent.tsx` (the full intended page: hero, both case studies, closing "Get a Quote" CTA). **Deliberately no `src/app/portfolio/page.tsx`** — creating that file would make it live at a guessable URL before Step 7 sign-off exists, which defeats the point of Step 7. Each case study has problem/what-we-built/outcome only; `screenshot`/`testimonial` fields exist on the type but are unset everywhere (conditionally rendered, so nothing shows until a client approves one). No fabricated metrics anywhere in the outcome copy. Confirmed via `npm run build` that no `/portfolio` route exists yet. Did **not** touch the live "Why Choose TechByus" section to add a teaser link (Step 8 point 5) — linking to a page that doesn't exist yet would be worse than the current copy; that change ships together with the route once sign-off lands.
- **Step 9 — Testimonial strip (drafted, not wired in)**: built `src/data/testimonials.ts` (`Testimonial[]`, **shipped empty on purpose** — no real client quote exists yet) and `src/components/home/TestimonialStrip.tsx` (renders `null` if the array is empty, as a second layer of safety on top of not being imported anywhere). Marker comment added in `page.tsx` right below the hero section — the exact spot requested ("prime real estate... currently empty"). Confirmed via curl that nothing testimonial-related renders on the live homepage. No placeholder/fabricated quotes anywhere, per the explicit instruction that a fake testimonial is worse than none.

## Needs manual input before it can ship

These are blocked on real-world info only Naman/Aarti have — do not fill with placeholders or invented specifics.

- **Phone/WhatsApp number** — `contactInfo.phone` in `site.ts` is `""`. The UI (footer + hero note) already renders it conditionally, so adding the real number is the only change needed.
- **Team photos** — `AboutSection.tsx` points at `/assets/team/naman.jpg` and `/assets/team/aarti.jpg`, which **do not exist yet**. Needs real phone photos (not stock), dropped into `public/assets/team/`.
- **Recruitment-consultancy platform name** — hero copy currently describes it generically ("a job-matching platform for an overseas recruitment consultancy") with no name, per Naman's confirmation on 2026-07-05 that he'd fill in the real name later.
- **Domain spelling decision** — real contact email and social links use "techhbyus," code identifiers and repo folder use "techbyus." Not yet resolved which spelling is canonical going forward.
- **Run securityheaders.com manually** — automated fetch gets a 403 (it blocks bots by design). Confirmed the actual header state directly via `curl -I techhbyus.com` instead (see step 5 above for what's missing/present pre-deploy). Naman should still run the real scan after deploying, for the polished grade/report.
- **Verify HSTS after deploy** — Vercel already injects its own default `Strict-Transport-Security: max-age=63072000` (no `includeSubDomains`/`preload`) at the platform level; confirm our `next.config.js` value wins after deploy rather than being silently deduplicated.
- **Consider a stricter CSP later** — current policy uses `'unsafe-inline'` for scripts/styles because there's no nonce-based middleware. Tightening further means adding `middleware.ts` to generate a per-request nonce — real work, not urgent at current traffic.

## Still open (not started)

- **Deploy this branch/working copy** — see the warning at the top of this file. Nothing below matters to real visitors until this happens.
- **Step 7 — Client sign-off for portfolio (outreach, not code)**: message PrimeCare and the Dubai jobs-platform contact directly, asking specific yes/no permission for: (1) naming them/their business publicly, (2) showing screenshots (specify which pages), (3) a short problem-solution-outcome case study, (4) a short quote/testimonial. Send the draft blurb below for a quick "does this look okay to publish" rather than an open-ended ask. Get the answer in writing (a WhatsApp/email "yes, fine to publish" is enough — no notarized release needed for two informal deals). If either declines or wants edits, respect it immediately and note what partial use (if any) they did approve — e.g. "okay to describe the project anonymously, not okay to use our name" is still usable. This blocks the portfolio/case-study section — no point building it before knowing what's clear to show.

  Draft blurbs to send for approval (edit before sending if the specifics are off):
  - **PrimeCare**: "PrimeCare — an interactive React-based body-mapping tool patients use during intake to mark pain locations and track recovery over time, built for a physiotherapy clinic."
  - **Dubai jobs platform**: "A job-matching platform built for a Dubai-based overseas recruitment consultancy, connecting candidates to openings through structured search and application workflows." *(Naman/Aarti: confirm this description is accurate before sending — I don't have the exact feature list.)*

  **Testimonial ask (Step 9, same outreach channel)**: when following up for the quote itself, give a concrete prompt rather than "say something nice" — ask each client: *"What was the biggest problem before we built this, and how's it working now?"* Use their answer close to verbatim (trim for length only, never reword) in two places once received: embedded in that client's case study on the Portfolio page (`src/data/portfolio.ts` → `testimonial` field), and as a pull-quote in the homepage strip (`src/data/testimonials.ts`). If neither client is ready to give a quote, leave `testimonials.ts` empty and skip the case-study `testimonial` field — do not write a placeholder like "Amazing service! - J.D."; a fabricated quote is a bigger credibility risk than an empty section.

- **Portfolio / case-study showcase** — content is drafted (see Step 8 above) but blocked on Step 7 sign-off; route intentionally not created yet.
- **Testimonial strip** — component drafted (Step 9 above), `testimonials.ts` is empty on purpose; blocked on getting an actual quote via the Step 7 outreach channel.
- **Differentiate the two hero CTAs** — "Start Your Project" and "Book Free Consultation" both still route to the same `/avail-service` form with no distinction.
- **Trim the 6 home-service cards** — several overlap in wording ("grow"/"strategy"/"digital" recycled); 2026-06-21 audit suggested cutting to 3-4.
- **Nav update** — add "About" next to "Services"/"Avail service" once the About section ships.

## To ship the About section when ready

1. Drop real photos into `public/assets/team/naman.jpg` and `public/assets/team/aarti.jpg`.
2. In `page.tsx`, replace the marker comment with `import AboutSection from "@/components/home/AboutSection";` at the top and `<AboutSection />` where the comment sits.
3. Add `{ label: "About", href: "/about" }` — or however it's routed — to `navItems` in `site.ts` if it becomes its own page instead of a homepage section.

## To ship the Portfolio page when Step 7 sign-off lands

1. Get written yes/no from both clients first (Step 7 above) — update `src/data/portfolio.ts` per what was actually approved: real name vs. keep the anonymized descriptor, add `screenshot`/`testimonial` only for fields explicitly approved, correct any factual detail the client flags as wrong.
2. Create `src/app/portfolio/page.tsx` (or `/work`, matching whatever's decided) with real `Metadata` (title/description/canonical, following the pattern in `src/app/avail-service/page.tsx`), rendering `<PortfolioPageContent />` from `src/components/portfolio/PortfolioPageContent.tsx`.
3. Add `{ label: "Portfolio", href: "/portfolio" }` to `navItems` in `site.ts`, next to Services/Avail service — not buried in the footer.
4. Replace the "Why Choose TechByus" bullets in `page.tsx`/`reasons` (or add alongside) with a teaser line linking to the new page, e.g. "See how we built a custom booking platform for a physiotherapy clinic →".

## To ship the Testimonial strip when a real quote exists

1. Add the client's actual words to `src/data/testimonials.ts` (homepage strip) and/or the matching entry's `testimonial` field in `src/data/portfolio.ts` (case study embed) — verbatim, trimmed for length only.
2. In `page.tsx`, replace the marker comment below the hero with `import TestimonialStrip from "@/components/home/TestimonialStrip";` at the top and `<TestimonialStrip />` where the comment sits.
