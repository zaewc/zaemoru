import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-pagination")
export class ZmPagination extends ZmElement {
  static override styles = [
    ZmElement.styles,
    krdsComponentStyles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--zm-spacing-2);
        flex-wrap: nowrap;
        padding: var(--zm-spacing-4);
      }

      .page {
        flex: 0 0 auto;
        width: 44px;
        height: 44px;
        min-height: 44px;
        padding: 0;
        border-radius: var(--zm-radius-lg);
        font-size: var(--zm-font-size-md);
        line-height: 1;
        white-space: nowrap;
      }

      .page[aria-current="page"] {
        box-shadow: none;
      }

      .page:disabled {
        opacity: 0.35;
      }

      @media (max-width: 420px) {
        .pagination {
          gap: 6px;
          padding-inline: var(--zm-spacing-3);
        }

        .page {
          width: 40px;
          height: 40px;
          min-height: 40px;
          border-radius: var(--zm-radius-md);
        }
      }
    `,
  ];

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
    const basePages: KrdsItem[] = this.items.length
      ? this.items
      : Array.from({ length: 5 }, (_, index) => ({
          label: String(index + 1),
          value: String(index + 1),
          current: String(index + 1) === this.value,
        }));

    const pages = basePages.map((item) => {
      const itemValue = item.value ?? item.label;
      return {
        ...item,
        current: item.current || itemValue === this.value,
        value: itemValue,
      };
    });
    const currentIndex = Math.max(
      0,
      pages.findIndex((item) => item.current),
    );
    const startIndex = Math.min(Math.max(currentIndex - 1, 0), Math.max(pages.length - 3, 0));
    const visiblePages = pages.slice(startIndex, startIndex + 3);
    const fallbackPage = pages[0] ?? { label: "1", value: "1", current: true };
    const previousPage = pages[Math.max(currentIndex - 1, 0)] ?? fallbackPage;
    const nextPage = pages[Math.min(currentIndex + 1, pages.length - 1)] ?? fallbackPage;

    return html`<nav class="surface pagination" aria-label="Pagination">
      <button
        class="page"
        type="button"
        ?disabled=${currentIndex === 0 || this.disabled}
        @click=${() => this.emitPage(previousPage.value ?? previousPage.label)}
        aria-label="Previous page"
      >
        ‹</button
      >${visiblePages.map(
        (item) =>
          html`<button
            class=${`page ${item.current ? "primary" : ""}`.trim()}
            type="button"
            ?disabled=${item.disabled || this.disabled}
            @click=${() => this.emitPage(item.value)}
            aria-current=${item.current ? "page" : undefined}
            aria-label=${`Page ${item.label}`}
          >
            ${item.label}
          </button>`,
      )}<button
        class="page"
        type="button"
        ?disabled=${currentIndex === pages.length - 1 || this.disabled}
        @click=${() => this.emitPage(nextPage.value ?? nextPage.label)}
        aria-label="Next page"
      >
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
