"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, Zap, Shield, BarChart3 } from "lucide-react";

export default function UptickHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    { icon: Users, label: "Active Users", value: "10,000+" },
    { icon: Zap, label: "Efficiency Boost", value: "85%" },
    { icon: Shield, label: "Compliance Rate", value: "99.9%" },
    { icon: BarChart3, label: "Cost Savings", value: "40%" },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-32 lg:py-40 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/firefighter.jpg"
          alt="Professional fire protection technology and systems"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-purple-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Zap className="w-4 h-4 text-teal-400 mr-2" />
            <span className="text-teal-300 text-sm font-medium">
              Australia's Leading Fire Management System
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
              UPTICK
            </span>
          </h1>

          <div
            className={`w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>

          <p
            className={`text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Revolutionary fire maintenance management system transforming how
            Australia manages fire safety compliance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 5) * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-teal-400 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
