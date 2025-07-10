import type { Metadata } from "next"
import UptickHero from "@/components/about/uptick-hero"
import UptickContent from "@/components/about/uptick-content"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Uptick - Crystal Fire Services",
  description:
    "Learn about Uptick, Australia's leading job and asset management system for fire maintenance. Advanced fire protection management technology used by Crystal Fire Services.",
  keywords:
    "Uptick, fire maintenance, asset management, fire protection software, Australia, Crystal Fire Services, AS1851",
}

export default function UptickPage() {
  return (
    <main>
      <UptickHero />
      <UptickContent />
      <Certifications />
    </main>
  )
}
