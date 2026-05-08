import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-side-navigation")
export class ZmSideNavigation extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: block;
        font-family: var(--zm-font-family-base);
        color: var(--zm-color-text);
      }
      nav {
        display: block;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 2px;
      }
      a {
        display: block;
        padding: var(--zm-spacing-2) var(--zm-spacing-3);
        border-radius: var(--zm-radius-md);
        color: var(--zm-color-text-subtle);
        font-size: var(--zm-font-size-sm);
        font-weight: var(--zm-font-weight-medium);
        line-height: var(--zm-line-height-snug);
        text-decoration: none;
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
          color var(--zm-duration-fast) var(--zm-easing-standard);
      }
      a:hover {
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text-strong);
      }
      a[aria-current="page"] {
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text-strong);
        font-weight: var(--zm-font-weight-semibold);
      }
      a:focus-visible {
        outline: none;
        box-shadow: var(--zm-focus-ring);
      }
    `,
  ];

  @property({ type: String })
  label = "Side Navigation";

  @property({ type: String })
  description = "";

  @property({ type: String })
  href = "#";

  @property({ type: String })
  value = "";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ attribute: false })
  items: KrdsItem[] = [];

  override render() {
    return html`<nav aria-label=${this.label} role="navigation">
      <ul>
        ${this.items.map(
          (item) =>
            html`<li>
              <a
                href=${item.href ?? "#"}
                aria-current=${item.current ? "page" : undefined}
                >${item.label}</a
              >
            </li>`,
        )}
        <slot></slot>
      </ul>
    </nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-side-navigation": ZmSideNavigation;
  }
}
