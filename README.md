# Elise Özalp Website

This repository contains the source for [eliseoe.github.io](https://eliseoe.github.io), built as a Vite + React + Tailwind static site and deployed with GitHub Pages.

## How It Works

- `src/pages/SiteHome.tsx` renders the main homepage sections: about, CV, publications, and recipes.
- `src/pages/RecipePage.tsx` renders the individual recipe detail pages.
- `src/siteContent.ts` holds the main site content in plain TypeScript objects.
- `src/components/LorenzCanvas.tsx` draws the animated Lorenz attractor used in the hero.
- `public/` contains static assets copied directly into the final build, including the CV PDF, images, `robots.txt`, the favicon, and the `404.html` SPA fallback for GitHub Pages.
- `.github/workflows/deploy.yml` builds the site and deploys the generated `dist/` output to GitHub Pages.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print a local URL, typically `http://localhost:5173`.

## Production Build

Create the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Push to `main` or `master` and GitHub Actions will:

1. install dependencies with `npm ci`
2. run `npm run build`
3. upload `dist/`
4. deploy the site to GitHub Pages

The workflow expects GitHub Pages to be enabled for this repository with GitHub Actions as the source.
