"use client";

import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, swapLocale, type Locale } from "@/lib/i18n";
import { routeLabels } from "@/lib/routes";
import { contact } from "@content/data/dictionary";
import styles from "./Header.module.css";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link className={styles.brand} href={`/${locale}`} aria-label="Jerome Gao home">
        <span>Jerome Gao</span>
        <span className={styles.index}>01</span>
      </Link>

      <nav className={styles.nav} aria-label="Primary navigation">
        {routeLabels[locale].map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        <div className={styles.locales} aria-label="Language switcher">
          {locales.map((item) => (
            <Link
              aria-current={item === locale ? "true" : undefined}
              className={item === locale ? styles.activeLocale : undefined}
              href={swapLocale(pathname, item)}
              key={item}
            >
              {localeLabels[item]}
            </Link>
          ))}
        </div>
        <a className={styles.iconLink} href={`mailto:${contact.email}`} aria-label="Email Jerome">
          <Mail size={18} />
        </a>
        <a className={styles.iconLink} href={contact.linkedin} aria-label="LinkedIn">
          <BriefcaseBusiness size={18} />
        </a>
        <a className={styles.iconLink} href={contact.github} aria-label="GitHub">
          <Code2 size={18} />
        </a>
      </div>
    </header>
  );
}
