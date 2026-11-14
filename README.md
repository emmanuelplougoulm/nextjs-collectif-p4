# Collectif P4 — website

Website for Collectif P4, a theatre collective based between Paris, Saint-Étienne and Marseille: their shows, members, manifesto and news.

**Live site:** [nextjs-collectif-p4.vercel.app](https://nextjs-collectif-p4.vercel.app)

## Stack

- **Next.js 14** (Pages Router) + **React 18** + **TypeScript**
- **CSS Modules**
- `next/image` for optimized images, all pages statically prerendered
- Deployed on **Vercel**

## Structure

```
pages/        landing, home, spectacles, membres, manifeste, actualites, contact
components/   header, burger menu, nav, image slider, show and news blocks
config/       content for shows, members and news, kept as typed config files
layouts/      shared page layout
```

Content lives in `config/`, so updating a show or a member does not touch any component.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## History

This is a full rewrite, in TypeScript, of a first version of the site built in 2021.
