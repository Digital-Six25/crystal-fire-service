"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calendar, Camera, ExternalLink, Phone } from "lucide-react";
import Image from "next/image";

export default function MediaContent({ media, cta }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-6">
              <Camera className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-700 text-sm font-medium">
                {media.pill}
              </span>
            </div>

            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-6">
              {media.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {media.subtitle}
            </p>
          </div>

          {/* Featured Media */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Featured Coverage
            </h3>
            <div className="space-y-6">
              {media.cards.map((feature: any, index: any) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 200}ms` }}
                >
                  <a
                    href={feature.btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-6">
                      <div
                        className={`bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Image
                          src={feature.icon}
                          height={30}
                          width={30}
                          alt="icon"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                            {feature.coverage_type}
                          </span>
                          <span className="text-gray-500 text-sm flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {feature.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {feature.subtitle}
                        </p>
                        <div className="flex items-center text-purple-600 font-medium">
                          <span>{feature.btn.label}</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div
            className={`bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-900 mb-3">
                  {cta.title}
                </h3>
                <p className="text-purple-800 leading-relaxed text-lg mb-6">
                  {cta.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${cta.btn.url}`}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                  >
                    {cta.btn.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
