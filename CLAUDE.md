# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # dev server at localhost:3000
npm run build        # production build
npm run typecheck    # tsc --noEmit (run before committing)
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run format       # Prettier write
npm run format:check # Prettier check (CI)
```

No test runner is configured.

## Architecture

**Next.js 16 App Router** — all pages live in `src/app/`. Use the `@/*` path alias (maps to `src/*`) for all imports.

**Component structure:**
- `src/app/` — routes and layouts (App Router conventions)
- `src/components/` — shared UI components; feature-specific components go in subdirectories (e.g. `components/cabinet/`)
- `src/lib/utils.ts` — `cn()` helper for merging Tailwind classes (clsx + tailwind-merge)
- `src/lib/motion.ts` — reusable Framer Motion variants: `fadeUp`, `staggerContainer`, `staggerItem`, `defaultViewport`

**Animations:** Use Framer Motion `motion.*` elements with variants from `src/lib/motion.ts`. Wrap with `<motion.div variants={staggerContainer}>` and children with `staggerItem` for staggered reveals. Use `defaultViewport` for scroll-triggered animations.

**Styling:** Tailwind CSS v4 with PostCSS. Theme tokens (colors, radius) defined in `src/app/globals.css` as CSS variables. Dark mode is always active (`<html className="dark">`). Primary color: indigo (`#6366f1`).

**Client components:** Add `"use client"` only when the component uses hooks or browser APIs. Server components are the default.

**Smooth scroll:** The root layout wraps everything in `<SmoothScrollProvider>` (Lenis). Don't add additional scroll listeners without accounting for Lenis.

## Cabinet Module

The personal client cabinet lives at `/cabinet/*`. Structure:

```
src/app/cabinet/          # routes
src/components/cabinet/   # all cabinet UI components
```

Cabinet layout uses a sidebar + header shell defined in `src/app/cabinet/layout.tsx`. All sub-pages are rendered inside `<main>` within that shell.
