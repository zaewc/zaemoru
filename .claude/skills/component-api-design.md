# Component API Design Skill

When designing a component API:

1. Start from user intent, not implementation detail.
2. Keep variants minimal.
3. Prefer semantic prop names.
4. Avoid exposing internal DOM structure.
5. Use slots for flexible content in Web Components.
6. Use simple attributes for common cases.
7. Use CustomEvents for state changes.
8. Keep React adapter props idiomatic.

Good:

- variant="primary"
- size="large"
- full-width
- disabled
- loading

Bad:

- colorScheme="blue500"
- radiusLevel="12"
- internalState="active"
- usePortalStrategy="x"
