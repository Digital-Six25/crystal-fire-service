"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Award, CheckCircle, Shield } from "lucide-react";
import Image from "next/image";

export default function InstallationContent({ professional, licensed }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Main Content Section */}
      <section
        ref={ref}
        className="py-20 bg-white relative overflow-hidden"
        id="services"
      >
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
                    src={professional.img || "/images/installation.jpg"}
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
                      {professional.tag}
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
                  {professional.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {professional.subtitle}
                </p>

                {/* Certification Badges */}
                <div className="grid grid-cols-2 gap-3">
                  {professional.cards.map((cert: any, index: any) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200/30 hover:shadow-md transition-shadow duration-200"
                    >
                      <Image
                        src={cert.icon || ""}
                        height={20}
                        width={20}
                        alt="icon"
                      />
                      <div className="text-left">
                        <div className="text-xs font-semibold text-blue-600">
                          {cert.title}
                        </div>
                        <div className="text-xs text-gray-600">
                          {cert.subtitle}
                        </div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-blue to-brand-cyan">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-brand-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
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
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-light/20 backdrop-blur-sm rounded-full border border-brand-light/30 mb-6">
              <Shield className="w-5 h-5 text-brand-light" />
              <span className="text-sm font-semibold text-brand-light">
                {licensed.pill}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-brand-light bg-clip-text text-transparent mb-4">
              {licensed.title}
            </h2>
            <p className="text-brand-light/80 max-w-2xl mx-auto">
              {licensed.subtitle}
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
              <div className="bg-brand-light/10 backdrop-blur-sm rounded-2xl p-6 border border-brand-light/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  {licensed.cards[0].title}
                </h3>
                {licensed.cards[0].types.map((service: any, index: any) => (
                  <div key={index} className="flex items-start py-2 group">
                    <ArrowRight className="w-4 h-4 text-brand-light mt-1 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="text-white group-hover:text-white transition-colors duration-200">
                      {service.type}
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
              <div className="bg-brand-light/10 backdrop-blur-sm rounded-2xl p-6 border border-brand-light/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  {licensed.cards[1].title}
                </h3>
                {licensed.cards[1].types.map((service: any, index: any) => (
                  <div key={index} className="flex items-start py-2 group">
                    <ArrowRight className="w-4 h-4 text-brand-cyan mt-1 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="text-white group-hover:text-white transition-colors duration-200">
                      {service.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-cyan text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Get a Quote
                  <CheckCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
