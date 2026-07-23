import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@/components/analytics/Analytics";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";
import { absoluteUrl, siteName, siteUrl } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jerome Gao | Full Stack Engineer",
    template: "%s / Jerome Gao",
  },
  description:
    "Jerome Gao is a Node.js Full Stack Engineer working across backend services, data, cloud delivery, React, Next.js, React Native, .NET, Python, and Java.",
  openGraph: {
    type: "website",
    siteName,
    images: [{ url: absoluteUrl("/images/hero-workspace.jpg"), width: 1920, height: 1280 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/images/hero-workspace.jpg")],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={htmlLang[locale as Locale]}>
      <body>
        <Header locale={locale as Locale} />
        <main>{children}</main>
        <Footer locale={locale as Locale} />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
