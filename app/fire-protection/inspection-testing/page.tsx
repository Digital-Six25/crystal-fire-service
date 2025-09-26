"use client";
import Certifications from "@/components/certifications";
import InspectionTestingContent from "@/components/fire-protection/inspection-testing-content";
import InspectionTestingHero from "@/components/fire-protection/inspection-testing-hero";
import Skeleton from "@/components/serviceSkeleton";
import { useHomepageData } from "@/hooks/useHomepageData";
import { useInspectionTestingPageData } from "@/hooks/useInspectionTestingpageData";

export default function InspectionTestingPage() {
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: inspection,
    isLoading: inspectionLoading,
    error: inspectionError,
  } = useInspectionTestingPageData();

  if (homeLoading || inspectionLoading) return <Skeleton />;
  if (homeError || inspectionError) return <p>Error loading data</p>;
  if (!home || !inspection) return <p>No data found</p>;

  return (
    <main>
      <InspectionTestingHero hero={inspection.hero} />
      <InspectionTestingContent
        testing={inspection.inspection_testing}
        faq={inspection.faq}
        choose={inspection.why_choose_us}
        cta={inspection.cta}
      />
      <Certifications certifications={home.certifications} />{" "}
    </main>
  );
}
