"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const testingServices = [
  "Fire sprinkler systems",
  "Fire alarm and detection systems",
  "Emergency lighting systems",
  "Fire extinguisher testing",
  "Hydrant and hose reel systems",
  "EWIS systems",
  "Fire door testing",
  "Smoke detection systems",
];

export default function InspectionTestingContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Main Content Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                PROFESSIONAL FIRE SYSTEM TESTING
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Testing your Fire Protection System is required by law. It also
                provides you with peace of mind as you'll know your system will
                perform correctly in the event of an emergency.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Crystal Fire Services offers competitive pricing for full
                inspection, testing and maintenance for any system that requires
                certification. Our technicians are fully qualified and will
                thoroughly test and audit your system to ensure its compliance
                with all regional industry standards and government regulations.
              </p>

              <p className="text-gray-600 leading-relaxed">
                We retain comprehensive maintenance records and complete all
                necessary compliance reports. This enables us to provide an
                Annual Fire Safety Statement, which is enforced by Council and
                the NSW Fire Brigade.
              </p>
            </div>

            {/* Right Image */}
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Professional fire system testing and inspection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section - Our Testing Services Cover */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-20">
            <div
              className={`text-center mb-12 transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                OUR TESTING SERVICES COVER:
              </h3>
              <div className="w-24 h-0.5 bg-gray-400 mx-auto mb-6"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="inspection-testing"
                  className="border border-gray-200 rounded-lg bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    Inspection Testing
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Comprehensive inspection testing services for all fire
                    protection systems to ensure optimal performance and
                    compliance with Australian standards. Our qualified
                    technicians conduct thorough visual inspections, functional
                    testing, and performance verification.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="fire-suppression"
                  className="border border-gray-200 rounded-lg bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    Fire Suppression Systems
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Testing and maintenance of fire suppression systems
                    including sprinkler systems, deluge systems, pre-action
                    systems, and special hazard suppression systems. We ensure
                    proper water flow, pressure testing, and system
                    functionality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="fire-maintenance"
                  className="border border-gray-200 rounded-lg bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    Fire Maintenance Systems
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Regular maintenance and testing of fire protection systems
                    in accordance with AS1851 standards. This includes routine
                    servicing, component replacement, system optimization, and
                    preventive maintenance to ensure reliable operation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="portable-equipment"
                  className="border border-gray-200 rounded-lg bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    Portable Fire Equipment
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Testing and maintenance of portable fire equipment including
                    fire extinguishers, fire blankets, and hose reels. We
                    provide pressure testing, agent replacement, and
                    certification to ensure your portable equipment is ready
                    when needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="detection-evacuation"
                  className="border border-gray-200 rounded-lg bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    Fire Detection & Emergency Evacuation Systems
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    Comprehensive testing of fire detection systems, smoke
                    alarms, heat detectors, and emergency evacuation systems
                    including EWIS (Emergency Warning and Intercommunication
                    Systems). We ensure proper functionality and compliance with
                    safety standards.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Systems We Test */}
          {/* <div className="mb-20">
            <div
              className={`text-center mb-12 transition-all duration-1000 ease-out delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">SYSTEMS WE TEST & INSPECT</h3>
              <div className="w-24 h-0.5 bg-gray-400 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testingServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                >
                  <CheckCircle className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">{service}</h4>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Why Choose Our Testing Services */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-300 mb-6">
              WHY CHOOSE OUR TESTING SERVICES?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Legal Compliance",
                description:
                  "Ensure your systems meet all Australian fire safety regulations and standards",
              },
              {
                title: "Qualified Technicians",
                description:
                  "Our certified professionals have extensive experience in fire system testing",
              },
              {
                title: "Comprehensive Reports",
                description:
                  "Detailed testing reports and maintenance records for your compliance needs",
              },
              {
                title: "Competitive Pricing",
                description:
                  "Cost-effective testing solutions without compromising on quality or thoroughness",
              },
              {
                title: "Regular Scheduling",
                description:
                  "Automated reminders and scheduling to ensure you never miss required testing",
              },
              {
                title: "Emergency Response",
                description:
                  "24/7 emergency testing and repair services when you need them most",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-gray-700 rounded-lg transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 8) * 150}ms` }}
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div
            className={`bg-teal-600 rounded-lg p-8 transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Schedule Your Fire System Testing
              </h3>
              <p className="text-teal-100 leading-relaxed max-w-2xl mx-auto">
                Don't wait until it's too late. Contact our testing specialists
                today to schedule your fire system inspection and ensure your
                property remains compliant and protected.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white mr-3" />
                  <h4 className="font-semibold text-white">
                    Emergency & Scheduling
                  </h4>
                </div>
                <p className="text-teal-100 mb-4">
                  24/7 emergency testing available
                </p>
                <a
                  href="tel:1300790702"
                  className="inline-block bg-white text-teal-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  Call 1300 790 702
                </a>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white mr-3" />
                  <h4 className="font-semibold text-white">
                    Testing Inquiries
                  </h4>
                </div>
                <p className="text-teal-100 mb-4">
                  Get detailed testing schedules and quotes
                </p>
                <a
                  href="mailto:testing@crystalfire.com.au"
                  className="inline-block bg-white text-teal-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  Email Testing Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
