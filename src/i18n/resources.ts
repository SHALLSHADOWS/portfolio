import type { Resource } from "i18next";
import frCommon from "./locales/fr/common.json";
import enCommon from "./locales/en/common.json";

export const resources = {
  fr: {
    common: frCommon
  },
  en: {
    common: enCommon
  }
} satisfies Resource;

export type AppSupportedLanguage = keyof typeof resources;

