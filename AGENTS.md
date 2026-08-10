# Project Guide

## Overview

This is Sanan Ali's single-page developer portfolio, designed as a cinematic frontier field journal. It uses TanStack Start, React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion, Lucide icons, and Netlify Forms.

## Architecture

- `src/routes/index.tsx` assembles the homepage sections in display order.
- `src/routes/__root.tsx` defines the document shell and SEO metadata.
- `src/data/` is the only source of truth for personal details, projects, skills, education, and active work.
- `src/components/sections/` contains one component for each visual section.
- `src/components/animations/reveal.tsx` provides shared viewport reveal behavior.
- `src/styles.css` contains the design tokens, cinematic environment, parchment system, responsive layouts, and reduced-motion overrides.
- `public/assets/profile-portrait.webp` is the optimized source portrait used in the hero.
- `public/contact.html` is the static Netlify Forms detection shell and must match the React form fields.

## Conventions

- Preserve all factual content in `src/data/`; do not duplicate it in new data files.
- Never invent project links, skills, experience, statuses, or contact details.
- Render unavailable project links as disabled text, never as `#` anchors.
- Keep presentation components semantic and keyboard accessible.
- Use existing CSS variables and frontier utility classes before adding one-off colors.
- Animate only transforms and opacity, and keep `prefers-reduced-motion` behavior intact.
- Keep layouts usable from 320px through large desktop widths without horizontal scrolling.

## Netlify Forms

The `contact` form submits encoded data to `/contact.html`. Any field change must be made in both `src/components/sections/Contact.tsx` and `public/contact.html`. The Netlify Forms enable script must be run after form implementation changes.

## Commands

- `npm run dev` starts local development.
- `npm run build` creates the production build.
