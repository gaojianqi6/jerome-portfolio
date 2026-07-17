import { CopyEmailButton } from "@/components/portfolio/CopyEmailButton";
import { Button } from "@/components/ui/Button";
import { isLocale, type Locale } from "@/lib/i18n";
import { contact, pageCopy } from "@content/data/dictionary";
import styles from "../projects/page.module.css";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "zh";
  const copy = pageCopy.contact[locale];

  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <p>Contact</p>
        <h1>{copy.title}</h1>
        <span>{copy.body}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        <CopyEmailButton locale={locale} />
        <Button href={contact.linkedin} variant="ghost">
          LinkedIn
        </Button>
        <Button href={contact.github} variant="ghost">
          GitHub
        </Button>
      </div>
    </section>
  );
}
