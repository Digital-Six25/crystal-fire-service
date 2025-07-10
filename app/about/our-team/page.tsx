import type { Metadata } from "next"
import TeamHero from "@/components/about/team-hero"
import LeadershipTeam from "@/components/about/leadership-team"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Our Team - Crystal Fire Services",
  description:
    "Meet the experienced leadership team at Crystal Fire Services. Learn about our Managing Director Chris Osborne and General Manager Ryan Libbis.",
  keywords: "team, leadership, Chris Osborne, Ryan Libbis, Crystal Fire Services, fire protection experts, management",
}

export default function OurTeamPage() {
  return (
    <main>
      <TeamHero />
      <LeadershipTeam />
      <Certifications />
    </main>
  )
}
