import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/portfolio/CaseStudy";
import { getProject, getProjects } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale: Locale = rawLocale;
  const project = getProject(locale, slug);

  if (!project) {
    return {};
  }

  const canonical = absoluteUrl(`/${locale}/projects/${project.slug}`);
  const image = project.hero?.src ? absoluteUrl(project.hero.src) : undefined;

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl(`/en/projects/${project.slug}`),
        "zh-Hans": absoluteUrl(`/zh/projects/${project.slug}`),
      },
    },
    openGraph: {
      type: "article",
      title: `${project.title} | Jerome Gao`,
      description: project.summary,
      url: canonical,
      locale: locale === "zh" ? "zh_CN" : "en_NZ",
      images: image ? [{ url: image, alt: project.hero?.alt }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: `${project.title} | Jerome Gao`,
      description: project.summary,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const project = getProject(locale, slug);

  if (!project) {
    notFound();
  }

  return <CaseStudy locale={locale} project={project} />;
}
