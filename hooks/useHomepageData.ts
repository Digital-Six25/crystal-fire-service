// hooks/useHomepageData.ts
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
  const heroCertifications = acf.hero.certifications.map((c: any) => ({
    id: c.certificate,
    url: c.certificate_url || c.certificate, // URL should now come directly from ACF
  }));

  // Services
  const serviceCards = acf.service.cards.map((card: any) => ({
    ...card,
    icon: card.icon || null, // Already a URL from ACF
  }));

  // Maintain
  const maintainCards = acf.maintain.cards.map((card: any) => ({
    ...card,
    icon: card.icon || null,
  }));

  // Certifications
  const certificationCards = acf.certifications.cards.map((c: any) => ({
    title: c.card.title,
    subtitle: c.card.subtitle,
    image: c.card.image || null, // Already a URL
  }));

  return {
    hero: {
      ...acf.hero,
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
