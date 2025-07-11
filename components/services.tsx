"use client";

import {
  Flame,
  FileCheck,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import Link from "next/link";

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
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    link: "/fire-protection",
  },
  {
    icon: FileCheck,
    title: "CERTIFICATION",
    description:
      "Our certification services offer an AFSS management programme to help streamline the lodgement of your Annual Fire Safety Statement (AFSS).",
    features: [
      "AFSS management",
      "Compliance documentation",
      "Annual safety statements",
      "Regulatory support",
    ],
    color: "from-teal-500 to-blue-500",
    bgColor: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    link: "/certification",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive fire protection solutions tailored to your specific
            needs with cutting-edge technology and expert craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative ${service.bgColor} rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 border border-gray-100 overflow-hidden`}
              >
                {/* Background Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Floating Icon */}
                <div className="relative mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 ${service.iconBg} rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <service.icon
                      className={`w-10 h-10 ${service.iconColor} transition-all duration-500`}
                    />
                  </div>

                  {/* Animated Badge */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${
                      service.color
                    } rounded-full flex items-center justify-center transform transition-all duration-500 ${
                      hoveredIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center text-gray-700 transition-all duration-300 ${
                        hoveredIndex === index ? "translate-x-2" : ""
                      }`}
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <div
                        className={`w-6 h-6 ${service.iconBg} rounded-full flex items-center justify-center mr-4 transition-all duration-300`}
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${service.iconColor}`}
                        />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={service.link}>
                  <button
                    className={`group/btn relative overflow-hidden bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-20 text-center transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Protect Your Property?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a comprehensive fire protection assessment and quote from
                our certified experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get Free Assessment
                </button>
                <button className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Call 1300 790 702
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
