"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, CheckCircle, Users, Award } from "lucide-react";

export default function EFSMSection() {
  const { ref, isVisible } = useScrollAnimation();

  const keyPoints = [
    {
      title: "Safety Systems",
      description: "Fire and life safety systems for buildings",
    },
    {
      title: "Compliance",
      description: "Meet statutory obligations effectively",
    },
    {
      title: "Peace of Mind",
      description: "Reduce risk to life and property",
    },
    {
      title: "Expert Service",
      description: "Professional maintenance solutions",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-brand-primary via-brand-blue to-brand-cyan text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-white/10">
              <Image
                src="/images/Image-5.png"
                alt="Professional fire sprinkler system - Essential Fire Safety Measures"
                fill
                className="object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/30"></div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Shield className="w-5 h-5  mr-2" />
              <span className="text-white font-medium">
                Essential Safety Measures
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent">
                ESSENTIAL FIRE
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-brand-light bg-clip-text text-transparent">
                SAFETY MEASURES
              </span>
              <br />
              <span className="text-white text-2xl">(EFSM)</span>
            </h2>

            <div className="space-y-6 leading-relaxed mb-8">
              <p className="text-lg">
                EFSM are defined as the fire and life safety systems installed
                or constructed in buildings to ensure adequate levels of safety
                for occupants in the event of a fire or emergency.
              </p>

              <p className="text-lg">
                When the construction of a building is complete, the building
                owner is responsible for the integrity and maintenance of the
                safety features and essential safety measures.
              </p>

              <p className="text-lg font-semibold text-white">
                Crystal Compliance Services will give you peace of mind knowing
                that you are meeting your statutory obligations and reducing the
                risk to life and property.
              </p>
            </div>

            {/* Key Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                >
                  <h3 className="font-semibold text-white mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm ">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-brand-primary to-brand-blue hover:from-brand-primary/90 hover:to-brand-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Learn More
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Get Quote
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
