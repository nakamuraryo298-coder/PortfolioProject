import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const siteUrl = "https://takaki-takahashi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Takaki Takahashi | Freelance Software Engineer 高橋貴樹",
    template: "%s | Takaki Takahashi",
  },
  description:
    "Takaki Takahashi (高橋貴樹) — freelance full-stack software engineer based in Japan with 12+ years of experience across frontend, backend, mobile, cloud, and AI. Available for new projects.",
  keywords: [
    "フリーランス エンジニア",
    "ソフトウェアエンジニア",
    "フルスタックエンジニア",
    "Web開発",
    "高橋貴樹",
    "freelance software engineer",
    "full-stack developer Japan",
    "Next.js",
    "React",
    "AWS",
  ],
  authors: [{ name: "Takaki Takahashi" }],
  creator: "Takaki Takahashi",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: "en_US",
    url: siteUrl,
    title: "Takaki Takahashi | Freelance Software Engineer",
    description:
      "Full-stack software engineer with 12+ years of experience. From frontend to cloud and AI — building products that drive results.",
    siteName: "Takaki Takahashi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Takaki Takahashi | Freelance Software Engineer",
    description:
      "Full-stack software engineer with 12+ years of experience across web, mobile, cloud, and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Takaki Takahashi",
  alternateName: "高橋 貴樹",
  jobTitle: "Freelance Software Engineer",
  email: "mailto:mirai.lucky.dev@gmail.com",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
  },
  knowsAbout: [
    "Web Development",
    "Mobile Development",
    "Cloud Infrastructure",
    "Artificial Intelligence",
    "Software Architecture",
  ],
  description:
    "Freelance full-stack software engineer based in Japan with 12+ years of experience across frontend, backend, mobile, cloud, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
