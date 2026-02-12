"use client";

export default function Opening() {
  return (
    <section className="w-full h-[60vh] md:h-[90vh] relative">
      <img
        src="https://storage.googleapis.com/dekade-living-v1/photo/DSC00831-HDR.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="A beautiful view of Dekade Living"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-white text-3xl md:text-6xl font-light tracking-[0.2em] leading-snug uppercase">
            Lorem Ipsum Dolor Sit Amet
          </h1>
        </div>
      </div>
    </section>
  );
}