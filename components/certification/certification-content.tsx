"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Award, Shield, Users } from "lucide-react";
import Image from "next/image";

export default function CertificationContent({
  certificates,
  recog,
  process,
  expertise,
  cta,
}: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-light/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {certificates.map((cert: any, index: any) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:border-brand-primary/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto overflow-hidden rounded-xl border border-brand-primary/20">
                <img
                  src={cert.img || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent mb-2">
                {cert.title}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {cert.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* FPA Accreditation Section with Background Image */}
        <div
          className={`relative rounded-3xl overflow-hidden mb-16 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-blue/85 to-brand-cyan/90"></div>
          </div>

          <div className="relative p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-light/20 backdrop-blur-sm border border-brand-light/30 mb-6">
                <Award className="w-5 h-5 text-white mr-2" />
                <span className="text-white font-semibold">{recog.pill}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {recog.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white leading-relaxed">
                <p className="text-lg">{recog.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recog.cards.map((achievement: any, index: any) => (
                  <div
                    key={index}
                    className={`bg-brand-light/10 backdrop-blur-sm p-6 rounded-2xl border border-brand-light/20 hover:bg-brand-light/15 transition-all duration-300 hover:scale-105 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                  >
                    <Image
                      src={achievement.icon}
                      height={30}
                      width={30}
                      alt="icon"
                      className="mb-4"
                    />
                    <h3 className="font-bold text-lg mb-2 ">
                      {achievement.title}
                    </h3>
                    <p className="text-sm">{achievement.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certification Process Section */}
        <div
          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 border border-white/50 shadow-xl transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-blue/10 border border-brand-primary/20 mb-6">
                <Shield className="w-5 h-5 text-brand-primary mr-2" />
                <span className="text-brand-primary font-semibold">
                  {process.pill}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                  {process.title}
                </span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">{process.subtitle}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-brand-primary/5 p-4 rounded-xl border border-brand-primary/20">
                    <h4 className="font-semibold text-brand-primary mb-2">
                      {process.cards[0].title}
                    </h4>
                    <p className="text-sm text-brand-primary/70">
                      {process.cards[0].subtitle}
                    </p>
                  </div>
                  <div className="bg-brand-blue/5 p-4 rounded-xl border border-brand-blue/20">
                    <h4 className="font-semibold text-brand-blue mb-2">
                      {process.cards[1].title}
                    </h4>
                    <p className="text-sm text-brand-blue/70">
                      {process.cards[1].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={process.img || "/images/safety.jpg"}
                alt="Fire Safety Assessment Process"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Expert Team Section */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ease-out delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <img
              src={expertise.img || "/images/solution.png"}
              alt="Expert Fire Safety Team"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-primary/10 border border-brand-cyan/20 mb-6">
              <Users className="w-5 h-5 text-brand-cyan mr-2" />
              <span className="text-brand-cyan font-semibold">
                {expertise.pill}
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-cyan to-brand-primary bg-clip-text text-transparent">
                {expertise.title}
              </span>
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">{expertise.subtitle}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-brand-cyan/5 rounded-xl border border-brand-cyan/20">
                  <div className="text-2xl font-bold text-brand-cyan mb-1">
                    {expertise.cards[0].title}
                  </div>
                  <div className="text-sm text-brand-cyan/70">
                    {expertise.cards[0].subtitle}
                  </div>
                </div>
                <div className="text-center p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/20">
                  <div className="text-2xl font-bold text-brand-primary mb-1">
                    {expertise.cards[1].title}
                  </div>
                  <div className="text-sm text-brand-primary/70">
                    {expertise.cards[1].subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`bg-gradient-to-r from-brand-primary to-brand-blue rounded-3xl p-8 lg:p-12 text-white transition-all duration-1000 ease-out delay-1200 ${
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
            <div className="bg-brand-light/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-brand-light/20 hover:bg-brand-light/15 transition-all duration-300 hover:scale-105">
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

            <div className="bg-brand-light/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-brand-light/20 hover:bg-brand-light/15 transition-all duration-300 hover:scale-105">
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
