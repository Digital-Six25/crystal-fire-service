"use client";
import FireProtectionContent from "@/components/fire-protection/fire-protection-content";
import FireProtectionHero from "@/components/fire-protection/fire-protection-hero";
import Skeleton from "@/components/serviceSkeleton";
import { useFireProtectionPageData } from "@/hooks/useFireProtectionpageData";
import { useHomepageData } from "@/hooks/useHomepageData";

export default function FireProtectionPage() {
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: fireProtection,
    isLoading: fireProtectionLoading,
    error: fireProtectionError,
  } = useFireProtectionPageData();

  if (homeLoading || fireProtectionLoading) return <Skeleton />;
  if (homeError || fireProtectionError) return <p>Error loading data</p>;
  if (!home || !fireProtection) return <p>No data found</p>;

  return (
    <main>
      <FireProtectionHero hero={fireProtection.hero} />
      <FireProtectionContent
        getStarted={fireProtection.get_started}
        services={fireProtection.services}
        certifications={home.certifications}
      />
    </main>
  );
}
