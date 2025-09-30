"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Download, BookOpen } from "lucide-react";

export default function ResourcesHero({ hero }: any) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-[#bee5e9]/30 via-white to-[#bee5e9]/40 py-32 lg:py-40 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#55c5d2]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#188bc0]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0192a8]/10 to-[#55c5d2]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fire-extinguishers.jpg"
          alt="Fire safety resources and documentation"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#bee5e9]/80 via-white/70 to-[#bee5e9]/80"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0192a8]/20 to-[#55c5d2]/20 backdrop-blur-sm border border-[#0192a8]/30 rounded-full mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#0192a8] mr-2" />
            <span className="text-[#0192a8] text-sm font-medium">
              {hero.pill}
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-[#0192a8] via-[#188bc0] to-[#55c5d2] bg-clip-text text-transparent">
              {hero.title}
            </span>
          </h1>

          <div
            className={`w-32 h-1 bg-gradient-to-r from-[#0192a8] to-[#188bc0] mx-auto mb-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>

          <p
            className={`text-xl sm:text-2xl text-[#333333] max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {hero.subtitle}
          </p>
        </div>

        {/* Certifications Grid - Replacing Stats */}
        <div className="mb-12">
          <h2 className="text-center text-2xl font-bold text-[#0192a8] mb-8">
            {hero.certificates.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto justify-items-center">
            {hero.certificates.image.map((cert: any, index: any) => (
              <div
                key={index}
                className={`bg-white/70 backdrop-blur-sm border border-[#bee5e9] rounded-2xl p-4 flex items-center justify-center hover:bg-white hover:border-[#0192a8] hover:scale-105 transition-all duration-300 w-full max-w-[180px] h-[120px] shadow-sm ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 5) * 150}ms` }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={cert.img || "/placeholder.svg"}
                    alt={"certificates"}
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="bg-gradient-to-r from-[#0192a8] to-[#188bc0] text-white px-8 py-4 rounded-full font-semibold hover:from-[#188bc0] hover:to-[#0192a8] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
            <Download className="w-5 h-5 mr-2" />
            {hero.btn.label}
          </button>
        </div>
      </div>
    </section>
  );
}
