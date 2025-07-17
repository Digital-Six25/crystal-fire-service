"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Monitor,
  Smartphone,
  FileText,
  ClipboardMinus,
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
    icon: ClipboardMinus,
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
    <>
      <section
        ref={ref}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100/50 to-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* First Row - What is Uptick and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - What is Uptick */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full mb-4">
                    <ClipboardMinus className="w-4 h-4 text-teal-600 mr-2" />
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
                    Uptick is Australia's leading job and asset management
                    system
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

            {/* Right Column - Laptop Mockup */}
            <div
              className={`flex justify-center transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:scale-105 transition-all duration-500">
                  <Image
                    src="/images/uptick.png"
                    alt="Uptick software dashboard interface showing fire maintenance management system"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Full Width */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/fire-extinguishers.jpg"
            alt="Modern office with technology and fire safety equipment"
            width={1600}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-blue-800/85 to-teal-900/90"></div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div
              className={`transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Header */}
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30">
                    <Image
                      src="/placeholder.svg?height=60&width=200&text=UPTICK"
                      alt="Uptick logo"
                      width={200}
                      height={60}
                      className="h-12 w-auto brightness-0 invert"
                    />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-white mb-6">BENEFITS</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
              </div>

              {/* Benefits Grid - 3 on top, 2 on bottom */}
              <div className="space-y-8">
                {/* Top Row - 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div
                      key={index}
                      className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                    >
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-teal-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <benefit.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-white text-lg mb-3 group-hover:text-teal-300 transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Row - 2 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {benefits.slice(3, 5).map((benefit, index) => (
                    <div
                      key={index + 3}
                      className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${(index + 6) * 150}ms` }}
                    >
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-teal-400 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <benefit.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-white text-lg mb-3 group-hover:text-teal-300 transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12 text-center">
                <Link
                  href={"https://www.uptickhq.com/au"}
                  target="_blank"
                  className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Learn More About Uptick
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
