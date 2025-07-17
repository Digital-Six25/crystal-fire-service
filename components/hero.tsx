"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect } from "react";
import { CheckCheck, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "20+", label: "Years Experience" },
  { icon: CheckCheck, value: "1000+", label: "Projects Completed" },
  { icon: Clock, value: "24/7", label: "Emergency Response" },
  { icon: Users, value: "50+", label: "Expert Technicians" },
];

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/placeholder.svg?height=600&width=600&text=Fire+Sprinkler+System",
    "/placeholder.svg?height=600&width=600&text=Fire+Detection+Equipment",
    "/placeholder.svg?height=600&width=600&text=Emergency+Lighting+System",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-medium mb-6 backdrop-blur-sm border border-teal-500/30">
              <CheckCheck className="w-4 h-4 mr-2" />
              Australia's Trusted Fire Protection Experts
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Professional
              <span className="block bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                Fire Protection
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl">
                Services
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-2xl leading-relaxed">
              Protecting lives, property and the environment with comprehensive
              fire safety solutions, professional installation, and expert
              certification services across Australia.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-teal-600 hover:to-teal-700 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center">
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-teal-500/20 rounded-full mx-auto mb-3 backdrop-blur-sm border border-teal-500/30">
                    <stat.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Image Carousel */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10">
                <div className="absolute inset-4">
                  <Image
                    src="/images/firefighter.jpg"
                    alt="Professional fire protection equipment and safety systems"
                    fill
                    className="object-cover rounded-2xl transition-all duration-1000 ease-in-out"
                    priority
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900  rounded-3xl"></div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl rotate-12 shadow-xl opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl -rotate-12 shadow-xl opacity-80"></div>
              </div>

              {/* Image Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-teal-400 scale-125"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              {/* Certification Badges */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <div className="text-xs text-gray-300 text-center">ISO</div>
                  <div className="text-sm font-bold text-white">Certified</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <div className="text-xs text-gray-300 text-center">FPA</div>
                  <div className="text-sm font-bold text-white">Member</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
