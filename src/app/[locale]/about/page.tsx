import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import styles from "./page.module.css";

const copy = {
  en: {
    eyebrow: "About / Full Stack Engineer",
    title: "Backend depth, with the product context kept intact.",
    lead: "I am Jerome Gao, a full-stack engineer with more than ten years of product delivery across China, Malaysia, and New Zealand. Node.js is my primary line; .NET, Python, Java, modern web, mobile, data, and cloud work complete the delivery path.",
    pathTitle: "Career path",
    pathIntro: "The frontend has often been the most visible part of my work, but the recurring responsibility has been broader: understand the business flow, establish service and data boundaries, then deliver a usable product.",
    path: [
      ["2011-2016", "Full-stack foundations", "Node.js and Express, Java, PHP, MySQL, CMS products, mobile web, live streaming, and WebRTC."],
      ["2017-2020", "Pintec", "Express API/BFF work with React web, mobile web, and React Native investment and commerce products."],
      ["2021-2023", "Carsome", "Public Nuxt platform, CMS micro-frontends, shared packages, and a NestJS vehicle inventory service."],
      ["2024-present", "New Zealand and independent products", "Applied Computing study, local product collaboration, and end-to-end delivery of Mealway and other independent products."],
    ],
    principlesTitle: "Engineering principles",
    principles: [
      ["Start with boundaries", "Authentication, contracts, validation, data ownership, side effects, and failure behaviour should be clear before the UI starts hiding complexity."],
      ["Keep evidence close", "Tests, logs, migrations, health checks, and deployment configuration belong with the product, not in a vague later phase."],
      ["Design for operators too", "Admin workflows, support visibility, recovery paths, and safe changes matter as much as the primary customer journey."],
      ["Use the simplest durable shape", "I prefer explicit flows and established platform patterns over abstraction that only looks sophisticated."],
    ],
    directionTitle: "Current direction",
    directionBody: "I am focused on Full Stack Engineer roles where backend and product engineering meet: Node.js/NestJS or .NET services, PostgreSQL and cloud infrastructure, with React/Next.js or React Native clients. I also use Claude Code, Codex, and Cursor as engineering tools while keeping architecture, review, testing, and accountability human-owned.",
    collaborationTitle: "Bilingual collaboration",
    collaborationBody: "I work in English and Mandarin. That helps when product context, technical decisions, and stakeholder communication cross teams in China, New Zealand, or distributed remote environments.",
    study: "Bachelor's degree in Information System Engineering, followed by a Master of Information Technology (Applied Computing) at the University of Waikato.",
    cta: "View project evidence",
  },
  zh: {
    eyebrow: "关于 / 全栈工程师",
    title: "以后端深度为主，同时保留完整产品视角。",
    lead: "我是 Jerome Gao，有十年以上产品交付经验，经历覆盖中国、马来西亚和新西兰。Node.js 是主要技术方向，同时使用 .NET、Python、Java、现代 Web、移动端、数据和云技术完成端到端交付。",
    pathTitle: "职业路径",
    pathIntro: "前端经常是工作中最容易被看见的部分，但持续承担的职责更广：理解业务流程，建立服务和数据边界，再把它交付成真正可用的产品。",
    path: [
      ["2011-2016", "全栈基础阶段", "Node.js 与 Express、Java、PHP、MySQL、CMS、移动 Web、直播和 WebRTC。"],
      ["2017-2020", "Pintec", "参与 Express API/BFF，并交付 React Web、移动 Web、React Native 的投资和电商产品。"],
      ["2021-2023", "Carsome", "Nuxt 官网、CMS 微前端、共享包，以及 NestJS 车辆库存服务。"],
      ["2024 至今", "新西兰与独立产品", "完成 Applied Computing 学习，参与新西兰本地产品协作，并持续端到端交付 Mealway 等独立产品。"],
    ],
    principlesTitle: "工程原则",
    principles: [
      ["先明确边界", "在界面掩盖复杂度之前，先把鉴权、合约、校验、数据归属、副作用和失败行为讲清楚。"],
      ["证据跟着产品走", "测试、日志、迁移、健康检查和部署配置应该属于产品本身，而不是模糊的后续阶段。"],
      ["也为运营人员设计", "后台流程、支持可见性、恢复路径和安全变更，与主要用户流程同样重要。"],
      ["选择简单且耐用的结构", "倾向明确的数据流和成熟的平台模式，不为了显得复杂而引入抽象。"],
    ],
    directionTitle: "当前方向",
    directionBody: "寻找后端工程与产品交付相结合的 Full Stack Engineer 职位：Node.js/NestJS 或 .NET 服务、PostgreSQL 和云基础设施，以及 React/Next.js 或 React Native 客户端。也使用 Claude Code、Codex 和 Cursor 辅助开发，但架构、评审、测试和责任仍由工程师掌握。",
    collaborationTitle: "双语协作",
    collaborationBody: "可以使用英文和中文工作，适合在中国、新西兰或全球分布式团队中传递产品背景、技术决策和协作信息。",
    study: "本科为信息系统工程，之后在 University of Waikato 完成 Master of Information Technology (Applied Computing)。",
    cta: "查看项目证据",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  return {
    title: locale === "zh" ? "关于" : "About",
    description: copy[locale].lead,
    alternates: {
      canonical: absoluteUrl(`/${locale}/about`),
      languages: { en: absoluteUrl("/en/about"), "zh-Hans": absoluteUrl("/zh/about") },
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const pageCopy = copy[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jerome Gao",
    jobTitle: "Full Stack Engineer",
    knowsLanguage: ["English", "Mandarin Chinese"],
    knowsAbout: ["Node.js", "NestJS", "ASP.NET Core", "PostgreSQL", "React", "React Native", "Cloud engineering"],
    url: absoluteUrl(`/${locale}/about`),
  };

  return (
    <article className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className={styles.hero}>
        <p>{pageCopy.eyebrow}</p>
        <h1>{pageCopy.title}</h1>
        <div>
          <p>{pageCopy.lead}</p>
          <span>{pageCopy.study}</span>
        </div>
      </header>

      <section className={styles.pathSection}>
        <div className={styles.sectionHeading}>
          <span>01</span>
          <h2>{pageCopy.pathTitle}</h2>
          <p>{pageCopy.pathIntro}</p>
        </div>
        <ol className={styles.timeline}>
          {pageCopy.path.map(([period, title, body]) => (
            <li key={period}>
              <span>{period}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.principlesSection}>
        <div className={styles.sectionHeading}>
          <span>02</span>
          <h2>{pageCopy.principlesTitle}</h2>
        </div>
        <div className={styles.principles}>
          {pageCopy.principles.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.directionSection}>
        <div>
          <span>03 / Direction</span>
          <h2>{pageCopy.directionTitle}</h2>
          <p>{pageCopy.directionBody}</p>
        </div>
        <div>
          <span>04 / Collaboration</span>
          <h2>{pageCopy.collaborationTitle}</h2>
          <p>{pageCopy.collaborationBody}</p>
        </div>
      </section>

      <footer className={styles.aboutCta}>
        <Link data-analytics-event="cta_click" data-analytics-label="about:projects" href={`/${locale}/projects`}>
          {pageCopy.cta}<ArrowUpRight size={21} />
        </Link>
      </footer>
    </article>
  );
}
