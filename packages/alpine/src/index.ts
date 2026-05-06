import "@zaemoru/elements";

type AlpineLike = {
  plugin?: (plugin: (alpine: AlpineLike) => void) => void;
  magic?: (name: string, callback: () => unknown) => void;
};

export function zaemoruAlpine(alpine?: AlpineLike) {
  alpine?.magic?.("zaemoru", () => ({ customElementPrefix: "zm-" }));
}

export const defineZaemoruElements = () => true;
