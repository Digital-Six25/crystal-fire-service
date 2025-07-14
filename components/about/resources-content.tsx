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
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "AFSS – Effective 1st December 2017",
    url: "#",
    description: "Annual Fire Safety Statement requirements",
    category: "Compliance",
    icon: Calendar,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title:
      "Fire Protection Association Australia – Fire Protection Accreditation Scheme (FPAS)",
    url: "#",
    description: "FPA Australia accreditation scheme information",
    category: "Accreditation",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Building Fire Safety Regulation – Fact sheet August 2017",
    url: "#",
    description: "Building fire safety regulation guidelines",
    category: "Regulations",
    icon: AlertTriangle,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Planning Circular _Building Fire Safety Regulation",
    url: "#",
    description: "Planning circular for building fire safety regulations",
    category: "Planning",
    icon: BookOpen,
    color: "from-teal-500 to-cyan-500",
  },
];

const categories = [
  { name: "Government", count: 1, color: "bg-blue-100 text-blue-800" },
  { name: "Compliance", count: 1, color: "bg-emerald-100 text-emerald-800" },
  { name: "Accreditation", count: 1, color: "bg-purple-100 text-purple-800" },
  { name: "Regulations", count: 1, color: "bg-orange-100 text-orange-800" },
  { name: "Planning", count: 1, color: "bg-teal-100 text-teal-800" },
];

export default function ResourcesContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-6">
              <FileText className="w-4 h-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">
                Essential Resources
              </span>
            </div>

            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-emerald-900 bg-clip-text text-transparent mb-6">
              USEFUL LINKS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-6"></div>
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
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors duration-300 flex-shrink-0" />
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300 mb-2 line-clamp-2">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {link.description}
                      </p>
                      <div className="mt-4 flex items-center text-emerald-600 text-sm font-medium">
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
            className={`bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                  Need Additional Guidance?
                </h3>
                <p className="text-emerald-800 leading-relaxed text-lg mb-6">
                  Should you require any further advice or guidance on
                  certification or fire safety regulations and compliance please
                  contact our office
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:1300790702"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                  >
                    Call 1300 790 702
                  </a>
                  <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold border-2 border-emerald-200 hover:bg-emerald-50 transition-all duration-300 hover:scale-105">
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
