import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(["en", "zh"]),
    summary: z.string(),
    year: z.number(),
    tags: z.array(z.string()),
    content: z.string(),
  }),
});

export default defineConfig({
  content: [projects],
});
