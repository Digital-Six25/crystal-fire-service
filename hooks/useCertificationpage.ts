// hooks/useCertificationPageData.ts
"use client";

import { getImageUrl } from "@/lib/getImageUrl";
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
  const certificates = await Promise.all(
    (acf.certificates ?? []).map(async (c: any) => ({
      ...c,
      img: c.img ? await getImageUrl(c.img) : null,
    }))
  );

  // Industry recognition cards
  const industryRecognitionCards = await Promise.all(
    (acf.industry_recognition.cards ?? []).map(async (card: any) => ({
      ...card,
      icon: card.icon ? await getImageUrl(card.icon) : null,
    }))
  );

  // Certification process image
  const certProcessImg = acf.certification_process?.img
    ? await getImageUrl(acf.certification_process.img)
    : null;

  // Professional expertise image
  const profExpertiseImg = acf.professional_expertise?.img
    ? await getImageUrl(acf.professional_expertise.img)
    : null;

  // CTA cards
  const ctaCards = await Promise.all(
    (acf.cta.cards ?? []).map(async (c: any) => ({
      ...c,
      icon: c.icon ? await getImageUrl(c.icon) : null,
    }))
  );

  // Professional management cards
  const profManagementCards = await Promise.all(
    (acf.professional_management.cards ?? []).map(async (c: any) => ({
      ...c,
      icon: c.icon ? await getImageUrl(c.icon) : null,
    }))
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
