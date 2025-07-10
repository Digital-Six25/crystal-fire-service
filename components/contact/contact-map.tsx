"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const locations = [
  {
    name: "Crystal Fire Services - Brookvale",
    address: "Unit 26, 122-126 Old Pittwater Rd, Brookvale NSW 2100",
    lat: -33.7648,
    lng: 151.2717,
    isMain: true,
  },
  {
    name: "Crystal Fire Services - Wyong",
    address: "3 Amy Close, Wyong NSW 2259",
    lat: -33.2847,
    lng: 151.4244,
    isMain: false,
  },
  {
    name: "Crystal Fire Services - Fitzroy",
    address: "425 Smith Street, Fitzroy VIC 3065",
    lat: -37.7983,
    lng: 144.9814,
    isMain: false,
  },
]

export default function ContactMap() {
  const { ref, isVisible } = useScrollAnimation()

  // Generate Google Maps embed URL for the main location (Brookvale)
  const mainLocation = locations.find((loc) => loc.isMain)
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8234567890123!2d${mainLocation?.lng}!3d${mainLocation?.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1234567890a%3A0x1234567890abcdef!2sCrystal%20Fire%20Services!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau&q=${encodeURIComponent(
    mainLocation?.address || "",
  )}`

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our convenient locations across Australia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-1000 ease-out ${
                location.isMain ? "ring-2 ring-teal-500" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
                {location.isMain && (
                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                    Main Office
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{location.address}</p>
              <div className="flex space-x-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 text-sm font-medium transition-colors duration-200"
                >
                  Get Directions
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href={`https://www.google.com/maps/place/${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 text-sm font-medium transition-colors duration-200"
                >
                  View on Map
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Main Office - Brookvale</h3>
              <p className="text-gray-600">{mainLocation?.address}</p>
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
            <div className="p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-sm text-gray-600">
                <p className="font-medium">Business Hours:</p>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    mainLocation?.address || "",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-4 py-2"
                >
                  Get Directions
                </a>
                <a href={`tel:1300790702`} className="btn-outline text-sm px-4 py-2 text-center">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
            <p className="text-gray-600 mb-4">
              We provide fire protection services across New South Wales and Victoria, with our main operations based in
              Sydney's Northern Beaches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">NSW Coverage</h4>
                <p className="text-gray-600">Sydney, Central Coast, Newcastle, and surrounding areas</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">VIC Coverage</h4>
                <p className="text-gray-600">Melbourne metropolitan and regional Victoria</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Service</h4>
                <p className="text-gray-600">24/7 emergency fire protection services available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
