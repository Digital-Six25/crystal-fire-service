"use client";
import LeadershipTeam from "@/components/about/leadership-team";
import TeamHero from "@/components/about/team-hero";
import Certifications from "@/components/certifications";
import HomeSkeleton from "@/components/homePageSkeleton";
import { useHomepageData } from "@/hooks/useHomepageData";
import { useTeamsPageData } from "@/hooks/useTeamspageData";

export default function OurTeamPage() {
  // ALL hooks at the top
  const {
    data: home,
    isLoading: homeLoading,
    error: homeError,
  } = useHomepageData();

  const {
    data: teamsData,
    isLoading: teamsLoading,
    error: teamsError,
  } = useTeamsPageData();

  // Conditional rendering based on loading/error
  if (homeLoading || teamsLoading) return <HomeSkeleton />;
  if (homeError || teamsError) return <p>Error loading data</p>;
  if (!home || !teamsData) return <p>No data found</p>;

  return (
    <main>
      <TeamHero hero={teamsData.hero} />
      <LeadershipTeam teams={teamsData.teams} />
      <Certifications certifications={home.certifications} />
    </main>
  );
}
