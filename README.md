# Collectif P4 — website

Website for Collectif P4, a theatre collective based between Paris, Saint-Étienne and Marseille: their shows, members, manifesto and news.

**Live site:** [nextjs-collectif-p4.vercel.app](https://nextjs-collectif-p4.vercel.app)

## Stack

- **Next.js 16** (Pages Router) + **React 19** + **TypeScript**
- **CSS Modules**
- `next/image` for optimized images, all pages statically prerendered
- ESLint 10 (flat config with `eslint-config-next`)
- Deployed on **Vercel**

## Structure

```
pages/        landing, home, spectacles, membres, manifeste, actualites, contact
components/   header, burger menu, nav, image slider, show and news blocks,
              views/ for the interactive page bodies
config/       content for shows, members and news, kept as typed config files
layouts/      shared page layout
```

Content lives in `config/`, so updating a show or a member does not touch any component.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run lint` runs ESLint and `npm run build` builds the static pages.

## History

This is a full rewrite, in TypeScript, of a first version of the site built in 2021.
