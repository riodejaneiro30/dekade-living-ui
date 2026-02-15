"use client";

import { useState, useEffect } from "react";
import SubMenu from "./SubMenu";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FullscreenMenu({ open, onClose }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const menu = [
    { label: "Gallery", id: "gallery", children: null },
    { label: "Facility", id: "facility", children: null },
    { label: "Location", id: "location", children: null },
    { label: "Contact", id: "contact", children: null },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`font-heading fixed inset-0 z-[60] bg-white text-neutral-800
      transform transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
      ${open ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none"}`}
    >
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

      <div className="
        w-full
        max-w-[90%]
        sm:max-w-md
        md:max-w-lg
        lg:max-w-xl
        mx-auto
        pt-24
        px-6
      ">
        <p className="text-sm tracking-widest uppercase mb-6">
          Dekade Living
        </p>

        <ul className="divide-y divide-neutral-300">
          {menu.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => {
                  if (item.children) {
                    setActive(item.label);
                    return;
                  }

                  onClose();

                  setTimeout(() => {
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 400);
                }}
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

      {active && (
        <SubMenu
          label={active}
          items={
            menu.find((m) => m.label === active)?.children ?? []
          }
          onBack={() => setActive(null)}
        />
      )}
    </div>
  );
}