"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Clock } from "lucide-react";

export default function ComplianceContent({ req, ser }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Main Content Section */}
      <section ref={ref} className="py-20 " id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent mb-6">
                {ser.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                {ser.subtitle}
              </p>

              <div className="space-y-4 mb-8">
                {ser.services.map((service: any, index: any) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-blue rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {service.service}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-brand-light/30 to-white rounded-2xl p-6 border border-brand-primary/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {ser.certificates.map((img: any, i: any) => (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2 p-2">
                        <Image
                          src={img.img || "/images/iso-9001.png"}
                          alt="ISO 9001"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative group">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={ser.img || "/images/testing.jpg"}
                    alt="Fire sprinkler head compliance testing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Is Testing Required Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-blue to-brand-cyan text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-light/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <Clock className="w-6 h-6 text-brand-light" />
              <span className="font-semibold text-white">{req.pill}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent mb-4">
              {req.title}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {req.cards.map((card: any, i: any) => (
              <div
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-1000 ease-out delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-white leading-relaxed text-lg">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
