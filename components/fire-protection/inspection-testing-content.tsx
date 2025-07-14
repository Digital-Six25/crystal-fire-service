"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Phone,
  Mail,
  ArrowRight,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Award,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InspectionTestingContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div>
      {/* Hero Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <Shield className="w-6 h-6 text-purple-600" />
              <span className="font-semibold text-gray-900">
                Testing Excellence
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Professional Testing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                label: "Pass Rate",
                value: "98%",
                color: "purple",
              },
              {
                icon: Clock,
                label: "Response Time",
                value: "24hrs",
                color: "pink",
              },
              {
                icon: Users,
                label: "Certified Techs",
                value: "20+",
                color: "rose",
              },
              {
                icon: Award,
                label: "Systems Tested",
                value: "5000+",
                color: "purple",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
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

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["AS1851", "BCA", "CFSP", "ISO9001"].map((cert, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-2">
                        <Award className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-700">
                        {cert}
                      </div>
                    </div>
                  ))}
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
                    src="/placeholder.svg?height=400&width=600"
                    alt="Professional fire system testing and inspection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-purple-600">
                    Certified Testing
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-gray-700">
                    25+ Years
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section - Our Testing Services Cover */}
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 mb-20">
            <div
              className={`text-center mb-12 transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
                <CheckCircle className="w-6 h-6 text-purple-600" />
                <span className="font-semibold text-gray-900">
                  Our Services
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                OUR TESTING SERVICES COVER:
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="inspection-testing"
                  className="border border-purple-200 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-purple-600" />
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
                  className="border border-purple-200 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-purple-600" />
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
                  className="border border-purple-200 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-purple-600" />
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
                  className="border border-purple-200 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-purple-600" />
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
                  className="border border-purple-200 rounded-lg bg-white/80 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-purple-600" />
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
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <Award className="w-6 h-6 text-purple-300" />
              <span className="font-semibold text-white">Why Choose Us</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
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
                <p className="text-purple-100 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div
            className={`bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Schedule Your Fire System Testing
              </h3>
              <p className="text-purple-100 leading-relaxed max-w-2xl mx-auto">
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
                <p className="text-purple-100 mb-4">
                  24/7 emergency testing available
                </p>
                <a
                  href="tel:1300790702"
                  className="inline-block bg-white text-purple-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
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
                <p className="text-purple-100 mb-4">
                  Get detailed testing schedules and quotes
                </p>
                <a
                  href="mailto:testing@crystalfire.com.au"
                  className="inline-block bg-white text-purple-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
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
