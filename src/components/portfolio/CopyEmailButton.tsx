"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { contact } from "@content/data/dictionary";

export function CopyEmailButton({ locale }: { locale: Locale }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  }

  return (
    <Button
      analyticsEvent="contact_click"
      analyticsLabel="copy-email"
      variant="ghost"
      onClick={onCopy}
      type="button"
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
      {copied ? (locale === "zh" ? "已复制" : "Copied") : contact.email}
    </Button>
  );
}
