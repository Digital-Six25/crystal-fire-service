"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function AFSSPrograms() {
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
                src="/placeholder.svg?height=500&width=500"
                alt="Professional fire sprinkler system installation"
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
              AFSS MANAGEMENT PROGRAMS
              <div className="w-24 h-0.5 bg-white mx-auto mt-4"></div>
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed text-center">
              <p>
                Crystal Compliance Services provides an AFSS management programme to help streamline the lodgement of
                your Annual Fire Safety Statement (AFSS)
              </p>

              <p>We provide this service nationally in accordance with State laws</p>
            </div>

            <div className="mt-8 text-center">
              <button className="btn-primary text-lg px-8 py-3">Find out More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
