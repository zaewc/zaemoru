import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ZmElement } from "../internal/base.js";
import { dispatchKrdsEvent, krdsComponentStyles } from "../internal/krds.js";
import type { KrdsItem } from "../internal/krds.js";

@customElement("zm-tts")
export class ZmTts extends ZmElement {
  static override styles = [ZmElement.styles, krdsComponentStyles];

  @property({ type: String })
  label = "Tts";

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

  private speak() {
    const text = this.description || this.textContent?.trim() || this.label;
    if (typeof speechSynthesis !== "undefined") {
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    dispatchKrdsEvent(this, "zm-speak", { text });
  }

  override render() {
    return html`<button
      class="subtle"
      type="button"
      @click=${this.speak}
      ?disabled=${this.disabled}
    >
      <slot>Listen</slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "zm-tts": ZmTts;
  }
}
