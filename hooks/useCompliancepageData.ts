// hooks/useCompliancePageData.ts
"use client";

import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ---------- Types ----------
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

// ---------- Fetcher ----------
async function fetchCompliancePageData(): Promise<CompliancePageData> {
  const res = await fetch(`${API_URL}?slug=compliance`);
  if (!res.ok) throw new Error("Failed to fetch Compliance page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // Compliance Service Certificates (image URLs directly from ACF)
  const certificates = (acf.compliance_service.certificates ?? []).map(
    (c: any) => ({
      img: c.img || null,
    })
  );

  // Compliance Service Image
  const serviceImage = acf.compliance_service.img || null;

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

// ---------- Hook ----------
export function useCompliancePageData() {
  return useQuery({
    queryKey: ["compliancePage"],
    queryFn: fetchCompliancePageData,
  });
}
