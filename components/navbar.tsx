"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "HOME", href: "/" },
  {
    name: "ABOUT",
    href: "/about",
    dropdown: [
      { name: "OUR TEAM", href: "/about/our-team" },
      { name: "UPTICK", href: "/about/uptick" },
      { name: "RESOURCES", href: "/about/resources" },
      { name: "MEDIA", href: "/about/media" },
    ],
  },
  {
    name: "FIRE PROTECTION",
    href: "/fire-protection",
    dropdown: [
      { name: "INSTALLATION", href: "/fire-protection/installation" },
      { name: "COMPLIANCE", href: "/fire-protection/compliance" },
      {
        name: "INSPECTION TESTING",
        href: "/fire-protection/inspection-testing",
      },
    ],
  },
  {
    name: "CERTIFICATION",
    href: "/certification",
    dropdown: [
      {
        name: "AFSS MANAGEMENT PROGRAMS",
        href: "/certification/afss-management-programs",
      },
    ],
  },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const isActiveRoute = (
    href: string,
    dropdown?: Array<{ name: string; href: string }>
  ) => {
    if (dropdown) {
      return (
        pathname === href || dropdown.some((item) => pathname === item.href)
      );
    }
    return pathname === href;
  };

  return (
    <header className="bg-brand-dark text-white sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-48 h-12 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crystal%20logo%20-VMNG5DLhzx8P3IVedK0IBeMe4QmoOa.png"
                  alt="Crystal Fire Services"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = isActiveRoute(item.href, item.dropdown);

              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-brand-primary text-white px-3 py-1 rounded"
                          : "hover:text-brand-cyan"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-brand-dark border border-gray-600 rounded-md shadow-lg py-1 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-600 hover:text-brand-cyan transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-brand-primary text-white px-3 py-1 rounded"
                      : "hover:text-brand-cyan"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="https://crystalfire.onuptick.com/login/"
              className="btn-outline text-sm"
              target="_blank"
            >
              CLIENT LOGIN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-brand-cyan"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = isActiveRoute(item.href, item.dropdown);

                if (item.dropdown) {
                  return (
                    <div key={item.name}>
                      <div className="flex">
                        <Link
                          href={item.href}
                          className={`flex-1 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-l ${
                            isActive
                              ? "bg-brand-primary text-white"
                              : "hover:text-brand-cyan"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() =>
                            handleDropdownToggle(`mobile-${item.name}`)
                          }
                          className={`px-2 py-2 text-sm font-medium transition-colors duration-200 rounded-r ${
                            isActive
                              ? "bg-brand-primary text-white"
                              : "hover:text-brand-cyan"
                          }`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === `mobile-${item.name}`
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Mobile Dropdown */}
                      {activeDropdown === `mobile-${item.name}` && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 rounded ${
                                pathname === dropdownItem.href
                                  ? "bg-brand-blue text-white"
                                  : "text-gray-300 hover:text-brand-cyan"
                              }`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 rounded ${
                      isActive
                        ? "bg-brand-primary text-white"
                        : "hover:text-brand-cyan"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/client-login"
                className="block px-3 py-2 text-sm font-medium border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-md mt-4 text-center transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                CLIENT LOGIN
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
