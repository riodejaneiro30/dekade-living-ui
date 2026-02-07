"use client";

import { useState } from "react";
import FullscreenMenu from "./FullScreenMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#f6f1e9] text-neutral-800 fixed top-0 z-50">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-neutral-300/40">

          {/* Left */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 text-xs uppercase tracking-widest"
          >
            <div className="space-y-1">
              <span className="block w-5 h-px bg-neutral-800"></span>
              <span className="block w-5 h-px bg-neutral-800"></span>
              <span className="block w-5 h-px bg-neutral-800"></span>
            </div>
            Menu
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="text-2xl tracking-[0.4em] font-light">
              ĀMAN
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 text-xs">
            <button className="uppercase tracking-widest">
              English ▾
            </button>

            <button className="bg-neutral-800 text-white px-6 py-2 uppercase tracking-widest">
              Reserve
            </button>
          </div>
        </div>

        {/* SUB NAV */}
        <div className="hidden md:block px-12 py-3 border-b border-neutral-300/40">
          <nav className="flex gap-6 text-xs uppercase tracking-widest">
            <span className="text-neutral-500">Amankila</span>
            <span className="text-neutral-400">›</span>

            {[
              "Gallery",
              "Accommodation",
              "Experiences",
              "Dining",
              "Wellness",
              "Celebrations",
              "Exclusive Offers",
              "Residences",
              "Getting Here",
              "Contact Us",
            ].map((item) => (
              <a key={item} href="#" className="hover:text-neutral-600">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <FullscreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}