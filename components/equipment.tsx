"use client"

import { Flame, Wifi, Droplets, Volume2, Zap, Sprout } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const equipment = [
  {
    icon: Flame,
    title: "PORTABLE FIRE EQUIPMENT",
    description: "Fire extinguishers and portable fire safety equipment",
  },
  {
    icon: Wifi,
    title: "FIRE DETECTION SYSTEMS",
    description: "Smoke detectors and fire alarm systems",
  },
  {
    icon: Droplets,
    title: "HYDRANTS & HOSE REELS",
    description: "Fire hydrant systems and hose reel installations",
  },
  {
    icon: Volume2,
    title: "EWIS SYSTEMS",
    description: "Emergency Warning and Intercommunication Systems",
  },
  {
    icon: Zap,
    title: "FIRE PUMPSETS",
    description: "Fire pump systems and equipment",
  },
  {
    icon: Sprout,
    title: "SPRINKLER & MIST SYSTEMS",
    description: "Automatic sprinkler and water mist systems",
  },
]

export default function Equipment() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">WE INSTALL & MAINTAIN:</h2>
          <div className="w-24 h-0.5 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              className={`text-center group hover:transform hover:scale-105 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <item.icon className="w-10 h-10 text-gray-700 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed hidden sm:block">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
