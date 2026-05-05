# @zaemoru/react

Thin React adapter for [`@zaemoru/elements`](../elements). It wraps each `zm-*` custom element with a typed React component, converts attribute names to React-friendly camelCase (e.g. `full-width` → `fullWidth`), and exposes `CustomEvent` payloads as plain values in callbacks.

This package does **not** reimplement any styles. All visuals live in `@zaemoru/elements` and `@zaemoru/tokens`.

## Install

```bash
pnpm add @zaemoru/react @zaemoru/elements @zaemoru/tokens react react-dom
```

`react`, `react-dom`, `@zaemoru/elements` and `@zaemoru/tokens` are peer deps.

## Usage

```tsx
import "@zaemoru/tokens/index.css";
import { Button, TextField, Card, Section } from "@zaemoru/react";

export function App() {
  return (
    <Section title="Sign in" description="Welcome back">
      <Card>
        <TextField label="Name" placeholder="Enter your name" />
        <Button variant="primary" size="large" fullWidth>
          Continue
        </Button>
      </Card>
    </Section>
  );
}
```

## Components

`Button`, `Text`, `Heading`, `Card`, `Badge`, `TextField`, `Checkbox`, `Switch`, `ListRow`, `Section`, `Spinner`.

### Form components

`TextField`, `Checkbox`, and `Switch` support both controlled (`value` / `checked`) and uncontrolled (`defaultValue` / `defaultChecked`) modes. Their `onChange` callbacks receive the new value as the first argument:

```tsx
<TextField
  label="Email"
  value={email}
  onChange={(value) => setEmail(value)}
/>

<Switch checked={enabled} onChange={(checked) => setEnabled(checked)} />
```
