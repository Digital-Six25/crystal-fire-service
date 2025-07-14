"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Shield,
  Wrench,
  FileCheck,
  Search,
  ArrowRight,
  CheckCircle,
  Award,
} from "lucide-react";

export default function FireProtectionHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    {
      icon: Shield,
      label: "Years Experience",
      value: "20+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: CheckCircle,
      label: "Projects Completed",
      value: "5000+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      label: "Certified Technicians",
      value: "50+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wrench,
      label: "Service Areas",
      value: "24/7",
      color: "from-orange-500 to-red-500",
    },
  ];

  const services = [
    {
      icon: Wrench,
      title: "Installation",
      description: "Professional fire system installation",
      href: "/fire-protection/installation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "Regulatory compliance services",
      href: "/fire-protection/compliance",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Search,
      title: "Testing",
      description: "Inspection and testing services",
      href: "/fire-protection/inspection-testing",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/firefighter.jpg"
          alt="Professional fire protection services and equipment"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-gray-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">
                Professional Fire Protection
              </span>
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                FIRE PROTECTION
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Comprehensive fire protection solutions including installation,
              compliance, and inspection testing for commercial, residential,
              and industrial properties across Australia
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 ease-out delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Preview */}
          <div
            id="services"
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
