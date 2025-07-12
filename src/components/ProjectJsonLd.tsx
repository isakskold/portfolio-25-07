import { Project } from "./ProjectsClient";

interface ProjectJsonLdProps {
  project: Project;
}

export default function ProjectJsonLd({ project }: ProjectJsonLdProps) {
  // Remove HTML tags from the description for clean JSON-LD
  const cleanDescription = project.description.replace(/<[^>]*>?/gm, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": project.liveUrl,
    },
    headline: project.title,
    description: cleanDescription,
    image: `https://isakskold.xyz${project.image}`,
    author: {
      "@type": "Person",
      name: "Isak Sköld",
      url: "https://isakskold.xyz",
    },
    publisher: {
      "@type": "Person",
      name: "Isak Sköld",
      url: "https://isakskold.xyz",
    },
    keywords: project.technologies.join(", "),
    url: project.liveUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
