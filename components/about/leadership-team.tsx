"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Chris Osborne",
    position: "Managing Director",
    biography: [
      "Chris commenced his career in hydraulic and mechanical services installing and overseeing the design and installation of fire protection systems.",
      "Chris then gained a role as an operational Fire Fighter with Fire and Rescue NSW completing a Certificate III in public safety giving him valuable insight into the operation and use of essential fire safety measures under live conditions.",
      "In 2010 Chris moved into a full time management role in the fire protection industry and went on to complete a post graduate diploma in business management and a Master degree in Business Administration.",
      "This led to senior leadership positions where he managed all facets of the certification process and was responsible for Business Development & managing Technical & Operational Teams.",
    ],
    linkedIn: "#",
  },
  {
    name: "Ryan Libbis",
    position: "General Manager",
    biography: [
      "Ryan commenced his career in the Royal Australian Navy as a Marine Technician & Engineer overseeing repairs to mechanical systems including the maintenance and testing of onboard fire systems.",
      "In 2006 Ryan moved to Australian Essential Services Compliance where he received further training in full Building Code of Australia audits regarding Fire protection and other essential safety measures.",
      "In 2009 Ryan became NSW Manager overseeing a large portfolio of clients and the process of BCA auditing and the signing of Annual Fire Safety Statements. In 2019 Ryan joined Crystal Fire services bringing his knowledge and expertise to our business.",
    ],
    linkedIn: "#",
  },
]

export default function LeadershipTeam() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h2>
                  <p className="text-lg text-gray-600 font-medium">{member.position}</p>
                </div>

                <div className="space-y-4 mb-6">
                  {member.biography.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-gray-700 leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-600 transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
