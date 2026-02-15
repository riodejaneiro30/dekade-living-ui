"use client";

import Image from "next/image";

export default function Opening() {
  return (
    <section className="w-full h-[60vh] md:h-[90vh] relative">
      <Image
        src="https://storage.googleapis.com/dekade-living-v2/photo/DSC00831-HDR.webp"
        alt="A beautiful view of Dekade Living"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-white text-3xl md:text-6xl font-light tracking-[0.2em] leading-snug md:leading-normal">
            Timeless Comfort in the Heart of Denpasar
          </h1>
        </div>
      </div>
    </section>
  );
}