import type { Metadata } from "next";
import { seo, company, site } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "社員インタビュー | People",
  description: `${company.name}で働く社員の声をご紹介。仕事のやりがい、キャリアパス、職場の雰囲気など、リアルな社員の声をお届けします。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `社員インタビュー | People${seo.titleSuffix}`,
    description: `${company.name}で働く社員の声をご紹介。仕事のやりがい、キャリアパスなど。`,
    url: `${site.site.url}/people`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `社員インタビュー | People${seo.titleSuffix}`,
    description: `${company.name}で働く社員の声をご紹介。仕事のやりがい、キャリアパスなど。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/people",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}の社員インタビューページ。社員の声、仕事のやりがい、キャリアパスを紹介。`,
    "ai:topics": "社員インタビュー, 社員の声, キャリアパス, 仕事のやりがい, 職場環境",
  },
};

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
