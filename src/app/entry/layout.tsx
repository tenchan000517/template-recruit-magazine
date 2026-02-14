import type { Metadata } from "next";
import { seo, company, site } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "エントリー | Entry",
  description: `${company.name}へのエントリーフォーム。新卒採用・中途採用のご応募はこちらから。ご質問・ご相談もお気軽にどうぞ。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `エントリー | Entry${seo.titleSuffix}`,
    description: `${company.name}へのエントリーフォーム。新卒採用・中途採用のご応募はこちらから。`,
    url: `${site.site.url}/entry`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `エントリー | Entry${seo.titleSuffix}`,
    description: `${company.name}へのエントリーフォーム。新卒採用・中途採用のご応募はこちらから。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/entry",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}の採用エントリーページ。新卒・中途採用の応募フォーム。`,
    "ai:topics": "エントリー, 応募フォーム, 新卒採用, 中途採用, 採用応募",
  },
};

export default function EntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
