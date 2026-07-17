import { isLocale, type Locale } from "@/lib/i18n";
import { pageCopy } from "@content/data/dictionary";
import styles from "../projects/page.module.css";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "zh";
  const copy = pageCopy.about[locale];

  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <p>About</p>
        <h1>{copy.title}</h1>
        <span>{copy.body}</span>
      </div>
    </section>
  );
}
