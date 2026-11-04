# Architecture

## Layout

```
src/app        Next.js App Router routes and layouts
src/config     Site configuration (brand, contact)
src/lib        Pure logic and data access (added from Phase 2)
src/components UI components (added from Phase 1)
e2e            Playwright specs
docs           Plan, phases, architecture, ADRs
```

## Principles

- Brand and contact data come only from `src/config/site.ts`.
- Business logic lives in `src/lib` as pure, tested functions.
- Components stay thin; each ships with a test.
- Tests accompany every feature in the phase that adds it.
