import { ArrowUpRight, FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { CopyEmailButton } from "@/components/portfolio/CopyEmailButton";
import { EvidenceRail } from "@/components/portfolio/EvidenceRail";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SkillMatrix } from "@/components/portfolio/SkillMatrix";
import { isLocale, type Locale } from "@/lib/i18n";
import { contact, homeCopy, projects } from "@content/data/dictionary";
import styles from "./page.module.css";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "zh";
  const copy = homeCopy[locale];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className={styles.subtitle}>{copy.subtitle}</p>
            <div className={styles.ctas}>
              <Button href={`/${locale}/projects`}>
                {copy.primaryCta}
                <ArrowUpRight size={18} />
              </Button>
              <Button href={`/${locale}/contact`} variant="ghost">
                {copy.secondaryCta}
                <Mail size={18} />
              </Button>
            </div>
          </div>

          <aside className={styles.systemPanel} aria-label={locale === "zh" ? "作品系统状态" : "Portfolio system status"}>
            <span className={styles.panelIndex}>SYSTEM / V0.1</span>
            <dl>
              <div>
                <dt>{locale === "zh" ? "框架" : "Framework"}</dt>
                <dd>Next.js App Router</dd>
              </div>
              <div>
                <dt>{locale === "zh" ? "内容" : "Content"}</dt>
                <dd>Typed data + MDX</dd>
              </div>
              <div>
                <dt>{locale === "zh" ? "视觉" : "Visual"}</dt>
                <dd>CSS Modules + tokens</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className={styles.proofStrip} aria-label={locale === "zh" ? "可信信息" : "Proof points"}>
          {copy.proof.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <Section title={copy.featuredTitle} eyebrow="Projects">
        <p className={styles.sectionIntro}>{copy.featuredIntro}</p>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </Section>

      <Section title={copy.evidenceTitle} eyebrow="Evidence">
        <EvidenceRail locale={locale} />
      </Section>

      <Section title={copy.skillsTitle} eyebrow="Skills">
        <SkillMatrix locale={locale} />
      </Section>

      <Section title={copy.experienceTitle} eyebrow="Contact">
        <div className={styles.contactBand}>
          <div>
            <h3>{locale === "zh" ? "低摩擦联系，先从真实资料补齐开始。" : "Low-friction contact, ready for real evidence next."}</h3>
            <p>
              {locale === "zh"
                ? "当前是可运行的项目框架。联系方式、CV 和项目结果可以在数据层集中替换。"
                : "This is the running project scaffold. Contact links, CV, and project results can be replaced centrally in the data layer."}
            </p>
          </div>
          <div className={styles.contactActions}>
            <CopyEmailButton locale={locale} />
            <Button href={contact.cv} variant="secondary">
              <FileDown size={18} />
              CV
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
