import { describe, expect, it } from "vitest";
import { isLocale, swapLocale } from "@/lib/i18n";

describe("i18n helpers", () => {
  it("validates supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("zh")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });

  it("swaps the first locale segment", () => {
    expect(swapLocale("/zh/projects/rate-everything", "en")).toBe("/en/projects/rate-everything");
    expect(swapLocale("/", "zh")).toBe("/zh");
  });
});
