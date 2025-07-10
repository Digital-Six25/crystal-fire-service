import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactSection from "@/components/contact/contact-section"
import ContactMap from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us - Crystal Fire Services",
  description:
    "Get in touch with Crystal Fire Services for professional fire protection services. Contact our experts for installation, maintenance, and certification across Australia.",
  keywords: "contact, fire protection, fire safety, Australia, Crystal Fire Services",
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
      <ContactMap />
    </main>
  )
}
