"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield } from "lucide-react";
import Image from "next/image";

interface CertificationsProps {
  certifications: {
    pill: string;
    title: string;
    subtitle: string;
    cards: {
      image: string | null;
      title: string;
      subtitle: string;
    }[];
  };
}

export default function Certifications({
  certifications,
}: CertificationsProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br text-center from-brand-light via-white to-brand-light/50 relative overflow-hidden">
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
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
            <Shield className="w-5 h-5 mr-2" />
            {certifications.pill || ""}
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-primary to-brand-blue bg-clip-text text-transparent">
              {certifications.title}
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {certifications.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications?.cards?.map((card, index) => (
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
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors duration-300">
                {card.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
