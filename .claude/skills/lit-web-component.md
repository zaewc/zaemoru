# Lit Web Component Skill

When implementing Lit components:

1. Use `@customElement`.
2. Use typed `@property`.
3. Reflect boolean attributes when useful.
4. Use semantic native elements internally.
5. Use CSS variables.
6. Use slots for children.
7. Dispatch CustomEvents with:
   - bubbles: true
   - composed: true
   - detail
8. Export the element class.
9. Import the component from `packages/elements/src/index.ts`.

Do not:

- use React
- use Tailwind
- hardcode design values
- make framework-specific assumptions
