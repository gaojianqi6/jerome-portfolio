import { ArrowUpRight, BriefcaseBusiness, Code2, FileDown, Mail } from "lucide-react";
import type { Metadata } from "next";
import { CopyEmailButton } from "@/components/portfolio/CopyEmailButton";
import { Button } from "@/components/ui/Button";
import { isLocale, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { contact } from "@content/data/dictionary";
import styles from "./page.module.css";

const copy = {
  en: {
    eyebrow: "Contact / Full Stack Engineer",
    title: "A direct line, without a contact form in the way.",
    body: "I am open to Full Stack Engineer roles with New Zealand-based teams and global remote teams. Email is the best place to start a useful conversation.",
    availability: "Availability",
    availabilityRows: [
      ["Role", "Full Stack Engineer / Backend-leaning Full Stack"],
      ["Location", "New Zealand-based roles / Global remote"],
      ["Work rights", "New Zealand Post Study Work Visa, valid until 02 Dec 2028"],
      ["Languages", "English / Mandarin Chinese"],
    ],
    links: "Links and documents",
    email: "Email",
    cv: "Download CV",
    note: "The CV contains the concise employment record. The case studies on this site provide the technical context behind it.",
  },
  zh: {
    eyebrow: "联系 / 全栈工程师",
    title: "直接联系，不让表单挡在中间。",
    body: "寻找中国、新西兰本地工作和全球远程的 Full Stack Engineer 机会。Email 是开始有效沟通最直接的方式。",
    availability: "求职范围",
    availabilityRows: [
      ["职位", "Full Stack Engineer / 偏后端的全栈职位"],
      ["地区", "中国 / 新西兰本地 / 全球远程"],
      ["新西兰工作权利", "Post Study Work Visa，有效期至 2028 年 12 月 02 日"],
      ["语言", "英文 / 中文"],
    ],
    links: "链接与资料",
    email: "发送邮件",
    cv: "下载 CV",
    note: "CV 提供精简的任职记录；本站案例则补充每段经历背后的技术背景和交付证据。",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  return {
    title: locale === "zh" ? "联系" : "Contact",
    description: copy[locale].body,
    alternates: {
      canonical: absoluteUrl(`/${locale}/contact`),
      languages: { en: absoluteUrl("/en/contact"), "zh-Hans": absoluteUrl("/zh/contact") },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const pageCopy = copy[locale];

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p>{pageCopy.eyebrow}</p>
        <h1>{pageCopy.title}</h1>
        <div>
          <p>{pageCopy.body}</p>
          <Button analyticsEvent="contact_click" analyticsLabel="contact:email" href={`mailto:${contact.email}`}>
            <Mail size={18} />{pageCopy.email}
          </Button>
        </div>
      </header>

      <section className={styles.details}>
        <div className={styles.availability}>
          <span>Availability</span>
          <h2>{pageCopy.availability}</h2>
          <dl>
            {pageCopy.availabilityRows.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
        </div>

        <div className={styles.links}>
          <span>Contact</span>
          <h2>{pageCopy.links}</h2>
          <div className={styles.linkList}>
            <CopyEmailButton locale={locale} />
            <Button analyticsEvent="social_click" analyticsLabel="linkedin:contact" href={contact.linkedin} variant="ghost">
              <BriefcaseBusiness size={18} />LinkedIn<ArrowUpRight size={16} />
            </Button>
            <Button analyticsEvent="social_click" analyticsLabel="github:contact" href={contact.github} variant="ghost">
              <Code2 size={18} />GitHub<ArrowUpRight size={16} />
            </Button>
            <Button
              analyticsEvent="cv_download"
              analyticsLabel={`contact:${locale}`}
              download={locale === "zh" ? "Jerome-Gao-CV-CN.pdf" : "Jerome-Gao-CV.pdf"}
              href={contact.cv[locale]}
              variant="secondary"
            >
              <FileDown size={18} />{pageCopy.cv}
            </Button>
          </div>
          <p>{pageCopy.note}</p>
        </div>
      </section>
    </article>
  );
}
