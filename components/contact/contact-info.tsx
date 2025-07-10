"use client"

import { Phone, Mail, MapPin, Linkedin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactDetails = {
  phone: "1300 790 702",
  email: "hello@crystalfire.com.au",
  addresses: [
    {
      street: "Unit 26, 122-126 Old Pittwater Rd",
      city: "Brookvale NSW 2100",
    },
    {
      street: "3 Amy Close",
      city: "Wyong NSW 2259",
    },
    {
      street: "425 Smith Street",
      city: "Fitzroy VIC 3065",
    },
  ],
}

export default function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in touch</h2>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Phone className="w-5 h-5 text-teal-600 mt-1" />
          </div>
          <div>
            <a
              href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              {contactDetails.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Mail className="w-5 h-5 text-teal-600 mt-1" />
          </div>
          <div>
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              {contactDetails.email}
            </a>
          </div>
        </div>

        {/* Addresses */}
        {contactDetails.addresses.map((address, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <MapPin className="w-5 h-5 text-teal-600 mt-1" />
            </div>
            <div className="text-gray-700">
              <div>{address.street}</div>
              <div>{address.city}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow us</h3>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/company/crystal-fire-services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  )
}
