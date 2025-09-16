// hooks/useUptickPageData.ts
import { getImageUrl } from "@/lib/getImageUrl";
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

  // About image
  const aboutImage = acf.about.img ? await getImageUrl(acf.about.img) : null;

  // Benefits cards icons
  const benefitCards = await Promise.all(
    acf.benefits.cards.map(async (c: any) => ({
      ...c,
      icon: c.icon ? await getImageUrl(c.icon) : null,
    }))
  );

  return {
    hero: {
      ...acf.hero,
    },
    about: {
      ...acf.about,
      img: aboutImage,
    },
    benefits: {
      ...acf.benefits,
      cards: benefitCards,
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
