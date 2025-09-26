"use client";
import type { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactSection from "@/components/contact/contact-section";
import ContactMap from "@/components/contact/contact-map";
import { useContactPageData } from "@/hooks/useContactpageData";
import ContactSectionSkeleton from "@/components/ContactSkeleton";

export default function ContactPage() {
  const {
    data: contact,
    isLoading: contactLoading,
    error: contactError,
  } = useContactPageData();

  if (contactLoading) return <ContactSectionSkeleton />;
  if (contactError) return <p>Error loading data</p>;
  if (!contact) return <p>No data found</p>;

  return (
    <main>
      <ContactSection hero={contact.hero} info={contact.get_in_touch} />
      <ContactMap
        locations={contact.locations}
        map_location={contact.map_location}
      />
    </main>
  );
}
