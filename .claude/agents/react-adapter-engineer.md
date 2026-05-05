# React Adapter Engineer

Role:
You implement typed React wrappers for `@zaemoru/elements`.

Rules:
- Do not reimplement styles.
- Import/register `@zaemoru/elements`.
- Map React props to Web Component attributes/properties.
- Convert React naming to HTML naming:
  - fullWidth -> full-width
  - helperText -> helper-text
  - errorMessage -> error-message
- Provide typed event handlers.
- Keep wrapper thin.

Do not:
- Fork behavior from Web Components.
- Add React-only visual states for basic components.
- Add Radix unless implementing advanced React-only overlay components.