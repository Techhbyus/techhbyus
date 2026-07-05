# Techhbyus Revamp — Progress Tracker

Running log of the 2026-07-05 trust/credibility revamp. Update this file as steps land instead of relying on chat history.

## ⚠ Live site is stale — deploy needed

Confirmed 2026-07-05 via direct fetch of `techhbyus.com`: it's hosted on **Vercel** and still serving the **old** copy ("We Help Businesses Grow Digitally," old trust section, no pricing, no contact info). Steps 1-9 were committed and pushed to `naman/nextjs-ts-restructure` on 2026-07-05, but **that's a feature branch, not what Vercel deploys from** — pushing it does not put any of this in front of real visitors. Merging it into whatever branch (`main`/`master`) is wired to the production Vercel deployment is still the single highest-priority action.

**Update 2026-07-05 (later same day):** `naman/nextjs-ts-restructure` is now merged into `main` (`9071c2f`). But `git rev-parse origin/Master origin/main` shows they are **completely different histories** — `origin/HEAD` points at `origin/Master` (capital M, the repo's actual default branch), and `Master` is still sitting on old pre-TypeScript commits. If Vercel's production deployment tracks `Master` instead of `main`, merging into `main` changes nothing for real visitors. **Check Vercel dashboard → Settings → Git → Production Branch before assuming anything above is closer to live.**

## Done

- **Committed & pushed** (2026-07-05): steps 1-9 landed in 4 commits on `naman/nextjs-ts-restructure` (`7a2df42`, `85fccfb`, `2559fc8`, `819fd99`), audited for duplication first (see git log). Confirm what branch Vercel actually builds from before assuming this is live — see the warning above.
- **Stack migration** (2026-07-04): moved to `src/` layout, React 19 + TypeScript strict mode, controller/service/repository backend split. See `CLAUDE.md` for the architecture.
- **Visual redesign** (June 2026): void-black / Acronym / Plum-Voltage design system, particle hero, animated nav.
- **Step 1 — Hero + trust copy rewrite**: killed the "grow your business digitally" buzzword copy in `page.tsx` hero and trust-band, plus `missionItems`/`reasons` in `site.ts`. Replaced with concrete, verifiable facts — real stack, real shipped work (PrimeCare-style body-mapping tool, a job-matching platform for a recruitment consultancy), real 4-6 week turnaround.
- **Step 2 — Contact info + low-friction form + spam protection**: added `contactInfo` (email live, phone slot empty) to `site.ts`, rendered in `Footer.tsx` and near the hero CTA. Cut `ServiceForm.tsx` from 5 fields to 4 (name, email-or-phone, 4-option "what do you need" dropdown, optional short detail). Added a honeypot field (`company_site`) checked server-side in `serviceRequestController.ts`. Added "We reply within 24 hours" note.
- **Step 3 — Pricing tiers**: added a "Services & Packages" homepage section (`pricing-section` in `page.tsx`) with 3 tiers from `pricingTiers` in `site.ts` — Starter/Landing Site (Starting from ₹15,000), Business Website (Starting from ₹25,000), Custom Platform/Web App (Custom quote). Each tier's CTA deep-links to `/avail-service` with the dropdown and detail field pre-filled via query params (`?service=...&package=...`), using `useSearchParams` + a `Suspense` boundary.
- **Step 4 — About/Team section (drafted, later shipped anonymized — see Step 12)**: built `src/components/home/AboutSection.tsx` — originally two named team cards (Naman, Aarti) with photo placeholders, founding story paragraph.
- **Step 5 — Security headers + form hardening**: added a `headers()` function in `next.config.js` — HSTS (`max-age=63072000; includeSubDomains; preload`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and a permissive starting `Content-Security-Policy` (`default-src 'self'`, `'unsafe-inline'` for script/style since there's no nonce middleware yet). Confirmed HTTPS is already enforced (Vercel auto-redirects `http://` → `https://`, verified via `curl -I`). Hardened `serviceRequestService.ts` — server-side trim + max-length checks on every field (name/email/business/service/details), independent of the client-side form. Added an in-memory per-IP rate limiter (`src/server/helpers/rateLimiter.ts`, 5 requests / 10 minutes) wired into `serviceRequestController.ts` ahead of the honeypot and validation checks. All verified locally: headers present on every response, overlong/empty fields correctly rejected with 400, 6th+ rapid request correctly gets 429.
- **Step 8 — Portfolio/case-study page (drafted, not routed)**: built `src/data/portfolio.ts` (`caseStudies`, anonymized descriptors — "Physiotherapy Booking Platform" / "Overseas Recruitment Job-Matching Platform"), `src/components/portfolio/CaseStudyCard.tsx`, and `src/components/portfolio/PortfolioPageContent.tsx` (the full intended page: hero, both case studies, closing "Get a Quote" CTA). **Deliberately no `src/app/portfolio/page.tsx`** — creating that file would make it live at a guessable URL before Step 7 sign-off exists, which defeats the point of Step 7. Each case study has problem/what-we-built/outcome only; `screenshot`/`testimonial` fields exist on the type but are unset everywhere (conditionally rendered, so nothing shows until a client approves one). No fabricated metrics anywhere in the outcome copy. Confirmed via `npm run build` that no `/portfolio` route exists yet. Did **not** touch the live "Why Choose TechByus" section to add a teaser link (Step 8 point 5) — linking to a page that doesn't exist yet would be worse than the current copy; that change ships together with the route once sign-off lands.
- **Step 9 — Testimonial strip (drafted, not wired in)**: built `src/data/testimonials.ts` (`Testimonial[]`, **shipped empty on purpose** — no real client quote exists yet) and `src/components/home/TestimonialStrip.tsx` (renders `null` if the array is empty, as a second layer of safety on top of not being imported anywhere). Marker comment added in `page.tsx` right below the hero section — the exact spot requested ("prime real estate... currently empty"). Confirmed via curl that nothing testimonial-related renders on the live homepage. No placeholder/fabricated quotes anywhere, per the explicit instruction that a fake testimonial is worse than none.
- **Step 10 — Stats band (drafted, not wired in)**: found orphaned `.stats-band` CSS in `globals.css` (3-col grid, `div > strong + span` shape) with no component/data ever built for it. Built `src/data/site.ts` → `StatItem`/`statItems` (**shipped empty on purpose**, same reasoning as testimonials) and `src/components/home/StatsBand.tsx` (renders `null` on empty array). Marker comment added in `page.tsx` below the existing testimonial-strip marker. Verified by temporarily adding a dummy stat, running `npm run build`, confirming it rendered correctly with the existing CSS, then reverting to empty before commit. No new CSS needed.

## Needs manual input before it can ship

These are blocked on real-world info only Naman/Aarti have — do not fill with placeholders or invented specifics.

- **Phone/WhatsApp number** — `contactInfo.phone` in `site.ts` is `""`. The UI (footer + hero note) already renders it conditionally, so adding the real number is the only change needed.
- ~~Team photos~~ — resolved by Step 12: `AboutSection.tsx` no longer names individuals or needs photos, ships anonymized instead.
- **Recruitment-consultancy platform name** — the old hero copy (pre-Step 11) described it generically ("a job-matching platform for an overseas recruitment consultancy") with no name; that copy is gone from the homepage now (Step 11 replaced the hero), but the same anonymized description still lives in `src/data/portfolio.ts`, still pending Step 7 sign-off.
- ~~Domain spelling decision~~ — resolved 2026-07-05: canonical spelling is **"Techhbyus"** (double h), not "TechByus"/"Techbyus". See Step 12 for the rename.
- **Run securityheaders.com manually** — automated fetch gets a 403 (it blocks bots by design). Confirmed the actual header state directly via `curl -I techhbyus.com` instead (see step 5 above for what's missing/present pre-deploy). Naman should still run the real scan after deploying, for the polished grade/report.
- **Verify HSTS after deploy** — Vercel already injects its own default `Strict-Transport-Security: max-age=63072000` (no `includeSubDomains`/`preload`) at the platform level; confirm our `next.config.js` value wins after deploy rather than being silently deduplicated.
- **Consider a stricter CSP later** — current policy uses `'unsafe-inline'` for scripts/styles because there's no nonce-based middleware. Tightening further means adding `middleware.ts` to generate a per-request nonce — real work, not urgent at current traffic.

## Step 11 — SaaS-package homepage revamp (2026-07-05, later same day)

Full homepage redesign, replacing the bespoke-studio-first positioning from
Steps 1-9 with a packages-first model, per direct partner/client feedback that
the old design read as "typical web agency" rather than a growth partner. Full
discussion/decisions logged in the session that produced this — short version:

- **Design tokens flipped to light-default**: `globals.css` `:root` is now
  cream/navy/maroon (`--void #f8f1e7`, `--bone #14213d`, `--amber`/`--plum`
  both `#7a1e28`). The old void-black/Acronym-era dark palette moved to
  `[data-theme="dark"]`, fully intact but **unreachable from the UI** —
  `ThemeToggle.tsx` still exists but is no longer imported/rendered in
  `Header.tsx`. Font unchanged (Outfit — confirmed good enough, no swap;
  earlier "Acronym self-hosted" memory was stale, Outfit has been the actual
  font since before this session).
- **Pricing model replaced**: the ₹15k/₹25k/custom-quote tiers from Step 3 are
  gone. New: `normalPricingTiers` (Starter ₹5,999 / Pro ₹7,999 "Most Popular" /
  Premium ₹11,999) and `ecommercePricingTiers` (Base ₹19,999 / Premium
  ₹29,999) in `site.ts`. **No tier includes a free domain** — client owns
  their domain for security/lock-in reasons; every tier instead lists "Domain
  support — you own it, we help set it up."
- **Business-model note**: the reference mockup this was built from sells
  fixed template packages, which is a real tension with the "not a theme with
  your logo swapped in" bespoke-studio pitch from Step 1. Resolved as a
  hybrid — packages are the homepage headline now, but the bespoke/custom-build
  capability survives in the trimmed `reasons` (why-us) section and in the
  "Business Automation" service card copy, not deleted outright.
- **New sections**: `TemplateGallery` (4 style cards — Creative/Restaurant/
  Salon/Clothing — styled placeholders, **no demo links**, no real template
  demos exist yet), `TrustBadges` (5-item strip), `RecentWork` (new, empty-
  gated the same way as `TestimonialStrip` — filters `caseStudies` down to
  entries with a `screenshot` set, i.e. actual client sign-off, so it still
  renders nothing today).
- **Sections cut** (not in the new design, content folded elsewhere or
  dropped): the old `.trust-band` "What You Actually Get" bespoke pitch, the
  inline About paragraph block, and `.feature-section` "We Help You Build
  More Than a Website" — all removed from `page.tsx`, dead CSS/GSAP hooks for
  each cleaned up too.
- **Stats band stays empty-gated** — the reference mockup shows 50+/99%/24-7
  style numbers, but those are exactly the kind of unverified trust signal
  Step 10 explicitly refused to fabricate. Same rule applied here: `statItems`
  stays `[]` until real numbers exist.
- **Footer rewritten** to a 4-column layout (brand/tagline, Services, Quick
  Links, Contact) plus a bottom bar for copyright + social links. Only links
  to routes that actually exist — no Portfolio/About nav/footer links until
  those ship (same gate as before).
- **Nav trimmed** to Home / Services / Pricing (`/#pricing` anchor) /
  Avail service. The standalone "SEO" top-nav link was dropped (page still
  exists at `/seo`, just not linked from the header — reachable via
  sitemap/footer-services list instead).
- Verified via `npm run typecheck` + `npm run build` (both clean) and by
  curling the rendered `/` HTML in dev mode to confirm section counts (4
  template cards, 5 trust badges, 5 pricing cards, 7 process steps, 4 reason
  cards, 6 service cards, one "Most Popular" badge, zero "Free Domain" text,
  zero `data-theme` attribute on `<html>`). **No visual/screenshot check was
  possible** — no browser automation tool (chromium-cli, Playwright) was
  available in this environment, so exact color/spacing fidelity to the
  reference mockup hasn't been eyeballed yet. Do that before treating this as
  fully signed off.

## Step 12 — Ship About section (anonymized) + brand spelling fix (2026-07-05, later same day)

- **About section shipped**: `AboutSection.tsx` rewritten to drop the
  named/photo team-grid entirely — no more "Naman"/"Aarti" cards, no
  dependency on `public/assets/team/*.jpg` (which never existed). The founding
  story is unchanged; a second paragraph folds in the previously per-person
  bio gist anonymized ("We're two full-stack engineers, both with a B.Tech in
  Computer Science... build TechByus nights and weekends"). Wired into
  `page.tsx` right after the why-us section, with `id="about"` for anchor
  linking. Added to `navItems` and the footer Quick Links column
  (`/#about`). Unused `.team-grid`/`.team-card`/`.team-photo`/`.team-role`
  CSS removed; `.pricing-grid` (which shared that CSS block) got its own
  standalone base rule so it didn't lose its styles in the cleanup.
- **Brand spelling fixed**: canonical is **"Techhbyus"** (double h), not
  "TechByus"/"Techbyus" — see the resolved item above.

## Step 13 — Dedicated /pricing and /about pages (2026-07-05, later same day)

- Nav "Pricing"/"About" no longer `/#pricing`/`/#about` in-page anchors — now
  real routes (`/pricing`, `/about`), per explicit instruction to stop
  anchor-scrolling through the homepage. Updated in `navItems` (`site.ts`),
  `Footer.tsx` Quick Links, and the hero's "View Pricing" button.
- Extracted `src/components/home/PricingTables.tsx` (the two-column normal +
  ecommerce card grids) out of `page.tsx` so both the homepage teaser section
  and the new `/pricing` page render the exact same cards from one place —
  no duplicated JSX to drift out of sync.
- `src/app/pricing/page.tsx`: intro, `<PricingTables />`, a new feature
  comparison table (`pricingComparison` in `site.ts`, Starter/Pro/Premium),
  `<TrustBadges />`, and a pricing FAQ (`pricingFaqs` in `site.ts` — answers
  the domain-ownership question head-on since it's a non-standard policy vs.
  competitors' "free domain" offers).
- `src/app/about/page.tsx`: `<AboutSection />` plus the `reasons` (why-us) and
  `processSteps` (how-we-work) sections reused from existing data — no new
  unverifiable facts invented, same source of truth as the homepage.
- Homepage keeps its own condensed pricing/about sections (unchanged content)
  with a "See full pricing details" link added under the pricing teaser
  pointing to `/pricing`.
- Removed now-pointless `id="pricing"`/`id="about"` anchor ids from the
  homepage sections since nothing links to them anymore.

## Step 14 — Bug fixes: pricing-card height mismatch + DB connection error (2026-07-05, later same day)

- **Pricing card height mismatch**: normal-website cards (3 tiers) and
  e-commerce cards (2 tiers) sit in two *separate* grids side by side
  (`.pricing-columns`). CSS Grid only auto-equalizes row height *within* one
  grid, not across two independent grids — so the e-commerce cards (longer
  feature lists) rendered visibly taller than the normal cards next to them.
  Fixed in `globals.css`: `.pricing-columns` now `align-items: stretch`
  (was `start`), `.pricing-group` is `display:flex; flex-direction:column`,
  and `.pricing-grid` is `flex:1` — both groups now match the tallest one,
  and every card inside stretches to fill it via grid's default stretch.
- **Form submit showing a 500 despite the row landing in the DB**: found a
  real `DATABASE ERROR: getaddrinfo ENOTFOUND` for the Aiven MySQL host in an
  old dev-server log, and no `enableKeepAlive` on the pool in
  `src/server/db/pool.ts`. Without keep-alive, cloud MySQL providers silently
  drop idle pooled TCP connections; the next query goes out on a half-dead
  socket, MySQL commits it, but the response packet never arrives — `mysql2`
  throws even though the row is already written. Added
  `enableKeepAlive: true, keepAliveInitialDelay: 10000` to the pool config,
  the standard fix for this exact pattern. **Not independently reproduced
  end-to-end** — this sandboxed environment has no outbound network path to
  the external Aiven host, so the fix is based on the log evidence + known
  mysql2/cloud-MySQL behavior, not a live before/after test. Confirm in a
  real environment that the 500-after-success no longer happens.
- Also audited for other cross-section CSS issues introduced during Steps
  11-13; removed several genuinely-dead CSS rules found in the process
  (`.card-arrow`, `.template-tag`, `.testimonial-stars`, `.section-heading.centered`)
  that were added speculatively but never used in any component.

## Step 15 — Multi-step service form (2026-07-05, later same day)

- Replaced the flat 4-field `ServiceForm.tsx` with a 3-step wizard: (1) "What
  do you need?" as selectable pills built from `serviceOptions`, plus a
  "Something else" pill that reveals a free-text input; (2) Name/Organization
  + Email/Phone; (3) optional "Anything else?" details + submit. Progress
  dots + "Step X of 3" label at top, Back/Continue nav between steps.
- Kept the exact same wire contract — `ServiceRequestPayload` (name, email,
  service, details, honeypot) — so `route.ts` → controller → service →
  repository needed zero changes. Fields are controlled React state instead
  of `FormData` off the DOM, since steps unmount each other's inputs; the
  honeypot input stays permanently mounted (not step-gated) so it's still
  present in `FormData` at submit time regardless of which step the user is on.
  Enter key in a step's text input advances to the next step instead of
  submitting early (no submit button exists in the DOM until the last step).
- Deep-link pre-fill from pricing CTAs (`?service=...&package=...`) still
  works the same way — pre-selects the matching pill / pre-fills the details
  textarea, unchanged from the old form's logic.
- New CSS added to `globals.css` (`.step-progress`, `.step-dot`, `.step-pills`,
  `.step-pill(.selected)`, `.step-other-input`, `.step-error`, `.step-nav`) —
  reuses existing tokens only (`--plum`, `--amber`, `--border`, `--bone`), no
  new colors introduced.
- Verified via `npm run typecheck` + `npm run build` (both clean) and by
  curling the rendered `/avail-service` HTML in dev mode — confirmed 7 pills
  render (6 service options + "Something else"), 3 progress dots with 1
  active, "Continue" button (not the submit button) on step 1. **No visual
  browser check** — same limitation noted in Step 11, no chromium-cli/
  Playwright available in this environment. Click through manually before
  calling this fully signed off.

## Still open (not started)

- **Deploy this branch/working copy** — see the warning at the top of this file. Nothing below matters to real visitors until this happens.
- **Step 7 — Client sign-off for portfolio (outreach, not code)**: message PrimeCare and the Dubai jobs-platform contact directly, asking specific yes/no permission for: (1) naming them/their business publicly, (2) showing screenshots (specify which pages), (3) a short problem-solution-outcome case study, (4) a short quote/testimonial. Send the draft blurb below for a quick "does this look okay to publish" rather than an open-ended ask. Get the answer in writing (a WhatsApp/email "yes, fine to publish" is enough — no notarized release needed for two informal deals). If either declines or wants edits, respect it immediately and note what partial use (if any) they did approve — e.g. "okay to describe the project anonymously, not okay to use our name" is still usable. This blocks the portfolio/case-study section — no point building it before knowing what's clear to show.

  Draft blurbs to send for approval (edit before sending if the specifics are off):
  - **PrimeCare**: "PrimeCare — an interactive React-based body-mapping tool patients use during intake to mark pain locations and track recovery over time, built for a physiotherapy clinic."
  - **Dubai jobs platform**: "A job-matching platform built for a Dubai-based overseas recruitment consultancy, connecting candidates to openings through structured search and application workflows." *(Naman/Aarti: confirm this description is accurate before sending — I don't have the exact feature list.)*

  **Testimonial ask (Step 9, same outreach channel)**: when following up for the quote itself, give a concrete prompt rather than "say something nice" — ask each client: *"What was the biggest problem before we built this, and how's it working now?"* Use their answer close to verbatim (trim for length only, never reword) in two places once received: embedded in that client's case study on the Portfolio page (`src/data/portfolio.ts` → `testimonial` field), and as a pull-quote in the homepage strip (`src/data/testimonials.ts`). If neither client is ready to give a quote, leave `testimonials.ts` empty and skip the case-study `testimonial` field — do not write a placeholder like "Amazing service! - J.D."; a fabricated quote is a bigger credibility risk than an empty section.

- **Portfolio / case-study showcase** — content is drafted (see Step 8 above) but blocked on Step 7 sign-off; route intentionally not created yet.
- **Testimonial strip** — component drafted (Step 9 above), `testimonials.ts` is empty on purpose; blocked on getting an actual quote via the Step 7 outreach channel.
- ~~Differentiate the two hero CTAs~~ — resolved by Step 11: hero CTAs are now "Get Free Consultation" (`/avail-service`) and "View Pricing" (`/#pricing`), genuinely distinct.
- ~~Trim the 6 home-service cards~~ — resolved by Step 11: rewritten to 6 non-overlapping cards (Website Dev / E-Commerce / SEO / Database / Maintenance / Automation).
- **Visual/screenshot QA of the Step 11 revamp** — typecheck/build/HTML-structure were verified, but no browser screenshot was taken (no chromium-cli/Playwright available in this environment). Confirm colors, spacing, and mobile layout actually match intent before calling this done.
- **Real template demos** — `TemplateGallery` (Step 11) ships 4 styled cards with no "View Demo" links; needs actual example sites built and linked per category (Creative/Restaurant/Salon/Clothing) before those links can go live.
- **Recent-work screenshots** — `RecentWork` (Step 11) reuses `caseStudies` from `portfolio.ts`, gated on the `screenshot` field being set. Once Step 7 sign-off lands and screenshots are added, this section starts rendering automatically — no code change needed.
- ~~Nav update — add "About"~~ — resolved by Step 12: `{ label: "About", href: "/#about" }` added to `navItems`, plus a matching footer Quick Links entry.

## To ship the Portfolio page when Step 7 sign-off lands

1. Get written yes/no from both clients first (Step 7 above) — update `src/data/portfolio.ts` per what was actually approved: real name vs. keep the anonymized descriptor, add `screenshot`/`testimonial` only for fields explicitly approved, correct any factual detail the client flags as wrong.
2. Create `src/app/portfolio/page.tsx` (or `/work`, matching whatever's decided) with real `Metadata` (title/description/canonical, following the pattern in `src/app/avail-service/page.tsx`), rendering `<PortfolioPageContent />` from `src/components/portfolio/PortfolioPageContent.tsx`.
3. Add `{ label: "Portfolio", href: "/portfolio" }` to `navItems` in `site.ts`, next to Services/Avail service — not buried in the footer.
4. Replace the "Why Choose TechByus" bullets in `page.tsx`/`reasons` (or add alongside) with a teaser line linking to the new page, e.g. "See how we built a custom booking platform for a physiotherapy clinic →".

## To ship the Testimonial strip when a real quote exists

1. Add the client's actual words to `src/data/testimonials.ts` (homepage strip) and/or the matching entry's `testimonial` field in `src/data/portfolio.ts` (case study embed) — verbatim, trimmed for length only.
2. In `page.tsx`, replace the marker comment below the hero with `import TestimonialStrip from "@/components/home/TestimonialStrip";` at the top and `<TestimonialStrip />` where the comment sits.

## To ship the Stats band when real numbers exist

1. Add real `StatItem` entries to `statItems` in `src/data/site.ts` — only verified numbers (e.g. actual project count, actual developer count), never a rounded-up or aspirational figure.
2. In `page.tsx`, replace the marker comment below the stats-band one with `import StatsBand from "@/components/home/StatsBand";` at the top and `<StatsBand />` where the comment sits.
