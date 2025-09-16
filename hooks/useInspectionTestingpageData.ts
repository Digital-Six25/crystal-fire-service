import { getImageUrl } from "@/lib/getImageUrl";
import { useQuery } from "@tanstack/react-query";

// 1. Define a TypeScript type for the Inspection Testing page data
export interface InspectionTestingPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    btn1: { label: string; url: string };
    btn2: { label: string; url: string };
    tags: { tag: string }[];
  };
  inspection_testing: {
    title: string;
    subtitle: string;
    certificates: { img: string | null }[];
    img: string | null;
  };
  faq: {
    pill: string;
    title: string;
    faqs: { question: string; answer: string }[];
  };
  why_choose_us: {
    pill: string;
    title: string;
    cards: { title: string; subtitle: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      subtitle: string;
      btn_label: string;
      btn_url: string;
    }[];
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// 2. Fetcher function
async function fetchInspectionTestingPageData(): Promise<InspectionTestingPageData> {
  const res = await fetch(`${API_URL}?slug=inspection-testing`);
  if (!res.ok) throw new Error("Failed to fetch Inspection Testing page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  // Inspection Testing certificates
  const certificates = await Promise.all(
    acf.inspection_testing.certificates.map(async (c: any) => ({
      img: c.img ? await getImageUrl(c.img) : null,
    }))
  );

  // Inspection Testing main image
  const inspectionImage = acf.inspection_testing.img
    ? await getImageUrl(acf.inspection_testing.img)
    : null;

  return {
    hero: acf.hero,
    inspection_testing: {
      ...acf.inspection_testing,
      certificates,
      img: inspectionImage,
    },
    faq: acf.faq,
    why_choose_us: acf.why_choose_us,
    cta: acf.cta,
  };
}

// 3. React Query hook
export function useInspectionTestingPageData() {
  return useQuery({
    queryKey: ["inspectionTestingPage"],
    queryFn: fetchInspectionTestingPageData,
  });
}
