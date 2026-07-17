import { ArrowLeft, ArrowUpRight, Check, Mail } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";
import type { Project } from "content-collections";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { contact } from "@content/data/dictionary";
import { absoluteUrl } from "@/lib/site";
import styles from "./CaseStudy.module.css";

const statusLabels = {
  en: { live: "Live", shipped: "Shipped", ongoing: "Ongoing", archived: "Archived" },
  zh: { live: "已上线", shipped: "已交付", ongoing: "持续开发", archived: "已归档" },
} as const;

const labels = {
  en: {
    back: "All projects",
    snapshot: "Project snapshot",
    role: "Role",
    timeframe: "Timeframe",
    status: "Status",
    stack: "Core stack",
    evidence: "Full-stack evidence",
    evidenceIntro: "A visible path from client experience to production operations.",
    architecture: "System flow",
    architectureIntro: "The boundaries that kept product work, data, and external side effects understandable.",
    results: "What shipped",
    contact: "Discuss this work",
    contactBody: "I can go deeper on the trade-offs, implementation boundaries, and what I would change today.",
    email: "Email Jerome",
    professional: "Professional work",
    independent: "Independent product",
    evidenceLabel: "Evidence",
    architectureLabel: "Architecture",
    resultsLabel: "Results",
    contactLabel: "Contact",
  },
  zh: {
    back: "全部项目",
    snapshot: "项目概览",
    role: "职责",
    timeframe: "时间",
    status: "状态",
    stack: "核心技术",
    evidence: "全栈证据链",
    evidenceIntro: "从客户端体验一直到生产运行的可见链路。",
    architecture: "系统流程",
    architectureIntro: "让产品、数据和外部副作用保持清晰的系统边界。",
    results: "交付结果",
    contact: "深入讨论这个项目",
    contactBody: "可以继续讨论技术取舍、实现边界，以及现在会如何改进。",
    email: "邮件联系",
    professional: "职业项目",
    independent: "独立产品",
    evidenceLabel: "证据",
    architectureLabel: "架构",
    resultsLabel: "结果",
    contactLabel: "联系",
  },
} as const;

export function CaseStudy({ project, locale }: { project: Project; locale: Locale }) {
  const copy = labels[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    creator: {
      "@type": "Person",
      name: "Jerome Gao",
      jobTitle: "Full Stack Engineer",
    },
    inLanguage: locale === "zh" ? "zh-Hans" : "en",
    url: absoluteUrl(`/${locale}/projects/${project.slug}`),
    keywords: project.techStack.join(", "),
  };

  return (
    <article className={styles.caseStudy}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <header className={styles.hero}>
        <div className={styles.heroTopline}>
          <Link href={`/${locale}/projects`}>
            <ArrowLeft size={17} />
            {copy.back}
          </Link>
          <span>{project.kind === "professional" ? copy.professional : copy.independent}</span>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroTitle}>
            <p>{project.client}</p>
            <h1>{project.title}</h1>
          </div>
          <div className={styles.heroSummary}>
            <p>{project.subtitle}</p>
            <div className={styles.heroLinks}>
              {project.links.map((link) => (
                <Button
                  analyticsEvent="project_external_click"
                  analyticsLabel={`${project.slug}:${link.label}`}
                  href={link.href}
                  key={link.href}
                  variant="secondary"
                >
                  {link.label}
                  <ArrowUpRight size={18} />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <dl className={styles.snapshot} aria-label={copy.snapshot}>
          <div>
            <dt>{copy.role}</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>{copy.timeframe}</dt>
            <dd>{project.timeframe}</dd>
          </div>
          <div>
            <dt>{copy.status}</dt>
            <dd>{statusLabels[locale][project.status]}</dd>
          </div>
        </dl>
      </header>

      {project.hero ? (
        <figure className={styles.media}>
          <div className={styles.mediaFrame}>
            <Image
              alt={project.hero.alt}
              fill
              priority
              sizes="100vw"
              src={project.hero.src}
              style={{ objectPosition: project.hero.position }}
            />
          </div>
          <figcaption>
            <span>{project.hero.caption}</span>
            {project.hero.creditHref && project.hero.creditLabel ? (
              <a href={project.hero.creditHref} target="_blank" rel="noreferrer noopener">
                {project.hero.creditLabel}
                <ArrowUpRight size={14} />
              </a>
            ) : null}
          </figcaption>
        </figure>
      ) : null}

      <section className={styles.narrativeSection}>
        <aside className={styles.stackRail}>
          <span>{copy.stack}</span>
          <ul>
            {project.techStack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </aside>
        <div className={styles.prose}>
          <p className={styles.lede}>{project.summary}</p>
          <MDXContent code={project.mdx} />
        </div>
      </section>

      <section className={styles.evidenceSection}>
        <div className={styles.sectionHeading}>
          <span>{copy.evidenceLabel}</span>
          <div>
            <h2>{copy.evidence}</h2>
            <p>{copy.evidenceIntro}</p>
          </div>
        </div>
        <ol className={styles.evidenceGrid}>
          {project.evidence.map((item, index) => (
            <li key={`${item.layer}-${item.title}`}>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{item.layer}</small>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.architectureSection}>
        <div className={styles.sectionHeading}>
          <span>{copy.architectureLabel}</span>
          <div>
            <h2>{copy.architecture}</h2>
            <p>{copy.architectureIntro}</p>
          </div>
        </div>
        <ol className={styles.architectureFlow}>
          {project.architecture.map((item) => (
            <li key={item.step}>
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.resultsSection}>
        <div className={styles.sectionHeading}>
          <span>{copy.resultsLabel}</span>
          <h2>{copy.results}</h2>
        </div>
        <ul>
          {project.results.map((result) => (
            <li key={result}>
              <Check size={20} aria-hidden="true" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.contactSection}>
        <div>
          <span>{copy.contactLabel}</span>
          <h2>{copy.contact}</h2>
          <p>{copy.contactBody}</p>
        </div>
        <Button
          analyticsEvent="contact_click"
          analyticsLabel={`case-study:${project.slug}`}
          href={`mailto:${contact.email}`}
        >
          <Mail size={18} />
          {copy.email}
        </Button>
      </section>
    </article>
  );
}
