"use client";

import Contact from "./body/Contact";
import Facility from "./body/Facility";
import Opening from "./body/Opening";

export default function Body() {
  return (
    <main className="pt-[40px] md:pt-[100px]">
        <Opening />
        <Facility />
        <Contact />
    </main>
  );
}