# @zaemoru/tokens

Framework-independent design tokens for the **zaemoru** design system.

This package has **no React dependency** and **no Lit dependency**. It exposes CSS variables for web UI and a tiny JS color map for places that need plain color values.

## Install

```bash
pnpm add @zaemoru/tokens
```

## Usage

Import the CSS once at the root of your app.

### Plain HTML

```html
<link rel="stylesheet" href="/node_modules/@zaemoru/tokens/dist/index.css" />
```

### Bundlers (Vite, webpack, Next.js, ...)

```ts
import "@zaemoru/tokens";
// or
import "@zaemoru/tokens/index.css";
```

### JavaScript colors

```ts
import { colors, colorCssVars } from "@zaemoru/tokens/colors";

const solidBlue = colors.blue500; // "#3182f6"
const semanticText = colors.text; // "#191f28"
const cssVariable = colorCssVars.primary; // "var(--zm-color-primary)"
```

## What's inside

The package declares variables and JS values for:

- Color palette — `colors.grey50`, `colors.blue500`, `colors.red500`, `colors.green500`, ... plus CSS variables such as `--zm-color-blue-500`.
- Semantic color aliases — `colors.primary`, `colors.background`, `colors.text`, `colors.border`, danger / success / warning, ...
- Typography — `--zm-font-family-base`, `--zm-font-size-{xs,sm,md,lg,xl,2xl,3xl,4xl}`, weights, line heights.
- Spacing — `--zm-spacing-{0..10}` on a 4px scale.
- Radius — `--zm-radius-{sm,md,lg,xl,pill}`.
- Shadow — elevation + focus-ring.
- Z-index — overlay / modal / toast / tooltip layers.
- Animation — `--zm-duration-fast`, easings, with a `prefers-reduced-motion` override.

## Example

```css
.my-card {
  background: var(--zm-color-surface);
  color: var(--zm-color-text);
  border-radius: var(--zm-radius-lg);
  padding: var(--zm-spacing-6);
  box-shadow: var(--zm-shadow-sm);
}
```
