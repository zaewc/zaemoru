# React Wrapper Skill

When wrapping Web Components for React:

1. Import `@zaemoru/elements`.
2. Define typed props.
3. Map camelCase props to kebab-case attributes.
4. Forward refs where useful.
5. Support className where possible.
6. Map CustomEvents to React callbacks.
7. Do not duplicate visual styles.
8. Export from `packages/react/src/index.ts`.

Example mapping:

- fullWidth -> full-width
- helperText -> helper-text
- errorMessage -> error-message
- onZmChange -> zm-change listener
