"use client"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield, CheckCircle, Wrench, FileCheck, Search, Phone, Mail, Clock, Award } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Installation Services",
    description:
      "Professional installation of fire protection systems including sprinklers, alarms, extinguishers, and emergency lighting.",
    features: [
      "Fire sprinkler systems",
      "Fire alarm and detection systems",
      "Emergency lighting systems",
      "Fire extinguisher installation",
      "Hydrant and hose reel systems",
      "Fire doors and exits",
    ],
    link: "/fire-protection/installation",
  },
  {
    icon: FileCheck,
    title: "Compliance Services",
    description: "Ensuring your fire protection systems meet all Australian standards and regulatory requirements.",
    features: [
      "Building Code compliance",
      "Australian Standards adherence",
      "Regulatory documentation",
      "Compliance certificates",
      "AFSS preparation",
      "Authority liaison",
    ],
    link: "/fire-protection/compliance",
  },
  {
    icon: Search,
    title: "Inspection & Testing",
    description: "Regular inspection and testing services to maintain system integrity and compliance.",
    features: [
      "Routine system inspections",
      "Performance testing",
      "Maintenance scheduling",
      "Defect identification",
      "Compliance reporting",
      "Emergency repairs",
    ],
    link: "/fire-protection/inspection-testing",
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Over 20 years of experience in fire protection services across Australia",
  },
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "Full range of fire protection services from installation to maintenance",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Round-the-clock emergency repair and response services",
  },
  {
    icon: CheckCircle,
    title: "Certified Professionals",
    description: "Fully licensed and certified fire protection technicians",
  },
]

export default function FireProtectionContent() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Professional Fire Protection Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crystal Fire Services provides comprehensive fire protection services designed to safeguard lives, property,
            and the environment. Our expert team delivers professional installation, compliance management, and
            inspection testing services across Australia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-teal-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={service.link} className="btn-primary w-full sm:w-auto inline-block text-center">
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-800 text-white rounded-2xl p-12 mb-20">
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Crystal Fire Services?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We combine industry expertise with cutting-edge technology to deliver superior fire protection solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`bg-teal-50 border border-teal-200 rounded-lg p-8 transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">Ready to Protect Your Property?</h3>
            <p className="text-teal-800 leading-relaxed max-w-2xl mx-auto">
              Contact our fire protection experts today to discuss your requirements and get a comprehensive quote for
              your fire safety needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-teal-600 mr-3" />
                <h4 className="font-semibold text-teal-900">Emergency & Consultation</h4>
              </div>
              <p className="text-teal-800 mb-4">24/7 emergency response available</p>
              <a
                href="tel:1300790702"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors duration-200 font-medium"
              >
                Call 1300 790 702
              </a>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-teal-600 mr-3" />
                <h4 className="font-semibold text-teal-900">Project Inquiries</h4>
              </div>
              <p className="text-teal-800 mb-4">Get detailed quotes and project information</p>
              <a
                href="mailto:projects@crystalfire.com.au"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors duration-200 font-medium"
              >
                Email Projects Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
