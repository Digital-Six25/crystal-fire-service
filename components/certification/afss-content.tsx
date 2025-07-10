"use client"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight, Phone, Mail } from "lucide-react"

const serviceInvolves = [
  "Witnessing of system interface tests",
  "Witnessing of flow tests",
  "Independent building assessment and report",
  "Liaise with building management to collate contractor certificates on compliance",
  "Prepare Annual Fire Safety statement and sign off as Competent Fire Safety Practitioner",
]

export default function AFSSContent() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Annual Fire Safety Statement (AFSS) management programs
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            Under the new reforms the lodgement of the Annual Fire Safety Statement (AFSS) can become a difficult
            process, particularly when more than one contractor is involved. Crystal Certification Services provides an
            AFSS management programme to help streamline this procedure.
          </p>
        </div>

        {/* This Service Involves Section */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            THIS SERVICE INVOLVES:
            <div className="w-24 h-0.5 bg-gray-400 mx-auto mt-2"></div>
          </h3>

          <div className="max-w-4xl mx-auto space-y-4">
            {serviceInvolves.map((service, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <ArrowRight className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{service}</span>
              </div>
            ))}
          </div>

          <div
            className={`mt-8 max-w-4xl mx-auto transition-all duration-1000 ease-out delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gray-600 leading-relaxed">
              This service can also be provided for any new fit outs within the building to avoid complications during
              the annual inspection.
            </p>
          </div>
        </div>

        {/* Why Do We Offer This Service Section */}
        <div
          className={`mb-20 transition-all duration-1000 ease-out delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            WHY DO WE OFFER THIS SERVICE?
            <div className="w-24 h-0.5 bg-gray-400 mx-auto mt-2"></div>
          </h3>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p>
              Recent changes to the Environmental Planning and Assessment Regulation 2000 (the regulations) that became
              effective on 1 October 2017, will impact building owners who are required to issue fire safety statements
              for their buildings.
            </p>

            <p>
              Building owners must now engage a "Competent Fire Safety Practitioner" (CFSP) to sign off on the testing
              of each Essential Fire Safety Measure. This term means an individual signing off on the testing or final
              certification on an Annual Fire Safety Statement must be accredited by a NSW Government recognised body.
            </p>

            <p>
              Crystal Fire Services has worked with Industry bodies and within Government guidelines to ensure we
              continue to maintain all of the required competencies.
            </p>

            <p>
              Our Crystal Certification programs are tailored specifically for each State and Territory's defined
              building regulations and legislation.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`bg-teal-50 border border-teal-200 rounded-lg p-8 transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">Get Started with AFSS Management</h3>
            <p className="text-teal-800 leading-relaxed max-w-2xl mx-auto">
              Contact our AFSS specialists to discuss your fire safety compliance requirements and learn how our
              management programs can streamline your processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-teal-600 mr-3" />
                <h4 className="font-semibold text-teal-900">Phone Consultation</h4>
              </div>
              <p className="text-teal-800 mb-4">Speak directly with our AFSS experts</p>
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
                <h4 className="font-semibold text-teal-900">Email Inquiry</h4>
              </div>
              <p className="text-teal-800 mb-4">Get detailed information via email</p>
              <a
                href="mailto:afss@crystalfire.com.au"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors duration-200 font-medium"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
