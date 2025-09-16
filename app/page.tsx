"use client";
import Certifications from "@/components/certifications";
import Equipment from "@/components/equipment";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { useHomepageData } from "@/hooks/useHomepageData";

export default function Home() {
  const { data, isLoading, error } = useHomepageData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  if (!data) return <p>No data found</p>;

  const { hero, certifications, maintain, service } = data;
  return (
    <main>
      <Hero hero={hero} />
      <Services service={service} />
      <Equipment maintain={maintain} />
      <Certifications certifications={certifications} />
    </main>
  );
}
