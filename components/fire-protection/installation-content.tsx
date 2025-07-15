"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Shield,
  CheckCircle,
  Award,
  Users,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";

const installationServices = [
  "Smoke detection and heat detection systems",
  "EWIS systems",
  "Sprinkler and hydrant systems",
  "Fire pumpsets",
  "Extinguishers",
  "Fire Hose Reel Systems",
];

const additionalServices = [
  "Smoke alarms",
  "Exit and Emergency Lighting",
  "Fire doors and other passive fire protection",
  "Special Hazard and Gaseous Systems",
  "Fire System Block Plans",
];

const stats = [
  {
    icon: Shield,
    label: "Systems Installed",
    value: "2,500+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    label: "Years Experience",
    value: "25+",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    label: "Certified Technicians",
    value: "50+",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "24hrs",
    color: "from-orange-500 to-red-500",
  },
];

const certifications = [
  { name: "Australian Standards", code: "AS1851", icon: Shield },
  { name: "Building Code", code: "BCA", icon: Award },
  { name: "Fire Safety", code: "CFSP", icon: CheckCircle },
  { name: "Quality Assured", code: "ISO9001", icon: Star },
];

export default function InstallationContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Main Content Section */}
      <section ref={ref} className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative group">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/installation.jpg"
                    alt="Fire sprinkler head installation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-200/50">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      Certified Install
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 shadow-lg">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                  Professional Installation
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  We install wet, dry and passive fire systems as well as
                  portable firefighting equipment to all building types and
                  industries
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  All installations are commissioned in accordance with the
                  relevant Australian Standard and current Building Code of
                  Australia. The Final Fire Safety Certificate is provided by
                  Crystal Fire Services and endorsed by a Competent Fire Safety
                  Practitioner.
                </p>

                {/* Certification Badges */}
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200/30 hover:shadow-md transition-shadow duration-200"
                    >
                      <cert.icon className="w-4 h-4 text-blue-600" />
                      <div className="text-left">
                        <div className="text-xs font-semibold text-blue-600">
                          {cert.code}
                        </div>
                        <div className="text-xs text-gray-600">{cert.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensed Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">
                Licensed Installation Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
              WE ARE LICENSED TO INSTALL:
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Our certified technicians are licensed to install a comprehensive
              range of fire protection systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Column */}
            <div
              className={`space-y-4 transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Primary Systems
                </h3>
                {installationServices.map((service, index) => (
                  <div key={index} className="flex items-start py-2 group">
                    <ArrowRight className="w-4 h-4 text-blue-400 mt-1 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="text-blue-100 group-hover:text-white transition-colors duration-200">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div
              className={`space-y-4 transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  Additional Services
                </h3>
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-start py-2 group">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="text-blue-100 group-hover:text-white transition-colors duration-200">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Get Installation Quote
                  <CheckCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  View Our Work
                  <Award className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
