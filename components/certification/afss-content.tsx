"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Phone,
  Mail,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Shield,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceInvolves = [
  "Witnessing of system interface tests",
  "Witnessing of flow tests",
  "Independent building assessment and report",
  "Liaise with building management to collate contractor certificates on compliance",
  "Prepare Annual Fire Safety statement and sign off as Competent Fire Safety Practitioner",
];

export default function AFSSContent({ solutions, process, offer, cta }: any) {
  const { ref, isVisible } = useScrollAnimation();

  const processSteps = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Comprehensive building evaluation",
    },
    {
      step: "02",
      title: "System Testing",
      description: "Witness interface and flow tests",
    },
    {
      step: "03",
      title: "Documentation",
      description: "Collate all compliance certificates",
    },
    {
      step: "04",
      title: "AFSS Preparation",
      description: "Prepare and sign off statement",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-light/50 relative overflow-hidden"
      id="afssManagement"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Introduction Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
            <FileText className="w-5 h-5 text-brand-primary mr-2" />
            <span className="text-brand-primary font-semibold">
              {solutions.pill}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
              {solutions.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {solutions.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {solutions.cards.map((benefit: any, index: any) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-brand-blue to-brand-cyan p-6 rounded-2xl text-white hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <Image
                src={benefit.icon}
                className="mb-4"
                height={30}
                width={30}
                alt="icon"
              />
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm opacity-90">{benefit.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Service Process Section */}
        <div
          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 border border-white/50 shadow-xl transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                {process.title}
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-cyan mx-auto rounded-full"></div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {process.cards.map((step: any, index: any) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 5) * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              What's Included:
            </h4>
            {process.types.map((service: any, index: any) => (
              <div
                key={index}
                className={`flex items-start space-x-4 bg-gradient-to-r from-brand-light/30 to-white p-4 rounded-xl border border-brand-primary/20 hover:shadow-md transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${(index + 8) * 150}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-brand-primary to-brand-blue rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 leading-relaxed font-medium">
                  {service.type}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`mt-8 bg-gradient-to-r from-brand-light/30 to-white p-6 rounded-2xl border border-brand-primary/20 transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gray-700 leading-relaxed text-center font-medium">
              {process.subtext}
            </p>
          </div>
        </div>

        {/* Why We Offer This Service Section */}
        <div
          className={`bg-gradient-to-r from-gray-800 to-brand-primary rounded-3xl p-8 lg:p-12 text-white mb-16 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              {offer.title}
            </h3>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-brand-light leading-relaxed">
              <p>{offer.left_para}</p>
            </div>

            <div className="space-y-6 text-brand-light leading-relaxed">
              <p>{offer.right_para}</p>{" "}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`bg-gradient-to-r from-brand-primary to-brand-blue rounded-3xl p-8 lg:p-12 text-white transition-all duration-1000 ease-out delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{cta.title}</h3>
            <p className="text-white leading-relaxed max-w-2xl mx-auto text-lg">
              {cta.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-light/20 rounded-xl mb-4 mx-auto">
                <Image
                  src={cta.cards[0].icon}
                  height={30}
                  width={30}
                  alt="icon"
                />
              </div>
              <h4 className="font-semibold text-xl mb-2">
                {cta.cards[0].title}
              </h4>
              <p className="text-white mb-4">{cta.cards[0].subtitle}</p>
              <a
                href={cta.cards[0].btn.url}
                className="inline-block bg-brand-light text-brand-primary px-6 py-3 rounded-xl hover:bg-brand-light/90 transition-all duration-300 font-semibold hover:scale-105"
              >
                {cta.cards[0].btn.label}
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-light/20 rounded-xl mb-4 mx-auto">
                <Image
                  src={cta.cards[1].icon}
                  height={30}
                  width={30}
                  alt="icon"
                />
              </div>
              <h4 className="font-semibold text-xl mb-2">
                {cta.cards[1].title}
              </h4>
              <p className="text-white mb-4">{cta.cards[1].subtitle}</p>
              <a
                href={cta.cards[1].btn.url}
                className="inline-block bg-brand-light text-brand-primary px-6 py-3 rounded-xl hover:bg-brand-light/90 transition-all duration-300 font-semibold hover:scale-105"
              >
                {cta.cards[1].btn.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
