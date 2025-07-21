"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Shield, value: "20+", label: "Years Experience" },
  { icon: Award, value: "1000+", label: "Projects Completed" },
  { icon: Clock, value: "24/7", label: "Emergency Response" },
  { icon: Users, value: "50+", label: "Expert Technicians" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-cyan/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ease-out delay-200 
             
            `}
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/20 rounded-full text-brand-primary text-sm font-medium mb-6 backdrop-blur-sm border border-brand-primary/30">
              <Shield className="w-4 h-4 mr-2" />
              Australia's Trusted Fire Protection Experts
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6">
              Professional
              <span className="block text-brand-gradient text-4xl sm:text-5xl lg:text-6xl">
                Fire Protection
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl">
                Services
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Protecting lives, property and the environment with comprehensive
              fire safety solutions, professional installation, and expert
              certification services across Australia.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button className="btn-primary w-full sm:w-auto">
                Get Free Quote
              </button>
              <button className="btn-secondary w-full sm:w-auto">
                <span className="flex items-center justify-center">
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
            <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ease-out `}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-primary/20 rounded-full mx-auto mb-3 backdrop-blur-sm border border-brand-primary/30">
                    <stat.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="text-2xl font-bold text-brand-dark">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Single Image */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-400 `}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-primary/20 backdrop-blur-sm border border-white/20">
                <div className="absolute inset-4">
                  <Image
                    src="/images/fire-extinguishers.png"
                    alt="Professional fire protection equipment and safety systems"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
