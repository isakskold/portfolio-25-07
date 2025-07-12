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
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      viewportFit: "cover",
    },
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
          height: 1200,
          alt: "Isak Sköld - Full Stack Developer",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "https://isakskold.xyz/pngs/profilePic.jpg",
          alt: "Isak Sköld - Full Stack Developer",
          width: 1200,
          height: 1200,
        },
      ],
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
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          name="image"
          content="https://isakskold.xyz/pngs/profilePic.jpg"
        />
        <meta
          itemProp="image"
          content="https://isakskold.xyz/pngs/profilePic.jpg"
        />
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
