"use client";
import UptickHero from "@/components/about/uptick-hero";
import UptickContent from "@/components/about/uptick-content";
import Certifications from "@/components/certifications";
import { useHomepageData } from "@/hooks/useHomepageData";
import { useUptickPageData } from "@/hooks/useUptickpageData";

export default function UptickPage() {
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: uptick,
    isLoading: uptickLoading,
    error: uptickError,
  } = useUptickPageData();

  if (homeLoading || uptickLoading) return <p>Loading...</p>;
  if (homeError || uptickError) return <p>Error loading data</p>;
  if (!home || !uptick) return <p>No data found</p>;

  return (
    <main>
      <UptickHero hero={uptick.hero} />
      <UptickContent about={uptick.about} benefits={uptick.benefits} />
      <Certifications certifications={home.certifications} />
    </main>
  );
}
