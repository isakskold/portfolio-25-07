import { Suspense } from "react";
import Header from "@/components/Header";
import HeroServer from "@/components/HeroServer";
import AboutServer from "@/components/AboutServer";
import ProjectsServer from "@/components/ProjectsServer";
import ContactServer from "@/components/ContactServer";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sv" }];
}

// Loading component for each section
const SectionLoading = ({ section }: { section: string }) => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="h-8 w-8 rounded-full border-4 border-t-transparent animate-spin mx-auto mb-4"></div>
      <p>Loading {section}...</p>
    </div>
  </div>
);

export default async function Home({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<SectionLoading section="hero" />}>
          <HeroServer locale={params.locale} />
        </Suspense>
        <Suspense fallback={<SectionLoading section="about" />}>
          <AboutServer locale={params.locale} />
        </Suspense>
        <Suspense fallback={<SectionLoading section="projects" />}>
          <ProjectsServer locale={params.locale} />
        </Suspense>
        <Suspense fallback={<SectionLoading section="contact" />}>
          <ContactServer locale={params.locale} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
