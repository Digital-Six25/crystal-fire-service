"use client";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Shield,
  CheckCircle,
  Wrench,
  FileCheck,
  Search,
  Phone,
  Mail,
  Clock,
  Award,
  ArrowRight,
  Star,
  Users,
  Zap,
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
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
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
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
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
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Over 20 years of experience in fire protection services across Australia",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description:
      "Full range of fire protection services from installation to maintenance",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Round-the-clock emergency repair and response services",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "Certified Professionals",
    description: "Fully licensed and certified fire protection technicians",
    color: "from-green-500 to-emerald-500",
  },
];

const achievements = [
  {
    icon: Star,
    label: "Customer Satisfaction",
    value: "99%",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    label: "Trained Professionals",
    value: "50+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    label: "Response Time",
    value: "<2hrs",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    label: "Safety Record",
    value: "100%",
    color: "from-green-500 to-emerald-500",
  },
];

export default function FireProtectionContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Introduction Section */}
      <section
        ref={ref}
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">
                Professional Solutions
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent">
                Professional Fire Protection Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Crystal Fire Services provides comprehensive fire protection
              services designed to safeguard lives, property, and the
              environment. Our expert team delivers professional installation,
              compliance management, and inspection testing services across
              Australia.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transform hover:scale-105 transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${
                  service.bgColor
                } rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
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
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div
              className={`text-center mb-12 transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Why Choose Crystal Fire Services?
                </span>
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We combine industry expertise with cutting-edge technology to
                deliver superior fire protection solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className={`group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transform hover:scale-105 transition-all duration-500 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-3xl p-12 shadow-xl transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 mb-6">
                <Phone className="w-5 h-5 text-teal-600 mr-2" />
                <span className="text-teal-700 font-medium">
                  Get Started Today
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-700 via-blue-700 to-teal-600 bg-clip-text text-transparent">
                  Ready to Protect Your Property?
                </span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Contact our fire protection experts today to discuss your
                requirements and get a comprehensive quote for your fire safety
                needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-4">
                  Emergency & Consultation
                </h4>
                <p className="text-blue-700 mb-6">
                  24/7 emergency response available
                </p>
                <a
                  href="tel:1300790702"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Call 1300 790 702
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>

              <div className="group text-center p-8 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl border border-teal-200/50 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-teal-900 mb-4">
                  Project Inquiries
                </h4>
                <p className="text-teal-700 mb-6">
                  Get detailed quotes and project information
                </p>
                <a
                  href="mailto:projects@crystalfire.com.au"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Email Projects Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
