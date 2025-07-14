"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Target, Award, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Protecting lives and property is our primary mission",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Accurate installations and meticulous attention to detail",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering superior quality in every project we undertake",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "Building lasting relationships with our clients and community",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Purpose() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-medium mb-8 backdrop-blur-sm border border-teal-500/30">
              <Target className="w-4 h-4 mr-2" />
              Our Mission & Values
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              OUR
              <span className="block bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                PURPOSE
              </span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-xl text-gray-300 leading-relaxed">
                Crystal Fire Services provides safety and protection to life,
                property and the environment with thoughtful fire protection
                solutions delivered with integrity.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                We are committed to excellence in every aspect of our service
                delivery, from initial consultation through to ongoing
                maintenance and support. Our experienced team ensures your fire
                protection systems meet all regulatory requirements while
                providing optimal safety for your premises.
              </p>
            </div>

            {/* Interactive Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    activeValue === index ? "scale-105" : "hover:scale-105"
                  }`}
                  onClick={() => setActiveValue(index)}
                  onMouseEnter={() => setActiveValue(index)}
                >
                  <div
                    className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 ${
                      activeValue === index
                        ? "bg-white/10 border-white/20 shadow-2xl"
                        : "group-hover:bg-white/10 group-hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${
                        value.color
                      } rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                        activeValue === index
                          ? "scale-110 rotate-6"
                          : "group-hover:scale-110 group-hover:rotate-6"
                      }`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-teal-600 hover:to-teal-700 hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center">
                Learn About Our Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Right Content - Enhanced Image */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10">
                <div className="absolute inset-4">
                  <Image
                    src="/images/fire-extinguishers.jpg"
                    alt="Fire safety equipment installation and maintenance work"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent rounded-3xl"></div>

                {/* Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-sm text-gray-300">
                    Projects Completed
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl rotate-12 shadow-xl opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl -rotate-12 shadow-xl opacity-80 animate-pulse delay-1000"></div>

              {/* Achievement Badges */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform duration-300">
                  <div className="text-xs text-gray-300 text-center">ISO</div>
                  <div className="text-sm font-bold text-white">Certified</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform duration-300">
                  <div className="text-xs text-gray-300 text-center">FPA</div>
                  <div className="text-sm font-bold text-white">Member</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:scale-105 transition-transform duration-300">
                  <div className="text-xs text-gray-300 text-center">24/7</div>
                  <div className="text-sm font-bold text-white">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
