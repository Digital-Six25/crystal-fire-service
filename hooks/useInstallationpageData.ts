import { getImageUrl } from "@/lib/getImageUrl";
import { useQuery } from "@tanstack/react-query";

// 1. Define a TypeScript type for the Installation page data
export interface InstallationPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    btns: { label: string; url: string }[];
  };
  professional_installation: {
    img: string | null;
    tag: string;
    title: string;
    subtitle: string;
    cards: {
      icon: string | null;
      title: string;
      subtitle: string;
    }[];
  };
  licensed_installation: {
    pill: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      types: { type: string }[];
    }[];
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 2. Fetcher function
async function fetchInstallationPageData(): Promise<InstallationPageData> {
  const res = await fetch(`${API_URL}?slug=installation`);
  if (!res.ok) throw new Error("Failed to fetch Installation page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // Professional Installation main image
  const profImage = acf.professional_installation.img
    ? await getImageUrl(acf.professional_installation.img)
    : null;

  // Professional Installation cards icons
  const profCards = await Promise.all(
    acf.professional_installation.cards.map(async (card: any) => ({
      icon: card.icon ? await getImageUrl(card.icon) : null,
      title: card.title,
      subtitle: card.subtitle,
    }))
  );

  return {
    hero: acf.hero,
    professional_installation: {
      ...acf.professional_installation,
      img: profImage,
      cards: profCards,
    },
    licensed_installation: acf.licensed_installation,
  };
}

// 3. React Query hook
export function useInstallationPageData() {
  return useQuery({
    queryKey: ["installationPage"],
    queryFn: fetchInstallationPageData,
  });
}
