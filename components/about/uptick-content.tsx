"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Monitor,
  Smartphone,
  FileText,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Monitor,
    title: "Client Portal",
    description:
      "our clients are able to login and review the status of their inspections and reports",
  },
  {
    icon: Smartphone,
    title: "Field Services App",
    description:
      "our technicians are able to work successfully in the field and update your job in real time",
  },
  {
    icon: FileText,
    title: "Custom reporting",
    description: "we can report on parameters of your choosing",
  },
  {
    icon: TrendingUp,
    title: "Lifecycle Asset Management",
    description: "we remain on top of all of your fire equipment",
  },
  {
    icon: Shield,
    title: "Compliance Reporting",
    description:
      "with Uptick we are able to generate compliance reports, such as AFSS, AESMR, Form 3 and more, automatically",
  },
];

const features = [
  { title: "Real-time Updates", description: "Live job status tracking" },
  { title: "Automated Scheduling", description: "Smart maintenance planning" },
  { title: "Digital Documentation", description: "Paperless reporting system" },
  { title: "Compliance Tracking", description: "AS1851 standard adherence" },
];

export default function UptickContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100/50 to-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - What is Uptick */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full mb-4">
                  <Shield className="w-4 h-4 text-teal-600 mr-2" />
                  <span className="text-teal-700 text-sm font-medium">
                    Fire Management System
                  </span>
                </div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
                  WHAT IS UPTICK FIRE MAINTENANCE?
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  Uptick is Australia's leading job and asset management system
                </p>

                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-100">
                  <p className="text-gray-600 leading-relaxed text-center">
                    Featuring built in programme maintenance frequencies and
                    tolerances from AS1851-2012 and AS1851-2005 and other
                    relevant ESM schedules.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/60 rounded-xl p-4 text-center hover:bg-white/80 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        {feature.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {feature.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Laptop Mockup */}
          <div
            className={`lg:col-span-1 flex justify-center transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-md">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/uptick.png"
                  alt="Uptick software dashboard interface showing fire maintenance management system"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-4 shadow-lg">
                    <Image
                      src="/placeholder.svg?height=60&width=200&text=UPTICK"
                      alt="Uptick logo"
                      width={200}
                      height={60}
                      className="h-12 w-auto brightness-0 invert"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
                  BENEFITS
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`group bg-gradient-to-r from-white/60 to-gray-50/60 rounded-2xl p-4 hover:from-teal-50/80 hover:to-blue-50/80 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-teal-400 to-blue-500 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                          {benefit.title}
                        </span>
                        <span className="text-gray-600 block mt-1 text-sm leading-relaxed">
                          {benefit.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href={"https://www.uptickhq.com/us/our-story"}
                  target="_blank"
                  className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Learn More About Uptick
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
