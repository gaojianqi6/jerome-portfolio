import type { Locale } from "@/lib/i18n";
import { contact } from "@content/data/dictionary";
import styles from "./Footer.module.css";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className={styles.footer}>
      <div>
        <strong>Jerome Gao</strong>
        <span>
          {locale === "zh"
            ? "Full Stack Engineer / 中国 / 新西兰本地 / 全球远程"
            : "Full Stack Engineer / New Zealand-based / Global remote"}
        </span>
      </div>
      <nav aria-label="Footer links">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer noopener">
          LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer noopener">
          GitHub
        </a>
      </nav>
    </footer>
  );
}
