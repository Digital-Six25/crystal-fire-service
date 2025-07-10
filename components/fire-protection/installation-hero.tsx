"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function InstallationHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className={`bg-gray-100 py-20 lg:py-32 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            FIRE SYSTEM INSTALLATION
          </h1>
          <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
        </div>
      </div>
    </section>
  )
}
