# Zaemoru Claude Harness

## Project

Zaemoru is a framework-agnostic UI design system.

It is not a React-only component library.

The core architecture is:

- `packages/tokens`: framework-independent CSS variables
- `packages/elements`: Lit-based Web Components with `zm-` prefix
- `packages/react`: React adapter wrapping Web Components
- `apps/docs`: documentation and visual testing app

## Non-negotiable Rules

1. Do not make the core React-only.
2. Do not use Tailwind inside packages.
3. Do not hardcode design values when a token exists.
4. Do not duplicate styles between `elements` and `react`.
5. Do not expose complex implementation details through public APIs.
6. Do not change package boundaries casually.
7. Do not add dependencies without explaining why.
8. Do not skip validation.
9. Do not leave TODOs unless explicitly requested.
10. Do not create breaking public API changes without documenting them.

## Package Boundaries

### packages/tokens

Owns:
- colors
- typography
- spacing
- radius
- shadow
- z-index
- duration
- easing

Must not depend on:
- React
- Lit
- browser component code

### packages/elements

Owns:
- Web Components
- Lit implementation
- semantic DOM
- accessibility behavior
- attributes
- CustomEvents
- component styling using tokens

Must not depend on:
- React
- Vue
- Svelte

### packages/react

Owns:
- typed React wrappers
- React-friendly prop names
- event mapping
- DX improvements

Must not:
- reimplement core component styles
- fork Web Component behavior
- introduce separate visual behavior

### apps/docs

Owns:
- examples
- visual testing
- usage documentation

Must include examples for:
- HTML
- React
- Vue
- Svelte

## Component Naming

Web Components:
- prefix: `zm-`
- example: `zm-button`, `zm-text-field`

React components:
- PascalCase
- example: `Button`, `TextField`

CSS variables:
- prefix: `--zm-`
- example: `--zm-color-primary`

Events:
- prefix: `zm-`
- example: `zm-change`, `zm-input`

## Component Implementation Checklist

Every new component must include:

- Web Component implementation in `packages/elements`
- export from `packages/elements/src/index.ts`
- React adapter in `packages/react`
- export from `packages/react/src/index.ts`
- docs example in `apps/docs`
- README or docs update if public API changes
- accessibility states
- disabled state if interactive
- focus-visible style if interactive
- TypeScript types
- build verification

## Validation Commands

Before finishing, run:

```bash
pnpm format
pnpm lint
pnpm typecheck
pnpm build
```
If one command fails:

* fix the failure
* rerun the failed command
* summarize what failed and how it was fixed

Response Format

When finishing a task, always summarize:

1. What changed
2. Files changed
3. Validation commands run
4. Remaining risks, if any

Design Direction

Zaemoru should feel:

* clean
* calm
* mobile-first
* readable
* friendly
* product-like
* rounded
* spacious
* accessible

Inspired by Toss-like product UI, but do not copy Toss source code, brand assets, or proprietary implementation.
https://tossmini-docs.toss.im/tds-mobile/
