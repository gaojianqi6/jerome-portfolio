import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@content/data/dictionary";
import { Tag } from "@/components/ui/Tag";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <Link
      className={`${styles.card} ${project.featured ? styles.featured : ""}`}
      href={`/${locale}/projects#${project.slug}`}
      id={project.slug}
    >
      <div className={styles.meta}>
        <span>{project.year}</span>
        <span>{project.status[locale]}</span>
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.summary[locale]}</p>
      </div>
      <div className={styles.tags}>
        {project.tags[locale].map((tag, index) => (
          <Tag key={tag} tone={index === 0 ? "blue" : index === 1 ? "red" : "neutral"}>
            {tag}
          </Tag>
        ))}
      </div>
      <span className={styles.arrow} aria-hidden="true">
        <ArrowUpRight size={20} />
      </span>
    </Link>
  );
}
