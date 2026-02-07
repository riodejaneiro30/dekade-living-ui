"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/90 text-white transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-2xl"
      >
        ✕
      </button>

      <nav className="h-full flex flex-col items-center justify-center gap-8 text-xl uppercase tracking-widest">
        <a onClick={onClose} href="#">Home</a>
        <a onClick={onClose} href="#">Accommodation</a>
        <a onClick={onClose} href="#">Experiences</a>
        <a onClick={onClose} href="#">Gallery</a>
      </nav>
    </div>
  );
}