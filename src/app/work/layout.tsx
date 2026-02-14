import type { Metadata } from "next";
import { seo, company, site } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "仕事を知る | Work",
  description: `${company.name}の職種・仕事内容をご紹介。各職種の業務内容、1日のスケジュール、必要なスキルなど、仕事の魅力をお伝えします。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `仕事を知る | Work${seo.titleSuffix}`,
    description: `${company.name}の職種・仕事内容をご紹介。各職種の業務内容、1日のスケジュールなど。`,
    url: `${site.site.url}/work`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `仕事を知る | Work${seo.titleSuffix}`,
    description: `${company.name}の職種・仕事内容をご紹介。各職種の業務内容など。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/work",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}の職種・仕事紹介ページ。業務内容、1日のスケジュール、キャリアパスを掲載。`,
    "ai:topics": "職種紹介, 仕事内容, 業務内容, 1日のスケジュール, キャリアパス",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
