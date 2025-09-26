"use client";
import AboutContent from "@/components/about/about-content";
import AboutHero from "@/components/about/about-hero";
import Certifications from "@/components/certifications";
import HomeSkeleton from "@/components/homePageSkeleton";
import Services from "@/components/services";
import { useAboutPageData } from "@/hooks/useAboutpageData";
import { useHomepageData } from "@/hooks/useHomepageData";

export default function AboutPage() {
  const { data: home } = useHomepageData();

  const { data, isLoading, error } = useAboutPageData();

  if (isLoading) return <HomeSkeleton />;
  if (error) return <p>Error loading data</p>;
  if (!home) return <p>No data found</p>;

  return (
    <main>
      <AboutHero
        hero={data?.hero}
        certifications={home?.hero?.certifications}
      />
      <AboutContent
        foundation={data?.foundation}
        purpose={data?.purpose}
        expertise={data?.expertise}
        achievements={data?.achievements}
      />
      <Services service={home.service} />
      <Certifications certifications={home.certifications} />
    </main>
  );
}
