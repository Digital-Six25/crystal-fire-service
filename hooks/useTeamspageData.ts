// hooks/useTeamsPageData.ts
"use client";

import { useQuery } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// ---------- Types ----------
export interface Hero {
  pill: string;
  title: string;
  subtitle: string;
  button: {
    label: string;
    url: string;
  };
  img: string | null;
}

export interface TeamMember {
  image: string | null;
  name: string;
  designation: string;
  experience: string | null;
  specialties: string | null;
  background: string | null;
  contact_info: {
    email?: string;
    phone?: string;
    linkedin_profile?: string;
  };
}

export interface TeamsPageData {
  hero: Hero;
  teams: TeamMember[];
}

// ---------- Fetcher ----------
async function fetchTeamsPageData(): Promise<TeamsPageData> {
  const res = await fetch(`${API_URL}?slug=teams`);
  if (!res.ok) throw new Error("Failed to fetch Teams page data");

  const json = await res.json();
  const page = json[0]; // teams page is first in response

  const acf = page.acf ?? {};

  return {
    hero: {
      pill: acf.hero?.pill ?? "",
      title: acf.hero?.title ?? "",
      subtitle: acf.hero?.subtitle ?? "",
      button: {
        label: acf.hero?.button?.label ?? "",
        url: acf.hero?.button?.url ?? "#",
      },
      img: acf.hero?.img ?? null, // return URL directly from ACF
    },
    teams: (acf.teams ?? []).map((t: any) => ({
      image: t.image ?? null, // return URL directly from ACF
      name: t.name ?? "",
      designation: t.designation ?? "",
      experience: t.experience ?? "",
      specialties: t.specialties ?? null,
      background: t.background ?? null,
      contact_info: {
        email: t.contact_info?.email,
        phone: t.contact_info?.phone,
        linkedin_profile: t.contact_info?.linkedin_profile,
      },
    })),
  };
}

// ---------- Hook ----------
export function useTeamsPageData() {
  return useQuery({
    queryKey: ["teamsPageData"],
    queryFn: fetchTeamsPageData,
  });
}
