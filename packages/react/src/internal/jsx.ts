import type { CSSProperties, ReactNode, Ref, HTMLAttributes } from "react";

/**
 * Minimal generic JSX intrinsic for our `zm-*` custom elements. React 18's
 * type system doesn't understand custom elements out of the box, so we
 * declare a permissive interface that accepts arbitrary string attributes
 * and the standard event/ref props we actually use.
 */
type ZmIntrinsic = HTMLAttributes<HTMLElement> & {
  ref?: Ref<HTMLElement>;
  class?: string;
  style?: CSSProperties;
  children?: ReactNode;
  // attribute pass-through — values go straight through to the DOM
  [attr: string]: unknown;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "zm-button": ZmIntrinsic;
      "zm-text": ZmIntrinsic;
      "zm-heading": ZmIntrinsic;
      "zm-card": ZmIntrinsic;
      "zm-badge": ZmIntrinsic;
      "zm-text-field": ZmIntrinsic;
      "zm-checkbox": ZmIntrinsic;
      "zm-switch": ZmIntrinsic;
      "zm-list-row": ZmIntrinsic;
      "zm-section": ZmIntrinsic;
      "zm-spinner": ZmIntrinsic;
    }
  }
}

export {};
