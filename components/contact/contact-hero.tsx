"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden flex items-center justify-center"
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 rounded-full px-6 py-3 mb-8">
            <Phone className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-medium">
              Professional Fire Protection Services
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
              Contact Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
              Fire Safety Experts
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Ready to protect your property? Get in touch with Australia's
            leading fire protection specialists for expert advice and
            professional service.
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-primary transition-all duration-300 hover:scale-105 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Response</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-primary transition-all duration-300 hover:scale-105 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {"<2hrs"}
              </div>
              <div className="text-gray-600">Response Time</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-primary transition-all duration-300 hover:scale-105 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-gray-600">Office Locations</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300790702"
              className="group bg-gradient-to-r from-brand-primary to-brand-blue text-white px-8 py-4 rounded-xl font-semibold hover:from-brand-blue hover:to-brand-primary transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: 1300 790 702
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="mailto:hello@crystalfire.com.au"
              className="group border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 bg-transparent"
            >
              <Mail className="w-5 h-5" />
              Email Us
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
