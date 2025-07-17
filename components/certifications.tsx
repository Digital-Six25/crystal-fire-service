"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Award, Users, ArrowRight } from "lucide-react";

const professionalMemberships = [
  {
    name: "Fire Protection Association Australia",
    logo: "/images/fpa-australia-gold.jpg",
    description: "Gold Member - Leading fire protection industry association",
    link: "https://www.fpaa.com.au",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Property Council of Australia",
    logo: "/images/property-council-australia.jpg",
    description: "Member - Peak body for property industry professionals",
    link: "https://www.propertycouncil.com.au",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Facility Management Association",
    logo: "/images/fma.jpg",
    description: "Member 2019-2020 - Professional facility management body",
    link: "https://www.fma.com.au",
    color: "from-green-400 to-teal-500",
  },
];

const isoAccreditations = [
  {
    name: "ISO 14001",
    logo: "/images/iso-14001.png",
    description: "Environmental Management System",
    year: "2023",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "ISO 9001",
    logo: "/images/iso-9001.png",
    description: "Quality Management System",
    year: "2023",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "ISO 45001",
    logo: "/images/iso-45001.jpg",
    description: "Occupational Health & Safety",
    year: "2023",
    color: "from-red-400 to-pink-500",
  },
  {
    name: "JAS-ANZ",
    logo: "/images/jasanz.png",
    description: "Joint Accreditation System",
    year: "Current",
    color: "from-purple-400 to-violet-500",
  },
];

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background with gradient and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with professional badge */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full mb-6 shadow-lg">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Industry Leading Certifications
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Certifications & Memberships
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is demonstrated through our
            professional certifications, industry memberships, and adherence to
            the highest standards of quality and safety.
          </p>
        </div>

        {/* Professional Memberships */}
        <div className="mb-20">
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full mb-4 shadow-lg">
              <Users className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">
                Professional Network
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-gray-900 to-emerald-700 bg-clip-text text-transparent">
                Professional Memberships
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              Proud members of leading industry associations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalMemberships.map((membership, index) => (
              <Link
                key={index}
                href={membership.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/90 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${membership.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <div className="relative w-32 h-20 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={membership.logo || "/placeholder.svg"}
                          alt={`${membership.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h4
                      className={`font-bold mb-3 text-lg bg-gradient-to-r ${membership.color} bg-clip-text text-transparent`}
                    >
                      {membership.name}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {membership.description}
                    </p>
                    <div className="flex items-center justify-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      <span className="font-medium mr-2">Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ISO Accreditations */}
        <div>
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full mb-4 shadow-lg">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                International Standards
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                ISO Accreditations
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              Certified to international standards for quality and safety
            </p>
          </div>

          <Link href="https://atlascertification.com.au/" target="_blank">
            <div
              className={`group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/90 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "650ms" }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  {isoAccreditations.map((cert, index) => (
                    <div key={index} className="text-center group/cert">
                      <div className="mb-4 flex justify-center">
                        <div className="relative w-20 h-20 group-hover:scale-110 group/cert-hover:scale-125 transition-transform duration-300">
                          <Image
                            src={cert.logo || "/placeholder.svg"}
                            alt={`${cert.name} certification logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div
                        className={`inline-block px-2 py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-medium rounded-full mb-2 shadow-lg`}
                      >
                        {cert.year}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="font-bold text-lg mr-3">
                      View All Certifications
                    </span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
