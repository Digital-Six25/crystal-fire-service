import type { Metadata } from "next"
import AFSSHero from "@/components/certification/afss-hero"
import AFSSContent from "@/components/certification/afss-content"
import EFSMSection from "@/components/certification/efsm-section"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "AFSS Management Programs - Crystal Fire Services",
  description:
    "Professional AFSS management programs to streamline Annual Fire Safety Statement lodgement. Expert compliance solutions for fire safety regulations across Australia.",
  keywords:
    "AFSS management, Annual Fire Safety Statement, fire safety compliance, building compliance, fire protection documentation, Crystal Fire Services, EFSM, Essential Fire Safety Measures",
}

export default function AFSSManagementPage() {
  return (
    <main>
      <AFSSHero />
      <AFSSContent />
      <EFSMSection />
      <Certifications />
    </main>
  )
}
