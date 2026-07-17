import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("opens external links in a separate tab with safe rel attributes", () => {
    render(<Button href="https://example.com">External</Button>);
    const link = screen.getByRole("link", { name: "External" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("exposes analytics event attributes without changing link behaviour", () => {
    render(
      <Button
        analyticsEvent="cv_download"
        analyticsLabel="unit"
        download="Jerome-Gao-CV.pdf"
        href="/files/cv.pdf"
      >
        CV
      </Button>,
    );
    const link = screen.getByRole("link", { name: "CV" });
    expect(link).toHaveAttribute("data-analytics-event", "cv_download");
    expect(link).toHaveAttribute("data-analytics-label", "unit");
    expect(link).toHaveAttribute("download", "Jerome-Gao-CV.pdf");
    expect(link).not.toHaveAttribute("target");
  });
});
