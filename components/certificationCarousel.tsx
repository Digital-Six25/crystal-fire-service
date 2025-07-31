const certifications = [
  { src: "/images/iso-14001.png", alt: "ISO 14001 Certification" },
  { src: "/images/iso-45001.jpg", alt: "ISO 45001 Certification" },
  { src: "/images/iso-9001.png", alt: "ISO 9001 Certification" },
  { src: "/images/jasanz.png", alt: "JAS‑ANZ Accreditation" },
  { src: "/images/fpa-australia-gold.png", alt: "FPA Australia Gold" },
  {
    src: "/images/property-council-australia.png",
    alt: "Property Council Australia",
  },
  { src: "/images/fma.png", alt: "FMA" },
];

const CertificationCarousel = () => {
  return (
    <div className="overflow-hidden py-6">
      <div className="whitespace-nowrap animate-scroll flex gap-8">
        {[...Array(2)].flatMap((_, roundIndex) =>
          certifications.map((cert, certIndex) => (
            <img
              key={`${roundIndex}-${certIndex}-${cert.alt}`}
              src={cert.src}
              alt={cert.alt}
              className="h-12 w-auto object-contain inline-block"
            />
          ))
        )}
      </div>
    </div>
  );
};
export default CertificationCarousel;
