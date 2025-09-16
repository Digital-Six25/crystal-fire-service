"use client";

import {
  Flame,
  FileCheck,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Static UI config (only styles/icons)
const serviceUIConfig = [
  {
    icon: Flame,
    color: "from-brand-primary to-brand-blue",
    bgColor: "bg-brand-light/30",
    iconBg: "bg-brand-light",
    iconColor: "text-brand-primary",
  },
  {
    icon: FileCheck,
    color: "from-brand-cyan to-brand-blue",
    bgColor: "bg-brand-cyan/20",
    iconBg: "bg-brand-cyan/30",
    iconColor: "text-brand-cyan",
  },
];

interface ServicesProps {
  service: {
    pill: string;
    title: string;
    subtitle: string;
    cards: {
      icon: string | null;
      title: string;
      subtitle: string;
      description?: string;
      features?: string[];
      types?: { type: string }[];
      button: { label: string; url: string };
    }[];
    cta?: {
      title: string;
      subtitle: string;
      buttons: { button: { label: string; url: string } }[];
    };
  };
}

export default function Services({ service }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      id="ourServices"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center px-4 py-2 bg-brand-light rounded-full text-brand-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            {service.pill}
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            {service.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {service.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {service.cards.map((card, index) => {
            const ui = serviceUIConfig[index % serviceUIConfig.length]; // cycle styles if more cards than config
            return (
              <div
                key={index}
                className="group relative transition-all duration-700 ease-out"
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative ${ui.bgColor} rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 border border-gray-100 overflow-hidden`}
                >
                  {/* Background Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ui.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Floating Icon */}
                  <div className="relative mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 ${ui.iconBg} rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      {card.icon ? (
                        <Image
                          src={card.icon}
                          height={32}
                          width={32}
                          alt={card.title}
                        />
                      ) : (
                        <ui.icon className={`w-10 h-10 ${ui.iconColor}`} />
                      )}
                    </div>

                    {/* Animated Badge */}
                    <div
                      className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${
                        ui.color
                      } rounded-full flex items-center justify-center transform transition-all duration-500 ${
                        hoveredIndex === index
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {card.subtitle}
                  </p>

                  {/* Features List */}
                  {card.types && (
                    <ul className="space-y-4 mb-10">
                      {card.types.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-center text-gray-700 transition-all duration-300 ${
                            hoveredIndex === index ? "translate-x-2" : ""
                          }`}
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div
                            className={`w-6 h-6 ${ui.iconBg} rounded-full flex items-center justify-center mr-4 transition-all duration-300`}
                          >
                            <CheckCircle
                              className={`w-4 h-4 ${ui.iconColor}`}
                            />
                          </div>
                          <span className="font-medium">{feature.type}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA Button */}
                  <Link href={card.button.url}>
                    <button
                      className={`group/btn relative overflow-hidden bg-gradient-to-r ${ui.color} text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {card.button.label}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
