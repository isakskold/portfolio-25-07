import type { Metadata } from "next";
import "../globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";
import GlobalScrollButton from "@/components/ui/GlobalScrollButton";
import { notFound } from "next/navigation";
import PortfolioJsonLd from "@/components/PortfolioJsonLd";
import ThemeProvider from "@/components/ThemeProvider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "en" ? "Isak Sköld - Portfolio" : "Isak Sköld - Portfölj";
  const description =
    locale === "en"
      ? "Fullstack web-developer portfolio showcasing projects and skills"
      : "Fullstack webbutvecklare portfölj med projekt och färdigheter";

  return {
    title,
    description,
    metadataBase: new URL("https://isakskold.xyz"),
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
      other: [
        { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
        { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
      ],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        sv: "/sv",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://isakskold.xyz/${locale}`,
      siteName: "Isak Sköld",
      locale: locale,
      type: "website",
      images: [
        {
          url: "https://isakskold.xyz/pngs/profilePic.jpg",
          width: 1200,
          height: 630,
          alt: "Isak Sköld",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://isakskold.xyz/pngs/profilePic.jpg"],
      creator: "@isakskold",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      google: "notranslate",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const locales = ["en", "sv"];
  if (!locales.includes(locale)) notFound();

  return (
    <html
      lang={locale}
      className="notranslate dark"
      translate="no"
      style={{ colorScheme: "dark" }}
    >
      <head>
        <PortfolioJsonLd locale={locale} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider initialLanguage={locale as "en" | "sv"}>
            {children}
            {/* Global fixed scroll button */}
            <GlobalScrollButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
