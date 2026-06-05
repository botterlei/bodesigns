# bodesigns

Brent Otterlei's personal portfolio — built with Vite + React 19 + TypeScript +
Tailwind v4, prerendered with [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg),
content authored in MDX, and deployed to GitHub Pages at
[bodesigns.com](https://bodesigns.com).

## Stack

- **Vite 6** with **React 19**
- **TypeScript** (strict)
- **Tailwind v4** via `@tailwindcss/vite` + CSS-first `@theme` tokens
- **React Router v6** (data-router, declarative routes)
- **vite-react-ssg** for static prerendering (great SEO on GitHub Pages)
- **MDX** for case studies + blog posts (frontmatter via `remark-mdx-frontmatter`)
- **react-helmet-async** (bundled by vite-react-ssg) for per-route SEO

## Local development

```sh
npm install
npm run dev
```

Other scripts:

```sh
npm run build       # Static site generation → dist/
npm run build:spa   # Plain Vite SPA build (no prerender)
npm run preview     # Preview the production build locally
npm run typecheck
```

## Project structure

```
src/
  components/    Reusable React components (Nav, Footer, CaseStudyBlocks, …)
  content/       MDX + data
    work/          Case study MDX files (frontmatter + native designed body)
    blog/          Blog post MDX files
    resume.ts      Resume data
    press.ts       Press / "in the news" links
  lib/           Helpers (content loaders, SEO, theme)
  pages/         Page components mapped 1:1 to routes
  styles/        Tailwind + global CSS
  App.tsx        Root layout
  main.tsx       vite-react-ssg entry
  routes.tsx     Route table
public/
  CNAME          Custom domain for GitHub Pages
  robots.txt
```

## Authoring content

### A new case study

Case studies are native designs composed in MDX using the block primitives in
`src/components/CaseStudyBlocks.tsx` — `<Lede>`, `<Section>`, `<Pull>`,
`<Callout>`, `<FigureSlot>`, `<MetricsRow>`, `<ProcessList>`, `<TwoCol>`. These
are registered globally in `WorkDetail.tsx`'s `MDXProvider`, so MDX files can
use them without imports.

Create `src/content/work/your-slug.mdx`:

```mdx
---
title: 'Project title'
slug: 'your-slug'
client: 'Client name'
role: 'Your role'
year: '2024'
order: 6
summary: 'One sentence elevator pitch.'
tags: ['Tag', 'Tag']
metrics:
  - label: 'Headline metric'
    value: '$1B+'
---

<Lede>Opening framing sentence in display type.</Lede>

<Section eyebrow="Context" number={1} title="Section title">
  Paragraph copy here.
</Section>

<FigureSlot
  number={1}
  label="Figure label"
  meta="Date / location"
  caption="Optional caption beneath the frame."
/>
```

The page is auto-discovered at `/work/your-slug` and added to listings.

### A new blog post

Create `src/content/blog/your-slug.mdx` with frontmatter (title, slug, date,
summary, tags). It will appear at `/blog/your-slug`.

### Confidential case studies (Workday / NDA)

Workday projects are gated behind a password login. On the work index they show
a lock overlay; visitors must sign in to open the full case study.

1. Copy `.env.example` → `.env.local` and set `VITE_CONFIDENTIAL_ACCESS_PASSWORD`.
2. For production, add the same value as a GitHub repo secret named
   `CONFIDENTIAL_ACCESS_PASSWORD` (used by the deploy workflow at build time).

Mark any case study as confidential in frontmatter:

```yaml
confidential: true
```

Projects with `client: Workday` are confidential by default. Set
`confidential: false` to opt out.

**Note:** This is a client-side gate suitable for a portfolio (keeps casual
visitors out). It is not server-grade security — do not rely on it for highly
sensitive material.

## Deploying to GitHub Pages

The site auto-deploys to GitHub Pages on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow
runs `npm ci → typecheck → build`, copies `dist/index.html → dist/404.html`
as an SPA fallback, and publishes `dist/` using the official
`actions/deploy-pages` flow (no `gh-pages` branch required).

### One-time GitHub setup

1. Push the repo to GitHub (already done — `botterlei/bodesigns`).
2. **Settings → Actions → General → Workflow permissions** → select
   **"Read and write permissions"** (required so the workflow can enable
   Pages and publish the artifact).
3. Trigger the first deploy by pushing to `main` or running the workflow
   manually from the **Actions** tab → **Deploy to GitHub Pages** → **Run
   workflow**. The workflow uses `actions/configure-pages` with
   `enablement: true`, so it will auto-enable Pages and set the source to
   "GitHub Actions" on the first run — no manual toggle needed.

### Day-to-day workflow

```sh
git add .
git commit -m "your change"
git push origin main
# → Actions tab shows the build and deploy
# → site is live at bodesigns.com a minute or two later
```

You can watch progress under **Actions → Deploy to GitHub Pages**, and the
deployed URL appears on the **Deployments** sidebar of the repo home page.

### Custom domain — DNS records

`public/CNAME` already pins the apex domain `bodesigns.com` so it survives
every redeploy. Add these records at your DNS registrar:

| Type  | Host | Value                                 |
| ----- | ---- | ------------------------------------- |
| A     | @    | 185.199.108.153                       |
| A     | @    | 185.199.109.153                       |
| A     | @    | 185.199.110.153                       |
| A     | @    | 185.199.111.153                       |
| AAAA  | @    | 2606:50c0:8000::153                   |
| AAAA  | @    | 2606:50c0:8001::153                   |
| AAAA  | @    | 2606:50c0:8002::153                   |
| AAAA  | @    | 2606:50c0:8003::153                   |
| CNAME | www  | `botterlei.github.io`                 |

Once DNS propagates (often within minutes; up to ~24h), tick **Enforce
HTTPS** in **Settings → Pages**. GitHub will provision a Let's Encrypt
certificate automatically.

### Notes

- Every route is statically prerendered by `vite-react-ssg`, so direct loads
  of e.g. `/work/twine-retirement-visualizer` work natively (GitHub Pages
  serves the matching `.html`). The `404.html` is a safety net for any path
  not pre-rendered.
- `dist/` is git-ignored — CI builds it fresh on every deploy.
- To deploy manually without CI, run `npm run build` and point any static
  host at `dist/`.

## Responsive design

- Mobile-first Tailwind workflow with breakpoints sm/md/lg/xl/2xl
- Fluid type via `clamp()` (see `display-1`, `display-2`, `display-3` in
  `src/styles/global.css`)
- Mobile nav is a full-screen sheet with focus trap + ESC + backdrop dismiss
- Touch targets ≥ 44 × 44 px throughout

## Dark mode

Tap the sun/moon in the nav. Preference is stored in `localStorage` and the
initial paint is set inline in `index.html` to avoid a flash.

## License

Personal site, all rights reserved. Code structure is freely reusable as long
as none of the copy, photography, case studies, or résumé content is
republished without permission.
