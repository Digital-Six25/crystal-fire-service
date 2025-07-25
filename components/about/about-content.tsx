"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Shield,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide comprehensive fire protection solutions that safeguard lives, property, and the environment through innovative technology and professional excellence.",
    color: "from-brand-primary to-brand-blue",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To build a brand based on honesty and integrity, leading to a safer community with minimal environmental impact through cost-effective solutions.",
    color: "from-brand-cyan to-brand-blue",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, excellence, innovation, and commitment to safety drive everything we do. We believe in building lasting relationships through trust and reliability.",
    color: "from-brand-blue to-brand-primary",
  },
];

const achievements = [
  {
    icon: Users,
    label: "Expert Team Members",
    value: "25+",
    description: "Qualified professionals",
  },
  {
    icon: Award,
    label: "Industry Certifications",
    value: "10+",
    description: "International standards",
  },
  {
    icon: Shield,
    label: "Projects Completed",
    value: "1000+",
    description: "Successful installations",
  },
  {
    icon: CheckCircle,
    label: "Client Satisfaction",
    value: "99%",
    description: "Happy customers",
  },
];

export default function AboutContent() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mission, Vision, Values */}
        <div className="mb-20">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and driven by a commitment to
              excellence in fire protection services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`group hover:-translate-y-2 hover:shadow-xl transition-all duration-500 border-gray-100 hover:border-transparent overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-blue transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Purpose Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/solution.png"
                  alt="Professional fire protection equipment and systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            } text-center lg:text-left`}
          >
            <div className="inline-flex items-center justify-center lg:justify-start px-4 py-2 bg-brand-light text-brand-primary rounded-full text-sm font-medium mb-6 mx-auto lg:mx-0">
              <Target className="w-4 h-4 mr-2" />
              Our Purpose
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Safety & Protection Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-blue block">
                Thoughtful Solutions
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Crystal Fire Services provides safety and protection to life,
              property and the environment with thoughtful Fire Protection
              solutions delivered with integrity.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our vision is to build a brand based on honesty and integrity to
              meet the growing demand and high community expectations for
              building fire safety. We aim to deliver cost effective and
              practical solutions that will lead to a safer community with
              minimal impact on the environment.
            </p>

            <Link
              href="/fire-protection"
              className="group inline-flex justify-center lg:justify-start items-center px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-blue text-white font-semibold rounded-xl hover:from-brand-blue hover:to-brand-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto lg:mx-0"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Australian Owned & Operated Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            } text-center lg:text-left`}
          >
            <div className="inline-flex items-center justify-center lg:justify-start px-4 py-2 bg-brand-cyan/20 text-brand-cyan rounded-full text-sm font-medium mb-6 mx-auto lg:mx-0">
              <Shield className="w-4 h-4 mr-2" />
              Australian Owned & Operated
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Two Decades of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue block">
                Trusted Expertise
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              With over twenty years experience, we have the knowledge and
              expertise to manage your fire protection system now and into the
              future.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 items-center text-center sm:text-left">
                <CheckCircle className="w-6 h-6 text-brand-primary mb-2 sm:mb-0 flex-shrink-0" />
                <p className="text-gray-600">
                  Leaders in our field offering customised and cost effective
                  solutions to all clients - large and small
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 items-center text-center sm:text-left">
                <CheckCircle className="w-6 h-6 text-brand-primary mb-2 sm:mb-0 flex-shrink-0" />
                <p className="text-gray-600">
                  Services are certified, insured and adhere to Australian
                  standards
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-3 items-center text-center sm:text-left">
                <CheckCircle className="w-6 h-6 text-brand-primary mb-2 sm:mb-0 flex-shrink-0" />
                <p className="text-gray-600">
                  Service commercial, industrial and residential properties
                  across the Sydney region
                </p>
              </div>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-1000 ease-out delay-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/expertise.jpg"
                  alt="Experienced fire protection specialists"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div
          className={`transition-all duration-1000 ease-out delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-brand-primary text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.value}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
