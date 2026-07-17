import type { Locale } from "@/lib/i18n";
import { contact } from "@content/data/dictionary";
import styles from "./Footer.module.css";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className={styles.footer}>
      <span>{locale === "zh" ? "准备继续补全真实项目证据。" : "Ready for the next layer of project evidence."}</span>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </footer>
  );
}
