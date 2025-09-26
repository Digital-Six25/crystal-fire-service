"use client";
import AFSSContent from "@/components/certification/afss-content";
import AFSSHero from "@/components/certification/afss-hero";
import Certifications from "@/components/certifications";
import Skeleton from "@/components/serviceSkeleton";
import { useAfssPageData } from "@/hooks/useAfsspageData";
import { useHomepageData } from "@/hooks/useHomepageData";

export default function AFSSManagementPage() {
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: afss,
    isLoading: afssLoading,
    error: afssError,
  } = useAfssPageData();

  if (homeLoading || afssLoading) return <Skeleton />;
  if (homeError || afssError) return <p>Error loading data</p>;
  if (!home || !afss) return <p>No data found</p>;

  return (
    <main>
      <AFSSHero hero={afss.hero} />
      <AFSSContent
        solutions={afss.afss_management_solutions}
        process={afss.service_process}
        offer={afss.service_offer}
        cta={afss.cta}
      />

      <Certifications certifications={home.certifications} />
    </main>
  );
}
