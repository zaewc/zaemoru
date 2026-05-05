import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-grid-list")
export class ZmGridList extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: grid;
        grid-template-columns: repeat(var(--zm-grid-list-columns, 2), minmax(0, 1fr));
        gap: var(--zm-grid-list-gap, var(--zm-spacing-3));
        font-family: var(--zm-font-family-base);
      }
    `,
  ];

  @property({ type: Number, reflect: true })
  columns = 2;

  @property({ type: String, reflect: true })
  gap: "small" | "medium" | "large" = "medium";

  override updated(changed: Map<string, unknown>) {
    if (changed.has("columns")) {
      this.style.setProperty("--zm-grid-list-columns", String(this.columns));
    }
    if (changed.has("gap")) {
      const map = {
        small: "var(--zm-spacing-2)",
        medium: "var(--zm-spacing-3)",
        large: "var(--zm-spacing-5)",
      } as const;
      this.style.setProperty("--zm-grid-list-gap", map[this.gap]);
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.style.setProperty("--zm-grid-list-columns", String(this.columns));
  }

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-grid-list": ZmGridList;
  }
}
