"use client";

import { v4 as uuid } from 'uuid';
import { facility } from '@/data/facilityData';

export default function Facility() {
  return (
    <section className="bg-white py-12">
      <h2 className="text-center text-3xl mb-12">
        Our Space
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {facility.map((item) => (
          <div key={uuid()} className="text-center space-y-4">
            <span className="material-icons">{item.icon}</span>
            <p className="text-md text-neutral-700 leading-snug">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}