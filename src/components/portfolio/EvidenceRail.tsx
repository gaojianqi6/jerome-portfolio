import type { Locale } from "@/lib/i18n";
import { evidenceSteps } from "@content/data/dictionary";
import styles from "./EvidenceRail.module.css";

export function EvidenceRail({ locale }: { locale: Locale }) {
  return (
    <ol className={styles.rail}>
      {evidenceSteps[locale].map((step, index) => (
        <li key={step}>
          <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
          <span className={styles.label}>{step}</span>
        </li>
      ))}
    </ol>
  );
}
