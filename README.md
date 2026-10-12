# EAK International School

Premium, modern, responsive K–12 school website. Frontend-only with fictional
content. No backend, database, authentication, API keys, or paid services.

## Stack

- Vite 8 + React 19 + TypeScript 6
- Tailwind CSS v4 + shadcn/ui (components installed as owned source)
- React Router 7 (SPA with code-split routes)
- lucide-react icons
- Fraunces (display) + Inter (body) typography

## Commands

```bash
npm run dev       # start dev server (http://localhost:5173)
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  components/layout/   Navbar, Footer, Logo, PageHero, PageLoader
  components/ui/       shadcn primitives
  pages/               one file per route, lazy-loaded
  lib/utils.ts         cn() class merge helper
```

## Design tokens

Brand palette lives in `src/index.css` under `@theme`:

- `brand` — deep navy scale (#070D18 → #EEF3FA)
- `gold` — amber accent (#B87A14 → #F9D27A)
- `paper` — warm neutrals (#D8CDB4 → #FAF7F1)
- `lagoon` — teal secondary (#21867A, #2A9D8F, #D7ECEA)

## Notes

- React Bits components install via `npx shadcn@latest add @react-bits/<Component>-TS-TW`
- 21st.dev installs via the same CLI; the free tier allows 2 component
  retrievals per day, so it is used sparingly
- `npm audit` reports 7 high-severity advisories, all inside the shadcn CLI's
  own dependency tree (braces/micromatch/ts-morph). They affect local tooling
  only; nothing from that tree ships in the production bundle
```
