"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Phone,
  Mail,
  Award,
  Shield,
  CheckCircle,
  Users,
  Clock,
  FileText,
} from "lucide-react";

export default function CertificationContent() {
  const { ref, isVisible } = useScrollAnimation();

  const achievements = [
    {
      icon: Award,
      title: "FPA Accredited",
      description: "Fully accredited by Fire Protection Association Australia",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Government Approved",
      description:
        "NSW Government recognised competent fire safety practitioners",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: CheckCircle,
      title: "100% Compliance",
      description: "Perfect track record in fire safety compliance",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified professionals with decades of experience",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const stats = [
    { number: "25+", label: "Years in Industry", icon: Clock },
    { number: "5000+", label: "Certificates Issued", icon: FileText },
    { number: "100%", label: "Compliance Rate", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Phone },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 mx-auto">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FPA Accreditation Section */}
        <div
          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 border border-white/50 shadow-xl transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">
                Industry Recognition
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fire Protection Association of Australia (FPA) launches NSW FPAS
                Accreditation
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                In the wake of the NSW Government's announcements of major
                reforms to the state's fire safety and building regulations, FPA
                Australia has prepared an accreditation scheme for Fire Safety
                Assessment to cover Part 9 Division 5 and 7 of EP & A
                Regulation.
              </p>

              <p>
                This accreditation scheme was launched 1st April 2019 and gives
                competent fire safety practitioners 12 months to gain final
                accreditation. Crystal Certification is pre-qualified to sign
                off on any AFSS and registered for final qualification to ensure
                we stay at the forefront of the industry.
              </p>

              <p>
                These reforms are possibly the most important change to the fire
                protection industry in decades, and FPA Australia is working
                closely with government and industry to ensure the reforms both
                improve fire safety outcomes and are practical for the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${
                    achievement.gradient
                  } p-6 rounded-2xl text-white hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                >
                  <achievement.icon className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-lg mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Need Expert Certification Guidance?
            </h3>
            <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto text-lg">
              Our certified fire safety practitioners are ready to help you
              navigate the complex world of fire safety compliance and
              certification requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-xl mb-2">Phone Consultation</h4>
              <p className="text-blue-100 mb-4">
                Speak directly with our certification experts
              </p>
              <a
                href="tel:1300790702"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold hover:scale-105"
              >
                Call 1300 790 702
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 mx-auto">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-xl mb-2">Email Inquiry</h4>
              <p className="text-blue-100 mb-4">
                Get detailed certification information
              </p>
              <a
                href="mailto:certification@crystalfire.com.au"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
