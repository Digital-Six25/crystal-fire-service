"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Wrench,
  Shield,
  CheckCircle,
  Award,
  ArrowRight,
  Users,
  Clock,
  Star,
} from "lucide-react";

export default function InstallationHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    {
      icon: Wrench,
      label: "Systems Installed",
      value: "2000+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: CheckCircle,
      label: "Success Rate",
      value: "100%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      label: "Certified Installers",
      value: "25+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      label: "Average Install Time",
      value: "2-5 Days",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fire-extinguishers.jpg"
          alt="Professional fire system installation equipment"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-blue-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Wrench className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">
                Professional Installation Services
              </span>
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                FIRE SYSTEM
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                INSTALLATION
              </span>
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full"></div>

            <p
              className={`text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Professional installation of wet, dry and passive fire systems as
              well as portable firefighting equipment to all building types and
              industries across Australia
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
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Installation Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                View Services
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

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center text-cyan-300">
              <Shield className="w-6 h-6 mr-2" />
              <span className="font-medium">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center text-blue-300">
              <Award className="w-6 h-6 mr-2" />
              <span className="font-medium">
                Australian Standards Compliant
              </span>
            </div>
            <div className="flex items-center text-cyan-300">
              <Star className="w-6 h-6 mr-2" />
              <span className="font-medium">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
