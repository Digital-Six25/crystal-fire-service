"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink, Phone } from "lucide-react"

const mediaFeatures = [
  {
    title: "Executive Media | Facility Perspectives",
    url: "#",
  },
]

export default function MediaContent() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Crystal Fire Services has been featured on the following media channels:
            </h2>
            <p className="text-gray-600 mb-8">Click on the links below to view coverage</p>
          </div>

          <div className="space-y-4 mb-16">
            {mediaFeatures.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <a
                  href={feature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <span className="text-gray-600 group-hover:text-teal-600 transition-colors duration-200">→</span>
                  <span className="text-gray-900 group-hover:text-teal-600 transition-colors duration-200 font-medium">
                    {feature.title}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors duration-200 ml-auto" />
                </a>
              </div>
            ))}
          </div>

          <div
            className={`bg-teal-50 border border-teal-200 rounded-lg p-8 text-center transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-teal-600 mr-3" />
              <h3 className="text-lg font-semibold text-teal-900">Need More Information?</h3>
            </div>
            <p className="text-teal-800 leading-relaxed">
              Should you require any further information or guidance on certification or fire safety regulations and
              compliance please contact our office on{" "}
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
