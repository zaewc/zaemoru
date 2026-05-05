# Release Check Skill

Before release:

1. Confirm changed packages.
2. Confirm package exports.
3. Confirm README usage.
4. Confirm changesets.
5. Run:
   - pnpm format
   - pnpm lint
   - pnpm typecheck
   - pnpm build
6. Do not publish without explicit confirmation.