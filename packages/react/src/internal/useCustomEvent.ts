import { useEffect, type RefObject } from "react";

/**
 * Subscribe to a CustomEvent on a ref'd element. The handler is re-bound
 * whenever it (or the event name) changes, but the ref itself is read
 * lazily inside the effect, so callers don't need to memoize their refs.
 */
export function useCustomEvent<T = unknown>(
  ref: RefObject<HTMLElement | null>,
  event: string,
  handler: ((e: CustomEvent<T>) => void) | undefined,
): void {
  useEffect(() => {
    const el = ref.current;
    if (!el || !handler) return;
    const listener = (e: Event) => handler(e as CustomEvent<T>);
    el.addEventListener(event, listener);
    return () => el.removeEventListener(event, listener);
  }, [ref, event, handler]);
}
