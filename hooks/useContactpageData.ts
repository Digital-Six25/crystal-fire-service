// hooks/useContactPageData.ts
"use client";

import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ---------- Types ----------
export interface ContactPageData {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
  };
  get_in_touch: {
    title: string;
    subtitle: string;
    call: {
      title: string;
      phone: string;
      subtitle: string;
    };
    email: {
      title: string;
      email: string;
      subtitle: string;
    };
  };
  locations: {
    pill: string;
    title: string;
    subtitle: string;
    cards: {
      main_office: boolean;
      title: string;
      address: string;
      phone: string;
      opening_time: string;
      direction_button: { label: string; url: string };
      call_button: { label: string; url: string };
    }[];
  };
  map_location: { latitude: string; longitude: string };
}

// ---------- Fetcher ----------
async function fetchContactPageData(): Promise<ContactPageData> {
  const res = await fetch(`${API_URL}?slug=contact`);
  if (!res.ok) throw new Error("Failed to fetch Contact page data");

  const pages = await res.json();
  const data = pages[0];
  const acf = data.acf;

  return {
    hero: {
      pill: acf.hero?.pill ?? "",
      title: acf.hero?.title ?? "",
      subtitle: acf.hero?.subtitle ?? "",
    },
    get_in_touch: {
      title: acf.get_in_touch?.title ?? "",
      subtitle: acf.get_in_touch?.subtitle ?? "",
      call: {
        title: acf.get_in_touch?.call?.title ?? "",
        phone: acf.get_in_touch?.call?.phone ?? "",
        subtitle: acf.get_in_touch?.call?.subtitle ?? "",
      },
      email: {
        title: acf.get_in_touch?.email?.title ?? "",
        email: acf.get_in_touch?.email?.email ?? "",
        subtitle: acf.get_in_touch?.email?.subtitle ?? "",
      },
    },
    locations: {
      pill: acf.locations?.pill ?? "",
      title: acf.locations?.title ?? "",
      subtitle: acf.locations?.subtitle ?? "",
      cards: (acf.locations?.cards ?? []).map((c: any) => ({
        main_office: !!c.main_office,
        title: c.title ?? "",
        address: c.address ?? "",
        phone: c.phone ?? "",
        opening_time: c.opening_time ?? "",
        direction_button: {
          label: c.direction_button?.label ?? "",
          url: c.direction_button?.url ?? "#",
        },
        call_button: {
          label: c.call_button?.label ?? "",
          url: c.call_button?.url ?? "#",
        },
      })),
    },
    map_location: {
      latitude: acf.map_location?.latitude ?? "",
      longitude: acf.map_location?.longitude ?? "",
    },
  };
}

// ---------- Hook ----------
export function useContactPageData() {
  return useQuery({
    queryKey: ["contactPage"],
    queryFn: fetchContactPageData,
  });
}
