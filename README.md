# Takaki Takahashi — Portfolio

Bilingual (日本語 / English) portfolio for **Takaki Takahashi (高橋貴樹)**, freelance software engineer based in Japan.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Clean & light "和 × technology" theme (washi cream, 紺青 navy ink, 朱色 vermillion accent), Japanese web fonts (Noto Sans JP), a custom hero artwork background, trust-building sections for the Japanese market (安心のお約束 / ご依頼の流れ / よくあるご質問), fully responsive and SEO-optimized.

## Hero background image

The hero uses `public/hero-bg.png`. To swap it, drop a new image at that path (landscape, ideally ~1536×1024 or wider). The artwork sits on the right; text overlays a cream scrim on the left, so keep the left third relatively open.

## Getting started

```bash
npm install      # install dependencies (already done)
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## How to customize

All text lives in one file — **[lib/content.ts](lib/content.ts)**. Every entry has a `ja` and `en` field. Edit there to update copy in both languages; no need to touch components.

Things you'll likely want to update:

| What | Where |
|------|-------|
| Name, title, email, social links | `profile` in [lib/content.ts](lib/content.ts) |
| Hero stats (years, projects, clients) | `hero.stats` |
| Bio paragraphs | `about.paragraphs` |
| Skills | `skillCategories` |
| Work history | `experiences` |
| Project case studies | `projects` |
| Services offered | `services` |
| Theme colors | `@theme` block in [app/globals.css](app/globals.css) |
| Site URL (for SEO/sitemap) | `siteUrl` in [app/layout.tsx](app/layout.tsx), plus `app/robots.ts` & `app/sitemap.ts` |

> The project content is currently realistic **placeholder** data based on a 12-year full-stack profile. Replace the GitHub/LinkedIn/Twitter URLs and the project details with your real ones.

## Deploy

The easiest path is **Vercel** (made by the Next.js team):

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Deploy — done. Add a custom domain in the Vercel dashboard.

## Structure

```
app/            # Next.js App Router (layout, page, SEO routes, favicon)
components/      # Navbar, Footer, Reveal, SectionHeading
components/sections/   # Hero, About, Skills, Experience, Projects, Services, Contact
lib/            # content.ts (all copy) + language-context.tsx (JP/EN toggle)
```
