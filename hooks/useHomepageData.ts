// hooks/useHomepageData.ts
import { getImageUrl } from "@/lib/getImageUrl";
import { HomepageData } from "@/types/homepage";
import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchHomepageData(): Promise<HomepageData> {
  const res = await fetch(`${API_URL}?slug=home`);
  if (!res.ok) throw new Error("Failed to fetch homepage data");

  const pages = await res.json();
  const data = pages[0]; // Home page entry
  const acf = data.acf;

  // Hero
  const heroImage = await getImageUrl(acf.hero.image);
  const heroCertifications = await Promise.all(
    acf.hero.certifications.map(async (c: { certificate: number }) => ({
      id: c.certificate,
      url: await getImageUrl(c.certificate),
    }))
  );

  // Services
  const serviceCards = await Promise.all(
    acf.service.cards.map(async (card: any) => ({
      ...card,
      icon: await getImageUrl(card.icon),
    }))
  );

  // Maintain
  const maintainCards = await Promise.all(
    acf.maintain.cards.map(async (card: any) => ({
      ...card,
      icon: card.icon ? await getImageUrl(card.icon) : null,
    }))
  );

  // Certifications
  const certificationCards = await Promise.all(
    acf.certifications.cards.map(async (c: any) => ({
      title: c.card.title,
      subtitle: c.card.subtitle,
      image: await getImageUrl(c.card.image),
    }))
  );

  return {
    hero: {
      ...acf.hero,
      image: heroImage,
      certifications: heroCertifications,
    },
    service: {
      ...acf.service,
      cards: serviceCards,
    },
    maintain: {
      ...acf.maintain,
      cards: maintainCards,
    },
    certifications: {
      ...acf.certifications,
      cards: certificationCards,
    },
  };
}

export function useHomepageData() {
  return useQuery({
    queryKey: ["homepage"],
    queryFn: fetchHomepageData,
  });
}
