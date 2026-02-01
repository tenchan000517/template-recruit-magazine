import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seo, company, contact, locations, site } from "@/lib/site";

// JSON-LD構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  description: seo.defaultDescription,
  url: site.site.url,
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    postalCode: locations.headquarters.zipCode,
    addressCountry: "JP",
    streetAddress: locations.headquarters.address,
  },
  founder: company.ceo,
  foundingDate: company.established,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.site.url),
  title: {
    default: seo.defaultTitle || company.name,
    template: `%s${seo.titleSuffix}`,
  },
  description: seo.defaultDescription,

  // canonical URL
  alternates: {
    canonical: "/",
  },

  // robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // OGP
  openGraph: {
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    url: site.site.url,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: site.site.ogImage || "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    images: [site.site.ogImage || "/images/og-image.jpg"],
  },
};

// Viewport
export const viewport: Viewport = {
  themeColor: "#1a2744",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
