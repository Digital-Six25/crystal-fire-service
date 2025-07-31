"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, ArrowRight, Award, Clock, Shield } from "lucide-react";
import Link from "next/link";

export default function TeamHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-brand-light via-white to-brand-light/50 py-20 lg:py-32 overflow-hidden"
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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              Meet Our Expert Team
            </div>

            <div
              className={`transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                LEADERSHIP
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-blue block">
                  TEAM
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                Meet the experienced professionals who lead Crystal Fire
                Services with expertise, integrity, and a commitment to
                excellence in fire protection solutions.
              </p>
            </div>

            {/* Key Features */}
            <div
              className={`grid sm:grid-cols-3 gap-6 transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            ></div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href={"#team"}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold rounded-xl hover:from-brand-blue hover:to-brand-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn About Our Expertise
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Crystal Fire Services Leadership Team"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[600px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
