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

## Deploying to GitHub Pages with a custom domain

### GitHub repository setup

1. Push this repo to a GitHub repository (e.g. `bodesigns/bodesigns`)
2. **Settings → Pages → Build and deployment → Source**: choose
   "GitHub Actions"
3. The workflow at `.github/workflows/deploy.yml` will run on every push to
   `main`, build with `vite-react-ssg`, and publish `dist/`

### DNS records (set at your registrar)

Add the following for `bodesigns.com`:

| Type  | Host | Value (GitHub Pages)                  |
| ----- | ---- | ------------------------------------- |
| A     | @    | 185.199.108.153                       |
| A     | @    | 185.199.109.153                       |
| A     | @    | 185.199.110.153                       |
| A     | @    | 185.199.111.153                       |
| AAAA  | @    | 2606:50c0:8000::153                   |
| AAAA  | @    | 2606:50c0:8001::153                   |
| AAAA  | @    | 2606:50c0:8002::153                   |
| AAAA  | @    | 2606:50c0:8003::153                   |
| CNAME | www  | `your-github-username.github.io`      |

The `public/CNAME` file pins the custom domain so it survives every redeploy.
After DNS propagates, enable "Enforce HTTPS" in GitHub Pages settings.

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
