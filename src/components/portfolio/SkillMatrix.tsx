import type { Locale } from "@/lib/i18n";
import { skillGroups } from "@content/data/dictionary";
import { Tag } from "@/components/ui/Tag";
import styles from "./SkillMatrix.module.css";

export function SkillMatrix({ locale }: { locale: Locale }) {
  return (
    <div className={styles.matrix}>
      {skillGroups[locale].map((group, groupIndex) => (
        <article className={styles.group} key={group.title}>
          <span className={styles.index}>{String(groupIndex + 1).padStart(2, "0")}</span>
          <h3>{group.title}</h3>
          <div className={styles.tags}>
            {group.items.map((item, index) => (
              <Tag key={item} tone={index === 0 ? "yellow" : "neutral"}>
                {item}
              </Tag>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
