import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import styles from "./page.module.css";

const copy = {
  en: {
    eyebrow: "Projects / Full-stack delivery",
    title: "Work with the system boundaries left visible.",
    intro: "Selected production work and independent products, written around responsibilities, data flow, technical decisions, and what actually shipped.",
    professional: "Professional work",
    professionalBody: "Products delivered inside engineering teams, with contribution boundaries stated in each case study.",
    independent: "Independent products",
    independentBody: "Products where I own the path from backend and data to clients, deployment, and operations.",
    additional: "Additional work",
    additionalBody: "A compact record of other relevant product work. Deeper case studies will be added when there is enough evidence to make them useful.",
    read: "Read case study",
  },
  zh: {
    eyebrow: "项目 / 全栈交付",
    title: "把系统边界和真实贡献讲清楚。",
    intro: "精选生产项目与独立产品，重点说明职责、数据流、技术决策，以及最终真正交付的内容。",
    professional: "职业项目",
    professionalBody: "在工程团队中交付的产品；每篇案例都会明确个人职责和协作边界。",
    independent: "独立产品",
    independentBody: "从后端、数据到客户端、部署与运行均由我持续负责的产品。",
    additional: "其他项目",
    additionalBody: "保留一份紧凑的相关工作记录；有足够证据后，再补成有价值的完整案例。",
    read: "查看案例",
  },
} as const;

const additionalProjects = {
  en: [
    {
      name: "Buy It Mall / GouTa Mall",
      period: "Pintec",
      role: "Node.js full-stack commerce",
      stack: "Node.js, Express, MySQL, React, mobile WebView",
      summary: "Custom commerce flows across responsive web and embedded mobile clients, backed by catalog, order, campaign, analytics, and operations APIs.",
    },
    {
      name: "Te Kemu Arapu",
      period: "2025",
      role: "Full Stack Engineer",
      stack: "React Native, Expo, Supabase, PostgreSQL",
      summary: "A Te Reo Maori learning game with rooms, realtime turns, game state, scoring, and single-player and multiplayer flows.",
    },
    {
      name: "Osprey Pulse",
      period: "2026-present",
      role: "Independent full-stack product",
      stack: "ASP.NET Core, PostgreSQL, Next.js, Expo",
      summary: "A current web and mobile product with a typed .NET API, identity, relational data, observability, and shared cross-platform product work.",
      href: "https://ospreypulse.com",
    },
  ],
  zh: [
    {
      name: "购它商城 / Buy It Mall",
      period: "Pintec",
      role: "Node.js 全栈电商项目",
      stack: "Node.js, Express, MySQL, React, Mobile WebView",
      summary: "覆盖响应式网站与移动端嵌入页面的定制电商流程，后端支撑商品、订单、活动、数据分析和运营接口。",
    },
    {
      name: "Te Kemu Arapu",
      period: "2025",
      role: "Full Stack Engineer",
      stack: "React Native, Expo, Supabase, PostgreSQL",
      summary: "Te Reo Maori 学习游戏，包含房间、实时回合、游戏状态、积分，以及单人和多人流程。",
    },
    {
      name: "Osprey Pulse",
      period: "2026 至今",
      role: "独立全栈产品",
      stack: "ASP.NET Core, PostgreSQL, Next.js, Expo",
      summary: "持续开发中的 Web 与移动产品，包含类型化 .NET API、身份认证、关系数据、可观测性和跨端产品交付。",
      href: "https://ospreypulse.com",
    },
  ],
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const description = copy[locale].intro;
  return {
    title: locale === "zh" ? "全栈项目" : "Full Stack Projects",
    description,
    alternates: {
      canonical: absoluteUrl(`/${locale}/projects`),
      languages: { en: absoluteUrl("/en/projects"), "zh-Hans": absoluteUrl("/zh/projects") },
    },
    openGraph: { title: copy[locale].title, description },
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const pageCopy = copy[locale];
  const projects = getProjects(locale);

  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p>{pageCopy.eyebrow}</p>
        <h1>{pageCopy.title}</h1>
        <span>{pageCopy.intro}</span>
      </header>

      {(["professional", "independent"] as const).map((kind) => {
        const group = projects.filter((project) => project.kind === kind);
        const heading = kind === "professional" ? pageCopy.professional : pageCopy.independent;
        const body = kind === "professional" ? pageCopy.professionalBody : pageCopy.independentBody;
        return (
          <section className={styles.group} key={kind}>
            <div className={styles.groupHeading}>
              <h2>{heading}</h2>
              <p>{body}</p>
            </div>
            <ol className={styles.projectList}>
              {group.map((project, index) => (
                <li key={project.slug}>
                  <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                  <div className={styles.projectIdentity}>
                    <small>{project.client} / {project.timeframe}</small>
                    <h3>{project.title}</h3>
                    <p>{project.role}</p>
                  </div>
                  <div className={styles.projectSummary}>
                    <p>{project.summary}</p>
                    <span>{project.techStack.slice(0, 5).join(" / ")}</span>
                  </div>
                  <Link
                    aria-label={`${pageCopy.read}: ${project.title}`}
                    data-analytics-event="project_case_study_click"
                    data-analytics-label={project.slug}
                    href={`/${locale}/projects/${project.slug}`}
                  >
                    <span>{pageCopy.read}</span>
                    <ArrowUpRight size={20} />
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        );
      })}

      <section className={`${styles.group} ${styles.additional}`}>
        <div className={styles.groupHeading}>
          <h2>{pageCopy.additional}</h2>
          <p>{pageCopy.additionalBody}</p>
        </div>
        <div className={styles.additionalList}>
          {additionalProjects[locale].map((project) => (
            <article key={project.name}>
              <div>
                <small>{project.period}</small>
                <h3>
                  {"href" in project ? (
                    <a href={project.href} target="_blank" rel="noreferrer noopener">
                      {project.name}<ArrowUpRight size={17} />
                    </a>
                  ) : project.name}
                </h3>
                <p>{project.role}</p>
              </div>
              <p>{project.summary}</p>
              <span>{project.stack}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
