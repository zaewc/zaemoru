# Fix Build

Fix failing validation commands.

Process:

1. Run or inspect the failing command.
2. Identify the smallest root cause.
3. Fix the cause, not the symptom.
4. Rerun the failed command.
5. If related, run full validation:
   - pnpm lint
   - pnpm typecheck
   - pnpm build

Rules:

- Do not delete tests or examples to pass build.
- Do not loosen TypeScript config without justification.
- Do not remove exports unless they are truly invalid.
- Do not ignore lint rules unless explicitly requested.
- Preserve package boundaries.