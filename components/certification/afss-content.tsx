"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Phone,
  Mail,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Shield,
  Award,
} from "lucide-react";

const serviceInvolves = [
  "Witnessing of system interface tests",
  "Witnessing of flow tests",
  "Independent building assessment and report",
  "Liaise with building management to collate contractor certificates on compliance",
  "Prepare Annual Fire Safety statement and sign off as Competent Fire Safety Practitioner",
];

export default function AFSSContent() {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Streamlined process saves you valuable time",
      gradient: "from-brand-primary to-brand-blue",
    },
    {
      icon: Shield,
      title: "100% Compliant",
      description: "Guaranteed compliance with all regulations",
      gradient: "from-brand-blue to-brand-cyan",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified fire safety practitioners",
      gradient: "from-brand-cyan to-brand-primary",
    },
    {
      icon: Award,
      title: "Certified Process",
      description: "Government approved methodology",
      gradient: "from-brand-primary to-brand-cyan",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Comprehensive building evaluation",
    },
    {
      step: "02",
      title: "System Testing",
      description: "Witness interface and flow tests",
    },
    {
      step: "03",
      title: "Documentation",
      description: "Collate all compliance certificates",
    },
    {
      step: "04",
      title: "AFSS Preparation",
      description: "Prepare and sign off statement",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-light/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Introduction Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
            <FileText className="w-5 h-5 text-brand-primary mr-2" />
            <span className="text-brand-primary font-semibold">
              AFSS Management Solutions
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
              Annual Fire Safety Statement
            </span>
            <br />
            <span className="text-gray-800">Management Programs</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Under the new reforms the lodgement of the Annual Fire Safety
            Statement (AFSS) can become a difficult process, particularly when
            more than one contractor is involved. Crystal Certification Services
            provides an AFSS management programme to help streamline this
            procedure.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                benefit.gradient
              } p-6 rounded-2xl text-white hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <benefit.icon className="w-8 h-8 mb-4" />
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm opacity-90">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Service Process Section */}
        <div
          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 border border-white/50 shadow-xl transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
                OUR SERVICE PROCESS
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-cyan mx-auto rounded-full"></div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 5) * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              What's Included:
            </h4>
            {serviceInvolves.map((service, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 bg-gradient-to-r from-brand-light/30 to-white p-4 rounded-xl border border-brand-primary/20 hover:shadow-md transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${(index + 8) * 150}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-brand-primary to-brand-blue rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 leading-relaxed font-medium">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`mt-8 bg-gradient-to-r from-brand-light/30 to-white p-6 rounded-2xl border border-brand-primary/20 transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gray-700 leading-relaxed text-center font-medium">
              This service can also be provided for any new fit outs within the
              building to avoid complications during the annual inspection.
            </p>
          </div>
        </div>

        {/* Why We Offer This Service Section */}
        <div
          className={`bg-gradient-to-r from-gray-800 to-brand-primary rounded-3xl p-8 lg:p-12 text-white mb-16 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Do We Offer This Service?
            </h3>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-brand-light leading-relaxed">
              <p>
                Recent changes to the Environmental Planning and Assessment
                Regulation 2000 (the regulations) that became effective on 1
                October 2017, will impact building owners who are required to
                issue fire safety statements for their buildings.
              </p>

              <p>
                Building owners must now engage a "Competent Fire Safety
                Practitioner" (CFSP) to sign off on the testing of each
                Essential Fire Safety Measure. This term means an individual
                signing off on the testing or final certification on an Annual
                Fire Safety Statement must be accredited by a NSW Government
                recognised body.
              </p>
            </div>

            <div className="space-y-6 text-brand-light leading-relaxed">
              <p>
                Crystal Fire Services has worked with Industry bodies and within
                Government guidelines to ensure we continue to maintain all of
                the required competencies.
              </p>

              <p>
                Our Crystal Certification programs are tailored specifically for
                each State and Territory's defined building regulations and
                legislation.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`bg-gradient-to-r from-brand-primary to-brand-blue rounded-3xl p-8 lg:p-12 text-white transition-all duration-1000 ease-out delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Get Started with AFSS Management
            </h3>
            <p className="text-brand-light leading-relaxed max-w-2xl mx-auto text-lg">
              Contact our AFSS specialists to discuss your fire safety
              compliance requirements and learn how our management programs can
              streamline your processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-xl mb-2">Phone Consultation</h4>
              <p className="text-brand-light mb-4">
                Speak directly with our AFSS experts
              </p>
              <a
                href="tel:1300790702"
                className="inline-block bg-white text-brand-primary px-6 py-3 rounded-xl hover:bg-brand-light transition-all duration-300 font-semibold hover:scale-105"
              >
                Call 1300 790 702
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 mx-auto">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-xl mb-2">Email Inquiry</h4>
              <p className="text-brand-light mb-4">
                Get detailed information via email
              </p>
              <a
                href="mailto:afss@crystalfire.com.au"
                className="inline-block bg-white text-brand-primary px-6 py-3 rounded-xl hover:bg-brand-light transition-all duration-300 font-semibold hover:scale-105"
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
