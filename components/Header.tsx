"use client";

import HeaderDesktop from "./header/HeaderDesktop";
import HeaderMobile from "./header/HeaderMobile";

export default function Header() {
  return (
    <>
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>

      <div className="block md:hidden">
        <HeaderMobile />
      </div>
    </>
  );
}
