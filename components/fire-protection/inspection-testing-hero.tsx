"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Search, Shield, Award, ArrowRight, Star } from "lucide-react";

export default function InspectionTestingHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden"
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
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Search className="w-5 h-5 mr-2" />
              Professional Testing Services
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                FIRE SYSTEM
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                TESTING
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ease-out delay-400 ${
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
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold rounded-xl hover:from-brand-blue hover:to-brand-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Testing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center px-8 py-4 border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                View Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
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
            <div className="flex items-center text-brand-primary">
              <Shield className="w-6 h-6 mr-2" />
              <span className="font-medium">AS1851 Compliant Testing</span>
            </div>
            <div className="flex items-center text-brand-primary">
              <Award className="w-6 h-6 mr-2" />
              <span className="font-medium">Certified Test Equipment</span>
            </div>
            <div className="flex items-center text-brand-primary">
              <Star className="w-6 h-6 mr-2" />
              <span className="font-medium">Detailed Reporting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
