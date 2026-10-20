<div align="center">

# Fiza Ishaq — 3D Interactive Portfolio

A responsive, depth-based personal portfolio with mouse tilt and scroll parallax.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

**[🔗 Live Demo](#)** &nbsp;·&nbsp;&nbsp; **[💼 LinkedIn](https://www.linkedin.com/in/fiza-ishaq-b431b8418)**

</div>

> Built for the **Internlytic Technologies Front-End Development Internship (Phase 1, 2026) — Week 2: 3D Interactive Personal Portfolio**.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [3D & Parallax Concept](#3d--parallax-concept)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customizing the Content](#customizing-the-content)
- [Responsive, Accessibility & Performance](#responsive-accessibility--performance)
- [Projects Featured](#projects-featured)
- [Known Limitations](#known-limitations)
- [Security](#security)
- [Contact](#contact)

---

## Overview

This portfolio presents my background, skills, education, experience and selected projects in a single-page layout. The **home section is built around a depth-based concept**: the portrait sits on its own floating layer, tilts with the mouse and moves at a different speed than the background while scrolling.

**Sections:** Home · About · Projects · Skills · Education · Experience · Contact

## Features

- **3D mouse tilt** on the hero portrait and on Project / Skill cards (CSS 3D transforms)
- **Scroll parallax** — hero layers, floating chips and background orbs move at different speeds
- **Reveal-on-scroll** animations for sections and cards
- **Downloadable résumé** button in the hero section
- **Project cards** with descriptions, technology tags and live-demo links
- **Contact** through email (default mail app or Gmail) plus GitHub and LinkedIn links
- **Fully responsive** on phones, tablets, laptops and desktops
- **Accessible motion** — respects `prefers-reduced-motion`

## 3D & Parallax Concept

| Layer | Behaviour |
| ----- | --------- |
| Background glow | Slowest layer; shifts opposite to the mouse and scroll |
| Hero portrait | Mid layer; floats gently, tilts toward the cursor |
| Floating chips (React, TypeScript) | Closest layer; moves fastest for a clear depth effect |
| Cards (Projects / Skills) | Perspective tilt with inner content lifted forward |

Effects are subtle and purposeful so text always stays readable. Tilt is disabled on touch devices and when the user prefers reduced motion; no feature depends on hover alone.

## Tech Stack

| Area | Tools |
| ---- | ----- |
| Framework | React 18, TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion, CSS 3D transforms |
| Icons | lucide-react |
| Deployment | Vercel |

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/fiza-ishaq/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Create a production build
npm run build

# 5. Preview the production build locally
npm run preview
```

## Project Structure

```text
├── public/
│   ├── portrait.png          # Hero portrait
│   ├── Fiza_Ishaq_Resume     # Résumé (PDF)
│   └── favicon.svg
├── src/
│   ├── components/           # Hero, About, Projects, Skills, Education, Experience, Contact...
│   ├── hooks/                # useMouseTilt, useScrollParallax, usePrefersReducedMotion
│   ├── data/config.ts        # All site content in one place
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── tailwind.config.js
```

## Customizing the Content

All text, links, skills, projects and the résumé path live in **`src/data/config.ts`**, so content can be updated without touching component code. To replace the résumé, put the new PDF in `public/` and update the `resume` entry in `config.ts`.

## Responsive, Accessibility & Performance

- Fluid layouts tested for mobile, tablet and desktop widths
- Semantic sections, `aria-label`s on links and buttons, visible keyboard focus styles
- Reduced-motion support for all parallax, tilt and floating effects
- Lightweight: CSS-based 3D (no WebGL), no heavy libraries, scroll listeners batched with `requestAnimationFrame`

## Projects Featured

| Project | Description | Stack |
| ------- | ----------- | ----- |
| **NEXA Digital** | Responsive digital agency website with a contact form that delivers messages to the inbox | React, TypeScript, Vite, Tailwind CSS, Supabase, Resend, Vercel |
| **HireLens AI** | AI-powered resume screening and candidate evaluation platform | React, TypeScript, Gemini AI, Tailwind CSS, Node.js |
| **TenderBot Pakistan** | AI tender assistant for eligibility checks and submission checklists using RAG | Gemini, RAG, FAISS, ChromaDB |

## Known Limitations

- 3D effects are CSS-based (no WebGL / Three.js) to keep the site fast and light.
- The hero portrait is a flat image, so its depth is simulated with parallax layers rather than a real 3D model.
- The contact section uses direct links instead of a form, so no backend is required.

## Security

No API keys, tokens, passwords or `.env` files are committed to this repository (see `.gitignore`). Personal details such as phone number and home address are intentionally not published.

## Contact

**Fiza Ishaq** — Web Developer · Lahore, Pakistan

- 📧 fizaishaq03@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/fiza-ishaq-b431b8418)
- 🐙 [GitHub](https://github.com/fiza-ishaq)

---

<div align="center">

Made with ❤️ by Fiza Ishaq · Internlytic Technologies Internship, Phase 1 (2026)

</div>
