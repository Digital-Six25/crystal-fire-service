"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const complianceServices = ["Asset based reporting", "AFSS reports", "AS1851 testing", "Mechanical interface testing"]

export default function ComplianceContent() {
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-10%20at%2009.22.39-OIt1lIv9Fq5isb5s5DFOnfSQB5lbh3.png"
                  alt="Fire sprinkler head compliance testing"
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
              <p className="text-gray-600 leading-relaxed mb-6">Our Compliance Services include:</p>

              <ul className="space-y-3 text-left max-w-sm mx-auto">
                {complianceServices.map((service, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div
              className={`transition-all duration-1000 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-10%20at%2009.22.39-OIt1lIv9Fq5isb5s5DFOnfSQB5lbh3.png"
                  alt="Fire safety compliance equipment testing"
                  fill
                  className="object-cover object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Is Testing Required Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-4">WHEN IS TESTING REQUIRED?</h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 text-center">
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Testing your Fire Protection System is required by law. It also provides you with peace of mind as
                you'll know your system will perform correctly in the event of an emergency.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Frequency of testing is dependent on the system you have installed. It must be tested in accordance with
                the AS1851 maintenance schedule. Most systems require at least two inspections per year - once every 6
                months.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 ease-out delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Crystal Fire Services offers competitive pricing for full inspection, testing and maintenance for any
                system that requires certification. Our technicians are fully qualified and will thoroughly test and
                audit your system to ensure its compliance with all regional industry standards and government
                regulations. We retain comprehensive maintenance records and complete all necessary compliance reports.
                This enables us to provide an Annual Fire Safety Statement, which is enforced by Council and the NSW
                Fire Brigade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
