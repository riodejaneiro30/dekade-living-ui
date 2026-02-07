"use client";

export default function Accommodation() {
  return (
    <section className="px-6 md:px-20 py-24">
      <div className="grid md:grid-cols-3 gap-12">
        {[
          {
            title: "Ocean Suite",
            img: "https://images.unsplash.com/photo-1549294413-26f195200c16",
            desc: "Panoramic ocean views from elevated pavilions."
          },
          {
            title: "Pool Suite",
            img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            desc: "Private infinity pool overlooking the sea."
          },
          {
            title: "Amankila Suite",
            img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
            desc: "The ultimate luxury experience."
          }
        ].map((room, i) => (
          <div key={i}>
            <img
              src={room.img}
              className="w-full h-80 object-cover mb-6"
            />
            <h3 className="text-xl font-light mb-2">{room.title}</h3>
            <p className="text-neutral-600 text-sm">{room.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}