import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";
import { detectLanguageFromHeaders } from "@/lib/translations";
import { headers } from "next/headers";
import GlobalScrollButton from "@/components/ui/GlobalScrollButton";

export const metadata: Metadata = {
  title: "Isak Sköld - Portfolio",
  description: "Fullstack web-developer portfolio website",
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
          {/* Global fixed scroll button */}
          <GlobalScrollButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
