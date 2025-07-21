"use client";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Shield,
  Wrench,
  FileCheck,
  Search,
  ArrowRight,
  CheckCircle,
  Award,
} from "lucide-react";

export default function FireProtectionHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    {
      icon: Shield,
      label: "Years Experience",
      value: "20+",
      color: "from-brand-primary to-brand-blue",
    },
    {
      icon: CheckCircle,
      label: "Projects Completed",
      value: "5000+",
      color: "from-brand-cyan to-brand-blue",
    },
    {
      icon: Award,
      label: "Certified Technicians",
      value: "50+",
      color: "from-brand-blue to-brand-primary",
    },
    {
      icon: Wrench,
      label: "Service Areas",
      value: "24/7",
      color: "from-brand-primary to-brand-cyan",
    },
  ];

  const services = [
    {
      icon: Wrench,
      title: "Installation",
      description: "Professional fire system installation",
      href: "/fire-protection/installation",
      color: "from-brand-primary to-brand-blue",
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "Regulatory compliance services",
      href: "/fire-protection/compliance",
      color: "from-brand-cyan to-brand-blue",
    },
    {
      icon: Search,
      title: "Testing",
      description: "Inspection and testing services",
      href: "/fire-protection/inspection-testing",
      color: "from-brand-blue to-brand-primary",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Shield className="w-5 h-5 mr-2" />
              Professional Fire Protection
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                FIRE PROTECTION
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                SERVICES
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Comprehensive fire protection solutions including installation,
              compliance, and inspection testing for commercial, residential,
              and industrial properties across Australia
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 ease-out delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold rounded-xl hover:from-brand-blue hover:to-brand-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center px-8 py-4 border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-primary transform hover:scale-105 transition-all duration-500 ease-out shadow-md ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
