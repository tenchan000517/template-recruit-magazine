import type { Metadata } from "next";
import { seo, company, site } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "働く環境 | Culture",
  description: `${company.name}の働く環境・企業文化をご紹介。福利厚生、研修制度、オフィス環境など、社員が活躍できる環境づくりについてお伝えします。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `働く環境 | Culture${seo.titleSuffix}`,
    description: `${company.name}の働く環境・企業文化をご紹介。福利厚生、研修制度、オフィス環境など。`,
    url: `${site.site.url}/culture`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `働く環境 | Culture${seo.titleSuffix}`,
    description: `${company.name}の働く環境・企業文化をご紹介。福利厚生、研修制度など。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/culture",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}の企業文化・働く環境の紹介ページ。福利厚生、研修制度、オフィス環境について掲載。`,
    "ai:topics": "企業文化, 働く環境, 福利厚生, 研修制度, オフィス環境",
  },
};

export default function CultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
