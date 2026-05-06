import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-text-input")
export class ZmTextInput extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

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
    return html`<label class="surface"
      ><span class="title">${this.label}</span
      ><input
        type="text"
        placeholder=${this.description}
        .value=${this.value}
        ?disabled=${this.disabled}
        @input=${this.onInput} /><slot></slot
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-text-input": ZmTextInput;
  }
}
