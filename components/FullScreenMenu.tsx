"use client";

import { useState, useEffect } from "react";
import { menu } from "../data/menuData";
import SubMenu from "./SubMenu";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FullscreenMenu({ open, onClose }: Props) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-white text-neutral-800
      transform transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
      ${open ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none"}`}
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
          Dekade Living
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
                <span className="text-neutral-400 hover:text-neutral-800">{item.label}</span>

                {item.children && (
                  <span className="text-xl text-neutral-400">›</span>
                )}
              </button>
            </li>
          ))}
        </ul>
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