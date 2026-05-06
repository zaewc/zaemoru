import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
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
        position: relative;
        display: grid;
        gap: var(--zm-spacing-2);
      }

      .trigger {
        appearance: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--zm-spacing-3);
        width: 100%;
        min-height: var(--zm-control-height-md);
        padding: 0 var(--zm-spacing-5);
        border: 1px solid transparent;
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text);
        cursor: pointer;
        text-align: left;
        font: inherit;
        font-size: var(--zm-font-size-md);
        transition:
          background-color var(--zm-duration-fast) var(--zm-easing-standard),
          border-color var(--zm-duration-fast) var(--zm-easing-standard),
          box-shadow var(--zm-duration-fast) var(--zm-easing-standard);
      }

      .trigger:hover {
        background: var(--zm-color-background-muted);
      }

      .trigger:focus-visible,
      :host([open]) .trigger {
        outline: none;
        border-color: var(--zm-color-border-focus);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-focus-ring);
      }

      .value.placeholder {
        color: var(--zm-color-text-muted);
      }

      .calendar-icon {
        position: relative;
        flex: 0 0 auto;
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

      .calendar {
        position: absolute;
        z-index: var(--zm-z-dropdown);
        inset: calc(100% + var(--zm-spacing-2)) 0 auto;
        display: grid;
        gap: var(--zm-spacing-3);
        padding: var(--zm-spacing-4);
        border: 1px solid var(--zm-color-border-subtle);
        border-radius: var(--zm-radius-lg);
        background: var(--zm-color-surface);
        box-shadow: var(--zm-shadow-lg);
      }

      .calendar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--zm-spacing-3);
      }

      .calendar-title {
        color: var(--zm-color-text-strong);
        font-weight: var(--zm-font-weight-bold);
      }

      .month-button,
      .day {
        appearance: none;
        border: 0;
        cursor: pointer;
        font: inherit;
      }

      .month-button {
        width: 36px;
        min-height: 36px;
        padding: 0;
        border-radius: var(--zm-radius-md);
        background: var(--zm-color-background-subtle);
        color: var(--zm-color-text-subtle);
      }

      .month-button:hover,
      .month-button:focus-visible {
        outline: none;
        background: var(--zm-color-background-muted);
      }

      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: var(--zm-spacing-1);
      }

      .weekday {
        display: grid;
        place-items: center;
        height: 28px;
        color: var(--zm-color-text-muted);
        font-size: var(--zm-font-size-xs);
        font-weight: var(--zm-font-weight-bold);
      }

      .day {
        min-height: 36px;
        padding: 0;
        border-radius: var(--zm-radius-md);
        background: transparent;
        color: var(--zm-color-text);
      }

      .day:hover,
      .day:focus-visible {
        outline: none;
        background: var(--zm-color-background-subtle);
      }

      .day.outside {
        color: var(--zm-color-text-muted);
      }

      .day.selected {
        background: var(--zm-color-primary);
        color: var(--zm-color-on-primary);
        font-weight: var(--zm-font-weight-bold);
      }

      :host([disabled]) .trigger {
        opacity: 0.55;
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

  @state()
  private open = false;

  @state()
  private viewDate = this.value ? this.parseDate(this.value) : new Date();

  private parseDate(value: string) {
    const [year, month, date] = value.split("-").map(Number);
    if (!year || !month || !date) return new Date();
    return new Date(year, month - 1, date);
  }

  private formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  private displayDate(value: string) {
    if (!value) return this.description || "Select date";
    const date = this.parseDate(value);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(
      date.getDate(),
    ).padStart(2, "0")}`;
  }

  private toggle() {
    if (this.disabled) return;
    this.viewDate = this.value ? this.parseDate(this.value) : this.viewDate;
    this.open = !this.open;
    this.toggleAttribute("open", this.open);
  }

  private close() {
    this.open = false;
    this.toggleAttribute("open", false);
  }

  private moveMonth(delta: number) {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + delta, 1);
  }

  private selectDate(date: Date) {
    this.value = this.formatDate(date);
    this.viewDate = date;
    this.close();
    dispatchKrdsEvent(this, "zm-input", { value: this.value });
    dispatchKrdsEvent(this, "zm-change", { value: this.value });
  }

  private get calendarDays() {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const start = new Date(year, month, 1 - firstDay.getDay());
    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return date;
    });
  }

  private onFocusOut(event: FocusEvent) {
    const next = event.relatedTarget;
    if (next instanceof Node && this.renderRoot.contains(next)) return;
    this.close();
  }

  override render() {
    const monthTitle = `${this.viewDate.getFullYear()}.${String(
      this.viewDate.getMonth() + 1,
    ).padStart(2, "0")}`;
    const selectedValue = this.value;

    return html`<label class="field"
      ><span class="title">${this.label}</span>
      <button
        class="trigger"
        type="button"
        ?disabled=${this.disabled}
        aria-haspopup="dialog"
        aria-expanded=${this.open ? "true" : "false"}
        @click=${this.toggle}
        @focusout=${this.onFocusOut}
      >
        <span class=${`value ${this.value ? "" : "placeholder"}`.trim()}
          >${this.displayDate(this.value)}</span
        >
        <span class="calendar-icon" aria-hidden="true"></span>
      </button>
      ${this.open
        ? html`<div
            class="calendar"
            role="dialog"
            aria-label=${this.label}
            @focusout=${this.onFocusOut}
          >
            <div class="calendar-header">
              <button
                class="month-button"
                type="button"
                @click=${() => this.moveMonth(-1)}
                aria-label="Previous month"
              >
                ‹
              </button>
              <span class="calendar-title">${monthTitle}</span>
              <button
                class="month-button"
                type="button"
                @click=${() => this.moveMonth(1)}
                aria-label="Next month"
              >
                ›
              </button>
            </div>
            <div class="calendar-grid">
              ${["S", "M", "T", "W", "T", "F", "S"].map(
                (day) => html`<span class="weekday">${day}</span>`,
              )}
              ${this.calendarDays.map((date) => {
                const value = this.formatDate(date);
                const selected = value === selectedValue;
                const outside = date.getMonth() !== this.viewDate.getMonth();
                return html`<button
                  class=${`day ${selected ? "selected" : ""} ${outside ? "outside" : ""}`.trim()}
                  type="button"
                  aria-pressed=${selected ? "true" : "false"}
                  @click=${() => this.selectDate(date)}
                >
                  ${date.getDate()}
                </button>`;
              })}
            </div>
          </div>`
        : null}
      <slot></slot
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-date-input": ZmDateInput;
  }
}
