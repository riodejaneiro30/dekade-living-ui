"use client";

export default function Facility() {
  const facilities = [
    { icon: "soap", label: "Bath Soap" },
    { icon: "hot_tub", label: "Hot Water" },
    { icon: "checkroom", label: "Clothes Hangers" },
    { icon: "note", label: "Bed Linens" },
    { icon: "inventory", label: "Clothing Storage" },
    { icon: "balcony", label: "Balcony" },
    { icon: "ac_unit", label: "Air Conditioner" },
    { icon: "camera_outdoor", label: "Security Camera" },
    { icon: "tv", label: "Smart TV 2K" },
    { icon: "wifi", label: "High Speed WiFi" },
    { icon: "desk", label: "Dedicated Work Area" },
    { icon: "flatware", label: "Kitchen" },
    { icon: "directions_car", label: "Free Parking Area" },
  ];

  return (
    <section className="bg-white py-12">
      <h2 className="text-center text-3xl mb-12">
        Our Space
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 place-items-center">
        {facilities.map((item, index) => {
          const isLast = index === facilities.length - 1;

          return (
            <div
              key={item.label}
              className={`
                text-center space-y-4
                ${isLast ? `
                  col-span-2 justify-self-center
                  md:col-span-3
                  lg:col-span-6
                ` : ""}
              `}
            >
              <span className="material-icons">{item.icon}</span>
              <p className="text-md text-neutral-700 leading-snug">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}