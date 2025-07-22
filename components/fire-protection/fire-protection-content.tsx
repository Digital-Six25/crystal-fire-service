"use client";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Shield,
  CheckCircle,
  Wrench,
  FileCheck,
  Search,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

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
    color: "from-brand-primary to-brand-blue",
    bgColor: "from-brand-light/30 to-white",
    image: "/images/fire-extinguishers.jpg",
  },
  {
    icon: FileCheck,
    title: "Compliance Services",
    description:
      "Ensuring your fire protection systems meet all Australian standards and regulatory requirements.",
    features: [
      "Building Code compliance",
      "Australian Standards adherence",
      "Regulatory documentation",
      "Compliance certificates",
      "AFSS preparation",
      "Authority liaison",
    ],
    link: "/fire-protection/compliance",
    color: "from-brand-cyan to-brand-blue",
    bgColor: "from-brand-cyan/20 to-white",
    image: "/images/maintenance.jpg",
  },
  {
    icon: Search,
    title: "Inspection & Testing",
    description:
      "Regular inspection and testing services to maintain system integrity and compliance.",
    features: [
      "Routine system inspections",
      "Performance testing",
      "Maintenance scheduling",
      "Defect identification",
      "Compliance reporting",
      "Emergency repairs",
    ],
    link: "/fire-protection/inspection-testing",
    color: "from-brand-blue to-brand-primary",
    bgColor: "from-brand-blue/20 to-white",
    image: "/images/safety.jpg",
  },
];

const certifications = [
  {
    image: "/images/iso-9001.png",
    title: "ISO 9001:2015",
    description: "Quality Management Systems",
  },
  {
    image: "/images/iso-45001.jpg",
    title: "ISO 45001:2018",
    description: "Occupational Health & Safety",
  },
  {
    image: "/images/iso-14001.png",
    title: "ISO 14001:2015",
    description: "Environmental Management",
  },
  {
    image: "/images/fpa-australia-gold.jpg",
    title: "FPA Australia",
    description: "Gold Member Status",
  },
  {
    image: "/images/jasanz.png",
    title: "JAS-ANZ",
    description: "Accredited Certification",
  },
  {
    image: "/images/fma.jpg",
    title: "FMA Australia",
    description: "Fire & Emergency Services",
  },
];

export default function FireProtectionContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Services Grid with Images */}
      <section
        ref={ref}
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
              <Shield className="w-5 h-5 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                Comprehensive Fire Protection Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professional fire protection services designed to safeguard lives,
              property, and the environment across Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${
                  service.bgColor
                } rounded-3xl overflow-hidden border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div
                    className={`absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-brand-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className={`group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-light/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
              <Shield className="w-5 h-5 mr-2" />
              Certifications & Accreditations
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                Industry Leading Standards
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our certifications demonstrate our commitment to quality, safety,
              and environmental responsibility
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-primary transform hover:scale-105 transition-all duration-500 ease-out shadow-md hover:shadow-xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="relative h-16 mb-4">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Side-by-Side Layout */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                  Ready to Protect Your Property?
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Contact our fire protection experts today to discuss your
                requirements and get a comprehensive quote for your fire safety
                needs. Our team is available 24/7 for emergency response and
                consultations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-brand-light/50 rounded-xl p-4 border border-brand-primary/20">
                  <div className="text-2xl font-bold text-brand-primary mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">
                    Emergency Response
                  </div>
                </div>
                <div className="bg-brand-cyan/20 rounded-xl p-4 border border-brand-cyan/30">
                  <div className="text-2xl font-bold text-brand-cyan mb-1">
                    Free
                  </div>
                  <div className="text-sm text-gray-600">
                    Initial Consultation
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:1300790702"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Call 1300 790 702
                  <Phone className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="mailto:projects@crystalfire.com.au"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Email Projects Team
                  <Mail className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/plan.png"
                  alt="Fire protection consultation"
                  width={600}
                  height={500}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/50">
                  <div className="text-sm font-semibold text-gray-900">
                    Expert Consultation
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/50">
                  <div className="text-sm font-semibold text-gray-900">
                    Professional Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
