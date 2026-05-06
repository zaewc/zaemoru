# @zaemoru/elements

Framework-agnostic Web Components for the **zaemoru** design system, built with [Lit](https://lit.dev). Every component is a standard custom element with the `zm-` prefix and uses CSS variables from `@zaemoru/tokens`.

These components work in plain HTML, Vue, Svelte, Angular, and any React project that can render HTML — though if you use React you probably want `@zaemoru/react` for better DX.

## Install

```bash
pnpm add @zaemoru/elements @zaemoru/tokens
```

## Usage

```html
<link rel="stylesheet" href="/node_modules/@zaemoru/tokens/dist/index.css" />
<script type="module" src="/node_modules/@zaemoru/elements/dist/index.js"></script>

<zm-button variant="primary" size="large" full-width>Continue</zm-button>
```

Or in a bundled app:

```ts
import "@zaemoru/tokens";
import "@zaemoru/elements";
```

## Components

| Tag             | Notes                                                  |
| --------------- | ------------------------------------------------------ |
| `zm-button`     | `variant`, `size`, `disabled`, `full-width`, `loading` |
| `zm-text`       | `size`, `weight`, `tone`                               |
| `zm-heading`    | `level`, `size`                                        |
| `zm-card`       | `elevation`, `padding`                                 |
| `zm-badge`      | `variant`, `size`, `color`                             |
| `zm-text-field` | `label`, `placeholder`, `value`, `invalid`, ...        |
| `zm-checkbox`   | `checked`, `disabled`, `label`                         |
| `zm-switch`     | `checked`, `disabled`, `label`                         |
| `zm-list-row`   | `title`, `description`, `interactive`, `chevron`       |
| `zm-section`    | `section-title`, `description`, `gap`                  |
| `zm-spinner`    | `size`, `tone`                                         |

## Events

- `zm-text-field` dispatches `zm-input` and `zm-change` with `detail.value`.
- `zm-checkbox` dispatches `zm-change` with `detail.checked`.
- `zm-switch` dispatches `zm-change` with `detail.checked`.

## Example

```html
<zm-text-field
  label="Name"
  placeholder="Enter your name"
  helper-text="So we know what to call you"
></zm-text-field>

<zm-button variant="primary" size="large" full-width>Continue</zm-button>
```
