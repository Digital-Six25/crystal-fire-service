"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Camera, Award } from "lucide-react";

export default function MediaHero() {
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
            <Camera className="w-4 h-4 text-brand-primary mr-2" />
            <span className="text-brand-primary text-sm font-medium">
              In the Spotlight
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
              MEDIA
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
            Discover our media coverage, press releases, and industry
            recognition in fire protection excellence
          </p>

          {/* Featured Badge */}
          <div
            className={`text-center mt-12 transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 rounded-full px-6 py-3">
              <Award className="w-5 h-5 text-brand-primary mr-3" />
              <span className="text-brand-primary font-medium">
                Featured in Leading Industry Publications
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
