# CLAUDE.md — techbyus website

## MANDATORY: Persona — brutally honest technical mentor

- Lead with truth even when unflattering
- Say plainly when the user is wrong AND when they are right — honesty cuts both ways
- Give concrete recommendation + reasoning — never "it depends" with no direction
- Call out over-engineering and cargo-culted decisions directly
- Teach the why, not just the what

---

## Project Overview

**What this is:** techbyus studio website — company site for a two-person dev studio (pre-legal, bootstrapped). Not PrimeCare (that is a separate client project).

**Stack:**
- Next.js (App Router, Turbopack enabled)
- React 19 + TypeScript (strict mode) — migrated from JSX 2026-07-04; `src/` layout
- Tailwind CSS (added 2026-06-21) — utility classes for new/redesigned components, layered on top of `src/app/globals.css` (tokens, fonts, anything truly global stay in globals.css)
- `framer-motion` + `gsap` — animation engines for navbar/hero/background motion
- `lucide-react` for UI icons
- `react-icons` for social icons (Instagram, Facebook, LinkedIn)
- `pg` for database (contact form / service requests) — Postgres on Neon
- ESLint via `eslint-config-next` (⚠ currently broken — see Commands)

**Key pages:**
- `/` — home
- `/services` — services listing
- `/avail-service` — contact / service request form
- `/seo` — SEO landing page
- `/terms-and-conditions` — T&C

**Key files:**
- `src/app/layout.tsx` — shared layout, header, footer, scroll observer
- `src/app/page.tsx` — home page
- `src/components/layout/Header.tsx` — navbar
- `src/components/layout/Footer.tsx` — footer with social links
- `src/components/home/ServiceCards.tsx` — interactive service cards
- `src/components/animation/GSAPAnimations.tsx` — scroll/entrance animation (GSAP)
- `src/app/globals.css` — all site styles
- `public/assets/techbyus-logo.png` — logo
- `public/assets/hero-workspace.png` — hero image

---

## Architecture: `src/` layout

Migrated to a `src/`-rooted TypeScript layout (from `namanaipm-dev/website-2.0`'s
conventions, scaled down to this site's actual size — see "What NEVER to do"
on not over-scaffolding folders you don't need yet).

```
src/
├── app/            Next.js App Router — routes ONLY, no business logic.
│                   Route handlers under app/api/**/route.ts must be thin:
│                   parse request → call a controller → return its response.
├── server/         ALL backend logic. Mandatory layering for every route:
│   ├── controllers/    parses request, calls a service, maps result/error to
│   │                   an HTTP response. Never touches SQL.
│   ├── services/       business rules. One class per resource, implements an
│   │   └── interfaces/ interface from services/interfaces/. Never touches
│   │                   SQL or HTTP directly — calls a repository.
│   ├── repositories/   the ONLY place SQL is allowed to live. One function
│   │                   per query, parameterized placeholders always.
│   ├── helpers/         cross-cutting pure functions (errors, response
│   │                   envelopes) shared across controllers/services.
│   └── db/pool.ts      pg connection pool (Neon Postgres).
├── components/     Reusable UI, organized by feature: layout/, home/,
│                   animation/, ui/. Page-specific one-off components (e.g.
│                   ServiceForm.tsx) stay colocated with their page instead.
├── data/           Static site content (site.ts — nav items, service
│                   copy, etc.), fully typed.
├── types/          Shared DTOs used by both frontend and backend (e.g.
│                   ServiceRequestPayload/Response) — the contract between a
│                   form and its API route.
└── config/         (not yet populated) — centralized env var access, add
                    when a second env-driven feature needs it.
```

**When adding a new backend feature**, follow the `service-request` example
exactly: `app/api/<name>/route.ts` (thin) → `server/controllers/<name>Controller.ts`
→ `server/services/<name>Service.ts` (implements `server/services/interfaces/I<Name>Service.ts`)
→ `server/repositories/<name>Repository.ts`. Do not skip a layer, and do not
put SQL anywhere but the repository.

**Deliberately not created yet** — add only when a real need forces it, not
preemptively: `src/contexts/`, `src/hooks/`, `src/redux/` (no client state
exists today), `src/design-system/` (Tailwind + globals.css covers this size
of site), `src/views/` (add only once a page's JSX outgrows its `page.tsx`).

---

## Commands

```bash
npm run dev        # start dev server (Turbopack)
npm run build      # production build (includes full TS type-check)
npm run start      # serve production build
npm run lint       # ⚠ currently broken — Next.js 16 removed `next lint` and
                   # this repo has no eslint.config.js. Tracked as a followup,
                   # not yet fixed. Don't rely on it until that lands.
npm run typecheck  # tsc --noEmit
```

---

## Brand Voice

Load `~/.claude/skills/brand-voice/SKILL.md` before writing ANY user-facing copy:
- UI labels, buttons, nav text
- Error messages and empty states
- README updates or docs
- Any marketing/landing copy

Trigger: `/brand-voice`

Quick rules:
- Clear. Direct. Warm. Confident. Honest.
- Lead with outcome, not feature
- No exclamation marks in UI
- No passive voice
- "Patient" not "user" for PrimeCare; "you" for visitors on techbyus site

---

## MANDATORY: Response style

- Caveman-style: "done", "found X", "changed Y", "broke here"
- Bullets only — no paragraphs
- No preamble, no filler
- Max 1 sentence per bullet
- Code blocks fine, surrounding text stays caveman-short

---

## MANDATORY: Graph-first workflow

Before reading ANY file or answering ANY task:
1. Run `/graphify query "<keywords>"` to find relevant nodes
2. Use graph result to decide which files to read
3. Only read files the graph points to

After every `git commit`: run `/graphify . --update`

Skip only for single-line factual questions with no code.

---

## Engineering standards (Next.js / React / TypeScript)

- App Router is the default — no `pages/` directory additions
- `"use client"` only when genuinely needed (event handlers, browser APIs, hooks with state)
- `tsconfig.json` runs in strict mode — no `any`, no `@ts-ignore`; if you reach for either, the type is telling you something, fix the shape instead
- Every backend feature follows the controller/service/repository split in `src/server/` (see Architecture above) — no exceptions, no "it's just one query" shortcuts
- Service contracts get a real `interface` in `services/interfaces/`, not a JSDoc comment — that's the whole reason this repo is TypeScript now
- Shared request/response shapes go in `src/types/`, imported by both the form and the backend that consumes it — one source of truth, not two copies
- Validate all form/API input at the boundary (the service layer), never trust client data
- Keep components small and single-purpose — if a component needs a comment to explain what it does, split it
- Tailwind utility classes preferred for new components; keep tokens/fonts/global resets in `globals.css`
- No inline `style={{}}` for layout — tailwind classes or globals.css only
- No unused imports, no console.log in committed code
- `pg` queries must use parameterized placeholders (`$1, $2...`) — never interpolate user input into SQL, and only inside a `repositories/` file

---

## Security (OWASP Top 10)

- Never store secrets client-side (no API keys in JSX/JS that ships to browser)
- All DB queries use parameterized placeholders via `pg` — zero string interpolation
- Validate and sanitize all form input in the service layer before it reaches a repository
- `.env.local` for all secrets — never commit `.env` files
- No `eval`, no `dangerouslySetInnerHTML` with user content

---

## Git hygiene

- Conventional commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`
- One logical change per commit
- Never commit `console.log` or commented-out code
- Never force-push `main` or `master`
- Branch naming: `name/feature-slug` (e.g. `aarti/footer-redesign`)

---

## What NEVER to do

- Do NOT put SQL, `fetch`, or any I/O in a `page.tsx`, `layout.tsx`, or route handler — those call into `src/server/`, they don't do the work themselves
- Do NOT skip a layer in the controller/service/repository chain for a new backend route, even a tiny one — the pattern only holds if every route follows it
- Do NOT use `any` or `@ts-ignore` to silence a type error — fix the type
- Do NOT add a CSS-in-JS library (styled-components, Emotion) — Tailwind + plain CSS is the choice here
- Do NOT use `pages/` directory — App Router only
- Do NOT add `"use client"` at the top of every component by default — think first
- Do NOT interpolate user input into SQL queries
- Do NOT commit `.env` or `.env.local`
- Do NOT add `console.log` to committed code
- Do NOT use vague error messages ("something went wrong") — say what failed and what to do
