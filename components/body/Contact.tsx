"use client";

import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#e6e0d8] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left md:ml-24 lg:ml-36 items-start">
          <div className="space-y-4 max-w-sm">
            <h3 className="text-lg text-neutral-600 tracking-widest uppercase">
              Contact
            </h3>

            <p className="text-sm leading-relaxed text-neutral-400">
              dekadeliving@gmail.com <br />
              Jl. Wijaya Kusuma No. 29, Dangin Puri Kangin <br />
              North Denpasar District, Denpasar City <br />
              Bali 80234
            </p>
          </div>

          <div className="space-y-4 max-w-sm">
            <h3 className="text-lg text-neutral-600 tracking-widest uppercase">
              Book your stay
            </h3>

            <p className="text-sm text-neutral-400 leading-relaxed">
              WhatsApp: +62 813-3824-3557 <br />
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://instagram.com/dekadeliving"
                target="_blank"
                className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800 transition"
              >
                <FaInstagram size={25} className="text-lg" />
              </a>
              <a
                href="https://tiktok.com/@dekadeliving"
                target="_blank"
                className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800 transition"
              >
                <FaTiktok size={25} className="text-lg" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}