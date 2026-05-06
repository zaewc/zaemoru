import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from "react";

type ZmIntrinsic = HTMLAttributes<HTMLElement> & {
  ref?: Ref<HTMLElement>;
  class?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [attr: string]: unknown;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "zm-badge": ZmIntrinsic;
      "zm-board-row": ZmIntrinsic;
      "zm-border": ZmIntrinsic;
      "zm-bottom-info": ZmIntrinsic;
      "zm-button": ZmIntrinsic;
      "zm-card": ZmIntrinsic;
      "zm-checkbox": ZmIntrinsic;
      "zm-grid-list": ZmIntrinsic;
      "zm-heading": ZmIntrinsic;
      "zm-highlight": ZmIntrinsic;
      "zm-icon-button": ZmIntrinsic;
      "zm-list-footer": ZmIntrinsic;
      "zm-list-header": ZmIntrinsic;
      "zm-list-row": ZmIntrinsic;
      "zm-paragraph": ZmIntrinsic;
      "zm-progress-bar": ZmIntrinsic;
      "zm-progress-stepper": ZmIntrinsic;
      "zm-rating": ZmIntrinsic;
      "zm-result": ZmIntrinsic;
      "zm-search-field": ZmIntrinsic;
      "zm-section": ZmIntrinsic;
      "zm-segmented-control": ZmIntrinsic;
      "zm-skeleton": ZmIntrinsic;
      "zm-slider": ZmIntrinsic;
      "zm-spinner": ZmIntrinsic;
      "zm-stepper": ZmIntrinsic;
      "zm-switch": ZmIntrinsic;
      "zm-tab": ZmIntrinsic;
      "zm-table-row": ZmIntrinsic;
      "zm-text": ZmIntrinsic;
      "zm-text-area": ZmIntrinsic;
      "zm-text-button": ZmIntrinsic;
      "zm-text-field": ZmIntrinsic;
      "zm-top": ZmIntrinsic;
    }
  }
}

export {};
