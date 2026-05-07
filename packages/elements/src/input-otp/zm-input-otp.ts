import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";

@customElement("zm-input-otp")
export class ZmInputOtp extends ZmElement {
  static override styles = [
    ZmElement.styles,
    css`
      :host {
        display: inline-block;
        font-family: var(--zm-font-family-base);
      }
      .group {
        display: flex;
        gap: var(--zm-spacing-2);
      }
      input {
        box-sizing: border-box;
        width: 44px;
        height: 52px;
        border: 1px solid var(--zm-color-border);
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-surface);
        color: var(--zm-color-text-strong);
        text-align: center;
        font: inherit;
        font-size: var(--zm-font-size-xl);
        font-weight: var(--zm-font-weight-bold);
      }
      input:focus {
        outline: none;
        border-color: var(--zm-color-border-focus);
        box-shadow: var(--zm-focus-ring);
      }
    `,
  ];

  @property({ type: Number }) parts = 6;
  @property({ type: String }) value = "";
  @property({ type: Boolean, reflect: true }) masked = false;
  @state() private values: string[] = [];

  override connectedCallback() {
    super.connectedCallback();
    this.syncValue();
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has("value") || changed.has("parts")) this.syncValue();
  }

  private syncValue() {
    this.values = Array.from({ length: this.parts }, (_, index) => this.value[index] ?? "");
  }

  private commit(index: number, input: HTMLInputElement) {
    const next = [...this.values];
    next[index] = input.value.slice(-1);
    this.values = next;
    this.value = next.join("");
    this.dispatchEvent(
      new CustomEvent("zm-change", {
        detail: { values: next, value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
    if (input.value && index < this.parts - 1) {
      const fields = Array.from(this.renderRoot.querySelectorAll<HTMLInputElement>("input"));
      fields[index + 1]?.focus();
    }
  }

  override render() {
    return html`<div class="group" role="group" aria-label="One-time password">
      ${Array.from(
        { length: this.parts },
        (_, index) =>
          html`<input
            inputmode="numeric"
            autocomplete=${index === 0 ? "one-time-code" : "off"}
            maxlength="1"
            type=${this.masked ? "password" : "text"}
            .value=${this.values[index] ?? ""}
            @input=${(event: InputEvent) =>
              this.commit(index, event.currentTarget as HTMLInputElement)}
          />`,
      )}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-input-otp": ZmInputOtp;
  }
}
