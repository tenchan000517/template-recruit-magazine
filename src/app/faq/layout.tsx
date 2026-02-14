import type { Metadata } from "next";
import { seo, company, site } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "よくある質問 | FAQ",
  description: `${company.name}の採用に関するよくある質問と回答。応募条件、選考プロセス、入社後の研修など、採用に関する疑問にお答えします。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `よくある質問 | FAQ${seo.titleSuffix}`,
    description: `${company.name}の採用に関するよくある質問と回答。応募条件、選考プロセスなど。`,
    url: `${site.site.url}/faq`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `よくある質問 | FAQ${seo.titleSuffix}`,
    description: `${company.name}の採用に関するよくある質問と回答。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/faq",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}の採用FAQ。応募条件、選考プロセス、入社後の研修についての質問と回答。`,
    "ai:topics": "よくある質問, FAQ, 採用質問, 応募条件, 選考プロセス, 研修",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
