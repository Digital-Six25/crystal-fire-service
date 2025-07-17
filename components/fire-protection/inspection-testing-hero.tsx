"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Search,
  Shield,
  CheckCircle,
  Award,
  ArrowRight,
  Users,
  Clock,
  Star,
} from "lucide-react";

export default function InspectionTestingHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    {
      icon: Search,
      label: "Systems Tested",
      value: "3000+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CheckCircle,
      label: "Pass Rate",
      value: "98%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      label: "Certified Testers",
      value: "20+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "<24hrs",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fire-extinguishers.jpg"
          alt="Professional fire system testing and inspection"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-purple-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Search className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-pink-300 font-medium">
                Professional Testing Services
              </span>
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent">
                FIRE SYSTEM
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
                TESTING
              </span>
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 rounded-full"></div>

            <p
              className={`text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Professional fire system testing and inspection services ensuring
              optimal performance and compliance with AS1851 standards across
              all fire protection systems
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
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Testing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              {/* <Link
                href="#services"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                View Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link> */}
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center text-pink-300">
              <Shield className="w-6 h-6 mr-2" />
              <span className="font-medium">AS1851 Compliant Testing</span>
            </div>
            <div className="flex items-center text-purple-300">
              <Award className="w-6 h-6 mr-2" />
              <span className="font-medium">Certified Test Equipment</span>
            </div>
            <div className="flex items-center text-pink-300">
              <Star className="w-6 h-6 mr-2" />
              <span className="font-medium">Detailed Reporting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
