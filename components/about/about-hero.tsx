"use client";

import { ArrowRight, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CertificationCarousel from "../certificationCarousel";

interface HeroProps {
  hero?: {
    button: any;
    pill: string;
    title: string;
    subtitle: string;
    image: string | null;
  };
  certifications: { id: number; url: string | null }[];
}

export default function AboutHero({ hero, certifications }: HeroProps) {
  if (!hero) return null;
  const { button, image, pill, subtitle, title } = hero;

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
              {pill}
            </div>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-1000 ease-out delay-300 `}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0192a8] to-[#188bc0] block">
                {title}
              </span>
            </h1>
            <p
              className={`text-lg sm:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed transition-all duration-1000 ease-out delay-400 `}
            >
              {subtitle}
            </p>
            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-1000 ease-out delay-500 `}
            >
              <Link
                href={button.url}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0192a8] to-[#188bc0] text-white font-semibold rounded-xl hover:from-[#188bc0] hover:to-[#0192a8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {button.label}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            {/* Certification Images */}
            <CertificationCarousel certifications={certifications} />
          </div>

          {/* Right Content - Image */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-700 `}
          >
            <div className="relative">
              {/* Main Image - No tilt effect */}
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={image || ""}
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
