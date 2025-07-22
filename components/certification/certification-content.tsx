"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, Mail, Award, Shield, CheckCircle, Users } from "lucide-react";

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

  const certifications = [
    {
      image: "/images/iso-9001.png",
      title: "ISO 9001",
      description: "Quality Management Systems",
    },
    {
      image: "/images/fpa-australia-gold.jpg",
      title: "FPA Australia",
      description: "Fire Protection Association",
    },
    {
      image: "/images/jasanz.png",
      title: "JAS-ANZ",
      description: "Joint Accreditation System",
    },
    {
      image: "/images/fma.jpg",
      title: "FMA",
      description: "Fire & Emergency Management",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-light/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:border-brand-primary/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto overflow-hidden rounded-xl border border-brand-primary/20">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent mb-2">
                {cert.title}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {cert.description}
              </div>
            </div>
          ))}
        </div>

        {/* FPA Accreditation Section with Background Image */}
        <div
          className={`relative rounded-3xl overflow-hidden mb-16 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-blue/85 to-brand-cyan/90"></div>
          </div>

          <div className="relative p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-light/20 backdrop-blur-sm border border-brand-light/30 mb-6">
                <Award className="w-5 h-5 text-white mr-2" />
                <span className="text-white font-semibold">
                  Industry Recognition
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Fire Protection Association of Australia (FPA) launches NSW FPAS
                Accreditation
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-blue-100 leading-relaxed">
                <p className="text-lg">
                  In the wake of the NSW Government's announcements of major
                  reforms to the state's fire safety and building regulations,
                  FPA Australia has prepared an accreditation scheme for Fire
                  Safety Assessment to cover Part 9 Division 5 and 7 of EP & A
                  Regulation.
                </p>

                <p>
                  This accreditation scheme was launched 1st April 2019 and
                  gives competent fire safety practitioners 12 months to gain
                  final accreditation. Crystal Certification is pre-qualified to
                  sign off on any AFSS and registered for final qualification to
                  ensure we stay at the forefront of the industry.
                </p>

                <p>
                  These reforms are possibly the most important change to the
                  fire protection industry in decades, and FPA Australia is
                  working closely with government and industry to ensure the
                  reforms both improve fire safety outcomes and are practical
                  for the industry.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`bg-brand-light/10 backdrop-blur-sm p-6 rounded-2xl border border-brand-light/20 hover:bg-brand-light/15 transition-all duration-300 hover:scale-105 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${(index + 4) * 150}ms` }}
                  >
                    <achievement.icon className="w-8 h-8 mb-4 " />
                    <h3 className="font-bold text-lg mb-2 ">
                      {achievement.title}
                    </h3>
                    <p className="text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certification Process Section */}
        <div
          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 border border-white/50 shadow-xl transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-blue/10 border border-brand-primary/20 mb-6">
                <Shield className="w-5 h-5 text-brand-primary mr-2" />
                <span className="text-brand-primary font-semibold">
                  Certification Process
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                  Professional Fire Safety Assessment
                </span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Our certified professionals follow a comprehensive assessment
                  process to ensure your building meets all fire safety
                  requirements and regulatory standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-brand-primary/5 p-4 rounded-xl border border-brand-primary/20">
                    <h4 className="font-semibold text-brand-primary mb-2">
                      Initial Assessment
                    </h4>
                    <p className="text-sm text-brand-primary/70">
                      Comprehensive site evaluation and documentation review
                    </p>
                  </div>
                  <div className="bg-brand-blue/5 p-4 rounded-xl border border-brand-blue/20">
                    <h4 className="font-semibold text-brand-blue mb-2">
                      Compliance Review
                    </h4>
                    <p className="text-sm text-brand-blue/70">
                      Detailed analysis against current regulations and
                      standards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/safety.jpg"
                alt="Fire Safety Assessment Process"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Expert Team Section */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ease-out delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <img
              src="/images/solution.png"
              alt="Expert Fire Safety Team"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-primary/10 border border-brand-cyan/20 mb-6">
              <Users className="w-5 h-5 text-brand-cyan mr-2" />
              <span className="text-brand-cyan font-semibold">
                Professional Expertise
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-cyan to-brand-primary bg-clip-text text-transparent">
                Qualified Fire Safety Practitioners
              </span>
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Our team of certified fire safety practitioners brings decades
                of combined experience in fire protection, compliance, and
                safety assessment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-brand-cyan/5 rounded-xl border border-brand-cyan/20">
                  <div className="text-2xl font-bold text-brand-cyan mb-1">
                    100%
                  </div>
                  <div className="text-sm text-brand-cyan/70">
                    Certified Professionals
                  </div>
                </div>
                <div className="text-center p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/20">
                  <div className="text-2xl font-bold text-brand-primary mb-1">
                    25+
                  </div>
                  <div className="text-sm text-brand-primary/70">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`bg-gradient-to-r from-brand-primary to-brand-blue rounded-3xl p-8 lg:p-12 text-white transition-all duration-1000 ease-out delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Need Expert Certification Guidance?
            </h3>
            <p className="text-brand-light/80 leading-relaxed max-w-2xl mx-auto text-lg">
              Our certified fire safety practitioners are ready to help you
              navigate the complex world of fire safety compliance and
              certification requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-light/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-brand-light/20 hover:bg-brand-light/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-light/20 rounded-xl mb-4 mx-auto">
                <Phone className="w-6 h-6 text-brand-light" />
              </div>
              <h4 className="font-semibold text-xl mb-2">Phone Consultation</h4>
              <p className="text-brand-light/80 mb-4">
                Speak directly with our certification experts
              </p>
              <a
                href="tel:1300790702"
                className="inline-block bg-brand-light text-brand-primary px-6 py-3 rounded-xl hover:bg-brand-light/90 transition-all duration-300 font-semibold hover:scale-105"
              >
                Call 1300 790 702
              </a>
            </div>

            <div className="bg-brand-light/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-brand-light/20 hover:bg-brand-light/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-brand-light/20 rounded-xl mb-4 mx-auto">
                <Mail className="w-6 h-6 text-brand-light" />
              </div>
              <h4 className="font-semibold text-xl mb-2">Email Inquiry</h4>
              <p className="text-brand-light/80 mb-4">
                Get detailed certification information
              </p>
              <a
                href="mailto:certification@crystalfire.com.au"
                className="inline-block bg-brand-light text-brand-primary px-6 py-3 rounded-xl hover:bg-brand-light/90 transition-all duration-300 font-semibold hover:scale-105"
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
