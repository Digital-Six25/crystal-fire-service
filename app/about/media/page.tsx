"use client";
import MediaHero from "@/components/about/media-hero";
import MediaContent from "@/components/about/media-content";
import Certifications from "@/components/certifications";
import { useHomepageData } from "@/hooks/useHomepageData";
import { useMediaPageData } from "@/hooks/useMediapageData";

export default function MediaPage() {
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: media,
    isLoading: mediaLoading,
    error: mediaError,
  } = useMediaPageData();

  if (homeLoading || mediaLoading) return <p>Loading...</p>;
  if (homeError || mediaError) return <p>Error loading data</p>;
  if (!home || !media) return <p>No data found</p>;

  return (
    <main>
      <MediaHero hero={media.hero} />
      <MediaContent media={media.media} cta={media.cta} />
      <Certifications certifications={home.certifications} />
    </main>
  );
}
