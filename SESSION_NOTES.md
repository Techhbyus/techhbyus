# TechByus Website Session Notes

## Project

Company website for **TechByus**.

Tagline:

```text
We build website - you grow your business
```

## Current Stack

- Next.js
- React
- CSS in `app/globals.css`
- Social icons from `react-icons`
- UI icons from `lucide-react`

## Important Files

- `package.json` - npm scripts and dependencies
- `next.config.js` - Next.js config
- `app/layout.jsx` - shared layout, header, footer and reveal observer
- `app/page.jsx` - home page
- `app/services/page.jsx` - services page
- `app/avail-service/page.jsx` - contact/service request page
- `app/seo/page.jsx` - SEO page
- `app/terms-and-conditions/page.jsx` - Terms and Conditions page
- `app/components/Header.jsx` - navbar
- `app/components/Footer.jsx` - footer with social links
- `app/components/ServiceCards.jsx` - interactive service cards
- `app/components/InteractionObserver.jsx` - scroll reveal animation
- `app/globals.css` - site styling
- `public/assets/techbyus-logo.png` - company logo
- `public/assets/hero-workspace.png` - hero image

## Run Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Production build:

```bash
npm run build
```

Production start:

```bash
npm run start
```

## Pages

- Home: `/`
- Services: `/services`
- Avail service: `/avail-service`
- SEO: `/seo`
- Terms and conditions: `/terms-and-conditions`

## Changes Completed

- Converted the website to a Next.js project.
- Added company logo to the header.
- Changed brand spelling to `TechByus`.
- Split navbar links into separate pages instead of same-page scrolling.
- Matched the website theme to the logo colors.
- Increased logo size for better visibility.
- Added footer with:
  - Contact us
  - Terms and conditions
  - Tagline
  - Instagram, Facebook and LinkedIn links
- Added social icons:
  - Instagram icon in pink
  - Facebook icon in blue
  - LinkedIn icon in blue
- Added interactive service cards.
- Added reveal-on-scroll animation.
- Fixed page rendering after navigation without refresh.
- Added full Terms and Conditions content.
- Changed footer background to light blue.

## Git Notes

Current branch seen during the session:

```bash
Aarti/Frontendintegration
```

Useful Git commands:

```bash
git status
git add .
git commit -m "Restore TechByus Next.js website"
git push -u origin Aarti/Frontendintegration
```

## GitLab Push Issue

The push failed with:

```text
The project you were looking for could not be found or you don't have permission to view it.
fatal: repository 'https://gitlab.com/techhbyus-group/TechhByus-project.git/' not found
```

The remote was corrected from a browser page URL to:

```bash
https://gitlab.com/techhbyus-group/TechhByus-project.git
```

But GitLab still rejected access. That means one of these is likely true:

- The GitLab clone URL is not exactly correct.
- The cached GitLab account/token in Windows is wrong.
- The current GitLab account does not have access to the project.
- The project slug is different from `TechhByus-project`.

To fix, copy the exact HTTPS clone URL from GitLab:

```text
Project page > Code > Clone with HTTPS
```

Then run:

```bash
git remote set-url origin PASTE_REAL_CLONE_URL_HERE
git remote -v
```

Clear cached GitLab credentials if needed:

```bash
cmdkey /delete:git:https://gitlab.com
cmdkey /delete:git:https://oauth-refresh-token.gitlab.com
```

Then push again:

```bash
git push -u origin Aarti/Frontendintegration
```

Use a GitLab Personal Access Token as the password. Required scopes:

- `read_repository`
- `write_repository`

