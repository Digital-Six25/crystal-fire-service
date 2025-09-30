import { useQuery } from "@tanstack/react-query";

// 1. Define a TypeScript type for the Media page data
export interface MediaPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
  };
  media: {
    pill: string;
    title: string;
    subtitle: string;
    cards: {
      icon: string | null;
      coverage_type: string;
      date: string;
      title: string;
      subtitle: string;
      btn: { label: string; url: string };
    }[];
  };
  cta: {
    icon: string | null;
    title: string;
    subtitle: string;
    btn: { label: string; url: string };
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 2. Fetcher function
async function fetchMediaPageData(): Promise<MediaPageData> {
  const res = await fetch(`${API_URL}?slug=media`);
  if (!res.ok) throw new Error("Failed to fetch Media page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // Media cards
  const mediaCards = (acf.media.cards ?? []).map((card: any) => ({
    ...card,
    icon: card.icon ?? null,
  }));

  // CTA
  const cta = {
    ...acf.cta,
    icon: acf.cta.icon ?? null,
  };

  return {
    hero: acf.hero,
    media: {
      ...acf.media,
      cards: mediaCards,
    },
    cta,
  };
}

// 3. React Query hook
export function useMediaPageData() {
  return useQuery({
    queryKey: ["mediaPage"],
    queryFn: fetchMediaPageData,
  });
}
