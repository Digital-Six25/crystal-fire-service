"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function AboutContent() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Our Purpose Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Professional fire protection pump system and equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              OUR PURPOSE
              <div className="w-24 h-0.5 bg-gray-400 mx-auto mt-2"></div>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              Crystal Fire Services provides safety and protection to life, property and the environment with thoughtful
              Fire Protection solutions delivered with integrity
            </p>

            <p className="text-gray-600 leading-relaxed text-center">
              Our vision is to build a brand based on honesty and integrity to meet the growing demand and high
              community expectations for building fire safety. To ensure we are always at the forefront of technical and
              legal knowledge. We aim to deliver cost effective and practical solutions that will lead to a safer
              community with minimal impact on the environment.
            </p>
          </div>
        </div>

        {/* Australian Owned & Operated Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              AUSTRALIAN OWNED & OPERATED
              <div className="w-24 h-0.5 bg-gray-400 mx-auto mt-2"></div>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              With over twenty years experience, we have the knowledge and expertise to manage your fire protection
              system now and into the future.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              We are leaders in our field and offer customised and cost effective solutions to all our clients - large
              and small.
            </p>

            <p className="text-gray-600 leading-relaxed text-center">
              Our services are certified, insured and adhere to Australian standards. We service commercial, industrial
              and residential properties across the Sydney region.
            </p>
          </div>

          <div
            className={`order-1 lg:order-2 relative transition-all duration-1000 ease-out delay-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Professional technician maintaining fire extinguisher equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
