# Jerome Portfolio Design Spec

## V1 视觉决策（2026-07-17）

- 采用深色、专业、高对比的主视觉；signal red / blue / yellow 只用于状态、索引和行动提示。
- 首页可使用透明玻璃 Header 覆盖真实背景图，滚动后转为固定深色；其他页面直接使用固定深色 Header。
- 避免米色、格子背景、装饰性渐变球和连续卡片墙。页面使用纯色或克制线性渐变分区，并用浅色证据区或黄色结果区建立对比。
- 标题服务于层级，不以尺寸制造气势。桌面正文页 H1 上限约 72px，移动端约 40px；内容密度优先，首屏不留下无意义空白。
- Projects V1 是紧凑分组列表，不使用筛选器和跨列卡片；Case Study 使用叙事正文、证据网格、系统流程和结果条带。

## 1. 设计方向

### 设计命题

这个 Portfolio 不是“在线简历”，而是一个用设计质量、前端结构和双语表达把全栈能力显性化的个人产品。全栈能力很难被第一眼看见，所以页面必须做到两件事：

- 第一眼：用高级视觉秩序和清晰信息层级建立信任。
- 深入看：用 case study、结构图、数据模型、前后端边界和项目证据证明能力。

### 关键词

- Bilingual by design
- Product-minded engineer
- Full-stack evidence chain
- Structured but alive
- Industrial precision with expressive motion

## 2. 设计灵感采样

随机采样来源：Refik Anadol、Yayoi Kusama。

> 约束：只借鉴气质与方法，不复刻具体作品、构图、配色、字体、标语或布局组合。

### Refik Anadol

**灵感**

Refik Anadol 的作品常把数据、记忆、流动和空间感融合在一起。它的启发不在于视觉表皮，而在于“抽象系统如何被感知”：复杂数据可以通过流动、层次和渐变变成一种可理解的环境。

**网页实现转译**

- 将 Jerome 的全栈能力拆成可感知的“证据流”：UI -> State -> API -> Data -> Tests -> Deploy。
- 首页 hero 背景使用非常克制的渐变网格或细微噪声纹理，暗示系统流动，不使用大面积梦幻 AI 风格。
- 项目详情页用横向 evidence rail 或垂直 system flow 展示工程链路，让后端和部署不再隐藏。
- 动效只用于状态转换和层级进入，例如 case study block 进入时轻微 opacity + translate，200-300ms 完成。

### Yayoi Kusama

**灵感**

Yayoi Kusama 的启发来自重复单元、节奏和沉浸式秩序。这里不使用她的标志性圆点语言，也不复刻高饱和图案；只借鉴“模块重复如何形成记忆点”的方法。

**网页实现转译**

- 技术标签、项目卡片、语言切换、证据节点采用统一模块语法，通过重复建立识别度。
- 设计系统里保留细微几何纹理，例如 1px grid、micro hatch、small index markers，而不是装饰性图案。
- 项目列表采用模块化卡片，但通过不等宽分栏和跨列重点项目打破机械重复。
- 在双语切换和项目筛选上使用小幅动画，让重复模块产生清晰反馈。

## 3. 强制设计约束

### 版式

- 非对称分栏：desktop 使用 5/7、4/8、3/9 等不均衡结构。
- 克制标题：首页和正文页 H1 根据内容使用约 40-72px，移动端约 34-44px，长标题必须自然换行。
- 网格秩序 + 破格：基础 12-column grid，重点项目允许跨列、错位或贴边。
- 内容密度克制：不要做传统大 hero + 下方普通卡片流；首屏必须露出下一段内容。

### 色彩

- 高对比撞色，但控制面积。
- 三原色几何只作为小面积系统信号：red / blue / yellow 用于 index、active、focus、diagram node。
- 主体可采用工业感中性色，搭配电蓝或信号红作为主行动色。
- 可使用克制渐变，但不得变成紫蓝大面积模板感。

### 形态

- 曲线切割：用于 hero 背景或 section divider，表达“复杂系统被切开展示”。
- 体块叠合：项目卡片、证据节点和代码片段可轻微叠合。
- 模块化卡片：卡片半径 6-8px，保持工程感。
- 细微结构：使用 hairline border 和分区色差，不使用整页网格或大面积装饰图案。

### 动效

- 过渡时间：200-300ms。
- easing：`cubic-bezier(0.2, 0.8, 0.2, 1)`。
- 只使用 transform / opacity，避免 layout shift。
- 必须支持 `prefers-reduced-motion`。
- hover 不作为唯一交互反馈，移动端必须有 tap 状态。

### 语义

- 极简符号：用 arrow、dot、slash、bracket、index number 等系统符号。
- 变量字体轴：标题可使用 variable font weight/width 形成层级。
- 小幅动画：语言切换、筛选、卡片进入、证据节点展开。
- 等宽数字：年份、项目编号、指标、版本号使用 tabular/mono。

## 4. 页面结构

### Home

目标：5 秒内建立定位，3 分钟内完成联系判断。

结构：

1. Top bar：Jerome Gao、导航、EN/ZH switch、direct contact icons。
2. Hero：超大标题、双语身份、价值主张、关键 CTA。
3. Proof strip：10+ years、Auckland、Full-stack、Bilingual、React/Next.js。
4. Featured projects：3-4 个代表项目，非对称卡片。
5. Full-stack evidence preview：UI -> State -> API -> Data -> Tests -> Deploy。
6. Skills matrix：按前端结构、全栈、跨端、测试、DevOps 分组。
7. Experience snapshot：不复制 CV，只展示可信路径。
8. Direct contact section：email、copy email、LinkedIn、GitHub、CV。

### Projects

目标：让技术负责人快速找到可深挖项目。

结构：

1. Page intro：一句话说明项目选择标准。
2. Professional Work：紧凑职业项目列表。
3. Independent Products：紧凑独立产品列表。
4. Additional Work：未达到完整案例证据量的次级项目记录。
5. 项目超过 6 个后，再引入筛选、筛选状态和空结果处理。

### Project Detail

目标：把单个项目变成面试讨论材料。

结构：

1. Project snapshot：角色、时间、状态、技术栈、链接。
2. Problem / Context：非技术用户能读懂。
3. My role：明确贡献边界。
4. Full-stack evidence chain：UI -> State -> API -> Data -> Tests -> Deploy。
5. Frontend structure：组件、状态、路由、响应式、可访问性。
6. Architecture：系统边界和数据流。
7. Decisions：为什么这么做，不只是用了什么。
8. Result：可验证结果，不编造指标。
9. Next project / Contact CTA。

### About

目标：展示双语沟通、职业路径、工程价值观。

结构：

1. Short story：英文和中文都自然，不是硬翻译。
2. Operating principles：Maintainable, user-minded, testable, collaborative。
3. Current focus：Next.js、React Native、.NET、AI products。
4. Language signal：English / 中文沟通场景说明。

### Contact

目标：低摩擦联系，不做表单。

结构：

1. Email primary CTA。
2. Copy email button。
3. LinkedIn、GitHub、CV download。
4. Availability module：roles、location、remote、languages、response expectation。

## 5. 组件清单

| 组件 | 用途 | 关键要求 |
| --- | --- | --- |
| LanguageSwitch | EN/ZH 切换 | 键盘可操作，当前语言有 aria-current |
| HeroTitle | 首屏超大标题 | responsive clamp，不能溢出 |
| ProofStrip | 快速可信信息 | 等宽数字，移动端横向不溢出 |
| ProjectCard | 项目入口 | 支持 featured / compact / wide variants |
| TechTag | 技术标签 | 可换行，不依赖颜色表达含义 |
| EvidenceRail | 全栈证据链 | UI/State/API/Data/Tests/Deploy 节点 |
| ArchitectureBlock | 架构说明 | 支持图、文字、链接 |
| SkillMatrix | 技能矩阵 | 分组清楚，避免技能墙 |
| CopyEmailButton | 复制邮箱 | toast 反馈，失败 fallback |
| DirectLinkGroup | 联系入口 | email、LinkedIn、GitHub、CV |
| AvailabilityCard | 当前开放状态 | 不做表单，不收集用户信息 |
| EmptyState | 筛选无结果 | 提供 reset action |
| SkeletonBlock | 加载状态 | 保留空间，避免 CLS |
| Toast | 复制成功/失败 | 3-5 秒自动消失，可关闭 |

## 6. 状态说明

### Default

- 内容完整可读。
- CTA 明确，但不抢走所有视觉注意力。
- 卡片有轻微 border 和 surface 区分。

### Hover

- 200ms transition。
- 卡片轻微上移 `translateY(-2px)`。
- border 或 shadow 增强。
- 链接出现 arrow motion，但文字不跳动。

### Active / Pressed

- scale `0.98` 或 background deepen。
- 移动端 tap 必须有即时反馈。

### Focus

- 使用 2px 高对比 focus ring。
- 不移除浏览器默认可访问性能力，必要时增强。

### Disabled

- opacity 0.45-0.55。
- `aria-disabled` 或 disabled attribute。
- cursor 不显示 pointer。

### Error

- 只用于 copy email 失败、外链不可用等轻错误。
- 错误信息靠近触发动作，不使用全局大弹窗。

### Empty

- 项目筛选无结果时显示简短说明和 Reset filters。
- 不使用幽默化空态，保持专业。

### Loading

- 使用 skeleton，保留卡片尺寸。
- 不用长时间 spinner。
- 图片预留 aspect-ratio。

## 7. 可访问性

- 颜色对比：正文至少 4.5:1，大标题至少 3:1。
- 所有图标按钮必须有 `aria-label`。
- 语言切换需要 `lang` attribute 更新：`en` / `zh-Hans`。
- heading 顺序保持 h1 -> h2 -> h3。
- 所有交互支持键盘 Tab / Enter / Space。
- focus ring 清晰可见。
- motion 支持 `prefers-reduced-motion: reduce`。
- 图片必须有语义化 alt；装饰图使用空 alt。
- CTA 文案不能只写 Click here。
- 技术标签不能只靠颜色区分分类。

## 8. 动效规范

### Timing

```css
--motion-fast: 160ms;
--motion-base: 240ms;
--motion-slow: 300ms;
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
```

### Patterns

- Page section enter：opacity 0 -> 1, translateY(12px -> 0), 240ms。
- Card hover：translateY(-2px), shadow/border change, 200ms。
- Language switch：content crossfade, 200ms。
- Evidence node expand：height 使用 grid/fr 或 scaleY 技巧，避免明显抖动。
- Toast：fade + slide, 240ms in, 160ms out。

### Reduced Motion

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

## 9. 响应式断点策略

| Breakpoint | 用途 | 策略 |
| --- | --- | --- |
| 360-430 | Small mobile | 单列，hero title 44-52px，CTA 换行 |
| 431-767 | Large mobile | 单列，项目卡片 full width，proof strip 可 wrap |
| 768-1023 | Tablet | 6-column grid，项目 2 列，导航简化 |
| 1024-1439 | Desktop | 12-column grid，非对称分栏 |
| 1440+ | Wide desktop | max-width 1200-1320，允许 section 背景满屏 |

原则：

- 不用 viewport width 直接缩放字体。
- 使用 `clamp()` 但要设置合理 min/max。
- 固定格式组件使用 aspect-ratio，避免动态内容撑坏布局。
- 移动端首屏必须露出 Featured projects 的开头。

## 10. Design Tokens

### Color

```css
:root {
  --color-ink: #101114;
  --color-paper: #f7f4ef;
  --color-surface: #ffffff;
  --color-muted: #6f737b;
  --color-line: #d8d4cc;

  --color-signal-blue: #0057ff;
  --color-signal-red: #ff3b30;
  --color-signal-yellow: #ffd60a;

  --color-industrial: #2b2f36;
  --color-cyan-glow: #00d4ff;
  --color-success: #168a4a;
  --color-warning: #a66b00;
  --color-error: #c62828;

  --gradient-system: linear-gradient(135deg, #101114 0%, #2b2f36 48%, #0057ff 100%);
}
```

Usage：

- `paper` 作为主背景，避免纯白刺眼。
- `ink` 作为主文字。
- `signal-blue` 用于 primary CTA 和 active state。
- `signal-red/yellow` 只用于小面积几何索引和图节点。
- `gradient-system` 只用于 hero 或 evidence header，不做全站大面积背景。

### Typography

```css
:root {
  --font-sans: "Inter Variable", "SF Pro Text", system-ui, sans-serif;
  --font-display: "Inter Tight", "SF Pro Display", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", ui-monospace, monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.5rem;
  --text-hero: clamp(2.75rem, 7vw, 6.5rem);

  --leading-body: 1.65;
  --leading-title: 1.05;
}
```

Rules：

- 中文字体使用系统默认优先，避免引入沉重字体包。
- 数字、年份、项目编号使用 `--font-mono` 或 `font-variant-numeric: tabular-nums`。
- 标题可以使用 variable weight 650-760，正文保持 400-450。

### Grid

```css
:root {
  --container-max: 1280px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --section-pad-y: clamp(64px, 9vw, 128px);
  --page-pad-x: clamp(20px, 5vw, 56px);
}
```

Rules：

- Desktop：12 columns。
- Tablet：6 columns。
- Mobile：4 columns 或单列。
- 允许 hero 和 featured project 破格，但文字必须对齐主网格。

### Spacing

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
}
```

### Radius / Border / Shadow

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --border-hairline: 1px solid var(--color-line);
  --shadow-card: 0 12px 32px rgb(16 17 20 / 0.08);
  --shadow-hover: 0 18px 48px rgb(16 17 20 / 0.14);
}
```

Rules：

- 常规卡片半径不超过 8px。
- 大型视觉块可用 14px，但不能全站圆润化。
- shadow 要轻，更多依赖 border 和层级。

## 11. 关键页面线框

### Home Wireframe

```text
┌────────────────────────────────────────────────────────────┐
│ Jerome Gao        Work  Projects  About      EN / 中文  ↗  │
├────────────────────────────────────────────────────────────┤
│ [left 5 cols]                 [right 7 cols]               │
│ Senior Full Stack             Evidence strip               │
│ Engineer who turns            10+ yrs / Auckland / Bilingual│
│ product ideas into            React / Next.js / RN / .NET   │
│ reliable systems.                                          │
│                                                            │
│ [Email me] [Download CV] [GitHub]                          │
├───────────────────────┬────────────────────────────────────┤
│ Featured Project A    │ Full-stack evidence preview         │
│ wide / visual         │ UI -> State -> API -> Data -> Tests │
├───────────┬───────────┴────────────────────────────────────┤
│ Project B │ Project C                                      │
├───────────┴────────────────────────────────────────────────┤
│ Skills matrix / Experience snapshot / Direct contact        │
└────────────────────────────────────────────────────────────┘
```

设计说明：

- Hero 左侧是超大标题，右侧是工程证据和双语身份，不做居中模板。
- Featured projects 在首屏下方露出一部分，鼓励继续滚动。
- CTA 直接联系，不出现表单。

### Project Detail Wireframe

```text
┌────────────────────────────────────────────────────────────┐
│ ← Projects                              EN / 中文          │
├────────────────────────────────────────────────────────────┤
│ RateEverything                                             │
│ Full-stack media rating platform                           │
│ Role / Time / Status / Live / Code                         │
├───────────────────────┬────────────────────────────────────┤
│ Problem               │ Snapshot metrics / tech stack       │
├───────────────────────┴────────────────────────────────────┤
│ Full-stack evidence chain                                  │
│ [UI] -> [State] -> [API] -> [Data] -> [Tests] -> [Deploy]   │
├───────────────────────┬────────────────────────────────────┤
│ Frontend structure    │ Architecture / data flow            │
├───────────────────────┴────────────────────────────────────┤
│ Decisions / Results / Next project / Email CTA              │
└────────────────────────────────────────────────────────────┘
```

设计说明：

- 重点不是截图堆叠，而是把隐藏的系统能力拆成层。
- 左右分栏表达“产品问题”和“工程证据”的关系。
- Evidence chain 是项目详情的核心组件。

### Contact Wireframe

```text
┌────────────────────────────────────────────────────────────┐
│ Let's talk / 联系我                                        │
│ For roles, product ideas, or technical conversations.       │
├────────────────────────────────────────────────────────────┤
│ [Email me] [Copy email] [LinkedIn] [GitHub] [Download CV]   │
├───────────────────────┬────────────────────────────────────┤
│ Availability          │ Languages                          │
│ Full-stack / Frontend │ English / 中文                      │
│ Auckland / Remote     │                                    │
└───────────────────────┴────────────────────────────────────┘
```

设计说明：

- Contact 是直接行动区，不做输入表单。
- Copy email 是轻量交互，能展示细节但不引入后端复杂度。
- Availability 模块替代 form，回答招聘方最关心的问题。

## 12. 实现提醒

- 设计系统应先落成 token 和基础组件，再做页面。
- 双语文案从数据层开始建模，不在 JSX 中散落硬编码。
- 每个页面都要有 loading、empty、error、focus、reduced-motion 状态。
- Portfolio 本身要像一个小型产品，不像套模板的简历页。
