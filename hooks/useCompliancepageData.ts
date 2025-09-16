import { getImageUrl } from "@/lib/getImageUrl";
import { useQuery } from "@tanstack/react-query";

// 1. Define a TypeScript type for the Compliance page data
export interface CompliancePageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    btn1: { label: string; url: string };
    btn2: { label: string; url: string };
    tags: { tag: string }[];
  };
  compliance_service: {
    title: string;
    subtitle: string;
    services: { service: string }[];
    certificates: { img: string | null }[];
    img: string | null;
  };
  compliance_requirements: {
    pill: string;
    title: string;
    cards: {
      title: string;
      subtitle: string;
    }[];
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 2. Fetcher function
async function fetchCompliancePageData(): Promise<CompliancePageData> {
  const res = await fetch(`${API_URL}?slug=compliance`);
  if (!res.ok) throw new Error("Failed to fetch Compliance page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // Compliance Service Certificates
  const certificates = await Promise.all(
    acf.compliance_service.certificates.map(async (c: any) => ({
      img: c.img ? await getImageUrl(c.img) : null,
    }))
  );

  // Compliance Service Image
  const serviceImage = acf.compliance_service.img
    ? await getImageUrl(acf.compliance_service.img)
    : null;

  return {
    hero: acf.hero,
    compliance_service: {
      ...acf.compliance_service,
      certificates,
      img: serviceImage,
    },
    compliance_requirements: acf.compliance_requirements,
  };
}

// 3. React Query hook
export function useCompliancePageData() {
  return useQuery({
    queryKey: ["compliancePage"],
    queryFn: fetchCompliancePageData,
  });
}
