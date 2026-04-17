# Portfolio

A clean, premium developer portfolio with subtle terminal-inspired details —
monospace accents, `$ command` labels, and a timeline-based story — built on a
modern, recruiter-friendly layout.

## Stack

- **Next.js 16** (App Router, Turbopack, metadata API)
- **React 19**
- **Tailwind CSS 4**
- **Motion** (the React 19-compatible successor to `framer-motion`, same API)
- **lucide-react** for icons

## Folder structure

```
.
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts, JSON-LD
│   ├── page.tsx            # Composes the landing page sections
│   ├── globals.css         # Theme tokens (colors, fonts) + base styles
│   ├── robots.ts           # Dynamic robots.txt
│   └── sitemap.ts          # Dynamic sitemap.xml
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx      # Vertical storytelling timeline
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx         # Form → mailto + direct email
│   ├── Footer.tsx
│   ├── Section.tsx         # Shared section wrapper
│   ├── SectionHeading.tsx  # `$ command` + heading + description
│   └── JsonLd.tsx          # Person + WebSite + CreativeWork schemas
├── config/
│   └── siteConfig.ts       # Single source of truth for content
└── public/                 # Static assets (og.png, favicon, …)
```

## The content lives in one place

Everything shown on the page — name, title, bio, experience, projects, skills,
socials, SEO metadata — is read from `config/siteConfig.ts`. Components never
contain copy.

Edit that file and the whole site updates:

```ts
import { siteConfig } from "@/config/siteConfig";
siteConfig.name; // "Atul Sharma"
siteConfig.experience[0]; // most recent role
siteConfig.projects; // array of ProjectItem
```

See `config/siteConfig.ts` for the full type definitions.

## SEO

- **Next.js metadata API** in `app/layout.tsx` — title template, description,
  keywords, canonical URL, Open Graph, Twitter card, robots directives,
  themeColor / colorScheme via the `Viewport` export.
- **JSON-LD** in `components/JsonLd.tsx` — injected via `<script>` tags:
  - `Person` (you, your links, your role)
  - `WebSite` (site-level data)
  - `CreativeWork` graph (one entry per project)
- **`app/sitemap.ts`** and **`app/robots.ts`** are dynamic route handlers that
  derive URLs from `siteConfig` — update the config, the sitemap updates.
- Semantic HTML throughout: a single `<h1>` in the hero, `<h2>` per section,
  `<nav>`, `<main>`, `<article>`, `<footer>`, `<ol>` for the timeline.

Add an OG image at `public/og.png` (1200×630). The path is already wired via
`siteConfig.seo.ogImage`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Then:

1. Open `config/siteConfig.ts` and replace the sample content with yours.
2. Drop `og.png` into `public/`.
3. Update `siteConfig.url` to your production URL.

Build and preview a production bundle:

```bash
npm run build
npm run start
```

## Scripts

| Script          | What it does                               |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start the dev server with Turbopack        |
| `npm run build` | Production build + type-check + lint check |
| `npm run start` | Serve the production build                 |
| `npm run lint`  | Run ESLint                                 |

## Design notes

- Dark by default. All color tokens live as CSS variables in
  `app/globals.css` under the `@theme inline` block and are consumed through
  Tailwind v4 utilities like `bg-[var(--color-surface)]`.
- Monospace (`JetBrains Mono`) is used only for small labels — section
  commands, metadata, chips. Body copy uses `Inter` for readability.
- Animations are intentionally restrained: short durations, gentle easing,
  `whileInView` with `once: true`. Respects `prefers-reduced-motion`.

## Performance

- Server components by default; only interactive pieces (`Navbar`, `Hero`,
  section animations, `Contact` form) are `"use client"`.
- `next/font` self-hosts Inter and JetBrains Mono with `display: swap`.
- No layout shift: `motion` animates only `opacity` and `transform`.
- Use `next/image` for any images you add.
