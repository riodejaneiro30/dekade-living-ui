"use client";

import Contact from "./body/Contact";
import Facility from "./body/Facility";
import Gallery from "./body/Gallery";
import Location from "./body/Location";
import Opening from "./body/Opening";
import Profile from "./body/Profile";

export default function Body() {
  return (
    <main className="pt-[40px] md:pt-[100px]">
        <Opening />
        <Profile />
        <Gallery />
        <Facility />
        <Location />
        <Contact />
    </main>
  );
}