const CertificationCarousel = () => {
  return (
    <div className="overflow-hidden py-6">
      <div className="whitespace-nowrap animate-scroll flex gap-8">
        {[...Array(2)].flatMap(() => (
          <>
            <img
              src="/images/iso-14001.png"
              alt="ISO 14001 Certification"
              className="h-12 w-auto object-contain inline-block"
            />
            <img
              src="/images/iso-45001.jpg"
              alt="ISO 45001 Certification"
              className="h-12 w-auto object-contain inline-block"
            />
            <img
              src="/images/iso-9001.png"
              alt="ISO 9001 Certification"
              className="h-12 w-auto object-contain inline-block"
            />
            <img
              src="/images/jasanz.png"
              alt="JAS-ANZ Accreditation"
              className="h-12 w-auto object-contain inline-block"
            />
            <img
              src="/images/fpa-australia-gold.jpg"
              alt="FPA Australia Gold"
              className="h-12 w-auto object-contain inline-block"
            />
            <img
              src="/images/property-council-australia.jpg"
              alt="Property Council Australia"
              className="h-12 w-auto object-contain inline-block"
            />
            <img
              src="/images/fma.jpg"
              alt="FMA"
              className="h-12 w-auto object-contain inline-block"
            />
          </>
        ))}
      </div>
    </div>
  );
};
export default CertificationCarousel;
