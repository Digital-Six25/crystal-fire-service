"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="font-medium">Get Professional Advice</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Let's Discuss Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Fire Protection Needs
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our certified fire protection specialists are ready to provide
            expert consultation, professional installation, and ongoing
            maintenance services tailored to your requirements.
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
            <ContactInfo />
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

        {/* Trust Indicators */}
        <div
          className={`mt-20 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Crystal Fire Services?
              </h3>
              <p className="text-gray-600">
                Trusted by thousands of clients across Australia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">25+</span>
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  Years Experience
                </div>
                <div className="text-sm text-gray-600">
                  Industry-leading expertise
                </div>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">99%</span>
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  Client Satisfaction
                </div>
                <div className="text-sm text-gray-600">
                  Exceptional service quality
                </div>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  Emergency Support
                </div>
                <div className="text-sm text-gray-600">
                  Always available when needed
                </div>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  Office Locations
                </div>
                <div className="text-sm text-gray-600">NSW & VIC coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
