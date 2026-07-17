import styles from "./Tag.module.css";

export function Tag({ children, tone = "neutral" }: { children: string; tone?: "neutral" | "red" | "yellow" | "blue" }) {
  return <span className={`${styles.tag} ${styles[tone]}`}>{children}</span>;
}
