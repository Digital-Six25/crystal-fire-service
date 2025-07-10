import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-56 h-14 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crystal%20logo%20-VMNG5DLhzx8P3IVedK0IBeMe4QmoOa.png"
                  alt="Crystal Fire Services"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional fire protection services providing safety and protection to life, property and the
              environment across Australia.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>1300 CRYSTAL (1300 279 782)</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@crystalfire.com.au</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Australia Wide Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/fire-protection" className="hover:text-teal-400 transition-colors">
                  Fire Protection
                </Link>
              </li>
              <li>
                <Link href="/certification" className="hover:text-teal-400 transition-colors">
                  Certification
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="hover:text-teal-400 transition-colors">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/testing" className="hover:text-teal-400 transition-colors">
                  Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/client-login" className="hover:text-teal-400 transition-colors">
                  Client Login
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-teal-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Crystal Fire Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
