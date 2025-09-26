"use client";

export default function ContactSectionSkeleton() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden animate-pulse">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gray-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gray-200 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Skeleton */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2 mb-6 justify-center mx-auto w-40 h-6"></div>

            <div className="h-10 sm:h-12 bg-gray-200 rounded w-2/3 mx-auto mb-6"></div>

            <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 bg-gray-200 rounded w-3/4"></div>
              ))}
            </div>

            {/* Right - Contact Form */}
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded w-full"></div>
              ))}
              <div className="h-12 bg-gray-200 rounded w-1/3 mt-4 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br text-center from-brand-light via-white to-brand-light/50 relative overflow-hidden animate-pulse">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gray-200 rounded-full w-40 h-6 mb-6"></div>
            <div className="h-10 bg-gray-200 rounded w-2/3 mx-auto mb-6"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md h-40 flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
