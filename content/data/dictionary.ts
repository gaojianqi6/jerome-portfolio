import type { Locale } from "@/lib/i18n";

type HomeProject = {
  name: string;
  meta: string;
  role: string;
  body: string;
  proof: string[];
  href?: string;
  slug?: string;
};

export const contact = {
  email: "gaojianqi6@gmail.com",
  github: "https://github.com/gaojianqi6",
  linkedin: "https://linkedin.com/in/jianqi6",
  cv: {
    en: "/files/cv.pdf",
    zh: "/files/cv-CN.pdf",
  },
};

export const homeCopy = {
  en: {
    eyebrow: "Jerome Gao / Full Stack Engineer / New Zealand-based + Global Remote",
    title: "Node.js Full Stack Engineer.",
    subtitle:
      "I build web and cross-platform products end to end: Node.js and .NET services, API and data models, cloud delivery, and React/Next.js or React Native clients. I have also delivered production work with Python, Java, and PHP.",
    primaryCta: "Read the work",
    secondaryCta: "Email Jerome",
    proof: [
      "10+ years",
      "Node.js / .NET / Python / Java",
      "PostgreSQL / MySQL / MongoDB",
      "Azure / AWS / GCP",
      "React / Next.js / React Native",
    ],
    featuredTitle: "Selected work",
    featuredIntro:
      "Professional work across backend services, enterprise platforms, investment products, commerce, and cross-platform delivery.",
    independentTitle: "Independent products",
    independentIntro:
      "Current products where I own the backend, data, cloud, frontend, and release path. They are separated from employment work so the contribution model stays clear.",
    evidenceTitle: "Full-stack evidence",
    skillsTitle: "Backend-first stack",
    experienceTitle: "Experience snapshot",
    contactTitle: "Open to Full Stack Engineer roles with New Zealand-based teams and global remote teams.",
    contactBody:
      "Post Study Work Visa valid until 02 Dec 2028. Node.js is my primary full-stack direction; I also work across .NET, Python, Java, modern frontend, data, and cloud delivery.",
  },
  zh: {
    eyebrow: "Jerome Gao / 全栈工程师 / 中国 · 新西兰本地 · 全球远程",
    title: "Node.js 全栈工程师。",
    subtitle:
      "我做 Web 和跨端产品的端到端交付：Node.js 与 .NET 服务、API、数据模型、云部署，以及 React/Next.js 或 React Native 客户端；也有 Python、Java 和 PHP 的实际项目经验。",
    primaryCta: "看项目",
    secondaryCta: "发邮件",
    proof: [
      "10+ 年经验",
      "Node.js / .NET / Python / Java",
      "PostgreSQL / MySQL / MongoDB",
      "Azure / AWS / GCP",
      "React / Next.js / React Native",
    ],
    featuredTitle: "代表项目",
    featuredIntro:
      "主要职业项目，覆盖后端服务、企业平台、智能投顾、电商系统和跨端产品交付。",
    independentTitle: "独立产品",
    independentIntro:
      "这些是我当前独立负责的产品，包含后端、数据、云服务、前端和发布流程。与任职项目分开展示，贡献边界更清楚。",
    evidenceTitle: "全栈能力证据",
    skillsTitle: "后端优先的技术栈",
    experienceTitle: "经历切片",
    contactTitle: "寻找中国、新西兰本地工作和全球远程的 Full Stack Engineer 机会。",
    contactBody:
      "Post Study Work Visa 有效期到 2028 年 12 月 02 日。以 Node.js 全栈为主要方向，也能覆盖 .NET、Python、Java、现代前端、数据和云交付。",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

export const homeHighlights = {
  en: [
    { label: "Backend", value: "Node.js, NestJS, Express, ASP.NET Core, FastAPI" },
    { label: "Data", value: "PostgreSQL, MySQL, MongoDB, EF Core, Prisma" },
    { label: "Cloud & DevOps", value: "Azure, AWS, GCP, Docker, CI/CD" },
    { label: "AI-assisted engineering", value: "Claude Code, Codex, Cursor" },
  ],
  zh: [
    { label: "后端", value: "Node.js, NestJS, Express, ASP.NET Core, FastAPI" },
    { label: "数据", value: "PostgreSQL, MySQL, MongoDB, EF Core, Prisma" },
    { label: "云与 DevOps", value: "Azure, AWS, GCP, Docker, CI/CD" },
    { label: "AI 辅助开发", value: "Claude Code, Codex, Cursor" },
  ],
} satisfies Record<Locale, Array<{ label: string; value: string }>>;

export const homeProjects: Record<Locale, HomeProject[]> = {
  en: [
    {
      name: "Carsome",
      meta: "2021-2023 / Nuxt, React, Vue 3, Angular.js, NestJS, MongoDB",
      role: "Full-stack contribution / Frontend Engineer",
      body:
        "Delivered the public platform, CMS micro-frontends, shared UI packages, and a NestJS inventory service with WebSocket updates and optimistic concurrency for vehicle operations.",
      proof: ["10K+ vehicles managed", "200+ daily CMS users", "Monorepo standards"],
      slug: "carsome",
    },
    {
      name: "Pintec / Xuanji Investment",
      meta: "2017-2020 / Node.js, Express, MySQL, React, React Native, Redux",
      role: "Full-stack contribution / Frontend Engineer",
      body:
        "Built a robo-advisor across React web, mobile web, and React Native, with a Node.js + Express API/BFF layer supporting authentication, validation, KYC, risk profiling, portfolio, and rebalance workflows.",
      proof: ["Cross-platform investment app", "Approx. 80% business-logic reuse", "Express API / BFF"],
      slug: "pintec",
    },
    {
      name: "Buy It Mall / GouTa Mall",
      meta: "Pintec / Node.js, React, Mobile WebView, responsive web",
      role: "Node.js full-stack commerce project",
      body:
        "Built a custom commerce platform for responsive web and mobile WebView. React storefront templates served campaigns and product flows while Node.js APIs supported catalog, orders, marketing configuration, analytics, and operations reporting.",
      proof: ["Web + mobile WebView", "React marketing templates", "Node.js commerce APIs"],
    },
    {
      name: "Te Kemu Arapu",
      meta: "2025 / React Native, Expo, Supabase, PostgreSQL",
      role: "Full Stack Engineer",
      body:
        "Built the core board-game flow for a Te Reo Maori learning app, including rooms, realtime turns, game state, scoring, single-player and multiplayer modes, and results.",
      proof: ["Realtime multiplayer sync", "Cross-device game state", "Supabase + PostgreSQL"],
    },
  ],
  zh: [
    {
      name: "Carsome",
      meta: "2021-2023 / Nuxt, React, Vue 3, Angular.js, NestJS, MongoDB",
      role: "全栈贡献 / Frontend Engineer",
      body:
        "交付官网、CMS 微前端和共享组件库，也开发 NestJS 库存服务，用 WebSocket 和乐观并发处理车辆库存、照片、状态和操作流。",
      proof: ["10K+ 车辆管理", "200+ CMS 日活用户", "Monorepo 规范"],
      slug: "carsome",
    },
    {
      name: "Pintec / 玄极智能投顾",
      meta: "2017-2020 / Node.js, Express, MySQL, React, React Native, Redux",
      role: "全栈贡献 / Frontend Engineer",
      body:
        "构建覆盖 React Web、移动 Web 和 React Native 的智能投顾产品，并参与 Node.js + Express API/BFF 层，支撑鉴权、验证、KYC、风险测评、投资组合和再平衡流程。",
      proof: ["跨平台投资 App", "约 80% 业务逻辑复用", "Express API / BFF"],
      slug: "pintec",
    },
    {
      name: "购它商城 / Buy It Mall",
      meta: "Pintec / Node.js, React, Mobile WebView, 响应式网站",
      role: "Node.js 全栈电商项目",
      body:
        "面向响应式网站和移动端 WebView 的定制电商平台。React 模板承载活动与商品流程，Node.js API 支撑商品、订单、营销配置、数据分析和运营报表。",
      proof: ["Web + Mobile WebView", "React 营销模板", "Node.js 电商 API"],
    },
    {
      name: "Te Kemu Arapu",
      meta: "2025 / React Native, Expo, Supabase, PostgreSQL",
      role: "Full Stack Engineer",
      body:
        "负责 Te Reo Maori 学习游戏的棋盘主流程，包括房间、实时回合、游戏状态、积分、单人和多人模式以及结果页。",
      proof: ["实时多人同步", "跨设备游戏状态", "Supabase + PostgreSQL"],
    },
  ],
};

export const homeSideProjects: Record<Locale, HomeProject[]> = {
  en: [
    {
      name: "Mealway",
      meta: "2026 / ASP.NET Core, EF Core, PostgreSQL, Gemini, Azure",
      role: "Independent full-stack product",
      body:
        "AI meal planning product with typed REST APIs, Firebase auth, resilient Gemini workflows, structured logs, Docker, Azure Container Apps, Key Vault, and Application Insights.",
      proof: [".NET REST backend", "AI workflow reliability", "Azure production path"],
      slug: "mealway",
    },
    {
      name: "Osprey Pulse",
      meta: "2026 / ASP.NET Core, GraphQL, EF Core, PostgreSQL, Next.js, Expo",
      role: "Independent full-stack product",
      body:
        "Sports community and data platform with a modular GraphQL backend, screen-shaped queries, sports ingestion, shared web/mobile clients, and a community rating model.",
      proof: ["GraphQL modular backend", "PostgreSQL domain model", "Web + mobile clients"],
      href: "https://ospreypulse.com",
    },
    {
      name: "RateEverything",
      meta: "2025-present / Next.js, NestJS, FastAPI, PostgreSQL",
      role: "Independent full-stack product",
      body:
        "Cross-media rating platform with a Next.js user app, admin CMS, NestJS API, Python FastAPI admin service, shared PostgreSQL data model, tests, and CI/CD.",
      proof: ["Node.js + Python services", "Admin CRUD", "Shared PostgreSQL model"],
      href: "https://rating.ospreypulse.com",
    },
  ],
  zh: [
    {
      name: "Mealway",
      meta: "2026 / ASP.NET Core, EF Core, PostgreSQL, Gemini, Azure",
      role: "独立全栈产品",
      body:
        "AI 饮食计划产品，包含类型化 REST API、Firebase 鉴权、Gemini 工作流容错、结构化日志、Docker、Azure Container Apps、Key Vault 和 Application Insights。",
      proof: [".NET REST 后端", "AI 工作流可靠性", "Azure 生产化路径"],
      slug: "mealway",
    },
    {
      name: "Osprey Pulse",
      meta: "2026 / ASP.NET Core, GraphQL, EF Core, PostgreSQL, Next.js, Expo",
      role: "独立全栈产品",
      body:
        "体育社区和数据平台，包含模块化 GraphQL 后端、面向页面的查询、体育数据采集、共享 Web/移动端客户端和社区评分模型。",
      proof: ["GraphQL 模块化后端", "PostgreSQL 领域模型", "Web + 移动端"],
      href: "https://ospreypulse.com",
    },
    {
      name: "RateEverything",
      meta: "2025 至今 / Next.js, NestJS, FastAPI, PostgreSQL",
      role: "独立全栈产品",
      body:
        "跨媒体评分平台，包含 Next.js 用户端、后台 CMS、NestJS API、Python FastAPI 管理服务、共享 PostgreSQL 数据模型、测试和 CI/CD。",
      proof: ["Node.js + Python 服务", "后台 CRUD", "共享 PostgreSQL 模型"],
      href: "https://rating.ospreypulse.com",
    },
  ],
};

export const evidenceNarrative = {
  en: [
    {
      step: "01",
      title: "Backend services",
      body: "Node.js, NestJS and Express are the primary line, with ASP.NET Core, FastAPI, Java and PHP used where the product or existing system calls for them.",
    },
    {
      step: "02",
      title: "Data and contracts",
      body: "API contracts, validation, auth, schema design, transactions and migrations across PostgreSQL, MySQL and MongoDB come before client-side convenience.",
    },
    {
      step: "03",
      title: "Frontend and mobile",
      body: "React, Next.js, Vue/Nuxt and React Native turn those services into usable web and mobile products with clear state, loading, error and accessibility behaviour.",
    },
    {
      step: "04",
      title: "Cloud and reliability",
      body: "Tests, CI/CD, Docker, Azure/AWS/GCP, observability, retry and rollback thinking complete the path from repository to running product.",
    },
  ],
  zh: [
    {
      step: "01",
      title: "后端服务",
      body: "以 Node.js、NestJS、Express 为主线，也根据产品和既有系统使用 ASP.NET Core、FastAPI、Java 和 PHP。",
    },
    {
      step: "02",
      title: "数据与合约",
      body: "先处理 API 合约、校验、鉴权、Schema、事务和迁移，再谈客户端便利性；数据库覆盖 PostgreSQL、MySQL 和 MongoDB。",
    },
    {
      step: "03",
      title: "前端与移动端",
      body: "使用 React、Next.js、Vue/Nuxt 和 React Native，把服务落成可用的 Web 与移动产品，并处理状态、加载、错误和可访问性。",
    },
    {
      step: "04",
      title: "云与可靠性",
      body: "测试、CI/CD、Docker、Azure/AWS/GCP、可观测性、重试和回滚，组成从代码仓库到运行中产品的完整路径。",
    },
  ],
} satisfies Record<Locale, Array<{ step: string; title: string; body: string }>>;

export const stackRows = {
  en: [
    ["Backend", "Node.js, NestJS, Express, ASP.NET Core, FastAPI, Java/Spring, PHP, REST, GraphQL"],
    ["Data", "PostgreSQL, MySQL, MongoDB, EF Core, Prisma, SQLModel, Mongoose"],
    ["DevOps & Cloud", "Docker, GitHub Actions, Azure, AWS, GCP, Vercel, structured logging, observability"],
    ["AI engineering", "Claude Code, Codex, Cursor, Gemini integration, schema-constrained AI workflows"],
    ["Frontend", "React, Next.js, TypeScript, Vue/Nuxt, Angular-era systems, CSS architecture"],
    ["Mobile", "React Native, Expo, Solito, NativeWind, app flow and native-module integration"],
    ["Quality", "Vitest, Jest, Cypress, Playwright, xUnit, integration tests, CI gates"],
  ],
  zh: [
    ["后端", "Node.js, NestJS, Express, ASP.NET Core, FastAPI, Java/Spring, PHP, REST, GraphQL"],
    ["数据", "PostgreSQL, MySQL, MongoDB, EF Core, Prisma, SQLModel, Mongoose"],
    ["DevOps 与云", "Docker, GitHub Actions, Azure, AWS, GCP, Vercel, 结构化日志, 可观测性"],
    ["AI 辅助开发", "Claude Code, Codex, Cursor, Gemini 集成, Schema 约束的 AI 工作流"],
    ["前端", "React, Next.js, TypeScript, Vue/Nuxt, Angular 时代系统, CSS 架构"],
    ["移动端", "React Native, Expo, Solito, NativeWind, App 流程和 Native Module 集成"],
    ["质量", "Vitest, Jest, Cypress, Playwright, xUnit, 集成测试, CI 质量门禁"],
  ],
} satisfies Record<Locale, Array<[string, string]>>;

export const experienceTimeline = {
  en: [
    ["2025-present", "Independent full-stack products", "Mealway, Osprey Pulse and RateEverything across .NET, Node.js, Python, PostgreSQL and cloud delivery."],
    ["2025", "Te Tawharau o te Whakatohea", "React Native + Supabase realtime Maori learning game."],
    ["2021-2023", "Carsome", "Public site, CMS micro-frontends, NestJS inventory service."],
    ["2017-2020", "Pintec", "Node.js + Express API/BFF, React web and React Native investment and commerce products."],
    ["2011-2016", "Full-stack foundations", "Node.js/Express, Java, PHP, MySQL, CMS, live streaming, WebRTC and mobile web."],
  ],
  zh: [
    ["2025 至今", "独立全栈产品", "Mealway、Osprey Pulse、RateEverything，覆盖 .NET、Node.js、Python、PostgreSQL 和云交付。"],
    ["2025", "Te Tawharau o te Whakatohea", "React Native + Supabase 实时 Maori 学习游戏。"],
    ["2021-2023", "Carsome", "官网、CMS 微前端、NestJS 库存服务。"],
    ["2017-2020", "Pintec", "Node.js + Express API/BFF、React Web 和 React Native 投资与电商产品。"],
    ["2011-2016", "全栈基础阶段", "Node.js/Express、Java、PHP、MySQL、CMS、直播、WebRTC 和移动 Web。"],
  ],
} satisfies Record<Locale, Array<[string, string, string]>>;

export const evidenceSteps = {
  en: ["UI", "State", "API", "Data", "Tests", "Deploy"],
  zh: ["界面", "状态", "API", "数据", "测试", "部署"],
} satisfies Record<Locale, string[]>;

export const skillGroups = {
  en: [
    { title: "Full-stack backend", items: ["Node.js", "NestJS", "ASP.NET Core", "FastAPI"] },
    { title: "Data and cloud", items: ["PostgreSQL", "MySQL", "MongoDB", "Azure / AWS / GCP"] },
    { title: "Frontend and mobile", items: ["React", "Next.js", "TypeScript", "React Native"] },
    { title: "Quality", items: ["Testing", "Performance", "Maintainability", "Documentation"] },
  ],
  zh: [
    { title: "全栈后端", items: ["Node.js", "NestJS", "ASP.NET Core", "FastAPI"] },
    { title: "数据与云", items: ["PostgreSQL", "MySQL", "MongoDB", "Azure / AWS / GCP"] },
    { title: "前端与移动端", items: ["React", "Next.js", "TypeScript", "React Native"] },
    { title: "质量保障", items: ["测试", "性能", "可维护性", "文档"] },
  ],
} satisfies Record<Locale, Array<{ title: string; items: string[] }>>;
