"use client";

import { Phone, Mail, MapPin, Clock, Award, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contactDetails = {
  phone: "1300 790 702",
  email: "hello@crystalfire.com.au",
  addresses: [
    {
      name: "Main Office - Brookvale",
      street: "Unit 26, 122-126 Old Pittwater Rd",
      city: "Brookvale NSW 2100",
      isMain: true,
    },
    {
      name: "Central Coast Office",
      street: "3 Amy Close",
      city: "Wyong NSW 2259",
      isMain: false,
    },
    {
      name: "Melbourne Office",
      street: "425 Smith Street",
      city: "Fitzroy VIC 3065",
      isMain: false,
    },
  ],
};

export default function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="space-y-8">
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>
        <p className="text-gray-600 mb-8">
          Contact our certified fire protection specialists for expert
          consultation and professional service.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-6">
        {/* Phone */}
        <div
          className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Call Us Now</h3>
              <a
                href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200 block mb-2"
              >
                {contactDetails.phone}
              </a>
              <p className="text-sm text-gray-600">
                24/7 Emergency Response Available
              </p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div
          className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-lg font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200 block mb-2"
              >
                {contactDetails.email}
              </a>
              <p className="text-sm text-gray-600">
                We respond within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div
          className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-3">
                Business Hours
              </h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium text-gray-900">
                    8:00 AM - 5:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium text-gray-900">
                    9:00 AM - 1:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium text-gray-900">
                    Emergency Only
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div
        className={`transition-all duration-1000 ease-out delay-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-600" />
          Our Locations
        </h3>

        <div className="space-y-4">
          {contactDetails.addresses.map((address, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                address.isMain ? "ring-2 ring-blue-500/20" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{address.name}</h4>
                {address.isMain && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    Main Office
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-3">
                {address.street}
                <br />
                {address.city}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${address.street}, ${address.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
              >
                Get Directions
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Credentials */}
      <div
        className={`transition-all duration-1000 ease-out delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            Professional Credentials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">FPA Australia Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Government Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">Fully Insured</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
