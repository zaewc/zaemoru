import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-pagination")
export class ZmPagination extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Pagination";

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

  private emitPage(value: string) {
    this.value = value;
    dispatchKrdsEvent(this, "zm-change", { value });
  }

  override render() {
    const pages: KrdsItem[] = this.items.length
      ? this.items
      : Array.from({ length: 5 }, (_, index) => ({
          label: String(index + 1),
          value: String(index + 1),
          current: String(index + 1) === this.value,
        }));
    return html`<nav class="surface row wrap" aria-label="Pagination">
      <button type="button" @click=${() => this.emitPage("previous")} aria-label="Previous page">
        ‹</button
      >${pages.map(
        (item) =>
          html`<button
            class=${item.current ? "primary" : ""}
            type="button"
            ?disabled=${item.disabled}
            @click=${() => this.emitPage(item.value ?? item.label)}
            aria-current=${item.current ? "page" : undefined}
          >
            ${item.label}
          </button>`,
      )}<button type="button" @click=${() => this.emitPage("next")} aria-label="Next page">
        ›
      </button>
    </nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-pagination": ZmPagination;
  }
}
