# Fiza Ishaq — 3D Interactive Portfolio

Personal portfolio built for the **Internlytic Technologies Front-End Development Internship (Phase 1, 2026) — Week 2**.

**Live demo:** _add your Vercel link here_

## Overview
A responsive portfolio with a depth-based hero section: the portrait floats on its own layer, tilts with the mouse and moves at a different speed while scrolling. Sections: Home, About, Projects, Skills, Education, Experience and Contact.

## Features
- 3D mouse tilt on the hero portrait and on Project / Skill cards (CSS 3D transforms)
- Scroll parallax: hero layers, floating chips and background orbs move at different speeds
- Reveal-on-scroll animations
- Downloadable résumé (PDF)
- Fully responsive (phone, tablet, laptop, desktop)
- Respects `prefers-reduced-motion`; tilt is disabled on touch devices and no feature depends on hover alone
- Contact via email (mail app or Gmail), GitHub and LinkedIn links — no private data exposed

## Tech stack
React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, lucide-react

## Setup
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
npm run preview  # preview the build
```

## Editing content
All text, projects, skills, links and the résumé path live in `src/data/config.ts`.
The résumé is `public/Fiza_Ishaq_Resume` and the hero portrait is `public/portrait.png`.

## Projects shown
- **NEXA Digital** — agency website (live demo)
- **HireLens AI** — AI resume screening (live demo)
- **TenderBot Pakistan** — AI tender assistant (live demo)

## Known limitations
- 3D effects are CSS-based (no WebGL/Three.js) to keep the site light.
- The hero portrait is a flattened image, so its depth is simulated with parallax layers.

## Security
No API keys, tokens or `.env` files are committed (see `.gitignore`).
