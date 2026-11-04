# ADR 001: Tech stack

- Status: Accepted (Phase 0)
- Decision: Next.js App Router + TypeScript, Tailwind, PostgreSQL + Prisma, Vitest, Playwright, Cloudflare deployment, Razorpay test mode.
- Why: A custom full-stack clone of a Shopify storefront was requested by the site owner. Next.js gives SSR/SEO and a single codebase; Postgres suits relational catalog and order data.
- Consequences: Cloudflare deployment needs the OpenNext adapter and a Postgres host reachable from Workers (to be chosen before Phase 10). Docker is required locally from Phase 2.
