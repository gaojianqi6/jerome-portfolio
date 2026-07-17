import type { MetadataRoute } from "next";
import { allProjects } from "content-collections";
import { locales } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();
  const staticPaths = ["", "/projects", "/about", "/contact"];
  const staticPages = locales.flatMap((locale) =>
    staticPaths.map((pathname) => ({
      url: absoluteUrl(`/${locale}${pathname}`),
      lastModified: updatedAt,
      changeFrequency: pathname === "" ? ("monthly" as const) : ("yearly" as const),
      priority: pathname === "" ? 1 : pathname === "/projects" ? 0.9 : 0.7,
    })),
  );
  const projectPages = allProjects.map((project) => ({
    url: absoluteUrl(`/${project.locale}/projects/${project.slug}`),
    lastModified: updatedAt,
    changeFrequency: "yearly" as const,
    priority: project.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...projectPages];
}
