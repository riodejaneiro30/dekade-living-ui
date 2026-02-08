"use client";

export default function Opening() {
  return (
    <div className="relative w-1/2 h-[70vh] overflow-hidden bg-neutral-200 lg:mt-24">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://storage.googleapis.com/dekade-living-v1/video/video-opening.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}