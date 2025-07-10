"use client"

import { Flame, FileCheck, Shield } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Flame,
    title: "FIRE PROTECTION SERVICES",
    description:
      "Professional installation, testing, maintenance and certification of fire protection systems for commercial, residential & industrial premises.",
    features: [
      "Fire system installation",
      "Regular maintenance & testing",
      "Emergency repairs",
      "Compliance certification",
    ],
  },
  {
    icon: FileCheck,
    title: "CERTIFICATION",
    description:
      "Our certification services offer an AFSS management programme to help streamline the lodgement of your Annual Fire Safety Statement (AFSS).",
    features: ["AFSS management", "Compliance documentation", "Annual safety statements", "Regulatory support"],
  },
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive fire protection solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-teal-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <Shield className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn-primary w-full sm:w-auto">Read more +</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
