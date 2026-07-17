import type { Locale } from "@/lib/i18n";

export const routeLabels: Record<Locale, Array<{ href: string; label: string }>> = {
  en: [
    { href: "/en/projects", label: "Projects" },
    { href: "/en/about", label: "About" },
    { href: "/en/contact", label: "Contact" },
  ],
  zh: [
    { href: "/zh/projects", label: "项目" },
    { href: "/zh/about", label: "关于" },
    { href: "/zh/contact", label: "联系" },
  ],
};
