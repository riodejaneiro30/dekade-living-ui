"use client";

import { useState } from "react";
import { menu } from "../data/menuData";
import SubMenu from "./SubMenu";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FullscreenMenu({ open, onClose }: Props) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-white text-neutral-800
      transition-opacity duration-300
      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Close */}
      <button
        onClick={() => {
          setActive(null);
          onClose();
        }}
        className="absolute top-6 left-6 text-xl"
        aria-label="Close menu"
      >
        ✕
      </button>

      {/* Content */}
      <div className="max-w-xl mx-auto pt-24">
        <p className="text-sm tracking-widest uppercase mb-6">
          Amankila
        </p>

        <ul className="divide-y divide-neutral-300">
          {menu.map((item) => (
            <li key={item.label}>
              <button
                onClick={() =>
                  item.children
                    ? setActive(item.label)
                    : onClose()
                }
                className="w-full flex items-center justify-between py-6 text-2xl font-light"
              >
                <span>{item.label}</span>

                {item.children && (
                  <span className="text-xl text-neutral-400">›</span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Footer links */}
        <div className="mt-16 text-sm text-neutral-600">
          <p className="mb-4">Global menu</p>
          <a href="/" className="underline">
            Brand home
          </a>
        </div>
      </div>

      {/* Submenu */}
      {active && (
        <SubMenu
          label={active}
          items={
            menu.find((m) => m.label === active)?.children || []
          }
          onBack={() => setActive(null)}
        />
      )}
    </div>
  );
}