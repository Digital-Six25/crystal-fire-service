"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink, FileText } from "lucide-react"

const usefulLinks = [
  {
    title: "NSW Government Fact sheet",
    url: "#",
    description: "Official NSW Government fire safety fact sheet",
  },
  {
    title: "AFSS – Effective 1st December 2017",
    url: "#",
    description: "Annual Fire Safety Statement requirements",
  },
  {
    title: "Fire Protection Association Australia – Fire Protection Accreditation Scheme (FPAS)",
    url: "#",
    description: "FPA Australia accreditation scheme information",
  },
  {
    title: "Building Fire Safety Regulation – Fact sheet August 2017",
    url: "#",
    description: "Building fire safety regulation guidelines",
  },
  {
    title: "Planning Circular _Building Fire Safety Regulation",
    url: "#",
    description: "Planning circular for building fire safety regulations",
  },
]

export default function ResourcesContent() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">USEFUL LINKS:</h2>

          <div className="space-y-4 mb-12">
            {usefulLinks.map((link, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <FileText className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors duration-200" />
                </a>
              </div>
            ))}
          </div>

          <div
            className={`bg-teal-50 border border-teal-200 rounded-lg p-6 transition-all duration-1000 ease-out delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-teal-600 text-sm font-bold">i</span>
              </div>
              <div>
                <h3 className="font-semibold text-teal-900 mb-2">Need Additional Guidance?</h3>
                <p className="text-teal-800 leading-relaxed">
                  Should you require any further advice or guidance on certification or fire safety regulations and
                  compliance please contact our office on{" "}
                  <a href="tel:1300790702" className="font-semibold hover:underline">
                    1300 790 702
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
