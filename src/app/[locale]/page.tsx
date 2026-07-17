import { ArrowUpRight, FileDown, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/portfolio/CopyEmailButton";
import { isLocale, type Locale } from "@/lib/i18n";
import {
  contact,
  evidenceNarrative,
  experienceTimeline,
  homeCopy,
  homeHighlights,
  homeProjects,
  homeSideProjects,
  stackRows,
} from "@content/data/dictionary";
import styles from "./page.module.css";
import { absoluteUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const description = homeCopy[locale].subtitle;

  return {
    title: locale === "zh" ? "全栈工程师" : "Full Stack Engineer",
    description,
    alternates: {
      canonical: absoluteUrl(`/${locale}`),
      languages: { en: absoluteUrl("/en"), "zh-Hans": absoluteUrl("/zh") },
    },
    openGraph: { title: `Jerome Gao / ${locale === "zh" ? "全栈工程师" : "Full Stack Engineer"}`, description },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "zh";
  const copy = homeCopy[locale];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src="/images/hero-workspace.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className={styles.subtitle}>{copy.subtitle}</p>
          <div className={styles.ctas}>
            <Button analyticsEvent="cta_click" analyticsLabel="home:work" href="#work">
              {copy.primaryCta}
              <ArrowUpRight size={18} />
            </Button>
            <Button analyticsEvent="contact_click" analyticsLabel="home:email" href={`mailto:${contact.email}`} variant="ghost">
              {copy.secondaryCta}
              <Mail size={18} />
            </Button>
          </div>
        </div>

        <div className={styles.heroAside}>
          <span>Profile</span>
          <dl>
            {homeHighlights[locale].map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.proofStrip} aria-label={locale === "zh" ? "可信信息" : "Proof points"}>
          {copy.proof.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <a
          className={styles.photoCredit}
          href="https://www.pexels.com/photo/computer-monitor-displaying-lines-of-code-25437427/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Photo: So Phors / Pexels
        </a>
      </section>

      <section className={`${styles.splitSection} ${styles.workSection}`} id="work">
        <div className={styles.sectionHead}>
          <span>Work</span>
          <h2>{copy.featuredTitle}</h2>
        </div>
        <div className={styles.sectionBody}>
          <p className={styles.sectionIntro}>{copy.featuredIntro}</p>
          <div className={styles.projectList}>
            {homeProjects[locale].map((project, index) => (
              <article className={styles.projectRow} key={project.name}>
                <div className={styles.projectIndex}>{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <p className={styles.projectMeta}>{project.meta}</p>
                  <h3>
                    {project.slug ? (
                      <Link
                        className={styles.projectTitleLink}
                        data-analytics-event="project_case_study_click"
                        data-analytics-label={project.slug}
                        href={`/${locale}/projects/${project.slug}`}
                      >
                        {project.name}
                        <ArrowUpRight size={20} />
                      </Link>
                    ) : "href" in project && project.href ? (
                      <a
                        className={styles.projectTitleLink}
                        href={project.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {project.name}
                        <ArrowUpRight size={20} />
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className={styles.projectRole}>{project.role}</p>
                </div>
                <div>
                  <p className={styles.projectBody}>{project.body}</p>
                  <ul className={styles.proofList}>
                    {project.proof.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.splitSection} ${styles.sideProjectSection}`}>
        <div className={styles.sectionHead}>
          <span>Independent</span>
          <h2>{copy.independentTitle}</h2>
        </div>
        <div className={styles.sectionBody}>
          <p className={styles.sectionIntro}>{copy.independentIntro}</p>
          <div className={styles.projectList}>
            {homeSideProjects[locale].map((project, index) => (
              <article className={styles.projectRow} key={project.name}>
                <div className={styles.projectIndex}>{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <p className={styles.projectMeta}>{project.meta}</p>
                  <h3>
                    {project.slug ? (
                      <Link
                        className={styles.projectTitleLink}
                        data-analytics-event="project_case_study_click"
                        data-analytics-label={project.slug}
                        href={`/${locale}/projects/${project.slug}`}
                      >
                        {project.name}
                        <ArrowUpRight size={20} />
                      </Link>
                    ) : (
                      <a
                        className={styles.projectTitleLink}
                        data-analytics-event="project_external_click"
                        data-analytics-label={project.name}
                        href={project.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {project.name}
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </h3>
                  <p className={styles.projectRole}>{project.role}</p>
                </div>
                <div>
                  <p className={styles.projectBody}>{project.body}</p>
                  <ul className={styles.proofList}>
                    {project.proof.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.splitSection} ${styles.evidenceSection}`}>
        <div className={styles.sectionHead}>
          <span>Evidence</span>
          <h2>{copy.evidenceTitle}</h2>
        </div>
        <div className={styles.evidenceGrid}>
          {evidenceNarrative[locale].map((item) => (
            <article className={styles.evidenceItem} key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.splitSection} ${styles.stackSection}`}>
        <div className={styles.sectionHead}>
          <span>Stack</span>
          <h2>{copy.skillsTitle}</h2>
        </div>
        <div className={styles.stackTable}>
          {stackRows[locale].map(([label, value]) => (
            <div className={styles.stackRow} key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.splitSection} ${styles.experienceSection}`}>
        <div className={styles.sectionHead}>
          <span>Experience</span>
          <h2>{copy.experienceTitle}</h2>
        </div>
        <ol className={styles.timeline}>
          {experienceTimeline[locale].map(([period, company, summary]) => (
            <li key={`${period}-${company}`}>
              <span>{period}</span>
              <strong>{company}</strong>
              <p>{summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactBand}>
          <div>
            <span>Contact</span>
            <h2>{copy.contactTitle}</h2>
            <p>{copy.contactBody}</p>
          </div>
          <div className={styles.contactActions}>
            <CopyEmailButton locale={locale} />
            <Button
              analyticsEvent="cv_download"
              analyticsLabel={`home:${locale}`}
              download={locale === "zh" ? "Jerome-Gao-CV-CN.pdf" : "Jerome-Gao-CV.pdf"}
              href={contact.cv[locale]}
              variant="secondary"
            >
              <FileDown size={18} />
              CV
            </Button>
            <Button analyticsEvent="social_click" analyticsLabel="linkedin:home" href={contact.linkedin} variant="ghost">
              LinkedIn
              <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
