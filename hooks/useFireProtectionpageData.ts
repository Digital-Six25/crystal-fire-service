import { useQuery } from "@tanstack/react-query";

// 1. Define TypeScript type for Fire Protection page data
export interface FireProtectionPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    btns: { label: string; url: string }[];
    stats: { icon: string | null; num: string; title: string }[];
  };
  services: {
    pill: string;
    title: string;
    subtitle: string;
    cards: {
      icon: string | null;
      img: string | null;
      title: string;
      subtitle: string;
      types: { type: string }[];
      btn: { label: string; url: string };
    }[];
  };
  get_started: {
    pill: string;
    title: string;
    subtitle: string;
    cards: { title: string; subtitle: string }[];
    btns: { label: string; url: string }[];
    img: string | null;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 2. Fetcher function
async function fetchFireProtectionPageData(): Promise<FireProtectionPageData> {
  const res = await fetch(`${API_URL}?slug=fire-protection`);
  if (!res.ok) throw new Error("Failed to fetch Fire Protection page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // Hero stats
  const stats = (acf.hero.stats ?? []).map((s: any) => ({
    ...s,
    icon: s.icon ?? null,
  }));

  // Service cards
  const serviceCards = (acf.services.cards ?? []).map((card: any) => ({
    ...card,
    icon: card.icon ?? null,
    img: card.img ?? null,
  }));

  // Get Started image
  const getStartedImg = acf.get_started.img ?? null;

  return {
    hero: {
      ...acf.hero,
      stats,
    },
    services: {
      ...acf.services,
      cards: serviceCards,
    },
    get_started: {
      ...acf.get_started,
      img: getStartedImg,
    },
  };
}

// 3. React Query hook
export function useFireProtectionPageData() {
  return useQuery({
    queryKey: ["fireProtectionPage"],
    queryFn: fetchFireProtectionPageData,
  });
}
