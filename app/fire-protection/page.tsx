import type { Metadata } from "next"
import FireProtectionHero from "@/components/fire-protection/fire-protection-hero"
import FireProtectionContent from "@/components/fire-protection/fire-protection-content"
import Equipment from "@/components/equipment"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Fire Protection Services - Crystal Fire Services",
  description:
    "Professional fire protection services including installation, compliance, and inspection testing. Comprehensive fire safety solutions for commercial, residential, and industrial properties across Australia.",
  keywords:
    "fire protection services, fire system installation, fire safety compliance, inspection testing, fire sprinklers, fire alarms, Australia",
}

export default function FireProtectionPage() {
  return (
    <main>
      <FireProtectionHero />
      <FireProtectionContent />
      <Equipment />
      <Certifications />
    </main>
  )
}
