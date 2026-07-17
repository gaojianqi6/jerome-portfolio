import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageCopy, projects } from "@content/data/dictionary";
import styles from "./page.module.css";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "zh";
  const copy = pageCopy.projects[locale];

  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <p>Projects</p>
        <h1>{copy.title}</h1>
        <span>{copy.body}</span>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </section>
  );
}
