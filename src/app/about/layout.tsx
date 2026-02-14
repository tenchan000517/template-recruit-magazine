import type { Metadata } from "next";
import { seo, company, site } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "会社を知る | About",
  description: `${company.name}の会社概要、代表メッセージ、企業理念、沿革をご紹介。私たちのビジョンと価値観をお伝えします。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `会社を知る | About${seo.titleSuffix}`,
    description: `${company.name}の会社概要、代表メッセージ、企業理念、沿革をご紹介。`,
    url: `${site.site.url}/about`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `会社を知る | About${seo.titleSuffix}`,
    description: `${company.name}の会社概要、代表メッセージ、企業理念をご紹介。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/about",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}の企業情報ページ。会社概要、代表メッセージ、企業理念、沿革を掲載。`,
    "ai:topics": "会社概要, 代表メッセージ, 企業理念, 沿革, ビジョン",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
