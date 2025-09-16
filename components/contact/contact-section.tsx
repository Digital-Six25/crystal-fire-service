"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

export default function ContactSection({ hero, info, locations }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="font-medium">{hero.pill}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-brand-primary to-brand-blue bg-clip-text text-transparent">
              {hero.title}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <ContactInfo info={info} />
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
