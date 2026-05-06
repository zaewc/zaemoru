import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-date-input")
export class ZmDateInput extends ZmElement {
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
        position: relative;
        display: flex;
        align-items: center;
        min-height: var(--zm-control-height-md);
        padding: 0 calc(var(--zm-spacing-5) + 28px) 0 var(--zm-spacing-5);
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

      input:invalid {
        color: var(--zm-color-text-muted);
      }

      input::-webkit-calendar-picker-indicator {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }

      .calendar-icon {
        pointer-events: none;
        position: absolute;
        right: var(--zm-spacing-5);
        width: 18px;
        height: 18px;
        border: 2px solid var(--zm-color-text-muted);
        border-radius: var(--zm-radius-sm);
      }

      .calendar-icon::before,
      .calendar-icon::after {
        content: "";
        position: absolute;
        background: var(--zm-color-text-muted);
      }

      .calendar-icon::before {
        inset: 4px -2px auto;
        height: 2px;
      }

      .calendar-icon::after {
        top: -4px;
        left: 4px;
        width: 6px;
        height: 4px;
        box-shadow: 6px 0 0 var(--zm-color-text-muted);
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
  label = "Date Input";

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
          type="date"
          .value=${this.value}
          ?disabled=${this.disabled}
          @change=${this.onInput}
        />
        <span class="calendar-icon" aria-hidden="true"></span>
      </span>
      <slot></slot
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-date-input": ZmDateInput;
  }
}
