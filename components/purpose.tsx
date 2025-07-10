"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Purpose() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="aspect-video relative rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fire safety equipment installation and maintenance work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">OUR PURPOSE</h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Crystal Fire Services provides safety and protection to life, property and the environment with thoughtful
              fire protection solutions delivered with integrity.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              We are committed to excellence in every aspect of our service delivery, from initial consultation through
              to ongoing maintenance and support. Our experienced team ensures your fire protection systems meet all
              regulatory requirements while providing optimal safety for your premises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className={`bg-gray-700 rounded-lg p-6 transition-all duration-1000 ease-out delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="font-semibold text-teal-400 mb-2">Professional Excellence</h3>
                <p className="text-sm text-gray-300">Certified technicians with extensive industry experience</p>
              </div>
              <div
                className={`bg-gray-700 rounded-lg p-6 transition-all duration-1000 ease-out delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="font-semibold text-teal-400 mb-2">Regulatory Compliance</h3>
                <p className="text-sm text-gray-300">Full compliance with Australian fire safety standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
