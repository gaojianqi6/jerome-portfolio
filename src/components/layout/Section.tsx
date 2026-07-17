import type { ReactNode } from "react";
import styles from "./Section.module.css";

export function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        {eyebrow ? <span>{eyebrow}</span> : null}
        <h2>{title}</h2>
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
