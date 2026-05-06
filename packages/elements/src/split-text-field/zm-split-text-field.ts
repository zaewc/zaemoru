import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-split-text-field")
export class ZmSplitTextField extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: flex;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        flex-wrap: wrap;
        gap: var(--zm-spacing-2);
      }
      zm-text-field {
        flex: 1 1 0;
        min-width: min(140px, 100%);
      }
    `,
  ];

  @property({ type: Number }) parts = 2;
  @property({ type: String }) placeholder = "";

  private _emit() {
    const values = Array.from(this.renderRoot.querySelectorAll("zm-text-field")).map(
      (el) => (el as HTMLElement & { value?: string }).value ?? "",
    );
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { values, value: values.join("") },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    return html`${Array.from({ length: Math.max(1, this.parts) }, (_, i) => {
      const placeholder = this.placeholder ? `${this.placeholder} ${i + 1}` : "";
      return html`<zm-text-field
        placeholder=${placeholder}
        @zm-change=${this._emit}
      ></zm-text-field>`;
    })}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-split-text-field": ZmSplitTextField;
  }
}
