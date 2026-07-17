# Jerome Portfolio Technical Architecture

## 1. 技术目标

这个项目不是一个重后端系统，而是一个高度打磨的双语 Portfolio 前端产品。技术架构要服务三个目标：

- 用清晰的前端结构展示工程能力，而不是堆 UI 特效。
- 用静态优先架构保证性能、SEO、稳定性和低维护成本。
- 为后续加入 blog、case study、岗位定制页和更多语言/内容留出兼容空间。

## 2. 技术栈基线

版本基线检查日期：2026-07-17。

本地运行时基线：

| Runtime | Local version | 说明 |
| --- | --- | --- |
| Node.js | `v24.13.0` | 本地开发运行时 |
| pnpm | `11.9.0` | 包管理器 |

| 类别 | 选择 | 版本策略 | 说明 |
| --- | --- | --- | --- |
| Framework | Next.js App Router | `next@^16.2.10` | 静态生成、metadata、image/font optimization、locale routing |
| UI Runtime | React / React DOM | `react@^19.2.7`, `react-dom@^19.2.7` | 使用现代 React server/client component 边界 |
| Styling | CSS Modules + CSS variables | 内建 | 不使用 Tailwind CSS |
| Headless UI | Base UI | `@base-ui/react@^1.6.0` | 只用于复杂可访问性交互，不接管视觉 |
| Icons | lucide-react | `lucide-react@^1.24.0` | 主图标系统，保持统一线性风格 |
| Content | MDX + Content Collections + typed data | local content pipeline | V1 引入 MDX 和 Content Collections，不上 CMS，不上数据库 |
| Animation | CSS transition / keyframes first | 内建 | 可借鉴 Magic UI / React Bits 的动效思路，但不引入依赖 |
| Testing | Vitest + Playwright | latest stable | 单元测试 + 关键路径 E2E |
| Deploy | Vercel | platform | 静态优先，自动 preview deployment |
| Analytics | Vercel Analytics or Plausible | optional | 只追踪 CTA / CV / language / project events |

推荐初始化命令：

```bash
pnpm create next-app@latest jerome-portfolio --ts --eslint --app --src-dir
pnpm add @base-ui/react lucide-react
pnpm add -D @content-collections/core @content-collections/mdx @content-collections/next @content-collections/cli
pnpm add -D vitest @testing-library/react @testing-library/jest-dom playwright
```

## 3. 架构原则

### Static-first

首页、项目列表、项目详情、关于页、联系页全部默认静态生成。V1 不需要数据库、后端 API、contact form 或 server actions。

```text
Build time content -> Static HTML/RSC payload -> Fast SEO-friendly pages
```

使用动态能力的地方必须有明确收益，例如：

- analytics event。
- copy email toast。
- language switch preserving current route。
- project filter。
- interactive evidence rail。

### Content-driven

项目 case study、writing 和长内容使用 MDX + Content Collections；技能、经历、CTA、导航、短文案继续使用 typed TypeScript data。内容不散落在 JSX 里。

```text
content/**/*.mdx -> Content Collections -> typed generated data -> pages
content/data/*.ts -> typed short data -> components -> pages
```

这样后续新增项目、中文版本、文章、岗位定制页时，不需要重写页面结构。

### Design-system-first

CSS Modules 只负责组件局部样式，跨组件共享的颜色、字体、间距、动效、z-index 必须来自 CSS variables tokens。

```text
tokens.css -> component.module.css -> React component
```

不要在组件里随意写一次性颜色和 spacing。

### Headless-only UI dependency

Base UI 只负责 accessibility、focus management、keyboard interaction、portal、positioning 等复杂行为。视觉层全部由 CSS Modules 控制。

禁止把 UI 库当成视觉风格来源。

### No animation dependency in V1

V1 不引入 Magic UI、React Bits、Framer Motion、GSAP。可以观察它们的节奏、层级和交互思路，但实现使用 CSS transition / keyframes。

后续只有在动画复杂到 CSS 明显不可维护时，再评估 Motion One 或 Framer Motion。

## 4. 推荐目录结构

```text
├── content/
│   ├── projects/
│   │   ├── rate-everything/
│   │   │   ├── en.mdx
│   │   │   └── zh.mdx
│   │   └── te-kemu-arapu/
│   │       ├── en.mdx
│   │       └── zh.mdx
│   ├── writing/
│   │   └── ...
│   └── data/
│       ├── dictionary.ts
│       ├── experience.ts
│       ├── skills.ts
│       └── ctas.ts
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── about/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   └── robots.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── IconButton/
│   │   │   ├── Tag/
│   │   │   └── Toast/
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Section/
│   │   │   └── Grid/
│   │   ├── portfolio/
│   │   │   ├── ProjectCard/
│   │   │   ├── EvidenceRail/
│   │   │   ├── SkillMatrix/
│   │   │   ├── AvailabilityCard/
│   │   │   └── CopyEmailButton/
│   │   └── primitives/
│   │       ├── BaseDialog/
│   │       ├── BasePopover/
│   │       ├── BaseTooltip/
│   │       └── BaseTabs/
│   ├── lib/
│   │   ├── analytics.ts
│   │   ├── content.ts
│   │   ├── i18n.ts
│   │   ├── metadata.ts
│   │   ├── mdx-components.tsx
│   │   ├── routes.ts
│   │   └── structured-data.ts
│   └── styles/
│       ├── tokens.css
│       ├── reset.css
│       ├── utilities.css
│       └── motion.css
├── tests/
│   ├── unit/
│   └── e2e/
content-collections.ts
next.config.ts
```

### 目录职责

| 目录/文件 | 职责 | 不应该放什么 |
| --- | --- | --- |
| `app/[locale]` | 路由、页面组合、layout、metadata、静态生成入口 | 大量样式、业务数据、复杂交互逻辑 |
| `components/ui` | 通用 UI：Button、Card、Tag、Toast、IconButton | portfolio 专属业务语义 |
| `components/layout` | Header、Footer、Section、Grid 等页面结构组件 | 数据 fetching、项目业务判断 |
| `components/portfolio` | ProjectCard、EvidenceRail、SkillMatrix 等 portfolio 业务展示组件 | Base UI 原始 primitive、全局样式 |
| `components/primitives` | Base UI thin wrappers，只封装默认样式和常用 props | 复杂业务组件、厚抽象 API |
| `content/projects` | 双语项目 case study MDX | React 页面逻辑、全局配置 |
| `content/writing` | 后续文章/工程笔记 MDX | 项目结构化数据 |
| `content/data` | 短结构数据：skills、experience、CTA、dictionary | 长 case study 正文 |
| `lib/content.ts` | 从 Content Collections 查询、排序、按 locale 过滤内容 | UI 组件 |
| `lib/mdx-components.tsx` | 允许 MDX 使用的组件白名单 | 任意组件全量暴露 |
| `styles` | tokens、reset、motion、少量 utilities | 组件局部样式 |
| `content-collections.ts` | collection schema、frontmatter 校验、MDX transform | 页面和 UI 逻辑 |
| `tests` | unit/e2e/visual smoke tests | 生产代码 |

### 组件目录纪律

`components/` 最容易变成垃圾桶，所以必须强制分区：

- `ui`：无业务语义，可跨项目复用。
- `layout`：只负责页面骨架和布局节奏。
- `portfolio`：有 Jerome Portfolio 业务语义。
- `primitives`：只放 Base UI wrapper，wrapper 必须薄。

禁止：

- 把所有组件直接丢进 `components/` 根目录。
- 在 `ui` 里写项目业务逻辑。
- 在 `portfolio` 里直接散用 Base UI primitive。
- wrapper 重新发明一套复杂 API。

## 5. Routing 与 i18n

### URL 策略

使用 locale segment，而不是纯前端文字切换。

```text
/en
/en/projects
/en/projects/rate-everything
/zh
/zh/projects
/zh/projects/rate-everything
```

原因：

- SEO 更好。
- 分享链接语言明确。
- metadata 可以按语言生成。
- 后续可加入 `hreflang`。

### Locale 类型

```ts
export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export type LocalizedText = {
  en: string;
  zh: string;
};
```

### Language switch

切换语言时必须保留当前路径语义：

```text
/en/projects/rate-everything -> /zh/projects/rate-everything
/zh/about -> /en/about
```

要求：

- 当前语言有 `aria-current="true"`。
- 更新页面 `<html lang="en">` 或 `<html lang="zh-Hans">`。
- 不依赖 localStorage 才能渲染正确语言。

## 6. 内容模型

### 内容分层

V1 直接引入 MDX + Content Collections。

| 内容类型 | 存储 | 原因 |
| --- | --- | --- |
| Project case study | `content/projects/[slug]/en.mdx`, `zh.mdx` | 长内容、双语维护、可嵌入 EvidenceRail / ArchitectureBlock |
| Writing / blog | `content/writing/**.mdx` | 后续文章自然扩展 |
| Skills | `content/data/skills.ts` | 短结构数据，适合 TypeScript |
| Experience | `content/data/experience.ts` | timeline 数据稳定，不需要 MDX |
| CTA / nav / dictionary | `content/data/*.ts` | 短文案和链接，方便类型检查 |

### Project MDX frontmatter

```yaml
---
slug: rate-everything
locale: en
title: RateEverything
subtitle: Full-stack media rating platform
status: live
timeframe: Feb 2025 - Present
role: Product-minded full-stack engineer
featured: true
order: 1
categories:
  - full-stack
  - frontend-structure
  - product
techStack:
  - Next.js
  - React
  - TypeScript
  - Zustand
  - NestJS
  - FastAPI
  - PostgreSQL
links:
  - label: Live
    href: https://rating-website-nu.vercel.app
    type: live
summary: Built a full-stack rating platform from UI to backend services.
---
```

### Content Collections schema sketch

```ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const Project = defineCollection({
  name: "Project",
  directory: "content/projects",
  include: "**/*.mdx",
  schema: (z) => ({
    slug: z.string(),
    locale: z.enum(["en", "zh"]),
    title: z.string(),
    subtitle: z.string(),
    status: z.enum(["live", "in-progress", "archived"]),
    timeframe: z.string(),
    role: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    categories: z.array(z.string()).default([]),
    techStack: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          type: z.enum(["live", "code", "case-study", "download", "external"]),
        }),
      )
      .default([]),
    summary: z.string(),
  }),
  transform: async (context, document) => {
    const body = await compileMDX(context, document);
    return { ...document, body };
  },
});

export default defineConfig({
  collections: [Project],
});
```

### Next.js adapter

`next.config.ts` 需要接入 Content Collections，让内容生成进入 Next build 流程。

```ts
import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default withContentCollections(nextConfig);
```

`tsconfig.json` 需要能解析 generated collection import：

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "content-collections": ["./.content-collections/generated"]
    }
  }
}
```

### MDX component whitelist

MDX 只能使用白名单组件，避免内容层变成任意 React playground。

允许：

- `EvidenceRail`
- `ArchitectureBlock`
- `DecisionCard`
- `TechStackPanel`
- `ProjectImage`
- `Callout`
- `MetricStrip`

不允许：

- 任意导入 client-heavy components。
- 在 MDX 中写数据 fetching。
- 在 MDX 中写页面级 layout。

### 双语同步规则

- 同一个项目必须有相同 `slug` 的 `en.mdx` 和 `zh.mdx`。
- `locale` 必须和文件名一致。
- `title/subtitle/summary` 允许自然翻译，不要求逐词对应。
- `categories/techStack/links/status/order` 应保持一致。
- build 阶段应增加校验：缺少任一语言时失败或显式 warning。

## 7. Styling 架构

### Global styles

只放全局必要样式：

```text
globals.css   # imports reset/tokens/utilities/motion
reset.css     # modern reset
tokens.css    # design tokens
utilities.css # sr-only, focus-ring, container 等少量工具
motion.css    # shared motion variables and reduced motion
```

### CSS Modules 规则

每个组件目录包含：

```text
Button/
├── Button.tsx
├── Button.module.css
└── index.ts
```

命名建议：

```css
.root {}
.root[data-variant="primary"] {}
.root[data-size="sm"] {}
.icon {}
.label {}
```

React 组件负责输出 data attributes：

```tsx
<button
  className={styles.root}
  data-variant={variant}
  data-size={size}
>
  {children}
</button>
```

### Tokens 使用原则

组件 CSS 必须优先引用 `styles/tokens.css` 中的 tokens：

```css
.root {
  border-radius: var(--radius-md);
  color: var(--color-ink);
  transition:
    transform var(--motion-base) var(--ease-standard),
    border-color var(--motion-base) var(--ease-standard);
}
```

禁止：

```css
color: #123456;
margin-top: 37px;
transition: all 0.5s ease;
```

例外规则：

- `1px` border、局部 transform 数值、小型 `calc()` 可以在组件内出现。
- 新颜色、新 spacing、新 radius、新 shadow 必须先进入 `tokens.css`。
- PR/review 时看到 random value，应先问：这是 token 缺失，还是一次性特殊情况？

## 8. Base UI 使用策略

### Base UI 行为层

Base UI 的定位是 behavior/accessibility layer，不是 visual design layer。只要组件需要 button semantics、keyboard interaction、disabled/focus behavior、toggle state、tabs、popover、dialog、menu 等可访问性交互，就优先使用 Base UI primitive，再用 CSS Modules 和 design tokens 控制外观。

| Base UI primitive | 本项目封装 | 用途 |
| --- | --- | --- |
| Button | `ActionButton` / `IconActionButton` | 真实 action，例如 copy email、reset filters、close toast |
| Toggle / ToggleGroup | `FilterToggleGroup` | 项目筛选、二态/多态选择 |
| Tooltip | `BaseTooltip` | 图标按钮说明、技术标签说明 |
| Popover | `BasePopover` | 小型说明、project quick facts |
| Dialog | `BaseDialog` | 图片/架构图 lightbox，V2 可用 |
| Tabs | `BaseTabs` | Project detail 中 Overview / Architecture / Testing |
| Menu | `BaseMenu` | 移动端导航或语言菜单，如果需要 |

### Design system 视觉层

这些组件的视觉、布局、变体和内容结构由自己的 design system 控制；但如果内部包含需要可访问性交互的 action/control，可以组合 Base UI primitive。

| 组件 | 视觉层 | 行为层 |
| --- | --- | --- |
| Button / IconButton | CSS Modules variants | 真实 action 使用 Base UI Button |
| LinkButton / IconLink | CSS Modules variants | 使用 `<a>` / Next Link，保持 link semantics |
| ProjectCard | 自研布局、hover、响应式 | 整卡导航使用 link semantics，不用 Button |
| EvidenceRail | 自研证据链视觉结构 | 如果可展开，用 Base UI Button / Tabs / Collapsible |
| SkillMatrix | 自研矩阵布局 | 通常无 Base UI；说明浮层可用 Tooltip |
| TechTag | 自研标签样式 | 纯展示无需行为层；可交互筛选用 Toggle |
| Section | 自研 layout primitive | 无 Base UI |
| Grid | 自研 layout primitive | 无 Base UI |
| CopyEmailButton | 自研视觉和 toast 体验 | 使用 Base UI Button 承载 action semantics |
| AvailabilityCard | 自研信息卡片 | 通常无 Base UI |

规则：

- 真实动作使用 Base UI Button。
- 导航和外链使用 `<a>` / Next Link，即使视觉像按钮，也不使用 Base UI Button。
- 状态选择优先使用 Base UI Toggle / ToggleGroup / Tabs。
- 视觉风格永远由 CSS Modules + tokens 控制。

### 封装原则

不要在页面中直接散用 Base UI primitive。统一通过 `components/primitives/*` 封装：

```text
Base UI API -> project primitive wrapper -> product component -> page
```

这样后续如果 Base UI API 变更，只改 wrapper。

Wrapper 必须薄：

- 只封装项目默认样式、常用 props、aria label 约定和少量事件命名。
- 不重新设计一套复杂 API。
- 不把业务逻辑塞进 primitive wrapper。
- 不在 wrapper 里读取 project/content 数据。
- 不在 wrapper 里做 analytics，analytics 放在产品组件或 `lib/analytics.ts`。

示例边界：

```text
Base UI Button -> ActionButton -> CopyEmailButton
Base UI Tabs -> BaseTabs -> ProjectDetailTabs
Base UI Tooltip -> BaseTooltip -> IconActionWithTooltip
```

## 9. 图片与视觉素材策略

Production 只使用以下两类：

- 优先真实项目截图、架构图、自制几何纹理、自制 SVG diagram。
- [Pexels](https://www.pexels.com) 少量可用，但只作为辅助背景或文章图。

## 10. Icon 策略

主图标系统使用 `lucide-react`。

原则：

- 只从 `lucide-react` 导入实际使用的图标。
- 不使用动态 `icons[name]` 方式，避免破坏 tree-shaking。
- stroke width 统一，默认 `1.75` 或 `2`。
- icon-only button 必须有 `aria-label`。

示例：

```tsx
import { Github, Linkedin, Mail, Download } from "lucide-react";
```

品牌图标策略：

- GitHub / LinkedIn 优先使用 lucide 中近似通用图标 + 文字。
- 如果必须使用品牌官方图标，优先本地 SVG。
- 不把 Iconify 作为主依赖；如未来使用，只限品牌图标，且要检查 license 和离线渲染方式。

## 11. Animation 策略

V1 不引入动画库。

### 允许

- CSS transition。
- CSS keyframes。
- Intersection Observer 触发一次性 section enter。
- View transition 可作为 progressive enhancement，不能依赖它完成核心体验。

### 不允许

- Magic UI 作为依赖。
- React Bits 作为依赖。
- Framer Motion / GSAP 作为 V1 依赖。
- 大面积背景动画。
- 需要高 CPU/GPU 的粒子或 canvas 动画。

### Motion tokens

```css
:root {
  --motion-fast: 160ms;
  --motion-base: 240ms;
  --motion-slow: 300ms;
  --ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

### Reduced motion

必须全局支持：

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 1ms !important;
  }
}
```

## 12. Server / Client Component 边界

默认使用 Server Components。页面默认是 server，只有确实需要浏览器状态、事件、clipboard、URL client state 或 Base UI runtime interaction 的组件才加 `"use client"`。

### Server Components

- Pages。
- Layout。
- Project detail content。
- MDX rendered content when possible。
- Static metadata。
- Footer。
- Most project cards when no interaction is needed。

### Client Components

只在需要浏览器状态或事件时使用：

- `LanguageSwitch`。
- `ProjectFilter`。
- `CopyEmailButton`。
- `Toast`。
- `EvidenceRail` 如果支持展开/切换。
- Base UI wrappers。

强制原则：

- 不要把整个 page 或 layout 标成 `"use client"`。
- client component 要尽量靠近交互叶子节点。
- 如果一个组件只是接收 props 并渲染内容，保持 server。
- 如果 MDX 中嵌入 client component，只让该嵌入组件 client，不让整篇 MDX 变成 client。
- `ProjectCard` 默认 server/link；只有带 hover 以外的真实交互时才 client。

## 13. SEO 与 Metadata

每个 locale + route 生成独立 metadata。

必须支持：

- `title`
- `description`
- Open Graph
- Twitter card
- canonical URL
- `hreflang`
- project detail structured data

示例：

```ts
export function getProjectMetadata(project: ProjectDocument) {
  return {
    title: `${project.title} | Jerome Gao`,
    description: project.summary,
    alternates: {
      canonical: `/${project.locale}/projects/${project.slug}`,
      languages: {
        en: `/en/projects/${project.slug}`,
        zh: `/zh/projects/${project.slug}`,
      },
    },
  };
}
```

## 14. 兼容策略

### Browser

支持：

- Latest Chrome
- Latest Safari
- Latest Edge
- Latest Firefox
- Mobile Safari / Chrome Android

不支持：

- Internet Explorer
- 非现代 WebView

### CSS

可以使用：

- CSS variables
- CSS Modules
- `clamp()`
- `aspect-ratio`
- `@media (prefers-reduced-motion)`
- container queries 可谨慎使用

谨慎使用：

- View Transitions API，只做 enhancement。
- 复杂 `backdrop-filter`，需要 fallback。

### Content

必须测试：

- 英文长标题。
- 中文短句和中英混排。
- 技术标签换行。
- 小屏幕下 CTA wrap。
- `Senior Full Stack Engineer` 等长词不溢出。
- MDX frontmatter 缺字段时 build fail。
- 同一项目缺少 `en.mdx` 或 `zh.mdx` 时 warning 或 fail。

### Accessibility

必须保证：

- keyboard navigation。
- focus visible。
- icon-only buttons have labels。
- image alt text。
- language attributes。
- color contrast。
- reduced motion。

## 15. Testing 策略

### Unit / Component

使用 Vitest + Testing Library。

测试重点：

- Content Collections schema validation
- project locale pairing helpers
- route helpers
- metadata helpers
- Button variants
- LanguageSwitch link generation
- Project filtering
- CopyEmail fallback
- MDX component whitelist rendering

### E2E

使用 Playwright。

关键路径：

```text
/en -> project detail -> copy email -> language switch -> /zh same page
/zh -> projects filter -> empty state -> reset
/en/contact -> download CV link exists
/en/projects/rate-everything -> renders MDX evidence components
mobile viewport -> no horizontal scroll
keyboard tab -> visible focus ring
reduced motion -> no long animations
```

### Visual QA

至少检查：

- 390px mobile。
- 768px tablet。
- 1280px desktop。
- 1440px wide。
- light mode V1。

V1 暂不做 dark mode，避免扩大设计面。

## 16. 性能预算

目标：

| 指标 | 目标 |
| --- | --- |
| Lighthouse Performance desktop | 90+ |
| Lighthouse Performance mobile | 80+ |
| CLS | < 0.1 |
| LCP | < 2.5s |
| Initial JS | 尽量低，避免整页 client component |
| Images | 使用 Next Image 或明确 width/height |

性能规则：

- 不引入大型动画库。
- 不引入通用 UI 视觉库。
- lucide icons 按需导入。
- 图片使用 AVIF/WebP。
- project screenshots lazy load。
- 首屏字体使用 `next/font`，避免 FOIT。

## 17. 后续扩展路线

### V1

- Static portfolio。
- EN/ZH。
- Projects from MDX + Content Collections。
- Project detail with MDX evidence components。
- Direct contact。
- CSS Modules design system。
- Base UI primitives only where necessary。
- Content validation and bilingual pairing checks。

### V2

- Writing / blog expansion。
- Architecture diagram lightbox。
- More project media。
- Optional dark mode。

### V3

- Role-specific pages：
  - `/en/for/frontend-engineer`
  - `/en/for/full-stack-engineer`
  - `/zh/for/frontend-engineer`
- More analytics events。
- Optional CMS evaluation。

### V4

只有当内容维护明显变重时，再考虑：

- Sanity。
- Contentful。
- Notion as source。
- Git-based CMS。

不要在 V1 过早引入 CMS。

## 18. 决策记录

### ADR-001: CSS Modules over Tailwind

选择 CSS Modules，因为这个项目需要展示自研设计系统和组件结构。Tailwind 很高效，但容易让视觉结构被 utility class 淹没，不符合本项目“展示前端结构能力”的目标。

### ADR-002: Base UI over visual UI kits

选择 Base UI 作为 headless primitive，而不是 Magic UI / React Bits / shadcn blocks。原因是 Base UI 提供 accessibility 和 interaction 基础，不强加视觉风格，适合配合 CSS Modules 自研 design system。

### ADR-003: lucide-react as primary icon system

选择 lucide-react，因为它风格统一、React 使用简单、tree-shakable、适合克制工程感设计。Iconify 只作为未来少量品牌图标备选。

### ADR-004: No animation dependency in V1

V1 动效使用 CSS 实现。Magic UI / React Bits 可作为灵感参考，但不进入依赖。这样能降低 bundle、维护和视觉同质化风险。

### ADR-005: No contact form

不做 contact form。项目联系路径使用 email、copy email、LinkedIn、GitHub、CV download。这样减少 spam、邮件服务、隐私说明和错误处理成本，保持产品路径直接。

### ADR-006: MDX + Content Collections in V1

V1 直接引入 MDX + Content Collections。原因是项目会公开展示，case study 需要长内容、结构化 frontmatter、双语文件和嵌入式证据组件。Content Collections 提供 schema validation 和 type-safe generated data，比把长文塞进 TypeScript object 更适合长期维护。CMS 暂不引入，避免过早增加外部系统复杂度。

## 19. 安装依赖草案

```json
{
  "dependencies": {
    "@base-ui/react": "^1.6.0",
    "lucide-react": "^1.24.0",
    "next": "^16.2.10",
    "react": "^19.2.7",
    "react-dom": "^19.2.7"
  },
  "devDependencies": {
    "@content-collections/cli": "latest",
    "@content-collections/core": "latest",
    "@content-collections/mdx": "latest",
    "@content-collections/next": "latest",
    "@testing-library/jest-dom": "latest",
    "@testing-library/react": "latest",
    "playwright": "latest",
    "typescript": "latest",
    "vitest": "latest"
  }
}
```

生产项目创建时建议先用 `pnpm add <package>@latest` 安装，再把实际生成的 lockfile 作为版本真相。
