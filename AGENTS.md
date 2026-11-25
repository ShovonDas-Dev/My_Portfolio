<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Single Next.js 16.4.6 app (App Router, React 19.3, Tailwind 4, framer-motion, lucide-react). npm only (`package-lock.json` — don't introduce pnpm/yarn).

- Entry: `app/layout.tsx` (fonts, metadata, Navbar) → `app/page.tsx` (renders `<Hero />` only). Sections are anchored (`#about`, `#projects`, `#contact`) but not all exist yet.
- Path alias `@/*` → repo root (tsconfig).
- Hero copy/links live in `data/heroData.js` — edit data, not JSX, for text/link changes.
- `next.config.ts` enables non-default flags: `cacheComponents: true`, `partialPrefetching: true`, `experimental.agentFeedback`, and a Turbopack loader rule wiring `*.css` to `@tailwindcss/turbopack`. Caching/rendering semantics differ from stock Next — check `node_modules/next/dist/docs/` before assuming defaults.

## Commands

```bash
npm run dev      # Next dev (Turbopack)
npm run build    # next build
npm run lint     # eslint (flat config, no args)
npx tsc --noEmit # typecheck — there is NO typecheck script
```

No test suite, no CI, no pre-commit hooks exist — don't hunt for or invent test commands.

Verify changes with `npm run lint` then `npx tsc --noEmit` (both currently pass). Run `npm run build` only if you touched routing/caching/config.

## Conventions that differ from defaults

- **No `tailwind.config`**: Tailwind 4 config is CSS-first. Design tokens are CSS vars exposed via `@theme inline` in `app/globals.css` (e.g. `bg-canvas`, `text-ink`, `border-line`, `bg-surface`, `text-muted`, `font-heading`). Add tokens there, not in a JS config.
- **Mixed JS/TS**: `components/Hero/*` and `data/*` are `.js`/`.jsx`; `components/Navbar/*` and `app/*` are `.tsx`. `allowJs` is on. Follow the convention of the folder you're editing — don't mass-convert.
- **Theming**: dark mode is `prefers-color-scheme` by default, overridable via `data-theme` on `<html>`; Navbar persists it to `localStorage` key `shovon-theme`. Don't add a second theme mechanism.
- **Accessibility bar is high** in existing components: `aria-*` labels, `useReducedMotion`/`prefers-reduced-motion` guards, `focus-visible` styles. Match it.

## Managed AGENTS.md block

The `nextjs-agent-rules` block above is rewritten by `next dev` (markers must stay). Because `experimental.agentFeedback` is on, `next dev` may also inject a `<!-- BEGIN:nextjs-agent-feedback -->` block into this file. Keep your own content outside all `BEGIN/END` marker pairs; never delete the markers.

## Known gaps

- `data/heroData.js` CV button points at `/resume.pdf`, which is not in `public/` (404 until added).
- LinkedIn social href is a `#` placeholder (has a TODO in the data file).


# Project Coding Instructions

## General
- Work only on the files relevant to the requested task.
- Avoid unnecessary file exploration.
- Do not rewrite existing working code.
- Make minimal and targeted changes.
- Do not install dependencies unless necessary.
- Do not change unrelated components.

## Tech Stack
- Next.js
- JavaScript (not TypeScript)
- Tailwind CSS
- Framer Motion

## Design Rules
- Use global CSS variables for colors and typography.
- Follow the existing design system.
- Maintain the existing visual identity.
- Keep the UI responsive on mobile, tablet and desktop.
- Preserve existing animations and interactions.

## Workflow
- Inspect only the relevant files first.
- Make changes directly instead of explaining every step.
- Avoid unnecessary refactoring.
- Do not run the build after every small CSS change.
- Run appropriate checks after completing the task.
- Report which files were modified.

## Important
- Never redesign existing sections unless requested.
- Never remove existing functionality.
- Ask before making large architectural changes.
