# Preshita Jaiswal — Portfolio

A personal developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Structure

- `src/data.ts` — all portfolio content (profile, experience, projects, skills, education), typed with TypeScript interfaces. Edit this file to update content without touching any component.
- `src/components/` — one component per section (Nav, Hero, About, Experience, Projects, Skills, Contact, Footer).
- `public/resume.pdf` — the résumé served by the "View résumé" buttons. Replace this file to update the downloadable résumé.

## Deploying to GitHub Pages

This repo is pre-configured to deploy to GitHub Pages at `https://<your-username>.github.io/portfolio/` via GitHub Actions.

1. Create a new **public** GitHub repo named `portfolio` (Settings matter: the name must match, since `vite.config.ts` sets `base: '/portfolio/'` for that URL).
2. Push this code to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to the repo's **Settings → Pages**, and under "Build and deployment" set **Source** to **GitHub Actions**.
4. Push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it automatically. Check the **Actions** tab for progress — first deploy takes a minute or two.
5. Your live site will be at `https://<your-username>.github.io/portfolio/`.

After the first deploy, any future push to `main` redeploys automatically — no extra steps needed.

If you ever rename the repo, or want the site at the bare `https://<your-username>.github.io/` URL instead (which requires a repo literally named `<your-username>.github.io`), update `base` in `vite.config.ts` to match (`'/'` for a user-site repo).

## Deploying elsewhere

This is a static site after `npm run build` (output in `dist/`). It also deploys as-is to Vercel or Netlify — just point the host at this repo and let it run `npm run build`, output directory `dist`. (If you switch away from GitHub Pages, also change `base` in `vite.config.ts` back to `'/'`.)
