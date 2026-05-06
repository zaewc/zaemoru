import { LitElement, css } from "lit";
import type { CSSResultGroup } from "lit";

/**
 * Shared base for every zm-* element. Sets sensible host defaults so each
 * component does not need to repeat layout/typography boilerplate.
 */
export class ZmElement extends LitElement {
  static override styles: CSSResultGroup = css`
    :host {
      box-sizing: border-box;
      font-family: var(--zm-font-family-base);
      color: var(--zm-color-text);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  `;
}
