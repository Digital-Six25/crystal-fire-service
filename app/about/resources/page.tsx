"use client";
import ResourcesHero from "@/components/about/resources-hero";
import ResourcesContent from "@/components/about/resources-content";
import Certifications from "@/components/certifications";
import { useHomepageData } from "@/hooks/useHomepageData";
import { useResourcesPageData } from "@/hooks/useResourcespageData";
import HomeSkeleton from "@/components/homePageSkeleton";

export default function ResourcesPage() {
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: resource,
    isLoading: resourceLoading,
    error: resourceError,
  } = useResourcesPageData();

  if (homeLoading || resourceLoading) return <HomeSkeleton />;
  if (homeError || resourceError) return <p>Error loading data</p>;
  if (!home || !resource) return <p>No data found</p>;

  return (
    <main>
      <ResourcesHero hero={resource.hero} />
      <ResourcesContent resources={resource.resources} cta={resource.cta} />
      <Certifications certifications={home.certifications} />
    </main>
  );
}
