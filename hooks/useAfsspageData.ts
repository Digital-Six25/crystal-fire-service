// hooks/useAfssPageData.ts
import { useQuery } from "@tanstack/react-query";

// 1. Define a TypeScript type for the AFSS page data
export interface AfssPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    btn: { label: string; url: string };
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
  afss_management_solutions: {
    pill: string;
    title: string;
    subtitle: string;
    cards: {
      icon: string | null;
      title: string;
      subtitle: string;
    }[];
  };
  service_process: {
    title: string;
    cards: {
      step: string;
      title: string;
      subtitle: string;
    }[];
    types: { type: string }[];
    subtext: string;
  };
  service_offer: {
    title: string;
    left_para: string;
    right_para: string;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 2. Fetcher function
async function fetchAfssPageData(): Promise<AfssPageData> {
  const res = await fetch(`${API_URL}?slug=afss`);
  if (!res.ok) throw new Error("Failed to fetch AFSS page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // CTA cards
  const ctaCards = acf.cta.cards.map((c: any) => ({
    ...c,
    icon: c.icon || null,
  }));

  // AFSS Management Solutions cards
  const afssCards = acf.afss_management_solutions.cards.map((c: any) => ({
    ...c,
    icon: c.icon || null,
  }));

  return {
    hero: acf.hero,
    cta: {
      ...acf.cta,
      cards: ctaCards,
    },
    afss_management_solutions: {
      ...acf.afss_management_solutions,
      cards: afssCards,
    },
    service_process: acf.service_process,
    service_offer: acf.service_offer,
  };
}

// 3. React Query hook
export function useAfssPageData() {
  return useQuery({
    queryKey: ["afssPage"],
    queryFn: fetchAfssPageData,
  });
}
