# Contributing

## Commits

[Conventional Commits](https://www.conventionalcommits.org), enforced by commitlint (commit-msg hook).

- Types: `feat fix docs style refactor perf test build ci chore revert`
- Subject: imperative, lower-case, no trailing period, at most 72 characters
- Body: explain why, not what
- One commit per phase at minimum; phase commits use scope `phase-NN`, e.g. `feat(phase-00): scaffold project foundation`

## Branches and tags

- `main` is always green.
- Work happens on `phase/NN-name` branches, merged after the phase is approved.
- Tag each approved phase `v0.N.0`.

## Quality gates

Pre-commit runs lint-staged (ESLint + Prettier). CI runs format check, lint, typecheck, unit tests with coverage, and Playwright.

## Documentation

Update README, `docs/PHASES.md`, `CHANGELOG.md` and `.env.example` in the same change as the code. Record significant decisions in `docs/adr/`.
