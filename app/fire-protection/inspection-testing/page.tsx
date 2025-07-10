import type { Metadata } from "next"
import InspectionTestingHero from "@/components/fire-protection/inspection-testing-hero"
import InspectionTestingContent from "@/components/fire-protection/inspection-testing-content"
import Equipment from "@/components/equipment"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Fire System Testing & Inspection - Crystal Fire Services",
  description:
    "Professional fire system testing and inspection services. AS1851 compliant testing for fire sprinklers, alarms, emergency lighting, and all fire protection systems across Australia.",
  keywords:
    "fire system testing, fire inspection, AS1851 testing, fire sprinkler testing, fire alarm testing, emergency lighting testing, fire protection inspection, Australia",
}

export default function InspectionTestingPage() {
  return (
    <main>
      <InspectionTestingHero />
      <InspectionTestingContent />
      <Equipment />
      <Certifications />
    </main>
  )
}
