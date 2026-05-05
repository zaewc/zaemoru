/**
 * @zaemoru/elements
 *
 * Importing this module registers all `zm-*` custom elements with the
 * browser's CustomElementRegistry. Side effects are intentional.
 */

export { ZmButton } from "./button/zm-button.js";
export type {
  ZmButtonVariant,
  ZmButtonSize,
  ZmButtonType,
} from "./button/zm-button.js";

export { ZmText } from "./text/zm-text.js";
export type { ZmTextSize, ZmTextWeight, ZmTextTone } from "./text/zm-text.js";

export { ZmHeading } from "./heading/zm-heading.js";
export type { ZmHeadingLevel, ZmHeadingSize } from "./heading/zm-heading.js";

export { ZmCard } from "./card/zm-card.js";
export type { ZmCardElevation, ZmCardPadding } from "./card/zm-card.js";

export { ZmBadge } from "./badge/zm-badge.js";
export type { ZmBadgeVariant, ZmBadgeSize } from "./badge/zm-badge.js";

export { ZmTextField } from "./text-field/zm-text-field.js";
export type {
  ZmTextFieldType,
  ZmTextFieldSize,
} from "./text-field/zm-text-field.js";

export { ZmCheckbox } from "./checkbox/zm-checkbox.js";

export { ZmSwitch } from "./switch/zm-switch.js";

export { ZmListRow } from "./list-row/zm-list-row.js";

export { ZmSection } from "./section/zm-section.js";
export type { ZmSectionGap } from "./section/zm-section.js";

export { ZmSpinner } from "./spinner/zm-spinner.js";
export type { ZmSpinnerSize, ZmSpinnerTone } from "./spinner/zm-spinner.js";
