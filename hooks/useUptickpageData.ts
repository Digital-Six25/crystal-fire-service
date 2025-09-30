// hooks/useUptickPageData.ts
import { useQuery } from "@tanstack/react-query";

// 1. Define a TypeScript type for the Uptick page data
export interface UptickPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
  };
  about: {
    pill: string;
    title: string;
    subtitle: string;
    info: string;
    img: string | null;
    cards: {
      title: string;
      subtitle: string;
    }[];
  };
  benefits: {
    title: string;
    cards: {
      icon: string | null;
      title: string;
      subtitle: string;
    }[];
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 2. Fetcher function
async function fetchUptickPageData(): Promise<UptickPageData> {
  const res = await fetch(`${API_URL}?slug=uptick`);
  if (!res.ok) throw new Error("Failed to fetch Uptick page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  return {
    hero: {
      ...acf.hero,
    },
    about: {
      ...acf.about,
      img: acf.about.img ?? null, // return URL directly from ACF
    },
    benefits: {
      ...acf.benefits,
      cards: (acf.benefits.cards ?? []).map((c: any) => ({
        icon: c.icon ?? null, // return URL directly from ACF
        title: c.title ?? "",
        subtitle: c.subtitle ?? "",
      })),
    },
  };
}

// 3. React Query hook
export function useUptickPageData() {
  return useQuery({
    queryKey: ["uptickPage"],
    queryFn: fetchUptickPageData,
  });
}
