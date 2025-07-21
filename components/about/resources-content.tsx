"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  ExternalLink,
  FileText,
  Download,
  Calendar,
  Shield,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

const usefulLinks = [
  {
    title: "NSW Government Fact sheet",
    url: "#",
    description: "Official NSW Government fire safety fact sheet",
    category: "Government",
    icon: Shield,
    color: "from-[#0192a8] to-[#188bc0]",
  },
  {
    title: "AFSS – Effective 1st December 2017",
    url: "#",
    description: "Annual Fire Safety Statement requirements",
    category: "Compliance",
    icon: Calendar,
    color: "from-[#55c5d2] to-[#188bc0]",
  },
  {
    title:
      "Fire Protection Association Australia – Fire Protection Accreditation Scheme (FPAS)",
    url: "#",
    description: "FPA Australia accreditation scheme information",
    category: "Accreditation",
    icon: Shield,
    color: "from-[#777bbb] to-[#aaa8ce]",
  },
  {
    title: "Building Fire Safety Regulation – Fact sheet August 2017",
    url: "#",
    description: "Building fire safety regulation guidelines",
    category: "Regulations",
    icon: AlertTriangle,
    color: "from-[#188bc0] to-[#55c5d2]",
  },
  {
    title: "Planning Circular _Building Fire Safety Regulation",
    url: "#",
    description: "Planning circular for building fire safety regulations",
    category: "Planning",
    icon: BookOpen,
    color: "from-[#0192a8] to-[#55c5d2]",
  },
];

const categories = [
  { name: "Government", count: 1, color: "bg-[#0192a8]/10 text-[#0192a8]" },
  { name: "Compliance", count: 1, color: "bg-[#55c5d2]/10 text-[#55c5d2]" },
  { name: "Accreditation", count: 1, color: "bg-[#777bbb]/10 text-[#777bbb]" },
  { name: "Regulations", count: 1, color: "bg-[#188bc0]/10 text-[#188bc0]" },
  { name: "Planning", count: 1, color: "bg-[#bee5e9]/20 text-[#0192a8]" },
];

export default function ResourcesContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-white to-[#bee5e9]/30 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#bee5e9]/50 to-[#55c5d2]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#188bc0]/30 to-[#777bbb]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0192a8]/20 to-[#55c5d2]/20 backdrop-blur-sm border border-[#0192a8]/30 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#0192a8] mr-2" />
              <span className="text-[#0192a8] text-sm font-medium">
                Essential Resources
              </span>
            </div>

            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#333333] to-[#0192a8] bg-clip-text text-transparent mb-6">
              USEFUL LINKS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0192a8] to-[#188bc0] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Access comprehensive fire safety resources, regulations, and
              compliance documents
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${category.color} hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                {category.name} ({category.count})
              </div>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {usefulLinks.map((link, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group h-full"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`bg-gradient-to-br ${link.color} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <link.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            categories.find((c) => c.name === link.category)
                              ?.color
                          }`}
                        >
                          {link.category}
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#0192a8] transition-colors duration-300 flex-shrink-0" />
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#0192a8] transition-colors duration-300 mb-2 line-clamp-2">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {link.description}
                      </p>
                      <div className="mt-4 flex items-center text-[#0192a8] text-sm font-medium">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resource
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div
            className={`bg-gradient-to-r from-[#bee5e9]/30 to-[#55c5d2]/20 border border-[#55c5d2]/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-[#0192a8] to-[#188bc0] w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#333333] mb-3">
                  Need Additional Guidance?
                </h3>
                <p className="text-[#333333] leading-relaxed text-lg mb-6">
                  Should you require any further advice or guidance on
                  certification or fire safety regulations and compliance please
                  contact our office
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:1300790702"
                    className="bg-gradient-to-r from-[#0192a8] to-[#188bc0] text-white px-6 py-3 rounded-full font-semibold hover:from-[#188bc0] hover:to-[#0192a8] transition-all duration-300 hover:scale-105 shadow-lg text-center"
                  >
                    Call 1300 790 702
                  </a>
                  <button className="bg-white text-[#0192a8] px-6 py-3 rounded-full font-semibold border-2 border-[#0192a8]/20 hover:bg-[#bee5e9]/20 transition-all duration-300 hover:scale-105">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
