"use client";

export default function Gallery() {
  const prefix = "https://storage.googleapis.com/dekade-living-v2/photo/";

  const images = [
    { path: `${prefix}bespoke-bedroom.webp`, title: "Bespoke Bedroom" },
    { path: `${prefix}common-garden.webp`, title: "Common Garden" },
    { path: `${prefix}spacious-place.webp`, title: "Spacious Place" },
  ];

  return (
    <section id="gallery" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {images.map((image, index) => {
            const isLast = index === images.length - 1;
            const isOdd = images.length % 2 === 1;

            return (
              <div
                key={image.title}
                className={`
                  space-y-4
                  ${isLast && isOdd ? "md:col-span-2 md:justify-self-center" : ""}
                `}
              >
                <div className="overflow-hidden">
                  <img
                    src={image.path}
                    alt={image.title}
                    className="w-full h-[210px] md:h-[420px] object-cover"
                  />
                </div>

                <h3 className="text-lg text-neutral-600 text-center">
                  {image.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}