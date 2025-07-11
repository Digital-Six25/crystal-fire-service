"use client";

import { Flame, Wifi, Droplets, Volume2, Zap, Sprout } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const equipment = [
  {
    icon: Flame,
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
  },
  {
    icon: Wifi,
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
  },
  {
    icon: Droplets,
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
  },
  {
    icon: Volume2,
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
  },
  {
    icon: Zap,
    title: "FIRE PUMPSETS",
    description: "Fire pump systems and equipment",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    details: ["Fire pumps", "Pump systems", "Pressure systems", "Maintenance"],
  },
  {
    icon: Sprout,
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
  },
];

export default function Equipment() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-teal-500/3 to-transparent rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-teal-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Professional Equipment & Systems
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            WE INSTALL &
            <span className="block bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              MAINTAIN
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto rounded-full"></div>
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Floating Indicator */}
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full transition-all duration-500 ${
                      hoveredIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <div className="w-full h-full rounded-full animate-ping bg-gradient-to-r from-teal-400 to-orange-400 opacity-75"></div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Expandable Details */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    hoveredIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-white/10 pt-4 mb-4">
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-sm text-gray-400 transition-all duration-300"
                          style={{ transitionDelay: `${detailIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Learn More Button */}
                <div
                  className={`transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <button
                    className={`w-full bg-gradient-to-r ${item.color} text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105`}
                  >
                    Learn More
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
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
