"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FileText, MapPin, Users, Clock } from "lucide-react";

export default function AFSSPrograms() {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: FileText,
      title: "Streamlined Process",
      description: "Simplified AFSS lodgement procedure",
    },
    {
      icon: MapPin,
      title: "Nationwide Service",
      description: "Available across all Australian states",
    },
    {
      icon: Users,
      title: "Expert Management",
      description: "Qualified fire safety practitioners",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "On-time compliance guarantee",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-brand-primary via-brand-blue to-brand-cyan text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl"></div>

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
            <div className="aspect-square relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-white/10">
              <Image
                src="/images/Image-4.png"
                alt="Professional fire sprinkler system installation"
                fill
                className="object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-teal-900/30"></div>
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-light/20 backdrop-blur-sm border border-white/20 mb-6">
              <FileText className="w-5 h-5 text-brand-light mr-2" />
              <span className="text-white font-medium">
                Professional Management
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent">
                AFSS MANAGEMENT
              </span>
              <br />
              <span className="text-white">PROGRAMS</span>
            </h2>

            <div className="space-y-6 text-brand-light/90 leading-relaxed mb-8">
              <p className="text-lg">
                Crystal Compliance Services provides an AFSS management
                programme to help streamline the lodgement of your Annual Fire
                Safety Statement (AFSS)
              </p>

              <p className="text-lg">
                We provide this service nationally in accordance with State laws
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                >
                  <feature.icon className="w-6 h-6 text-brand-light mb-2" />
                  <h3 className="font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-brand-primary to-brand-blue hover:from-brand-primary/90 hover:to-brand-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Find out More
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Contact Us
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
