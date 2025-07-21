"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import Image from "next/image";

const equipment = [
  {
    title: "PORTABLE FIRE EQUIPMENT",
    description: "Fire extinguishers and portable fire safety equipment",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    details: [
      "Fire extinguishers",
      "Fire blankets",
      "Portable equipment",
      "Emergency kits",
    ],
    customIconSrc: "/images/fire-extinguisher.png",
  },
  {
    title: "FIRE DETECTION SYSTEMS",
    description: "Smoke detectors and fire alarm systems",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    details: [
      "Smoke detectors",
      "Heat detectors",
      "Fire alarms",
      "Control panels",
    ],
    customIconSrc: "/images/smoke-detector.png",
  },
  {
    title: "HYDRANTS & HOSE REELS",
    description: "Fire hydrant systems and hose reel installations",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    details: [
      "Fire hydrants",
      "Hose reels",
      "Water systems",
      "Pressure testing",
    ],
    customIconSrc: "/images/hydrant.png",
  },
  {
    title: "EWIS SYSTEMS",
    description: "Emergency Warning and Intercommunication Systems",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    details: [
      "Warning systems",
      "Intercommunication",
      "Emergency alerts",
      "Audio systems",
    ],
    customIconSrc: "/images/firewall-protection-ewis.png",
  },
  {
    title: "FIRE PUMPSETS",
    description: "Fire pump systems and equipment",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    details: ["Fire pumps", "Pump systems", "Pressure systems", "Maintenance"],
    customIconSrc: "/images/firewall-protection.png",
  },
  {
    title: "SPRINKLER & MIST SYSTEMS",
    description: "Automatic sprinkler and water mist systems",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    details: [
      "Sprinkler systems",
      "Water mist",
      "Automatic systems",
      "Installation",
    ],
    customIconSrc: "/images/sprinkle.png",
  },
];

export default function Equipment() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-brand-light via-white to-brand-light/50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-brand-primary/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 rounded-full text-brand-primary text-sm font-medium mb-8">
            <Image
              src="/images/fire-extinguisher.png"
              alt="Fire equipment icon"
              width={16}
              height={16}
              className="w-4 h-4 mr-2 filter brightness-0 invert"
            />
            Professional Equipment & Systems
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-brand-dark mb-6">
            WE INSTALL &
            <span className="block bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
              MAINTAIN
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-brand-primary to-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm border border-brand-primary/20 rounded-3xl p-8 h-full transition-all duration-500 group-hover:bg-white/90 group-hover:border-brand-primary/30 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-blue rounded-2xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                  >
                    <Image
                      src={item.customIconSrc || "/placeholder.svg"}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Floating Indicator */}
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-brand-primary to-brand-blue rounded-full transition-all duration-500 ${
                      hoveredIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <div className="w-full h-full rounded-full animate-ping bg-gradient-to-r from-brand-primary to-brand-blue opacity-75"></div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-brand-dark transition-colors duration-300">
                  {item.description}
                </p>

                {/* Expandable Details */}
                <div className="transition-all duration-500 overflow-hidden max-h-40 opacity-100">
                  <div className="border-t border-brand-primary/20 pt-4 mb-4">
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-sm text-gray-600 transition-all duration-300"
                          style={{ transitionDelay: `${detailIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-brand-primary to-brand-blue rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="transition-all duration-500 opacity-100 translate-y-0">
                  <button className="w-full bg-gradient-to-r from-brand-primary to-brand-blue text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-brand-blue hover:to-brand-primary">
                    Learn More
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-20 transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "6", label: "Equipment Categories" },
              { number: "1000+", label: "Installations" },
              { number: "24/7", label: "Support Available" },
              { number: "100%", label: "Compliance Rate" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
