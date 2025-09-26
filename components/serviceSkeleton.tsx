"use client";

export default function Skeleton() {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden animate-pulse">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content Skeleton */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gray-200 rounded-full w-40 h-6 mb-8 mx-auto"></div>

            {/* Title */}
            <div className="h-12 sm:h-16 lg:h-20 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>

            {/* Subtitle */}
            <div className="h-5 sm:h-6 bg-gray-200 rounded w-2/3 mx-auto mb-12"></div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <div className="h-12 sm:h-14 bg-gray-200 rounded-xl w-40 mx-auto sm:mx-0"></div>
              <div className="h-12 sm:h-14 bg-gray-200 rounded-xl w-40 mx-auto sm:mx-0"></div>
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
