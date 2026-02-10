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
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <span className="text-2xl tracking-[0.3em] font-light">
              DEKADE LIVING
            </span>
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-6 text-xs">
            <button className="bg-neutral-800 text-white px-6 py-2 uppercase tracking-widest">
              Contact Us
            </button>
          </div>
        </div>

        {/* SUB NAV */}
        <div className="hidden md:block border-b border-neutral-300/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <nav className="flex justify-center gap-6 py-3 text-xs uppercase tracking-widest">
              <span className="text-neutral-500">Dekade Living</span>
              <span className="text-neutral-400">›</span>

              {[
                "Home",
                "Gallery",
                "Location",
                "Co-Work",
                "Partner With Us",
                "Blog",
              ].map((item) => (
                <button key={item} 
                className="
                  relative
                  text-neutral-400
                  hover:text-neutral-800
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[1px]
                  after:w-0
                  after:bg-neutral-400
                  after:opacity-60
                  after:transition-all
                  after:duration-500
                  hover:after:w-full
                ">
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <FullscreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}