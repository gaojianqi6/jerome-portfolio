import { allProjects, type Project } from "content-collections";
import type { Locale } from "@/lib/i18n";

export function getProjects(locale: Locale): Project[] {
  return allProjects
    .filter((project) => project.locale === locale)
    .sort((a, b) => a.order - b.order);
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  return allProjects.find((project) => project.locale === locale && project.slug === slug);
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getProjects(locale).filter((project) => project.featured);
}

export function getProjectSlugs(): string[] {
  return [...new Set(allProjects.map((project) => project.slug))];
}

export function getMissingLocalePairs(): string[] {
  return getProjectSlugs().filter((slug) => {
    const projectLocales = allProjects
      .filter((project) => project.slug === slug)
      .map((project) => project.locale);

    return !projectLocales.includes("en") || !projectLocales.includes("zh");
  });
}
