# Implement Component

Implement a new Zaemoru component.

Input:

- Component name

- Component purpose

- Props/attributes

- Events

- Accessibility requirements

Process:

1. Inspect existing package structure.

2. Check similar components before implementing.

3. Define public API first.

4. Implement Web Component in `packages/elements`.

5. Use `zm-` prefix for the custom element.

6. Use CSS variables from `@zaemoru/tokens`.

7. Add React adapter in `packages/react`.

8. Add docs examples in `apps/docs`.

9. Export from package index files.

10. Run validation commands.

Rules:

- Do not make it React-only.

- Do not use Tailwind in packages.

- Do not hardcode colors if a token exists.

- Use semantic HTML.

- Add focus-visible style for interactive components.

- Add disabled state for interactive components.

- Dispatch `zm-*` CustomEvents when the value changes.

- Keep API small and product-friendly.

Required final output:

- Component API

- Files changed

- Validation result

- Any tradeoffs
