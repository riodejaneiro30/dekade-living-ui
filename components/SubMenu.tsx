"use client";

type Props = {
  label: string;
  items: string[];
  onBack: () => void;
};

export default function SubMenu({ label, items, onBack }: Props) {
  return (
    <div className="absolute inset-0 bg-white z-[70]">
      {/* Back */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-sm uppercase tracking-widest"
      >
        ‹ Back
      </button>

      <div className="max-w-xl mx-auto pt-24">
        <h2 className="text-sm uppercase tracking-widest mb-6">
          {label}
        </h2>

        <ul className="divide-y divide-neutral-300">
          {items.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block py-6 text-2xl font-light"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}