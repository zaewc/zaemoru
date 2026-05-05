# Add Token

Add or update design tokens in Zaemoru.

Process:

1. Inspect `packages/tokens/src/index.css`.
2. Check whether an existing token already solves the need.
3. Add the minimum necessary token.
4. Use `--zm-` prefix.
5. Update docs token section.
6. Check components affected by the new token.
7. Run validation commands.

Rules:

- Do not add one-off tokens for a single component unless justified.
- Prefer semantic tokens over raw palette tokens.
- Use stable names.
- Do not rename existing public tokens unless explicitly requested.

Token categories:

- color
- typography
- spacing
- radius
- shadow
- z-index
- duration
- easing