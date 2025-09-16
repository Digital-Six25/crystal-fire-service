import { getImageUrl } from "@/lib/getImageUrl";
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

  // Hero stats (resolve icons to URLs)
  const stats = await Promise.all(
    acf.hero.stats.map(async (s: any) => ({
      ...s,
      icon: s.icon ? await getImageUrl(s.icon) : null,
    }))
  );

  // Service cards (resolve icons + images)
  const serviceCards = await Promise.all(
    acf.services.cards.map(async (card: any) => ({
      ...card,
      icon: card.icon ? await getImageUrl(card.icon) : null,
      img: card.img ? await getImageUrl(card.img) : null,
    }))
  );

  // Get Started image
  const getStartedImg = acf.get_started.img
    ? await getImageUrl(acf.get_started.img)
    : null;

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
