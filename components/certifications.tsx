"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Link from "next/link";

const certifications = [
  {
    logo: "/images/fpa-australia-gold.jpg",
    link: "https://www.fpaa.com.au/",
    alt: "FPA Gold Member - Fire Protection Association Australia",
    title: "FPA Gold Member",
    description:
      "Crystal Fire Services is a proud member of the Fire Protection Association of Australia",
  },
  {
    logo: "/images/cm3-logo.png",
    link: "https://www.cm3.com.au/",
    alt: "CM3 Contractor OHS/WHS Prequalification System",
    title: "CM3 Qualified",
    description:
      "Crystal Fire Services is fully qualified with CM3's Contractor OHS/WHS Prequalification system",
  },
  {
    logo: "/images/fma.jpg",
    link: "https://fma.com.au/",
    alt: "FMA Member 2017-2020 - Facility Management Association",
    title: "FMA Member",
    description:
      "Crystal Fire Services is a proud member of the Facility Management Association of Australia",
  },
  {
    logo: "/images/property-council-australia.jpg",
    link: "https://www.propertycouncil.com.au/",
    alt: "Property Council of Australia Member",
    title: "Property Council Member",
    description:
      "Crystal Fire Services is a proud member of the Property Council of Australia",
  },
];

const isoAccreditations = [
  {
    logo: "/images/iso-14001.png",
    alt: "ISO 14001 Environmental Management System Certification",
    standard: "ISO 14001",
  },
  {
    logo: "/images/iso-9001.png",
    alt: "ISO 9001 Quality Management System Certification",
    standard: "ISO 9001",
  },
  {
    logo: "/images/iso-45001.jpg",
    alt: "ISO 45001 Occupational Health & Safety Management System Certification",
    standard: "ISO 45001",
  },
  {
    logo: "/images/jasanz.png",
    alt: "JAS-ANZ Accredited Certification",
    standard: "JAS-ANZ",
  },
];

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Professional Memberships */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {certifications.map((cert, index) => (
            <Link
              href={cert.link}
              target="_blank"
              key={index}
              className={`text-center transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="relative w-48 h-24">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                {cert.description}
              </p>
            </Link>
          ))}
        </div>

        {/* ISO Accreditations */}
        <div className="border-t border-gray-200 pt-16">
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
              {isoAccreditations.map((iso, index) => (
                <Link
                  href={"https://atlascertification.com.au/"}
                  target="_blank"
                  key={index}
                  className={`relative transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                >
                  <Image
                    src={iso.logo || "/placeholder.svg"}
                    alt={iso.alt}
                    width={iso.standard === "JAS-ANZ" ? 120 : 80}
                    height={80}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Crystal Fire Services is ISO accredited in Quality Assurance,
              Environmental & Occupational Health & Safety Management Systems
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "✓",
              title: "Fully Accredited",
              description: "All certifications current and maintained",
            },
            {
              icon: "★",
              title: "Industry Recognition",
              description: "Recognized by leading industry bodies",
            },
            {
              icon: "⚡",
              title: "Quality Assured",
              description: "ISO certified management systems",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-gray-50 rounded-lg transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 font-bold text-xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
