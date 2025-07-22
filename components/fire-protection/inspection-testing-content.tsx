"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Award, CheckCircle, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function InspectionTestingContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div>
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
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent mb-6">
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

              <p className="text-gray-600 leading-relaxed mb-8">
                We retain comprehensive maintenance records and complete all
                necessary compliance reports. This enables us to provide an
                Annual Fire Safety Statement, which is enforced by Council and
                the NSW Fire Brigade.
              </p>

              <div className="bg-gradient-to-r from-brand-light/30 to-white rounded-2xl p-6 border border-brand-primary/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2 p-2">
                      <Image
                        src="/images/iso-9001.png"
                        alt="ISO 9001"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      ISO 9001
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2 p-2">
                      <Image
                        src="/images/iso-14001.png"
                        alt="FPA Australia"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      FPA Australia
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2 p-2">
                      <Image
                        src="/images/iso-45001.jpg"
                        alt="JAS-ANZ"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      JAS-ANZ
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2 p-2">
                      <Image
                        src="/images/jasanz.png"
                        alt="FMA"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      FMA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative group">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/testing.jpg"
                    alt="Professional fire system testing and inspection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section - Our Testing Services Cover */}
          <div className="bg-gradient-to-br from-brand-light/20 to-white rounded-2xl p-8 mb-20">
            <div
              className={`text-center mb-12 transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
                <CheckCircle className="w-6 h-6 text-brand-primary" />
                <span className="font-semibold text-gray-900">
                  Our Services
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent mb-6">
                OUR TESTING SERVICES COVER:
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="inspection-testing"
                  className="border border-brand-primary/20 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-brand-primary" />
                      Inspection Testing
                    </div>
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
                  className="border border-brand-primary/20 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-brand-primary" />
                      Fire Suppression Systems
                    </div>
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
                  className="border border-brand-primary/20 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-brand-primary" />
                      Fire Maintenance Systems
                    </div>
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
                  className="border border-brand-primary/20 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-brand-primary" />
                      Portable Fire Equipment
                    </div>
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
                  className="border border-brand-primary/20 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-brand-primary" />
                      Fire Detection & Emergency Evacuation Systems
                    </div>
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
        </div>
      </section>

      {/* Why Choose Our Testing Services */}
      <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-blue to-brand-cyan text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-light/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <Award className="w-6 h-6" />
              <span className="font-semibold text-white">Why Choose Us</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold bg-clip-text  mb-6">
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
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 8) * 150}ms` }}
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div
            className={`bg-gradient-to-r from-brand-primary/80 to-brand-blue/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Schedule Your Fire System Testing
              </h3>
              <p className="text-brand-light leading-relaxed max-w-2xl mx-auto">
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
                <p className="text-brand-light mb-4">
                  24/7 emergency testing available
                </p>
                <a
                  href="tel:1300790702"
                  className="inline-block bg-white text-brand-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
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
                <p className="text-brand-light mb-4">
                  Get detailed testing schedules and quotes
                </p>
                <a
                  href="mailto:testing@crystalfire.com.au"
                  className="inline-block bg-white text-brand-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
                >
                  Email Testing Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
