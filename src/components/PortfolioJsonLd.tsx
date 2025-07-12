export default function PortfolioJsonLd({ locale }: { locale: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Isak Sköld",
    url: `https://isakskold.xyz/${locale}`,
    jobTitle: locale === "en" ? "Web Developer" : "Webbutvecklare",
    image: {
      "@type": "ImageObject",
      url: "https://isakskold.xyz/pngs/profilePic.jpg",
      width: "1200",
      height: "1200",
      caption: "Isak Sköld - Fullstack Developer",
    },
    description:
      locale === "en"
        ? "Fullstack web-developer portfolio showcasing projects and skills"
        : "Fullstack webbutvecklare portfölj med projekt och färdigheter",
    sameAs: [
      "https://github.com/isakskold",
      "https://www.linkedin.com/in/isak-sk%C3%B6ld-3b7a0b28a/",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://isakskold.xyz/${locale}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
