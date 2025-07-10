"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ContactHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className={`bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Contact <span className="text-teal-600">Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our fire protection experts. We're here to help with all your fire safety needs across
            Australia.
          </p>
        </div>
      </div>
    </section>
  )
}
