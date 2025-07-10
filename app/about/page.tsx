import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import AboutContent from "@/components/about/about-content"
import Services from "@/components/services"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "About Us - Crystal Fire Services",
  description:
    "Learn about Crystal Fire Services, our mission, values, and commitment to fire protection excellence across Australia. Professional fire safety solutions since establishment.",
  keywords: "about, Crystal Fire Services, fire protection, company, mission, values, professional fire safety",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <Services />
      <Certifications />
    </main>
  )
}
