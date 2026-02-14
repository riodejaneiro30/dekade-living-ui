"use client";

export default function Contact() {
  return (
    <section className="bg-[#e6e0d8] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left place-items-center">
          <div className="space-y-4 max-w-sm">
            <h3 className="text-lg text-neutral-600 tracking-widest uppercase">
              Contact
            </h3>

            <p className="text-sm leading-relaxed text-neutral-400">
              Bali Niksoma Boutique Beach Resort <br />
              Jalan Padma Utara, Legian Kaja <br />
              Bali 80361 – Indonesia
            </p>

            <p className="text-sm text-neutral-400">
              E-mail: info@pmgbali.com
            </p>
          </div>

          <div className="space-y-4 max-w-sm">
            <h3 className="text-lg text-neutral-600 tracking-widest uppercase">
              Central Reservation
            </h3>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Phone: +62 361 757 688 <br />
              Fax: +62 361 475 2979 <br />
              WhatsApp: +62 815 1044 9090
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}