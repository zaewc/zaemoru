import "@zaemoru/elements";

export function bindZaemoruHtmx(root: ParentNode = document) {
  root.querySelectorAll("[data-zm-trigger]").forEach((el) => {
    const eventName = el.getAttribute("data-zm-trigger");
    if (!eventName) return;
    el.addEventListener(eventName, () => el.dispatchEvent(new Event("change", { bubbles: true })));
  });
}

export const defineZaemoruElements = () => true;
