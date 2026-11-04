# The Block Bagru: Clone Development Plan

Target: https://theblockbagru.com (Shopify store: block-print sarees and suits, Jaipur)
Confirmed decisions: owner permission granted; Next.js + TypeScript + PostgreSQL; **storefront-only scope**; generated sample products; Razorpay test mode (see Open Items).

## 1. Working rules (apply to every phase)

**Phase gate protocol.** After each phase I will:

1. Run all automated tests and report results.
2. Give a manual test checklist for you.
3. **STOP** and wait for your "approved" before anything else.
4. Ask you to commit (I give the exact commit message). Next phase starts only after approval AND commit.

**Commits.** Conventional Commits (`feat:`, `fix:`, `test:`, `docs:`, `chore:`, `refactor:`, `style:`). One commit per phase minimum, subject <= 72 chars, imperative, body explains why. Branch per phase: `phase/NN-name`, merged to `main` after approval. Tags: `v0.N.0` per phase.

**Documentation.** `README.md` (setup/run/test), `docs/ARCHITECTURE.md`, `docs/PHASES.md` (status log), `docs/adr/NNN-*.md` for decisions, `CHANGELOG.md` (Keep a Changelog), JSDoc/TSDoc on public functions, `.env.example` always current.

**Testing.** Vitest + React Testing Library (unit/component), Playwright (end-to-end, mobile + desktop), axe (accessibility), Lighthouse CI budget from Phase 8. Every feature ships with tests in the same phase. Target >= 80% coverage on `lib/` and API routes.

**Questions policy.** If I am under ~80% sure about a requirement, I ask rather than assume.

**Content policy.** Brand name, logo and copy are placeholders to swap via a single `config/site.ts` and `content/` folder; product images are generated placeholders until you provide real ones.

## 2. Observed site structure (from the live site)

- Announcement bar: 10% off prepaid, free shipping, COD, authentic block prints
- Header: logo, nav (Home, New Arrivals, Sarees mega-menu, Suits mega-menu, About/Contact), Search, Login, Cart
- Sarees: Chanderi Silk, Maheshwari Silk, Cotton, Nashpal Pomegranate, Double Diamond Chiffon, Mulmul
- Suits: Cotton Suit Sets, Linen Suits, Kota Dupatta Cotton, Linen Dupatta Cotton
- Home: hero slider, Shop By Category (12), Trending Now, product grids, service highlights, testimonials ("Voices of Royalty"), footer
- Pages: About, Contact, Shipping, Returns, Privacy, Terms, Wishlist, Account
- Product cards: regular/sale price, % off badge, sold-out state; add-to-cart confirmation popup; floating WhatsApp button

## 3. Tech stack

Next.js (App Router) + TypeScript, Tailwind CSS, PostgreSQL + Prisma, Zod validation, Zustand (cart/wishlist state, persisted), Vitest, Playwright, ESLint + Prettier, Husky + lint-staged + commitlint, GitHub Actions CI. Docker Compose for local Postgres.

## 4. Phases

### Phase 0: Foundation & tooling

- Scaffold Next.js/TS/Tailwind, ESLint, Prettier, Husky, commitlint, Docker Compose Postgres, `.env.example`
- CI workflow (lint, typecheck, test), folder layout, `docs/` skeleton, README
- **Tests:** smoke unit test, sample Playwright test, CI green
- **You test:** `npm run dev` shows blank branded page; `npm test` passes

### Phase 1: Design system & layout shell

- Design tokens (colors, fonts, spacing) from the live site look; Button, Badge, Input, Modal, Skeleton components
- Announcement bar, header with responsive mega-menu and mobile drawer, footer, floating WhatsApp button
- **Tests:** component tests, a11y (axe), responsive Playwright checks
- **You test:** header/footer on mobile and desktop, menu behavior

### Phase 2: Data layer & seed

- Prisma schema: Category, Product, Variant/Stock, Image, Testimonial, Page
- Seed script: 12 categories, ~30 sample products (sale price, sold-out cases), testimonials
- Read-only API/server functions for products and collections
- **Tests:** schema/seed tests, query unit tests, API route tests
- **You test:** DB seeds; Prisma Studio shows data

### Phase 3: Homepage

- Hero slider (autoplay, arrows, swipe), Shop By Category grid, Trending Now, product grid sections, service highlights, testimonials
- **Tests:** slider logic, section rendering, Playwright home flow, Lighthouse baseline
- **You test:** homepage compared side by side with the original

### Phase 4: Collections & product discovery

- Collection pages (Sarees, Suits, sub-collections, New Arrivals, Trending, Shop All) with sorting, filters (price, availability), pagination
- Product card (sale price, % badge, sold-out), SEO metadata, breadcrumbs
- **Tests:** filter/sort/pagination logic, URL-state tests, E2E browsing
- **You test:** browse every collection, apply filters

### Phase 5: Product detail page

- Gallery with zoom, price block, variant/quantity selection, stock state, description, shipping info accordion, related products
- **Tests:** component + E2E, structured data (JSON-LD) test
- **You test:** several products including sold-out

### Phase 6: Cart & wishlist

- Add-to-cart confirmation popup, cart drawer/page, quantity edit, remove, totals, 10% prepaid discount display, free-shipping messaging
- Wishlist (local persistence, page, heart toggles), cart persistence across reloads
- **Tests:** store unit tests (edge cases: stock limits, duplicates), E2E add/edit/remove
- **You test:** full cart flow, reload persistence

### Phase 7: Search

- Search overlay with live suggestions, results page, empty state
- **Tests:** query/ranking tests, debounce test, E2E
- **You test:** search by name, fabric, category

### Phase 8: Static & content pages

- About, Contact (info only, matching original: no form), Shipping, Returns, Privacy, Terms, 404, account/login placeholder page (UI only, per storefront-only scope)
- **Tests:** page rendering, link-check test, sitemap/robots
- **You test:** all footer links resolve and read correctly

### Phase 9: Polish, performance, SEO, accessibility

- Image optimization, lazy loading, Core Web Vitals pass, meta/OG tags, sitemap, keyboard/screen-reader pass, cross-browser check
- **Tests:** Lighthouse CI thresholds (perf/a11y/SEO >= 90), full E2E suite on Chromium/WebKit/mobile
- **You test:** final review on real devices

### Phase 10: Deployment & handover

- Production build, Dockerfile, deploy to Vercel (or your choice) with managed Postgres, env docs, runbook, final README, v1.0.0 tag
- **You test:** live URL smoke test

### Optional Phase 11: Checkout with Razorpay (test mode)

Only if you want it (see Open Items): address form, order model, Razorpay test payment + COD, webhook verification, order confirmation page.

## 5. Decisions (confirmed)

1. **Razorpay test mode: included** as Phase 11 (no longer optional).
2. **Brand assets:** placeholder logo for now; swap via `config/site.ts`.
3. **Deployment:** Cloudflare (Workers via the OpenNext adapter). Database host still to be chosen (see below).
4. **Folder and repo:** local folder `client-website`, GitHub repo with the same name `client-website`. Repo creation will be done only after you confirm.
5. **Contact:** real phone/WhatsApp 8813835525; GSTIN left empty (footer hides it when unset).

## 6. Open items

1. **Parent location** for the `client-website` folder (picker requested).
2. **GitHub account/org** for the repo, and public or private.
3. **Postgres host on Cloudflare** (asked before Phase 10; local Docker Postgres until then).
4. Contact email and the street address to show (the live site lists Bagru, Jaipur).
