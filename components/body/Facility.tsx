"use client";

export default function Facility() {
  const facilities = [
    { icon: "soap", label: "Bath Soap" },
    { icon: "hot_tub", label: "Hot Water" },
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
    <section id="facility" className="bg-white py-12">
      <h2 className="text-center text-3xl mb-12">
        Our Facility
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 place-items-center px-6">
        {facilities.map((item) => {
          return (
            <div
              key={item.label}
              className={`
                text-center space-y-4
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