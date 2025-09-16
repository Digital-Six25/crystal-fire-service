const CertificationCarousel = ({ certifications }: any) => {
  return (
    <div className="overflow-hidden py-6">
      <div className="whitespace-nowrap animate-scroll flex gap-8">
        {[...Array(2)].flatMap((_, roundIndex) =>
          certifications?.map((cert: any, certIndex: any) => (
            <img
              key={`${roundIndex}-${certIndex}-${cert.alt}`}
              src={cert.url || cert.img}
              alt={"certifications image"}
              className="h-12 w-auto object-contain inline-block"
            />
          ))
        )}
      </div>
    </div>
  );
};
export default CertificationCarousel;
