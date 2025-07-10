"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CheckCircle } from "lucide-react"

const benefits = [
  {
    title: "Client Portal",
    description: "our clients are able to login and review the status of their inspections and reports",
  },
  {
    title: "Field Services App",
    description: "our technicians are able to work successfully in the field and update your job in real time",
  },
  {
    title: "Custom reporting",
    description: "we can report on parameters of your choosing",
  },
  {
    title: "Lifecycle Asset Management",
    description: "we remain on top of all of your fire equipment",
  },
  {
    title: "Compliance Reporting",
    description:
      "with Uptick we are able to generate compliance reports, such as AFSS, AESMR, Form 3 and more, automatically",
  },
]

export default function UptickContent() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - What is Uptick */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              WHAT IS UPTICK FIRE MAINTENANCE?
              <div className="w-16 h-0.5 bg-gray-400 mx-auto mt-2"></div>
            </h2>

            <p className="text-gray-600 leading-relaxed text-center mb-6">
              Uptick is Australia's leading job and asset management system
            </p>

            <p className="text-gray-600 leading-relaxed text-center text-sm">
              Featuring built in programme maintenance frequencies and tolerances from AS1851-2012 and AS1851-2005 and
              other relevant ESM schedules.
            </p>
          </div>

          {/* Center Column - Laptop Mockup */}
          <div
            className={`lg:col-span-1 flex justify-center transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-md">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Uptick software dashboard interface showing fire maintenance management system"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=200"
                  alt="Uptick logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">BENEFITS</h3>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{benefit.title}</span>
                    <span className="text-gray-600"> - {benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
