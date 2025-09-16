"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Phone, Award, Users, Briefcase } from "lucide-react";

export default function LeadershipTeam({ teams }: any) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      id="team"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {teams?.map((member: any, index: any) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <Card className="group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border-gray-100 hover:border-transparent overflow-hidden">
                <CardContent className="p-0">
                  {/* Header with Image and Basic Info */}
                  <div
                    className={`relative bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} - ${member.designation}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                      <p className="text-lg font-medium opacity-90 mb-4">
                        {member.designation}
                      </p>

                      {/* Quick Stats */}
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {member.experience}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Leadership
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Specialties */}
                    {Array.isArray(member.specialties) &&
                      member.specialties.length > 0 && (
                        <div className="mb-6">
                          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-teal-600" />
                            Specialties
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map(
                              (speciality: any, idx: number) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded-full"
                                >
                                  {speciality.speciality}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    {/* Biography */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Professional Background
                      </h3>
                      <div className="space-y-4">
                        {/* {member.biography.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-gray-700 leading-relaxed text-sm"
                          >
                            {paragraph}
                          </p>
                        ))} */}
                        {member.background}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Contact Information
                      </h3>
                      <div className="space-y-3">
                        <a
                          href={`mailto:${member.contact_info.email}`}
                          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200 group/contact"
                        >
                          <Mail className="w-4 h-4 mr-3 group-hover/contact:scale-110 transition-transform duration-200" />
                          {member.contact_info.email}
                        </a>
                        <a
                          href={`tel:${member.contact_info.phone}`}
                          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200 group/contact"
                        >
                          <Phone className="w-4 h-4 mr-3 group-hover/contact:scale-110 transition-transform duration-200" />
                          {member.contact_info.phone}
                        </a>
                        <a
                          href={member.contact_info.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group/contact"
                        >
                          <Linkedin className="w-4 h-4 mr-3 group-hover/contact:scale-110 transition-transform duration-200" />
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
