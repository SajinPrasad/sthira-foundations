# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Sthira Spaces — marketing site with an in-progress interior design "configurator" for an interior design studio. React 19 + TypeScript + Vite, styled with Tailwind CSS and Radix Themes.

## Commands

```
npm run dev       # start Vite dev server
npm run build     # production build (tsc -b && vite build)
npm run lint      # eslint .
npm run preview   # preview the production build
```

There is no test suite configured in this repo.

## Architecture

**Routing entry**: `index.tsx` mounts `App.tsx`, which wraps everything in Radix `<Theme appearance="dark">`, a global `ConfiguratorProvider`, and `react-router-dom`. Routes live in `App.tsx`: `/` (Home), `/contact` (Contact), `*` (NotFound). The `/configurator` route and its nav links/CTAs are commented out throughout the codebase (`App.tsx`, `Header.tsx`, `Home.tsx`) — the Configurator page and its components are fully built but not currently linked from the live site. Keep this in mind when asked to "wire up" or fix configurator-related work: it may need re-enabling in multiple places, not just the route.

**`index.tsx` has non-standard bootstrapping**: it patches `window.console` and installs `window.onerror` / `onunhandledrejection` handlers that `postMessage` all logs/errors to `window.parent`, for use inside an iframe-based preview system. Don't remove this thinking it's dead code.

**Configurator feature** (`src/pages/Configurator.tsx` + `src/components/{PlanSelector,RoomSelector,CustomizerPanel,ThemeSelector,FurnitureSelector,PreviewCanvas}.tsx`):
- All state is centralized in `src/context/ConfiguratorContext.tsx` (`ConfiguratorProvider` / `useConfigurator`). State shape: `{ selectedPlan, selectedRoom, roomConfigs: Record<roomId, RoomConfig> }`, where `RoomConfig` holds `wall`, `floor`, `ceiling`, `size`, `furniture`, `theme` per room. There is no persistence — state is in-memory only and resets on reload.
- Flow: `Configurator` renders `PlanSelector` until a plan is chosen, then shows `RoomSelector` + `CustomizerPanel` (tabs: Materials / Themes / Furniture) + `PreviewCanvas`.
- Applying a theme (`applyTheme`) sets `wall`/`floor`/`ceiling`/`size`/`furniture` together and clears any custom edits; manually changing an individual material (`updateRoomConfig`) clears `theme` back to `null`. Any change to this logic must preserve that mutual-exclusivity.
- All configurator content (plans, rooms, materials, themes, furniture layouts) is static JSON under `src/data/*.json`, keyed by id strings that cross-reference each other (e.g. a plan's `rooms` array lists room ids present in `rooms.json`; `furniture.json` is keyed by room id; themes reference material/furniture ids). When editing one data file, check the others for matching ids.
- `PreviewCanvas` derives everything it renders from `state` + the JSON data (no images are generated) — material "swatches" are just colored divs, and room photos are static Unsplash URLs swapped based on selected room/furniture layout.

**Contact form** (`src/pages/Contact.tsx`): `react-hook-form` + `zod` (via `@hookform/resolvers`) validation, submits directly to a hardcoded Google Apps Script URL (`script.google.com/macros/.../exec`) as the form backend, with `react-toastify` for success/error feedback. There is no other backend in this project.

**Styling**: Tailwind CSS (config in `tailwind.config.cjs`, global styles in `styles.css`) is the primary styling mechanism, using a `stone`/`amber` dark color palette throughout. `tailwind.config.cjs` also defines shadcn/Radix-style CSS-variable-driven theme tokens (`border`, `ring`, `card`, etc.) and animation keyframes — these are configured but not used by the current page code, which styles directly with Tailwind utility classes (`bg-stone-950`, `text-amber-400`, etc.) rather than the semantic token classes.

**Dependency note**: `@supabase/supabase-js` is a listed dependency but is not imported or used anywhere in `src/` — there is no backend/database wired up despite its presence in `package.json`.

**TypeScript project structure**: `tsconfig.json` is a solution file referencing `tsconfig.app.json` (src, strict, bundler resolution, `noImplicitAny`/`noUnusedLocals` relaxed) and `tsconfig.node.json` (build tooling config).
