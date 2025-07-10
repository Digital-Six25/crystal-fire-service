import type { Metadata } from "next"
import InstallationHero from "@/components/fire-protection/installation-hero"
import InstallationContent from "@/components/fire-protection/installation-content"
import Equipment from "@/components/equipment"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Fire System Installation - Crystal Fire Services",
  description:
    "Professional fire system installation services including wet, dry and passive fire systems, portable firefighting equipment for all building types and industries across Australia.",
  keywords:
    "fire system installation, fire sprinkler installation, fire alarm installation, smoke detection, EWIS systems, fire protection installation, Australia",
}

export default function InstallationPage() {
  return (
    <main>
      <InstallationHero />
      <InstallationContent />
      <Equipment />
      <Certifications />
    </main>
  )
}
