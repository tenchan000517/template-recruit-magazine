import type { Metadata } from "next";
import { seo, company, site } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "募集要項 | Recruit",
  description: `${company.name}の募集要項・採用情報。募集職種、応募資格、給与・待遇、選考フローなど、採用に関する詳細情報をご案内します。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `募集要項 | Recruit${seo.titleSuffix}`,
    description: `${company.name}の募集要項・採用情報。募集職種、応募資格、給与・待遇など。`,
    url: `${site.site.url}/recruit`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `募集要項 | Recruit${seo.titleSuffix}`,
    description: `${company.name}の募集要項・採用情報。募集職種、応募資格など。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/recruit",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}の採用募集要項ページ。募集職種、応募資格、給与・待遇、選考フローを掲載。`,
    "ai:topics": "募集要項, 採用情報, 募集職種, 応募資格, 給与待遇, 選考フロー",
  },
};

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
