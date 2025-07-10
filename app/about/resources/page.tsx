import type { Metadata } from "next"
import ResourcesHero from "@/components/about/resources-hero"
import ResourcesContent from "@/components/about/resources-content"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Resources - Crystal Fire Services",
  description:
    "Access helpful fire safety resources, regulations, and compliance documents. Find NSW Government fact sheets, AFSS requirements, and FPA Australia information.",
  keywords:
    "fire safety resources, NSW Government, AFSS, Fire Protection Association Australia, building fire safety, compliance, regulations",
}

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesHero />
      <ResourcesContent />
      <Certifications />
    </main>
  )
}
