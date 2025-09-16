"use client";
import AFSSPrograms from "@/components/certification/afss-programs";
import CertificationContent from "@/components/certification/certification-content";
import CertificationHero from "@/components/certification/certification-hero";
import Certifications from "@/components/certifications";
import { useCertificationPageData } from "@/hooks/useCertificationpage";
import { useHomepageData } from "@/hooks/useHomepageData";

export default function CertificationPage() {
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: cert,
    isLoading: certLoading,
    error: certError,
  } = useCertificationPageData();

  if (homeLoading || certLoading) return <p>Loading...</p>;
  if (homeError || certError) return <p>Error loading data</p>;
  if (!home || !cert) return <p>No data found</p>;
  console.log("cert", cert);

  return (
    <main>
      <CertificationHero hero={cert.hero} />
      <CertificationContent
        certificates={cert.certificates}
        recog={cert.industry_recognition}
        process={cert.certification_process}
        expertise={cert.professional_expertise}
        cta={cert.cta}
      />
      <AFSSPrograms management={cert.professional_management} />
      <Certifications certifications={home.certifications} />
    </main>
  );
}
