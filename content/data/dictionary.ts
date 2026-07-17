import type { Locale } from "@/lib/i18n";

export type Project = {
  slug: string;
  title: string;
  summary: Record<Locale, string>;
  tags: Record<Locale, string[]>;
  status: Record<Locale, string>;
  year: string;
  featured?: boolean;
};

export const contact = {
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  cv: "/cv.pdf",
};

export const homeCopy = {
  en: {
    eyebrow: "Jerome Gao / Auckland / Bilingual portfolio",
    title: "Full-stack work made visible.",
    subtitle:
      "A product-minded engineer shaping usable interfaces, maintainable systems, and case studies that make the end-to-end delivery chain easy to inspect.",
    primaryCta: "View projects",
    secondaryCta: "Contact",
    proof: ["10+ years", "Auckland", "Full-stack", "Bilingual", "React / Next.js"],
    featuredTitle: "Selected evidence",
    featuredIntro:
      "A first slice of the portfolio structure: projects are designed to expand into architecture, decisions, testing, and delivery proof.",
    evidenceTitle: "Full-stack evidence chain",
    skillsTitle: "Capability matrix",
    experienceTitle: "Working shape",
  },
  zh: {
    eyebrow: "Jerome Gao / 奥克兰 / 双语 Portfolio",
    title: "让全栈能力被看见。",
    subtitle:
      "以产品判断、前端结构和端到端交付为核心，把界面、状态、API、数据、测试和部署变成可浏览、可验证的作品证据。",
    primaryCta: "查看项目",
    secondaryCta: "联系我",
    proof: ["10+ 年经验", "奥克兰", "全栈交付", "中英双语", "React / Next.js"],
    featuredTitle: "代表证据",
    featuredIntro:
      "这是 portfolio 结构的第一版切片：项目后续会扩展为架构、技术取舍、测试和交付证据。",
    evidenceTitle: "全栈证据链",
    skillsTitle: "能力矩阵",
    experienceTitle: "工作方式",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

export const projects: Project[] = [
  {
    slug: "rate-everything",
    title: "RateEverything",
    summary: {
      en: "A structured product case study for rating workflows, data modeling, and front-end state design.",
      zh: "围绕评分流程、数据模型和前端状态设计的结构化产品案例。",
    },
    tags: {
      en: ["Full-stack", "Product", "Next.js"],
      zh: ["全栈", "产品", "Next.js"],
    },
    status: {
      en: "Case study scaffold",
      zh: "案例骨架",
    },
    year: "2026",
    featured: true,
  },
  {
    slug: "te-kemu-arapu",
    title: "Te Kemu Arapu",
    summary: {
      en: "A language-learning experience that can show interaction design, accessibility, and content structure.",
      zh: "可展示交互设计、可访问性和内容结构的语言学习体验。",
    },
    tags: {
      en: ["Frontend structure", "Learning", "UX"],
      zh: ["前端结构", "学习产品", "UX"],
    },
    status: {
      en: "Content pending",
      zh: "内容待补",
    },
    year: "2025",
  },
  {
    slug: "delivery-platform",
    title: "Delivery Platform",
    summary: {
      en: "A placeholder for enterprise delivery work: API boundaries, operational flows, and reliability tradeoffs.",
      zh: "企业交付项目占位：API 边界、运营流程和可靠性取舍。",
    },
    tags: {
      en: ["Enterprise", "API", "Ops"],
      zh: ["企业系统", "API", "运营"],
    },
    status: {
      en: "Evidence to add",
      zh: "证据待补",
    },
    year: "2024",
  },
];

export const evidenceSteps = {
  en: ["UI", "State", "API", "Data", "Tests", "Deploy"],
  zh: ["界面", "状态", "API", "数据", "测试", "部署"],
} satisfies Record<Locale, string[]>;

export const skillGroups = {
  en: [
    { title: "Frontend structure", items: ["React", "Next.js", "TypeScript", "Accessibility"] },
    { title: "Full-stack", items: [".NET", "APIs", "Data modeling", "Auth boundaries"] },
    { title: "Quality", items: ["Testing", "Performance", "Maintainability", "Documentation"] },
  ],
  zh: [
    { title: "前端结构", items: ["React", "Next.js", "TypeScript", "可访问性"] },
    { title: "全栈交付", items: [".NET", "API", "数据建模", "权限边界"] },
    { title: "质量保障", items: ["测试", "性能", "可维护性", "文档"] },
  ],
} satisfies Record<Locale, Array<{ title: string; items: string[] }>>;

export const pageCopy = {
  projects: {
    en: {
      title: "Projects",
      body: "The case-study layer is wired first. Real screenshots, repositories, architecture notes, and results can be added project by project.",
    },
    zh: {
      title: "项目",
      body: "项目案例层已经先接好。后续可以逐个补充真实截图、代码仓库、架构说明和结果。",
    },
  },
  about: {
    en: {
      title: "About",
      body: "Jerome's story page will focus on working principles, bilingual communication, and the path behind the portfolio evidence.",
    },
    zh: {
      title: "关于",
      body: "关于页会聚焦工作原则、双语沟通能力，以及 portfolio 证据背后的职业路径。",
    },
  },
  contact: {
    en: {
      title: "Contact",
      body: "V1 keeps contact simple: email, LinkedIn, GitHub, and CV. The placeholder links are centralized in content/data/dictionary.ts.",
    },
    zh: {
      title: "联系",
      body: "V1 保持低摩擦联系：Email、LinkedIn、GitHub 和 CV。占位链接集中放在 content/data/dictionary.ts。",
    },
  },
} satisfies Record<string, Record<Locale, { title: string; body: string }>>;
