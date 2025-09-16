import { getImageUrl } from "@/lib/getImageUrl";
import { useQuery } from "@tanstack/react-query";

// 1. Define a TypeScript type for the Resources page data
export interface ResourcesPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    certificates: {
      title: string;
      image: string[]; // URLs of images
    };
    btn: {
      label: string;
      url: string;
    };
  };
  resources: {
    pill: string;
    title: string;
    subtitle: string;
    tags: { tag: string }[];
    cards: {
      icon: string | null;
      tag: string;
      title: string;
      subtitle: string;
      download_link: string;
    }[];
  };
  cta: {
    icon: string | null;
    title: string;
    subtitle: string;
    btn: { label: string; url: string }[];
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 2. Fetcher function
async function fetchResourcesPageData(): Promise<ResourcesPageData> {
  const res = await fetch(`${API_URL}?slug=resources`);
  if (!res.ok) throw new Error("Failed to fetch Resources page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // Hero certificates images
  const certificateImages = await Promise.all(
    (acf.hero.certificates.image || []).map(async (img: any) =>
      img.img ? await getImageUrl(img.img) : null
    )
  );

  // Resources cards with icon URLs
  const resourceCards = await Promise.all(
    acf.resources.cards.map(async (c: any) => ({
      ...c,
      icon: c.icon ? await getImageUrl(c.icon) : null,
    }))
  );

  // CTA icon
  const ctaIcon = acf.cta.icon ? await getImageUrl(acf.cta.icon) : null;

  return {
    hero: {
      ...acf.hero,
      certificates: {
        ...acf.hero.certificates,
        image: certificateImages.filter(Boolean) as string[],
      },
    },
    resources: {
      ...acf.resources,
      cards: resourceCards,
    },
    cta: {
      ...acf.cta,
      icon: ctaIcon,
    },
  };
}

// 3. React Query hook
export function useResourcesPageData() {
  return useQuery({
    queryKey: ["resourcesPage"],
    queryFn: fetchResourcesPageData,
  });
}
