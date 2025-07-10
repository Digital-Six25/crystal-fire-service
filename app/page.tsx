import Hero from "@/components/hero"
import Services from "@/components/services"
import Purpose from "@/components/purpose"
import Equipment from "@/components/equipment"
import Certifications from "@/components/certifications"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Equipment />
      <Purpose />
      <Certifications />
    </main>
  )
}
