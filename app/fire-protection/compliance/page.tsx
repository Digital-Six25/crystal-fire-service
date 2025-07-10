import type { Metadata } from "next"
import ComplianceHero from "@/components/fire-protection/compliance-hero"
import ComplianceContent from "@/components/fire-protection/compliance-content"
import Equipment from "@/components/equipment"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Fire Protection Compliance - Crystal Fire Services",
  description:
    "Professional fire protection compliance services including asset based reporting, AFSS reports, AS1851 testing, and mechanical interface testing across Australia.",
  keywords:
    "fire protection compliance, AFSS reports, AS1851 testing, fire safety compliance, asset based reporting, mechanical interface testing, Australia",
}

export default function CompliancePage() {
  return (
    <main>
      <ComplianceHero />
      <ComplianceContent />
      <Equipment />
      <Certifications />
    </main>
  )
}
