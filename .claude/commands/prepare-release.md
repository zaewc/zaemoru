# Prepare Release

Prepare Zaemoru packages for release.

Process:

1. Check changed packages.
2. Confirm package exports.
3. Confirm README usage examples.
4. Confirm changesets exist.
5. Run:
   - pnpm format
   - pnpm lint
   - pnpm typecheck
   - pnpm build
6. Check generated dist output.
7. Summarize release impact.

Rules:

- Do not publish without explicit user confirmation.
- Do not bump versions manually if changesets are used.
- Do not release broken docs examples.
