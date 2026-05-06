import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-text-input")
export class ZmTextInput extends ZmElement {
  static override styles = [
    ZmElement.styles,
    krdsComponentStyles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .field {
        display: grid;
        gap: var(--zm-spacing-2);
      }

      .control {
        display: flex;
        align-items: center;
        min-height: var(--zm-control-height-md);
        padding: 0 var(--zm-spacing-5);
        border: 1px solid transparent;
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-background-subtle);
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
          border-color var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
      }

      .control:hover {
        background: var(--zm-color-background-muted);
      }

      .control:focus-within {
        border-color: var(--zm-color-border-focus);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-focus-ring);
      }

      input {
        all: unset;
        flex: 1;
        min-width: 0;
        color: var(--zm-color-text);
        font: inherit;
        font-size: var(--zm-font-size-md);
        line-height: var(--zm-line-height-normal);
      }

      input::placeholder {
        color: var(--zm-color-text-muted);
      }

      :host([disabled]) .control {
        opacity: 0.55;
        cursor: not-allowed;
      }

      :host([disabled]) input {
        cursor: not-allowed;
      }
    `,
  ];

  @property({ type: String })
  label = "Text Input";

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

  private onInput(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    this.value = target.value;
    dispatchKrdsEvent(this, "zm-input", { value: this.value });
    dispatchKrdsEvent(this, "zm-change", { value: this.value });
  }

  override render() {
    return html`<label class="field"
      ><span class="title">${this.label}</span>
      <span class="control">
        <input
          type="text"
          placeholder=${this.description}
          .value=${this.value}
          ?disabled=${this.disabled}
          @input=${this.onInput}
        />
      </span>
      <slot></slot
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-text-input": ZmTextInput;
  }
}
