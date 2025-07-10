"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function EFSMSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="aspect-square relative rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-09%20at%2010.15.05-1UWuXDBfTb1Vo1He6RQtyYOXsomPgH.png"
                alt="Professional fire sprinkler system - Essential Fire Safety Measures"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              ESSENTIAL FIRE SAFETY MEASURES (EFSM)
              <div className="w-24 h-0.5 bg-white mx-auto mt-4"></div>
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                EFSM are defined as the fire and life safety systems installed or constructed in buildings to ensure
                adequate levels of safety for occupants in the event of a fire or emergency. When the construction of a
                building is complete, the building owner is responsible for the integrity and maintenance of the safety
                features and essential safety measures.
              </p>

              <p>
                Crystal Compliance Services will give you peace of mind knowing that you are meeting your statutory
                obligations and reducing the risk to life and property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
