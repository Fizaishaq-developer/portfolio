<div align="center">

# 3D Interactive Portfolio

**A depth-based personal portfolio with mouse-tilt and scroll parallax, built with React and TypeScript.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-fizaishaq03-2813.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fiza-ishaq-b431b8418)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

<br />

<!-- Replace with a real screenshot or GIF: docs/preview.gif -->
<img src="docs/preview.gif" alt="Portfolio preview showing 3D tilt and parallax effects" width="85%" />

</div>

<br />

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [3D & Parallax Concept](#3d--parallax-concept)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customizing the Content](#customizing-the-content)
- [Accessibility & Performance](#accessibility--performance)
- [Featured Projects](#featured-projects)
- [Known Limitations](#known-limitations)
- [Security](#security)
- [Contact](#contact)

---

## Overview

A single-page portfolio presenting my background, skills, education, experience and selected projects.

The **hero section is built around a depth-based concept**: the portrait sits on its own floating layer, tilts toward the cursor, and moves at a different speed than the background while scrolling.

| | |
| --- | --- |
| **Sections** | Home · About · Projects · Skills · Education · Experience · Contact |
| **Rendering** | CSS 3D transforms (no WebGL) |
| **Content** | Fully driven from a single config file |

## Features

- **3D mouse tilt** on the hero portrait and on Project and Skill cards
- **Scroll parallax** across hero layers, floating chips and background orbs
- **Reveal-on-scroll** animations for sections and cards
- **Downloadable résumé** button in the hero section
- **Project cards** with descriptions, technology tags and live-demo links
- **Contact links** for email (default mail app or Gmail), GitHub and LinkedIn
- **Fully responsive** on phones, tablets, laptops and desktops
- **Accessible motion** that respects `prefers-reduced-motion`

## 3D & Parallax Concept

Each layer moves at a different rate to create a clear sense of depth.

| Layer | Behaviour |
| ----- | --------- |
| **Background glow** | Slowest layer; shifts opposite to the mouse and scroll |
| **Hero portrait** | Mid layer; floats gently and tilts toward the cursor |
| **Floating chips** (React, TypeScript) | Closest layer; moves fastest for a strong depth effect |
| **Cards** (Projects / Skills) | Perspective tilt with inner content lifted forward |

> Effects are kept subtle so text always stays readable. Tilt is disabled on touch devices and when the user prefers reduced motion. No feature depends on hover alone.

## Tech Stack

| Area | Tools |
| ---- | ----- |
| **Framework** | React 18, TypeScript |
| **Build tool** | Vite |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion, CSS 3D transforms |
| **Icons** | lucide-react |
| **Deployment** | Vercel |

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone the repository
git clone https://github.com/fiza-ishaq/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
├── public/
│   ├── portrait.png            # Hero portrait
│   ├── Fiza_Ishaq_Resume.pdf   # Résumé
│   └── favicon.svg
├── src/
│   ├── components/             # Hero, About, Projects, Skills, Education, Experience, Contact
│   ├── hooks/                  # useMouseTilt, useScrollParallax, usePrefersReducedMotion
│   ├── data/config.ts          # All site content in one place
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── tailwind.config.js
```

## Customizing the Content

All text, links, skills, projects and the résumé path live in **`src/data/config.ts`**, so content can be updated without touching component code.

To replace the résumé, place the new PDF in `public/` and update the `resume` entry in `config.ts`.

## Accessibility & Performance

**Accessibility**

- Semantic HTML sections
- `aria-label`s on links and buttons
- Visible keyboard focus styles
- Reduced-motion support for all parallax, tilt and floating effects

**Performance**

- CSS-based 3D with no WebGL and no heavy libraries
- Scroll listeners batched with `requestAnimationFrame`
- Fluid layouts tested on mobile, tablet and desktop widths

## Featured Projects

| Project | Description | Stack |
| ------- | ----------- | ----- |
| **NEXA Digital** | Responsive digital agency website with a contact form that delivers messages to the inbox | React, TypeScript, Vite, Tailwind CSS, Supabase, Resend, Vercel |
| **HireLens AI** | AI-powered resume screening and candidate evaluation platform | React, TypeScript, Gemini AI, Tailwind CSS, Node.js |
| **TenderBot Pakistan** | AI tender assistant for eligibility checks and submission checklists using RAG | Gemini, RAG, FAISS, ChromaDB |

<!-- Add links per project, e.g. [Live](https://...) · [Code](https://github.com/...) -->

## Known Limitations

- 3D effects are CSS-based (no WebGL / Three.js) to keep the site fast and light.
- The hero portrait is a flat image, so depth is simulated with parallax layers rather than a real 3D model.
- The contact section uses direct links instead of a form, so no backend is required.

## Security

No API keys, tokens, passwords or `.env` files are committed to this repository (see `.gitignore`). Personal details such as phone number and home address are intentionally not published.

## Contact

**Fiza Ishaq** · Web Developer · Lahore, Pakistan

[![Email](https://img.shields.io/badge/Email-fizaishaq03@gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:fizaishaq03@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fiza_Ishaq-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fiza-ishaq-b431b8418)
[![GitHub](https://img.shields.io/badge/GitHub-fiza--ishaq-181717?logo=github&logoColor=white)](https://github.com/fiza-ishaq)

---

<div align="center">

Designed and built by **Fiza Ishaq**

If you like this project, consider giving it a ⭐

</div>
