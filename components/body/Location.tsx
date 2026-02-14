"use client";

export default function Location() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl mb-12">
          Our Location
        </h2>

        <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5415331007844!2d115.22288527518303!3d-8.639934087855929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f00574661a7%3A0x948ac2778b7d0392!2sDEKADE%20LIVING!5e0!3m2!1sen!2sid!4v1771039548536!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
            title="Dekade Living Location"
          />
        </div>

      </div>
    </section>
  );
}