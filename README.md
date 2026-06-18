# RemoteRecruit — Features / Home Page

A pixel-faithful, fully responsive, fully interactive implementation of the
**RemoteRecruit** landing page from the supplied Figma design, built for the Web
Developer Technical Examination.

The single-scroll page covers nine blocks: Navbar → Hero → three alternating
feature sections → CTA band → FAQ accordion → Pricing → Footer.

---

## Tech stack

| Area | Choice | Notes |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Exceeds the brief's "React v17+" (ships React 19). Server Components by default → minimal client JS. |
| Language | **TypeScript** (strict) | `strict: true` across all components, hooks and data. |
| Styling | **Tailwind CSS v4** | Design tokens declared via `@theme` in `globals.css`. |
| Animation | **Framer Motion** | Scroll reveals, accordion height, mobile-menu + scroll-to-top transitions. |
| Utilities | `clsx` + `tailwind-merge` | `cn()` class composition. |

> Only genuinely interactive pieces are Client Components (`Navbar`, `Reveal`,
> `FaqItem`, `ScrollToTopButton`). Everything else is a Server Component, so the
> JS payload stays small and the page prerenders fully static.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (fully static)
npm run start    # serve the production build
npm run lint     # eslint
```

Requires Node 18.18+ (developed on Node 22).

---

## Project structure

```
src/
  app/
    layout.tsx              # fonts (Poppins + Inter), metadata
    page.tsx                # composes the page from section components
    globals.css             # Tailwind import + @theme design tokens
  components/
    brand/                  # Logo, Monogram (exact SVG from the export)
    ui/                     # Button, Badge, Container, icons (Check / Exclude)
    layout/                 # Navbar, Footer, SocialIcons
    sections/               # Hero, FeatureSection, CtaBand, Faq/*, Pricing/*
    common/                 # Reveal, ScrollToTopButton (client behaviours)
  hooks/                    # useDisclosure, useScrollToTop
  lib/
    types.ts                # shared typed contracts
    data/                   # faq, plans, features, social (mock data)
    utils.ts                # cn()
public/assets/              # mockup images exported 
```

### Architecture (SOLID + patterns)

- **Single Responsibility** — data in `lib/data`, behaviour in `hooks`,
  presentation in components. `PlanCard` renders a plan; it owns neither the
  pricing data nor scroll logic.
- **Open/Closed** — one `FeatureSection` renders all three feature blocks via a
  `reverse` flag; one `PlanCard` renders both tiers via `highlighted`; one
  `Button` covers every CTA via a `variant`. Adding a 4th feature/plan is a data
  change, not a component change.
- **Liskov / Interface Segregation** — narrow typed props (`Plan`, `FaqEntry`,
  `FeatureContent`, `ButtonProps`); any button variant is interchangeable.
- **Dependency Inversion** — sections import from `lib/data`, so swapping the
  mock data for an API/CMS touches only the data layer.
- **Patterns** — compound components (`FaqSection`/`FaqItem`,
  `Pricing`/`PlanCard`), custom hooks for cross-cutting behaviour, a
  render-prop-style `Reveal` wrapper, and the variant/strategy pattern on
  `Button`.

---

## Interactivity

- **Scroll reveal** — fade-in + slide-up as each block enters the viewport
  (staggered for cards), via `Reveal` + Framer Motion `whileInView`.
- **Navbar** — transparent over the hero, solid after scroll; mobile
  hamburger opens an animated overlay (body-scroll locked while open).
- **FAQ** — accessible accordion (`<button>` + `aria-expanded`/`aria-controls`,
  animated height, rotating chevron). Collapsed by default — see decisions.
- **Buttons / cards** — hover lift + shadow, visible keyboard focus rings.
- **Scroll-to-top** — floating button fades in past ~1 viewport, smooth-scrolls
  to top.
- **Reduced motion** — `prefers-reduced-motion` is respected (Framer
  `useReducedMotion` + a CSS fallback that neutralises transitions).

## Performance & accessibility

- Static prerender; interactive code is isolated to a few small Client
  Components.
- Mockups served through `next/image` (lazy-loaded, responsive `sizes`,
  intrinsic dimensions to avoid layout shift).
- Semantic landmarks (`header`/`main`/`footer`/`section`), `alt` text on every
  mockup, `aria-label`s on icon-only controls, focus-visible rings throughout.

---

## Design decisions & assumptions

The Figma file contained **only a single 1440px desktop frame** — no
tablet/mobile artboards. Desktop is matched closely to the frame; the
breakpoints below were designed to sensible, consistent rules.

- **Responsive** — `< 640` mobile, `640–1024` tablet, `≥ 1024` desktop.
  Feature sections collapse two columns → a single stacked column
  (image-over-text, ignoring `reverse` for a consistent reading order); pricing
  cards stack; navbar collapses to a hamburger.
- **Mobile navbar** — hamburger menu (chosen over a condensed variant).
- **FAQ** — items are **collapsed by default**. The design shows them open, but
  the brief asks for an interactive accordion, so collapsed best demonstrates
  the behaviour.
- **Fonts** — the exact Figma font family could not be confirmed (flattened
  PNG/SVG exports carry no font metadata). Substituted **Poppins** (headings) +
  **Inter** (body), the closest free Google Fonts.
- **Colours / tokens** — the brand gradient `#52B4DA → #1E3E85` drives most blue
  surfaces, the checkmark icons and the logo; badge/text/surface colours follow
  from the design.
- **Social links** — placeholder `#` (no real URLs were provided). Sign In / Sign
  Up / Get Started / More Questions are also placeholders.

---

## Deployment

Deploy to Vercel (zero-config for Next.js): push to GitHub and import the repo,
or run `vercel`.

**Live:** [https://sg-services-3tteip2k7-nmpavels-projects.vercel.app/](https://sg-services-3tteip2k7-nmpavels-projects.vercel.app/)
