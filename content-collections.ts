import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(["en", "zh"]),
    subtitle: z.string(),
    summary: z.string(),
    client: z.string(),
    kind: z.enum(["professional", "independent"]),
    status: z.enum(["live", "shipped", "ongoing", "archived"]),
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
          type: z.enum(["live", "external", "code"]),
        }),
      )
      .default([]),
    hero: z
      .object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
        creditLabel: z.string().optional(),
        creditHref: z.string().optional(),
        position: z.string().optional(),
      })
      .optional(),
    evidence: z.array(
      z.object({
        layer: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
    architecture: z.array(
      z.object({
        step: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
    results: z.array(z.string()),
    content: z.string(),
  }),
  transform: async (document, context) => ({
    ...document,
    mdx: await compileMDX(context, document),
  }),
});

export default defineConfig({
  content: [projects],
});
