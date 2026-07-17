export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedText = Record<Locale, string>;

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function swapLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/");
  if (isLocale(parts[1] ?? "")) {
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }

  return `/${nextLocale}${pathname === "/" ? "" : pathname}`;
}
