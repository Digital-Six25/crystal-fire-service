"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FireExtinguisher } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface EquipmentProps {
  maintain: {
    pill: string;
    title: string;
    cards: {
      icon: string | null;
      title: string;
      subtitle: string;
      types: { type: string }[];
    }[];
  };
}

export default function Equipment({ maintain }: EquipmentProps) {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-brand-light via-white to-brand-light/50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-brand-primary/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 rounded-full text-brand-primary text-sm font-medium mb-8">
            <FireExtinguisher className="w-4 h-4 mr-2" />
            {maintain.pill}{" "}
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-brand-gradient mb-6">
            {maintain.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-brand-primary to-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {maintain.cards.map((item, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm border border-brand-primary/20 rounded-3xl p-8 h-full transition-all duration-500 group-hover:bg-white/90 group-hover:border-brand-primary/30 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-blue rounded-2xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                  >
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Floating Indicator */}
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-brand-primary to-brand-blue rounded-full transition-all duration-500 ${
                      hoveredIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <div className="w-full h-full rounded-full animate-ping bg-gradient-to-r from-brand-primary to-brand-blue opacity-75"></div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-brand-dark transition-colors duration-300">
                  {item.subtitle}
                </p>

                {/* Expandable Details */}
                <div className="transition-all duration-500 overflow-hidden max-h-40 opacity-100">
                  <div className="border-t border-brand-primary/20 pt-4 mb-4">
                    <ul className="space-y-2">
                      {item.types.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-sm text-gray-600 transition-all duration-300"
                          style={{ transitionDelay: `${detailIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-brand-primary to-brand-blue rounded-full mr-3"></div>
                          {detail.type}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
