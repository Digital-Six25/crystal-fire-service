"use client";

export default function HomeSkeleton() {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden animate-pulse">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Content Skeleton */}
            <div className="text-center lg:text-left">
              {/* Pill */}
              <div className="inline-flex items-center px-6 py-3 bg-gray-200 rounded-full w-40 h-6 mb-6"></div>

              {/* Title */}
              <div className="space-y-3">
                <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto lg:mx-0"></div>
                <div className="h-10 bg-gray-200 rounded w-2/3 mx-auto lg:mx-0"></div>
              </div>

              {/* Subtitle */}
              <div className="mt-6 h-5 bg-gray-200 rounded w-full max-w-lg mx-auto lg:mx-0"></div>
              <div className="mt-2 h-5 bg-gray-200 rounded w-5/6 mx-auto lg:mx-0"></div>

              {/* Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <div className="h-12 bg-gray-200 rounded-lg w-40"></div>
                <div className="h-12 bg-gray-200 rounded-lg w-40"></div>
              </div>

              {/* Certifications */}
              <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-20 bg-gray-200 rounded-lg"
                  ></div>
                ))}
              </div>
            </div>

            {/* Right Content Skeleton */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                <div className="absolute inset-4 bg-gray-300 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden animate-pulse">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gray-200 rounded-full w-40 h-6 mb-6"></div>
            <div className="h-12 bg-gray-200 rounded w-2/3 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="relative bg-gray-100 rounded-3xl p-8 h-80 border border-gray-200"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-2xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-6"></div>

                <ul className="space-y-4 mb-10">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <li key={j} className="flex items-center">
                      <div className="w-6 h-6 bg-gray-200 rounded-full mr-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </li>
                  ))}
                </ul>

                <div className="h-12 bg-gray-200 rounded-lg w-40"></div>
              </div>
            ))}
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
