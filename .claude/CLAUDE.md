# Zaemoru Claude Harness

The contract between Claude Code and this repo. Read first, every session.

A shorter mirror lives at `/CLAUDE.md`. When the two disagree, this file wins.

## Project overview

Zaemoru is a framework-agnostic UI design system inspired by Toss DS. It is **not** a React-only library.

- `packages/tokens` — CSS variables, no JS.
- `packages/elements` — Lit Web Components, prefix `zm-`.
- `packages/react` — thin React adapter for the Web Components.
- `apps/docs` — Vite + React docs / visual testing.

Plain HTML, Vue, and Svelte users must get the same components and styles as React users.

## Package boundaries

`tokens`
- Owns: color, typography, spacing, radius, shadow, z-index, duration, easing.
- Must not depend on: React, Lit, any framework, any DOM code.

`elements`
- Owns: Web Components, semantic DOM, accessibility, attributes, events, styles.
- Depends on: `lit`, `@zaemoru/tokens`.
- Must not depend on: React, Vue, Svelte.

`react`
- Owns: typed React wrappers, prop/event mapping.
- Depends on: `react`, `react-dom`, `@zaemoru/elements`, `@zaemoru/tokens`.
- Must not: reimplement styles, fork behavior.

`apps/docs`
- Owns: examples, visual testing, written docs.
- Must include examples for HTML, React, Vue, Svelte.

## Non-negotiable rules

1. Do not make the core React-only.
2. Do not use Tailwind inside packages.
3. Do not hardcode design values when a token exists.
4. Do not duplicate styles between `elements` and `react`.
5. Do not add dependencies without justification.
6. Do not skip validation.
7. Do not change package boundaries casually.
8. Do not leave TODOs unless explicitly requested.
9. Do not break public APIs without a changeset.
10. Do not copy Toss source code or brand assets.

## Naming conventions

- Custom elements: `zm-` (kebab) — `<zm-button>`.
- Lit class names: `Zm` (Pascal) — `class ZmButton`.
- CSS variables: `--zm-` (kebab) — `--zm-color-primary`.
- CustomEvents: `zm-` (kebab) — `zm-change`, `zm-input`.
- React components: PascalCase — `Button`, `TextField`.
- React props: camelCase — `fullWidth`, `helperText`.
- HTML attributes: kebab-case — `full-width`, `helper-text`.

## Validation commands

Run from repo root before declaring done:

```
pnpm format
pnpm lint
pnpm typecheck
pnpm build
```

If a command fails: find the smallest root cause, fix the cause not the symptom, rerun, then rerun `pnpm build`. Never disable a lint rule, loosen TS, or remove a test to pass validation without explicit user authorization.

## Component implementation checklist

- Web Component in `packages/elements/src/<name>/zm-<name>.ts`.
- Registered as `zm-<name>` via `@customElement`.
- Extends `ZmElement`.
- Styles use only `--zm-*` variables.
- `disabled`, `:focus-visible`, and `loading` (if applicable) handled.
- Attributes that affect styling are reflected.
- CustomEvents are `zm-*` with typed `detail`, `bubbles: true`, `composed: true`.
- Exported from `packages/elements/src/index.ts`.
- React wrapper in `packages/react/src/<Name>.tsx`.
- Wrapper imports `./internal/setup.js` (registers elements).
- camelCase → kebab-case prop mapping; booleans reflected as `""` when true.
- CustomEvent → React callback via `useCustomEvent`.
- No styles, no behavior beyond mapping.
- Exported from `packages/react/src/index.ts`; types from `types.ts`.
- Docs page covers HTML, React, Vue, Svelte usage.
- Changeset added for any published-package API change.
- `pnpm format && pnpm lint && pnpm typecheck && pnpm build` all pass.

## Response format

When finishing a task:

1. What changed.
2. Files changed (paths).
3. Validation result per command.
4. Tradeoffs / risks (or "none").
5. Next steps (only if incomplete).

## Design direction

Clean, calm, mobile-first, readable, friendly, product-like, rounded, spacious, accessible.

- Generous spacing — favor `--zm-spacing-5/6` over tight 8px gaps.
- Large readable type — body 16px, headings start at 20px and scale up.
- Soft surfaces — neutral backgrounds with subtle borders, not heavy shadows.
- Strong primary CTA — solid blue, full-width on mobile, large size.
- Subtle motion — 120–260ms with `--zm-easing-standard`, respect `prefers-reduced-motion`.
- High-contrast focus rings via `--zm-focus-ring` on `:focus-visible`.
- Rounded — `--zm-radius-md` for inputs, `--zm-radius-lg` for cards.

Inspired by Toss-like product UI; do not copy Toss source code or brand assets.

## When in doubt

- Read existing `zm-button` / `Button` for canonical patterns.
- Prefer copying a similar existing component over inventing.
- Surface rule conflicts to the user before bending them.
