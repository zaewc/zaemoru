# zaemoru

A framework-agnostic UI design system inspired by Toss DS.

zaemoru is built around three layers so it can be used from React, Vue, Svelte, or plain HTML:

- **`@zaemoru/tokens`** — CSS variables for colors, typography, spacing, radius, shadow, z-index and animation. No framework dependency.
- **`@zaemoru/elements`** — Lit-based Web Components (`<zm-button>`, `<zm-text-field>`, ...) that consume the tokens.
- **`@zaemoru/react`** — Thin React adapter on top of `@zaemoru/elements` for better DX in React projects.

## Repository layout

```
packages/
  tokens/     # CSS variables
  elements/   # Lit web components (zm-*)
  react/      # React adapters
apps/
  docs/       # Vite + React documentation app
```

## Quick start

```bash
pnpm install
pnpm build      # build all packages
pnpm dev        # run docs app
pnpm typecheck
pnpm lint
pnpm format
```

## Plain HTML usage

```html
<link rel="stylesheet" href="/node_modules/@zaemoru/tokens/dist/index.css" />
<script type="module" src="/node_modules/@zaemoru/elements/dist/index.js"></script>

<zm-button variant="primary" size="large" full-width>Continue</zm-button>
```

## React usage

```tsx
import "@zaemoru/tokens/index.css";
import { Button, TextField } from "@zaemoru/react";

export function App() {
  return (
    <div>
      <TextField label="Name" placeholder="Enter your name" />
      <Button variant="primary" size="large" fullWidth>
        Continue
      </Button>
    </div>
  );
}
```

## Vue usage

```vue
<script setup lang="ts">
import "@zaemoru/tokens/index.css";
import "@zaemoru/elements";
</script>

<template>
  <zm-button variant="primary" size="large">Continue</zm-button>
</template>
```

## Svelte usage

```svelte
<script lang="ts">
  import "@zaemoru/tokens/index.css";
  import "@zaemoru/elements";
</script>

<zm-button variant="primary" size="large">Continue</zm-button>
```

## Design direction

zaemoru leans on a Toss-like product feel: clean surfaces, generous spacing, large readable typography, soft rounded cards, and a strong primary CTA. It does not copy Toss source code or brand assets.

## Contributing

See `.changeset/` for the release flow. Use `pnpm changeset` after a meaningful change to a published package.
