import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jerome Gao | Full Stack Engineer",
    template: "%s / Jerome Gao",
  },
  description:
    "Jerome Gao is a Node.js Full Stack Engineer working across backend services, data, cloud delivery, React, Next.js, React Native, .NET, Python, and Java.",
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
      </body>
    </html>
  );
}
