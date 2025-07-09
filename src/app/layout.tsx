import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";
import { detectLanguageFromHeaders } from "@/lib/translations";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Detect language server-side from Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get("Accept-Language");
  const initialLanguage = detectLanguageFromHeaders(acceptLanguage);

  return (
    <html lang={initialLanguage}>
      <body>
        <LanguageProvider initialLanguage={initialLanguage}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
