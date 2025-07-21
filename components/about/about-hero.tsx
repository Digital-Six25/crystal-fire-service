"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Award } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#bee5e9] via-white to-[#bee5e9] py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#55c5d2] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#188bc0] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ease-out `}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 bg-[#bee5e9] text-[#0192a8] rounded-full text-sm font-medium mb-6 transition-all duration-1000 ease-out delay-200 `}
            >
              <Award className="w-4 h-4 mr-2" />
              Leading Fire Protection Specialists
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-1000 ease-out delay-300 `}
            >
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0192a8] to-[#188bc0] block">
                Crystal Fire Services
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed transition-all duration-1000 ease-out delay-400 `}
            >
              Leading fire protection specialists committed to safeguarding
              lives, property, and the environment through innovative solutions
              and professional excellence for over two decades.
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-1000 ease-out delay-500 `}
            >
              <Link
                href="/fire-protection"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0192a8] to-[#188bc0] text-white font-semibold rounded-xl hover:from-[#188bc0] hover:to-[#0192a8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* <button className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#55c5d2] hover:bg-[#bee5e9] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <Play className="mr-2 w-5 h-5 text-[#0192a8]" />
                Watch Story
              </button> */}
            </div>

            {/* Certification Images */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center transition-all duration-1000 ease-out delay-600`}
            >
              <div className="flex justify-center items-center w-20 h-16 bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                <Image
                  src="/images/iso-14001.png"
                  alt="ISO 14001 Certification"
                  width={60}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center items-center w-20 h-16 bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                <Image
                  src="/images/iso-45001.jpg"
                  alt="ISO 45001 Certification"
                  width={60}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center items-center w-20 h-16 bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                <Image
                  src="/images/iso-9001.png"
                  alt="ISO 9001 Certification"
                  width={60}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center items-center w-20 h-16 bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                <Image
                  src="/images/jasanz.png"
                  alt="JAS-ANZ Accreditation"
                  width={60}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-700 `}
          >
            <div className="relative">
              {/* Main Image - No tilt effect */}
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/firefighter.png"
                  alt="Crystal Fire Services professional firefighter with equipment"
                  fill
                  className="object-cover"
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
