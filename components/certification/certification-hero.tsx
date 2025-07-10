"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function CertificationHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className={`relative bg-gray-900 py-32 lg:py-40 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://sjc.microlink.io/LPNWW0CHjnW0oQQrGPsDgtTGy2sPlqSIQ3RQUXetIIa7_L04X23uxh_Wjqs0k7iPiTLADEeGdAgKl5IvVgDckw.jpeg"
          alt="Professional fire protection equipment and certification systems"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            CERTIFICATION
          </h1>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </div>
      </div>
    </section>
  )
}
