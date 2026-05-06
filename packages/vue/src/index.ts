import "@zaemoru/elements";

type VueLikeApp = {
  config?: {
    compilerOptions?: {
      isCustomElement?: (tag: string) => boolean;
    };
  };
};

export function isZaemoruElement(tag: string) {
  return tag.startsWith("zm-");
}

export function createZaemoruVuePlugin() {
  return {
    install(app: VueLikeApp) {
      if (!app.config) app.config = {};
      if (!app.config.compilerOptions) app.config.compilerOptions = {};
      const previous = app.config.compilerOptions.isCustomElement;
      app.config.compilerOptions.isCustomElement = (tag: string) =>
        isZaemoruElement(tag) || previous?.(tag) === true;
    },
  };
}

export const ZaemoruVue = createZaemoruVuePlugin();
export const defineZaemoruElements = () => true;
