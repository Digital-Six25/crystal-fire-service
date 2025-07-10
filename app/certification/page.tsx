import type { Metadata } from "next"
import CertificationHero from "@/components/certification/certification-hero"
import CertificationContent from "@/components/certification/certification-content"
import AFSSPrograms from "@/components/certification/afss-programs"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Certification - Crystal Fire Services",
  description:
    "Professional fire safety certification services including AFSS management programs and FPA accreditation. Expert compliance solutions for Annual Fire Safety Statements.",
  keywords:
    "fire safety certification, AFSS, Annual Fire Safety Statement, FPA accreditation, fire protection compliance, NSW FPAS",
}

export default function CertificationPage() {
  return (
    <main>
      <CertificationHero />
      <CertificationContent />
      <AFSSPrograms />
      <Certifications />
    </main>
  )
}
