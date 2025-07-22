"use client";

import { Phone, Mail, MapPin, Clock, Award, Shield } from "lucide-react";

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
  return (
    <div className="space-y-8">
      <div className={`transition-all duration-1000 ease-out `}>
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
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
          className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] `}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Call Us Now</h3>
              <a
                href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                className="text-2xl font-bold text-brand-primary hover:text-brand-primary/80 transition-colors duration-200 block mb-2"
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
          className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] `}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-lg font-medium text-brand-blue hover:text-brand-blue/80 transition-colors duration-200 block mb-2"
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
          className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-cyan to-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
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
    </div>
  );
}
