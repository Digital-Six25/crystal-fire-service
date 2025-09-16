import { getImageUrl } from "@/lib/getImageUrl";
import { useQuery } from "@tanstack/react-query";

// 1. Define a TypeScript type for the About page data
export interface AboutPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    button: { label: string; url: string };
    image: string | null;
  };
  foundation: {
    title: string;
    subtitle: string;
    cards: {
      icon: string | null;
      title: string;
      subtitle: string;
    }[];
  };
  purpose: {
    pill: string;
    title: string;
    subtitle: string;
    button: { label: string; url: string };
    image: string | null;
  };
  expertise: {
    pill: string;
    title: string;
    subtitle: string;
    types: { type: string }[];
    image: string | null;
  };
  achievements: {
    title: string;
    subtitle: string;
    stats: {
      icon: string | null;
      num: string;
      title: string;
      subtitle: string;
    }[];
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 2. Fetcher function
async function fetchAboutPageData(): Promise<AboutPageData> {
  const res = await fetch(`${API_URL}?slug=about`);
  if (!res.ok) throw new Error("Failed to fetch About page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // Hero
  const heroImage = acf.hero.image ? await getImageUrl(acf.hero.image) : null;

  // Foundation
  const foundationCards = await Promise.all(
    acf.foundation.cards.map(async (c: any) => ({
      ...c,
      icon: c.icon ? await getImageUrl(c.icon) : null,
    }))
  );

  // Purpose
  const purposeImage = acf.purpose.image
    ? await getImageUrl(acf.purpose.image)
    : null;

  // Expertise
  const expertiseImage = acf.expertise.image
    ? await getImageUrl(acf.expertise.image)
    : null;

  // Achievements
  const achievementStats = await Promise.all(
    acf.achievements.stats.map(async (s: any) => ({
      ...s,
      icon: s.icon ? await getImageUrl(s.icon) : null,
    }))
  );

  return {
    hero: {
      ...acf.hero,
      image: heroImage,
    },
    foundation: {
      ...acf.foundation,
      cards: foundationCards,
    },
    purpose: {
      ...acf.purpose,
      image: purposeImage,
    },
    expertise: {
      ...acf.expertise,
      image: expertiseImage,
    },
    achievements: {
      ...acf.achievements,
      stats: achievementStats,
    },
  };
}

// 3. React Query hook
export function useAboutPageData() {
  return useQuery({
    queryKey: ["aboutPage"],
    queryFn: fetchAboutPageData,
  });
}
