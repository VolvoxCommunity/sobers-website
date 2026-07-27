# Volvox Engineering Standards

Canonical engineering standards for all Volvox repositories (VolvoxLLC, VolvoxCommunity, and Volvox-owned personal repos). Each active repo carries a copy of this file at its root. When the standards change, the change lands here first and is rolled out to other repos.

Pilot repo: `VolvoxCommunity/sobers-website`.

## 1. Repo conventions

Every active repo must have:

| File                                  | Purpose                                                               |
| ------------------------------------- | --------------------------------------------------------------------- |
| `README.md`                           | What the project is, how to run it locally, how to deploy it          |
| `ENGINEERING.md`                      | This document                                                         |
| `.github/workflows/ci.yml`            | The validation chain, run on every PR and push to `main`              |
| `.github/PULL_REQUEST_TEMPLATE.md`    | Review checklist aligned with the definition of done                  |
| `.env.example`                        | Required when the app reads environment variables; placeholders only  |
| `package.json` `packageManager` field | Pins the exact package manager version (required by CI setup actions) |

Standard tooling across the estate:

- **Package manager:** pnpm, pinned via `packageManager`.
- **Language:** TypeScript in strict mode (`"strict": true`).
- **Formatting:** Prettier (house config below) or Biome where already adopted. One formatter per repo, enforced in CI — never both.
- **Linting:** ESLint (flat config) or Biome, framework preset included (`eslint-config-next`, `expo lint`, etc.).
- **Secrets:** Never committed. `.env*` files are gitignored; when environment variables are required, `.env.example` documents the shape.

House Prettier config (`.prettierrc`):

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "proseWrap": "preserve"
}
```

## 2. Branches and commits

- `main` is always releasable. Work happens on branches; nothing lands on `main` without green CI.
- Branch names use conventional prefixes: `feat/`, `fix/`, `refactor/`, `docs/`, `test/`, `chore/`, `ci/` — e.g. `feat/checkout-flow`, `fix/nav-overlap`.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/):
  - Format: `<type>(<scope>): <subject>`
  - Types: `feat` | `fix` | `docs` | `style` | `refactor` | `test` | `chore` | `perf` | `ci`
  - Subject ≤ 50 chars, imperative mood, no trailing period. Always include a scope.
  - Small change: one-line commit. Complex change: add a body (wrap at 72 chars) explaining what and why, referencing issues.
  - Keep commits atomic — one concern per commit. Mechanical changes (e.g. repo-wide reformat) get their own `style(...)` commit so review diffs stay readable.

## 3. Validation chain

The validation chain is the same locally and in CI:

```text
format:check → lint → typecheck → test → build
```

- Every repo exposes these as package scripts: `format`, `format:check`, `lint`, `typecheck`, `test` (where tests exist), `build`, and a `validate` script that runs the full chain.
- CI (`.github/workflows/ci.yml`) runs the full chain on every PR and every push to `main`, with `--frozen-lockfile` installs.
- External quality services use committed configuration. Their formatter version and exclusions must match the local package scripts so local and hosted checks cannot disagree.
- A red step is a blocker: fix it or revert it. Never merge on red, never `--no-verify` past hooks, never disable a check to get a PR through. If a check is wrong, fixing the check is its own PR.
- Steps that don't apply yet (e.g. `test` in a repo with no tests) are omitted from CI rather than stubbed to a no-op that fakes a pass — a green check must mean the thing it names actually ran.

## 4. Testing

- **TDD where practical:** write the failing test first for bug fixes (the test reproduces the bug) and for logic-bearing features.
- **Testing pyramid:** unit tests for logic, integration tests for API/data contracts, a small set of E2E tests (Playwright/Detox) for critical user flows.
- **Coverage expectations scale with risk:**
  - Revenue-critical and data-handling paths (payments, auth, client deliverables): tests are mandatory, target ≥ 80% coverage on those paths.
  - Products with meaningful logic: unit tests required for new logic; repo-wide coverage tracked and not allowed to decline.
  - Static marketing/landing sites: no unit-test mandate; typecheck + lint + build are the safety net, plus E2E smoke tests when the site gains interactive behavior.
- Tests must be deterministic: mock external services (APIs, databases) in unit tests; no network calls, no time-of-day dependence.
- Test names describe behavior: `it("returns 401 when the token is expired")`.

## 5. Code review

- All changes to `main` go through a PR. No direct pushes to `main`.
- A PR needs green CI plus a review before merge:
  - **Feature/behavioral changes:** review by another engineer, or by the CEO for solo-maintainer repos. Agents' PRs are reviewed by a human or a second agent — never self-approved.
  - **Mechanical/low-risk changes** (docs, formatting, dependency bumps with green CI, CI config): self-merge is allowed for the repo maintainer after green CI, with the reasoning noted on the PR.
- Reviewers check: correctness, tests for the change, security (input validation, secrets, authz), and that the diff matches the stated intent — nothing unrelated smuggled in.
- Review turnaround target: 1 business day. A stalled review escalates in the issue tracker rather than getting merged around.
- PRs stay small and focused; anything a reviewer can't hold in their head should be split.

## 6. Definition of done

A change is **done** when all of the following are true:

1. **It works** — verified by actually exercising the change (running the app, hitting the endpoint, loading the page), not just by green checks.
2. **The validation chain is green** locally and in CI.
3. **Tests exist** for new logic and for the bug being fixed, per section 4.
4. **Review happened** per section 5, and comments are resolved.
5. **Docs are current** — README, `.env.example` when applicable, and any affected runbooks updated in the same PR. Documentation is never left stale.
6. **No new warnings or errors** are introduced in build output or runtime logs; errors are handled structurally (no silent catches) and reported to Sentry where the repo has it.
7. **Deployed or explicitly handed off** — the change is live where it's supposed to be, or the PR states who deploys it and when. Production deploys of client-facing properties require CEO sign-off.

"Done" claims in issues and standups link evidence: the PR, the CI run, and (for UI work) a screenshot.

## 7. Error handling and logging

- Structured error handling only — no empty catch blocks, no swallowed promises.
- Prefer early returns over deeply nested try/catch.
- Production code reports errors to Sentry (already standard in Next.js repos); new services wire it in before first deploy.
- Log messages are actionable: what failed, with what input shape (never secrets or PII), and what the caller can do.

## 8. Rollout status

| Repo                             | Status                                                                     |
| -------------------------------- | -------------------------------------------------------------------------- |
| `VolvoxCommunity/sobers-website` | ✅ Pilot — full chain in CI                                                |
| `VolvoxLLC/volvox-bot`           | Already conformant (Biome, Vitest, CI); adopt ENGINEERING.md copy          |
| `VolvoxLLC/Volvox.Market`        | Already close (ESLint, Vitest, Playwright, CI); adopt ENGINEERING.md copy  |
| `VolvoxCommunity/sobers`         | Already close (CI, E2E); adopt ENGINEERING.md copy                         |
| `VolvoxCommunity/Volvox.Website` | Already conformant (Biome, Playwright, CI); adopt ENGINEERING.md copy      |
| Remaining active repos           | Roll out as they are touched — standards apply to all new work immediately |
