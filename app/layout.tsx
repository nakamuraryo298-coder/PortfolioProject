import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import MagicBackground from "@/components/MagicBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-jp",
  display: "swap",
  preload: false,
});

const siteUrl = "https://hiromu-takahashi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hiromu Takahashi | Freelance Software Engineer 高橋寛武",
    template: "%s | Hiromu Takahashi",
  },
  description:
    "Hiromu Takahashi (高橋寛武) — freelance full-stack software engineer based in Japan with 8+ years of experience across frontend, backend, mobile, cloud, and AI. Available for new projects.",
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
      "Full-stack software engineer with 8+ years of experience. From frontend to cloud and AI — building products that drive results.",
    siteName: "Hiromu Takahashi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiromu Takahashi | Freelance Software Engineer",
    description:
      "Full-stack software engineer with 8+ years of experience across web, mobile, cloud, and AI.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06060c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hiromu Takahashi",
  alternateName: "高橋 寛武",
  jobTitle: "Freelance Software Engineer",
  email: "mailto:mistsid46@gmail.com",
  url: siteUrl,
  address: { "@type": "PostalAddress", addressCountry: "JP" },
  knowsAbout: [
    "Web Production",
    "Web Design",
    "WordPress",
    "Frontend Development",
    "Landing Page Production",
    "System Development",
  ],
  description:
    "Freelance full-stack software engineer based in Japan with 8+ years of experience across frontend, backend, mobile, cloud, and AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} ${notoSansJP.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MagicBackground />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
