"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Award, Shield, CheckCircle } from "lucide-react";

export default function CertificationHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden flex items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8">
            <Award className="w-5 h-5 mr-2" />
            Professional Certification Services
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
              CERTIFICATION
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Expert fire safety certification and AFSS management programs
            ensuring compliance with Australian standards
          </p>

          {/* CTA Button */}
          <div
            className={`mt-12 transition-all duration-1000 ease-out delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group bg-gradient-to-r from-brand-primary to-brand-blue hover:from-brand-blue hover:to-brand-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Explore Our Services
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
