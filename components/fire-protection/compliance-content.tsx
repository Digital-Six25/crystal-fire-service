"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Award,
} from "lucide-react";

const complianceServices = [
  "Asset based reporting",
  "AFSS reports",
  "AS1851 testing",
  "Mechanical interface testing",
];

export default function ComplianceContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Main Content Section */}
      <section ref={ref} className="py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                COMPREHENSIVE COMPLIANCE SERVICES
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                Our Compliance Services ensure your fire protection systems meet
                all regulatory requirements and industry standards. We provide
                comprehensive reporting and testing to keep your property
                compliant and safe.
              </p>

              <div className="space-y-4 mb-8">
                {complianceServices.map((service, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["AS1851", "BCA", "CFSP", "ISO9001"].map((cert, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2">
                        <Award className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-700">
                        {cert}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative group">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-10%20at%2009.22.39-OIt1lIv9Fq5isb5s5DFOnfSQB5lbh3.png"
                    alt="Fire sprinkler head compliance testing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-emerald-600">
                    Certified Compliance
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-gray-700">
                    25+ Years
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Is Testing Required Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <Clock className="w-6 h-6 text-blue-300" />
              <span className="font-semibold text-white">
                Compliance Requirements
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent mb-4">
              WHEN IS TESTING REQUIRED?
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-4">
                Legal Requirements
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Testing your Fire Protection System is required by law. It also
                provides you with peace of mind as you'll know your system will
                perform correctly in the event of an emergency.
              </p>
            </div>

            <div
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                Testing Frequency
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Frequency of testing is dependent on the system you have
                installed. It must be tested in accordance with the AS1851
                maintenance schedule. Most systems require at least two
                inspections per year - once every 6 months.
              </p>
            </div>

            <div
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-1000 ease-out delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                Our Service Promise
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Crystal Fire Services offers competitive pricing for full
                inspection, testing and maintenance for any system that requires
                certification. Our technicians are fully qualified and will
                thoroughly test and audit your system to ensure its compliance
                with all regional industry standards and government regulations.
                We retain comprehensive maintenance records and complete all
                necessary compliance reports. This enables us to provide an
                Annual Fire Safety Statement, which is enforced by Council and
                the NSW Fire Brigade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
