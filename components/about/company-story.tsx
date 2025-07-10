"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield, Award, Users, Clock } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Trusted Protection",
    description: "Decades of experience in fire safety and protection services",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "ISO certified with multiple industry accreditations",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained and certified fire protection professionals",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock emergency response and support services",
  },
]

export default function CompanyStory() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Crystal Fire Services has been at the forefront of fire protection technology and services, providing
              comprehensive solutions to commercial, residential, and industrial clients across Australia.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our commitment to excellence, combined with cutting-edge technology and industry expertise, makes us the
              trusted choice for fire protection services nationwide. We understand that fire safety is not just about
              compliance—it's about protecting what matters most.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our humble beginnings to becoming a nationally recognized leader in fire protection, we've maintained
              our core values of integrity, professionalism, and unwavering commitment to safety.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive fire protection solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Fully licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Australia-wide service coverage</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">24/7 emergency response capability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">ISO certified management systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
