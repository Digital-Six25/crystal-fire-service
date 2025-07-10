"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const installationServices = [
  "Smoke detection and heat detection systems",
  "EWIS systems",
  "Sprinkler and hydrant systems",
  "Fire pumpsets",
  "Extinguishers",
  "Fire Hose Reel Systems",
]

const additionalServices = [
  "Smoke alarms",
  "Exit and Emergency Lighting",
  "Fire doors and other passive fire protection",
  "Special Hazard and Gaseous Systems",
  "Fire System Block Plans",
]

export default function InstallationContent() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      {/* Main Content Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Image */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-10%20at%2009.13.07-hH7oxmfwDRaeSos24bQjOlYsRiWXpH.png"
                  alt="Fire sprinkler head installation"
                  fill
                  className="object-cover object-left"
                />
              </div>
            </div>

            {/* Center Text Content */}
            <div
              className={`text-center transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-gray-600 leading-relaxed mb-6">
                We install wet, dry and passive fire systems as well as portable firefighting equipment to all building
                types and industries
              </p>

              <p className="text-gray-600 leading-relaxed">
                All installations are commissioned in accordance with the relevant Australian Standard and current
                Building Code of Australia. The Final Fire Safety Certificate is provided by Crystal Fire Services and
                endorsed by a Competent Fire Safety Practitioner.
              </p>
            </div>

            {/* Right Image */}
            <div
              className={`transition-all duration-1000 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-10%20at%2009.13.07-hH7oxmfwDRaeSos24bQjOlYsRiWXpH.png"
                  alt="Fire safety equipment installation work"
                  fill
                  className="object-cover object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensed Services Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-4">WE ARE LICENSED TO INSTALL:</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Column */}
            <div
              className={`space-y-4 transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              {installationServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-300">{service}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div
              className={`space-y-4 transition-all duration-1000 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-gray-400 mr-3">—</span>
                  <span className="text-gray-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
