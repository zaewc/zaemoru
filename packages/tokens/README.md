# @zaemoru/tokens

Framework-independent design tokens for the **zaemoru** design system, exposed as CSS variables on `:root`.

This package has **no JS runtime**, **no React dependency**, and **no Lit dependency**. It is a single CSS file that works in any environment that can load CSS.

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

## What's inside

The CSS file declares variables for:

- Color — `--zm-color-primary`, `--zm-color-primary-hover`, `--zm-color-background`, `--zm-color-background-subtle`, `--zm-color-text`, `--zm-color-text-subtle`, `--zm-color-border`, danger / success / warning, ...
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
