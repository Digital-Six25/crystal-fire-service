"use client";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Shield,
  CheckCircle,
  Wrench,
  FileCheck,
  Search,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Certifications from "../certifications";

export default function FireProtectionContent({
  getStarted,
  services,
  certifications,
}: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Services Grid with Images */}
      <section
        ref={ref}
        className="py-20 bg-gradient-to-br from-brand-cyan/20 to-white"
        id="services"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
              <Shield className="w-5 h-5 mr-2" />
              {services.pill}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                {services.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.cards.map((service: any, index: any) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${
                  service.bgColor
                } rounded-3xl overflow-hidden border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.img || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div
                    className={`absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-blue rounded-xl shadow-lg`}
                  >
                    <Image
                      src={service.icon}
                      height={30}
                      width={30}
                      alt="icon"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.subtitle}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.types.map((feature: any, featureIndex: any) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-brand-primary mr-3 flex-shrink-0" />
                        {feature.type}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.btn.url}
                    className={`group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    {service.btn.label}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications certifications={certifications} />

      {/* Contact Section with Side-by-Side Layout */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
                <Phone className="w-5 h-5 mr-2" />
                {getStarted.pill}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                  {getStarted.title}
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {getStarted.subtitle}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {getStarted.cards.map((card: any, i: any) => (
                  <div className="bg-brand-light/50 rounded-xl p-4 border border-brand-primary/20">
                    <div className="text-2xl font-bold text-brand-primary mb-1">
                      {card.title}
                    </div>
                    <div className="text-sm text-gray-600">{card.subtitle}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={getStarted.btns[0].url}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {getStarted.btns[0].label}
                  <Phone className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href={getStarted.btns[1].url}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {getStarted.btns[1].label}
                  <Mail className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={getStarted.img || "/images/plan.png"}
                  alt="Fire protection consultation"
                  width={600}
                  height={500}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/50">
                  <div className="text-sm font-semibold text-gray-900">
                    Expert Consultation
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/50">
                  <div className="text-sm font-semibold text-gray-900">
                    Professional Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
