"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Zap } from "lucide-react";

export default function UptickHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-brand-light via-white to-brand-light/50 py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className={`inline-flex items-center px-4 py-2 bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 rounded-full mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Zap className="w-4 h-4 text-brand-primary mr-2" />
            <span className="text-brand-primary text-sm font-medium">
              Australia's Leading Fire Management System
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
              UPTICK
            </span>
          </h1>

          <div
            className={`w-32 h-1 bg-gradient-to-r from-brand-primary to-brand-blue mx-auto mb-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>

          <p
            className={`text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Revolutionary fire maintenance management system transforming how
            Australia manages fire safety compliance
          </p>
        </div>
      </div>
    </section>
  );
}
