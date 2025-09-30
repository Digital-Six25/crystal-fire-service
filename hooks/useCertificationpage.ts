// hooks/useCertificationPageData.ts
"use client";

import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ---------- Types ----------
export interface CertificationPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    btn: { label: string; url: string };
  };
  certificates: {
    img: string | null;
    title: string;
    subtitle: string;
  }[];
  industry_recognition: {
    pill: string;
    title: string;
    subtitle: string;
    cards: { icon: string | null; title: string; subtitle: string }[];
  };
  certification_process: {
    pill: string;
    title: string;
    subtitle: string;
    cards: { title: string; subtitle: string }[];
    img: string | null;
  };
  professional_expertise: {
    pill: string;
    title: string;
    subtitle: string;
    cards: { title: string; subtitle: string }[];
    img: string | null;
  };
  cta: {
    title: string;
    subtitle: string;
    cards: {
      icon: string | null;
      title: string;
      subtitle: string;
      btn: { label: string; url: string };
    }[];
  };
  professional_management: {
    pill: string;
    title: string;
    subtitle: string;
    cards: { icon: string | null; title: string; subtitle: string }[];
    btn1: { label: string; url: string };
    btn2: { label: string; url: string };
  };
}

// ---------- Fetcher ----------
async function fetchCertificationPageData(): Promise<CertificationPageData> {
  const res = await fetch(`${API_URL}?slug=certification`);
  if (!res.ok) throw new Error("Failed to fetch Certification page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // Certificates
  const certificates = (acf.certificates ?? []).map((c: any) => ({
    ...c,
    img: c.img || null,
  }));

  // Industry recognition cards
  const industryRecognitionCards = (acf.industry_recognition.cards ?? []).map(
    (card: any) => ({
      ...card,
      icon: card.icon || null,
    })
  );

  // Certification process image
  const certProcessImg = acf.certification_process?.img || null;

  // Professional expertise image
  const profExpertiseImg = acf.professional_expertise?.img || null;

  // CTA cards
  const ctaCards = (acf.cta.cards ?? []).map((c: any) => ({
    ...c,
    icon: c.icon || null,
  }));

  // Professional management cards
  const profManagementCards = (acf.professional_management.cards ?? []).map(
    (c: any) => ({
      ...c,
      icon: c.icon || null,
    })
  );

  return {
    hero: acf.hero,
    certificates,
    industry_recognition: {
      ...acf.industry_recognition,
      cards: industryRecognitionCards,
    },
    certification_process: {
      ...acf.certification_process,
      img: certProcessImg,
    },
    professional_expertise: {
      ...acf.professional_expertise,
      img: profExpertiseImg,
    },
    cta: {
      ...acf.cta,
      cards: ctaCards,
    },
    professional_management: {
      ...acf.professional_management,
      cards: profManagementCards,
    },
  };
}

// ---------- Hook ----------
export function useCertificationPageData() {
  return useQuery({
    queryKey: ["certificationPage"],
    queryFn: fetchCertificationPageData,
  });
}
