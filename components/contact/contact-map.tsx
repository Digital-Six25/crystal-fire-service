"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const locations = [
  {
    name: "Crystal Fire Services - Brookvale",
    address: "Unit 26, 122-126 Old Pittwater Rd, Brookvale NSW 2100",
    lat: -33.7648,
    lng: 151.2717,
    isMain: true,
    phone: "1300 790 702",
    hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-1PM",
  },
  {
    name: "Crystal Fire Services - Wyong",
    address: "3 Amy Close, Wyong NSW 2259",
    lat: -33.2847,
    lng: 151.4244,
    isMain: false,
    phone: "1300 790 702",
    hours: "Mon-Fri: 8AM-5PM",
  },
  {
    name: "Crystal Fire Services - Fitzroy",
    address: "425 Smith Street, Fitzroy VIC 3065",
    lat: -37.7983,
    lng: 144.9814,
    isMain: false,
    phone: "1300 790 702",
    hours: "Mon-Fri: 8AM-5PM",
  },
];

export default function ContactMap() {
  const { ref, isVisible } = useScrollAnimation();

  // Generate Google Maps embed URL for the main location (Brookvale)
  const mainLocation = locations.find((loc) => loc.isMain);
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8234567890123!2d${
    mainLocation?.lng
  }!3d${
    mainLocation?.lat
  }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1234567890a%3A0x1234567890abcdef!2sCrystal%20Fire%20Services!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau&q=${encodeURIComponent(
    mainLocation?.address || ""
  )}`;

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">Visit Our Offices</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Our Locations Across
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Australia
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visit us at any of our convenient locations across NSW and Victoria
            for professional fire protection services and expert consultation.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${
                location.isMain ? "ring-2 ring-blue-500/30" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                {location.isMain && (
                  <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                    Main Office
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                {location.name}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {location.address}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <a
                    href={`tel:${location.phone.replace(/\s/g, "")}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{location.hours}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Directions
                </a>
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="bg-white border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Main Map Display */}
        <div
          className={`transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200/50 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Main Office - Brookvale
                  </h3>
                  <p className="text-gray-600">{mainLocation?.address}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    Business Hours
                  </p>
                  <p className="text-sm text-gray-600">{mainLocation?.hours}</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px]">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crystal Fire Services Brookvale Location"
                className="w-full h-full"
              />
            </div>

            <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
                <div className="text-center lg:text-left">
                  <p className="font-semibold text-gray-900 mb-1">
                    Emergency Service
                  </p>
                  <p className="text-sm text-gray-600">24/7 Available</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-semibold text-gray-900 mb-1">
                    Response Time
                  </p>
                  <p className="text-sm text-gray-600">{"<2 Hours"}</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-semibold text-gray-900 mb-1">
                    Service Area
                  </p>
                  <p className="text-sm text-gray-600">NSW & VIC</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    mainLocation?.address || ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href={`tel:1300790702`}
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Coverage */}
        <div
          className={`mt-16 transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Comprehensive Service Coverage
                </span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide professional fire protection services across New
                South Wales and Victoria, with rapid response times and local
                expertise in each region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">NSW Coverage</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Sydney, Central Coast, Newcastle, Hunter Valley, and
                  surrounding metropolitan areas
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Primary service area with fastest response times
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">VIC Coverage</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Melbourne metropolitan, Geelong, Ballarat, and regional
                  Victoria locations
                </p>
                <div className="text-xs text-indigo-600 font-medium">
                  Expanding service area with local expertise
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">
                  Emergency Service
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  24/7 emergency fire protection services available across all
                  coverage areas
                </p>
                <div className="text-xs text-purple-600 font-medium">
                  Rapid response for critical situations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
