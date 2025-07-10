"use client"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Phone } from "lucide-react"

export default function CertificationContent() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* FPA Accreditation Section */}
        <div
          className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Fire Protection Association of Australia (FPA) launches NSW FPAS Accreditation
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              In the wake of the NSW Government's announcements of major reforms to the state's fire safety and building
              regulations, FPA Australia has prepared an accreditation scheme for Fire Safety Assessment to cover Part 9
              Division 5 and 7 of EP & A Regulation. This accreditation scheme was launched 1st April 2019 and gives
              competent fire safety practitioners 12 months to gain final accreditation. Crystal Certification is
              pre-qualified to sign off on any AFSS and registered for final qualification to ensure we stay at the
              forefront of the industry.
            </p>

            <p>
              These reforms are possibly the most important change to the fire protection industry in decades, and FPA
              Australia is working closely with government and industry to ensure the reforms both improve fire safety
              outcomes and are practical for the industry.
            </p>
          </div>

          <div
            className={`mt-8 bg-teal-50 border border-teal-200 rounded-lg p-6 text-center transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-teal-600 mr-2" />
              <span className="font-medium text-teal-900">Need Further Guidance?</span>
            </div>
            <p className="text-teal-800">
              Should you require any further advice or guidance in this matter please contact our office on{" "}
              <a href="tel:1300790702" className="font-semibold hover:underline transition-all duration-200">
                1300 790 702
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
