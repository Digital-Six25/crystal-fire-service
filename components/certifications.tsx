"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional Memberships & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Crystal Fire Services maintains the highest industry standards
            through our professional memberships and ISO certifications
          </p>
        </div>

        {/* Professional Memberships */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <Link
              href={cert.link}
              target="_blank"
              key={index}
              className={`block transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 hover:border-teal-300">
                <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex justify-center">
                      <div className="relative w-48 h-24 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="inline-flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors duration-300">
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ISO Accreditations
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
              Crystal Fire Services is ISO accredited in Quality Assurance,
              Environmental & Occupational Health & Safety Management Systems
            </p>
          </div>

          <Link
            href="/certification"
            className={`block transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 hover:border-teal-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
                  {isoAccreditations.map((iso, index) => (
                    <div
                      key={index}
                      className={`relative transition-all duration-1000 ease-out ${
                        isVisible
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                      style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={iso.logo || "/placeholder.svg"}
                          alt={iso.alt}
                          width={iso.standard === "JAS-ANZ" ? 120 : 80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors duration-300">
                    View All Certifications
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "✓",
              title: "Fully Accredited",
              description: "All certifications current and maintained",
              color: "bg-green-100 text-green-600",
            },
            {
              icon: "★",
              title: "Industry Recognition",
              description: "Recognized by leading industry bodies",
              color: "bg-blue-100 text-blue-600",
            },
            {
              icon: "⚡",
              title: "Quality Assured",
              description: "ISO certified management systems",
              color: "bg-teal-100 text-teal-600",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="font-bold text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg group-hover:text-teal-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
