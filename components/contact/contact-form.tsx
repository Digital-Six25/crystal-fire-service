"use client";

import type React from "react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Send, CheckCircle, User, Mail, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const serviceOptions = [
  "Fire Protection Installation",
  "Inspection & Testing",
  "Compliance Management",
  "AFSS Management",
  "Emergency Repairs",
  "General Inquiry",
];

export default function ContactForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div
        ref={ref}
        className={`bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-2xl p-8 text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-green-700 mb-6 leading-relaxed">
          Thank you for contacting Crystal Fire Services. Our team will review
          your inquiry and respond within 2 hours during business hours.
        </p>
        <div className="bg-white/50 rounded-xl p-4 mb-6">
          <p className="text-sm text-green-600 font-medium">
            What happens next?
          </p>
          <ul className="text-sm text-green-700 mt-2 space-y-1">
            <li>• Our specialist will review your requirements</li>
            <li>• We'll contact you to discuss your needs</li>
            <li>• Free consultation and quote provided</li>
          </ul>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div ref={ref} className="space-y-8">
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Send Us a Message
          </span>
        </h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we'll get back to you with expert advice
          and a personalized quote.
        </p>
      </div>

      <div
        className={`bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-xl transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              <User className="w-4 h-4 inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                errors.name
                  ? "border-red-500 ring-2 ring-red-200"
                  : "border-gray-300"
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <span className="w-4 h-4">⚠</span>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                  errors.email
                    ? "border-red-500 ring-2 ring-red-200"
                    : "border-gray-300"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <span className="w-4 h-4">⚠</span>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                  errors.phone
                    ? "border-red-500 ring-2 ring-red-200"
                    : "border-gray-300"
                }`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <span className="w-4 h-4">⚠</span>
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              Service Required
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                errors.service
                  ? "border-red-500 ring-2 ring-red-200"
                  : "border-gray-300"
              }`}
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <span className="w-4 h-4">⚠</span>
                {errors.service}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-vertical bg-white/50 backdrop-blur-sm ${
                errors.message
                  ? "border-red-500 ring-2 ring-red-200"
                  : "border-gray-300"
              }`}
              placeholder="Please describe your fire protection requirements, property details, and any specific concerns..."
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <span className="w-4 h-4">⚠</span>
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </>
            )}
          </button>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy. We'll only
            use your information to respond to your inquiry and provide relevant
            fire protection services.
          </p>
        </form>
      </div>
    </div>
  );
}
