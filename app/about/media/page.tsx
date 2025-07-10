import type { Metadata } from "next"
import MediaHero from "@/components/about/media-hero"
import MediaContent from "@/components/about/media-content"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Media - Crystal Fire Services",
  description:
    "Latest news, press releases, and media coverage from Crystal Fire Services. Stay updated with fire protection industry developments and company announcements.",
  keywords: "media, news, press releases, Crystal Fire Services, fire protection news, industry updates",
}

export default function MediaPage() {
  return (
    <main>
      <MediaHero />
      <MediaContent />
      <Certifications />
    </main>
  )
}
