"use client";

import { Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CertificationCarousel from "./certificationCarousel";
import { Button } from "./ui/button";
interface HeroProps {
  hero: {
    buttons: any;
    pill: string;
    title: string;
    subtitle: string;
    image: string | null;
    certifications: { id: number; url: string }[];
  };
}

export default function Hero({ hero }: HeroProps) {
  if (!hero) return null;
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ease-out delay-200 
             
            `}
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/20 rounded-full text-brand-primary text-sm font-medium mb-6 backdrop-blur-sm border border-brand-primary/30">
              <Shield className="w-4 h-4 mr-2" />
              {hero.pill}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6">
              {hero.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i === 1 || i === 2 // 2nd and 3rd words (0-based index)
                      ? "text-brand-gradient"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button asChild className="btn-primary w-full sm:w-auto">
                <Link href={hero.buttons[0].button.url}>
                  {hero.buttons[0].button.label}
                </Link>
              </Button>
              <Button
                asChild
                className="bg-transparent text-primary border border-primary hover:text-white w-full sm:w-auto"
              >
                <Link
                  href={hero.buttons[1].button.url}
                  className="flex items-center justify-center"
                >
                  {hero.buttons[1].button.label}
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </Button>
            </div>

            {/* Certification Images */}
            <CertificationCarousel certifications={hero.certifications} />
          </div>

          {/* Right Content - Single Image */}
          <div
            className={`relative transition-all duration-1000 ease-out delay-400 `}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-primary/20 backdrop-blur-sm border border-white/20">
                <div className="absolute inset-4">
                  <Image
                    src={hero.image || "/images/home-hero.png"}
                    alt="Professional fire protection equipment and safety systems"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
