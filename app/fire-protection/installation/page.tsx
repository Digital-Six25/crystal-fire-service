"use client";
import Certifications from "@/components/certifications";
import Equipment from "@/components/equipment";
import InstallationContent from "@/components/fire-protection/installation-content";
import InstallationHero from "@/components/fire-protection/installation-hero";
import Skeleton from "@/components/serviceSkeleton";

import { useHomepageData } from "@/hooks/useHomepageData";
import { useInstallationPageData } from "@/hooks/useInstallationpageData";

export default function InstallationPage() {
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: installation,
    isLoading: installationLoading,
    error: installationError,
  } = useInstallationPageData();

  if (homeLoading || installationLoading) return <Skeleton />;
  if (homeError || installationError) return <p>Error loading data</p>;
  if (!home || !installation) return <p>No data found</p>;

  return (
    <main>
      <InstallationHero hero={installation.hero} />
      <InstallationContent
        professional={installation.professional_installation}
        licensed={installation.licensed_installation}
      />
      <Equipment maintain={home.maintain} />
      <Certifications certifications={home.certifications} />
    </main>
  );
}
