# The Block Bagru: client-website

E-commerce storefront clone of theblockbagru.com (block-print sarees and suits). Built in gated phases; see [docs/PLAN.md](docs/PLAN.md) and [docs/PHASES.md](docs/PHASES.md).

## Stack

Next.js (App Router) + TypeScript, Tailwind CSS, PostgreSQL + Prisma (from Phase 2), Vitest + Testing Library, Playwright, deployed to Cloudflare.

## Requirements

- Node.js >= 20.19 (developed on 24)
- Docker (only for local Postgres, needed from Phase 2)

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command                 | Purpose                                       |
| ----------------------- | --------------------------------------------- |
| `npm run dev`           | Start the dev server                          |
| `npm run build`         | Production build                              |
| `npm run lint`          | ESLint                                        |
| `npm run typecheck`     | TypeScript check                              |
| `npm run format`        | Format with Prettier                          |
| `npm test`              | Unit/component tests (Vitest)                 |
| `npm run test:coverage` | Unit tests with 80% coverage gate             |
| `npm run test:e2e`      | Playwright end-to-end (builds and serves app) |
| `npm run validate`      | Format check, lint, typecheck, coverage       |

First-time e2e setup: `npx playwright install chromium`.

## Configuration

Brand and contact details live in `src/config/site.ts`. Environment variables are documented in `.env.example`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for commit and branch rules.
