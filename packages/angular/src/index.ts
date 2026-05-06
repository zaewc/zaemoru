import "@zaemoru/elements";

export const ZAEMORU_CUSTOM_ELEMENTS_SCHEMA = "CUSTOM_ELEMENTS_SCHEMA";
export const defineZaemoruElements = () => true;

export function provideZaemoruElements() {
  return {
    schemas: [ZAEMORU_CUSTOM_ELEMENTS_SCHEMA],
  };
}
