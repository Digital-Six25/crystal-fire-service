"use client";
import Certifications from "@/components/certifications";
import ComplianceContent from "@/components/fire-protection/compliance-content";
import ComplianceHero from "@/components/fire-protection/compliance-hero";
import { useCompliancePageData } from "@/hooks/useCompliancepageData";
import { useHomepageData } from "@/hooks/useHomepageData";

export default function CompliancePage() {
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: compliance,
    isLoading: complianceLoading,
    error: complianceError,
  } = useCompliancePageData();

  if (homeLoading || complianceLoading) return <p>Loading...</p>;
  if (homeError || complianceError) return <p>Error loading data</p>;
  if (!home || !compliance) return <p>No data found</p>;

  return (
    <main>
      <ComplianceHero hero={compliance.hero} />
      <ComplianceContent
        req={compliance.compliance_requirements}
        ser={compliance.compliance_service}
      />
      <Certifications certifications={home.certifications} />
    </main>
  );
}
