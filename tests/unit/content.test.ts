import { describe, expect, it } from "vitest";
import { getMissingLocalePairs, getProject, getProjects } from "@/lib/content";

describe("project content", () => {
  it("keeps every case study available in both languages", () => {
    expect(getMissingLocalePairs()).toEqual([]);
    expect(getProjects("en").map((project) => project.slug)).toEqual(
      getProjects("zh").map((project) => project.slug),
    );
  });

  it("publishes the primary case studies with full-stack evidence", () => {
    for (const slug of ["carsome", "pintec", "osprey-pulse", "mealway"]) {
      const project = getProject("en", slug);
      expect(project).toBeDefined();
      expect(project?.evidence.length).toBeGreaterThanOrEqual(4);
      expect(project?.architecture.length).toBeGreaterThanOrEqual(3);
      expect(project?.results.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("orders independent products around the current product focus", () => {
    expect(
      getProjects("en")
        .filter((project) => project.kind === "independent")
        .map((project) => project.slug),
    ).toEqual(["osprey-pulse", "mealway", "rate-everything"]);
  });

  it("keeps Carsome's public URL inside its case study", () => {
    expect(getProject("en", "carsome")?.links).toContainEqual({
      label: "Visit Carsome",
      href: "https://carsome.my",
      type: "live",
    });
  });
});
