"use client";

export default function Location() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl mb-12">
          Our Location
        </h2>

        <p className="space-y-4 text-md leading-relaxed text-neutral-600 mb-12">
            Located just 5 minutes from Living World Denpasar, 
            you will be perfectly positioned to explore the best of the city
            while having a peaceful sanctuary to return to. We're curated every corner
            of this property to ensure you have a restful, productive, and memorable stay.
        </p>

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

      <a
        href="https://wa.me/6281338243557"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition hover:scale-110 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.48 0 .14 5.34.14 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.58 0 11.92-5.34 11.92-11.92a11.9 11.9 0 00-3.47-8.42zM12.07 21.8a9.87 9.87 0 01-5.03-1.37l-.36-.22-3.74.98 1-3.65-.24-.38a9.84 9.84 0 01-1.52-5.24c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 012.9 7c0 5.47-4.45 9.92-9.92 9.92zm5.43-7.44c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.93 1.18-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.23-.56-.47-.48-.66-.49h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.47 1.69.6.71.22 1.35.19 1.86.11.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35z" />
          </svg>
      </a>
    </section>
  );
}