import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-jp",
  display: "swap",
  preload: false,
});

const siteUrl = "https://takaki-takahashi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hiromu Takahashi | Freelance Software Engineer 高橋寛武",
    template: "%s | Hiromu Takahashi",
  },
  description:
    "Hiromu Takahashi (高橋寛武) — freelance full-stack software engineer based in Japan with 12+ years of experience across frontend, backend, mobile, cloud, and AI. Available for new projects.",
  keywords: [
    "フリーランス エンジニア",
    "ソフトウェアエンジニア",
    "フルスタックエンジニア",
    "Web開発",
    "高橋寛武",
    "freelance software engineer",
    "full-stack developer Japan",
    "Next.js",
    "React",
    "AWS",
  ],
  authors: [{ name: "Hiromu Takahashi" }],
  creator: "Hiromu Takahashi",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: "en_US",
    url: siteUrl,
    title: "Hiromu Takahashi | Freelance Software Engineer",
    description:
      "Full-stack software engineer with 12+ years of experience. From frontend to cloud and AI — building products that drive results.",
    siteName: "Hiromu Takahashi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiromu Takahashi | Freelance Software Engineer",
    description:
      "Full-stack software engineer with 12+ years of experience across web, mobile, cloud, and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2ea",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hiromu Takahashi",
  alternateName: "高橋 寛武",
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
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`} suppressHydrationWarning>
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
