"use client";

import { useState } from "react";
import FullscreenMenu from "../FullScreenMenu";

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#f6f1e9] text-neutral-800 fixed top-0 z-50">
        <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-300/40">
          <div className="pointer-events-none">
            <span className="text-sm tracking-[0.25em] font-light whitespace-nowrap">
              DEKADE LIVING
            </span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 text-xs uppercase tracking-widest"
          >
            <div className="space-y-1">
              <span className="block w-4 h-px bg-neutral-800"></span>
              <span className="block w-4 h-px bg-neutral-800"></span>
              <span className="block w-4 h-px bg-neutral-800"></span>
            </div>
          </button>
        </div>
      </header>

      <FullscreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}