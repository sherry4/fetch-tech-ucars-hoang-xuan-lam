import React from "react";
import Button from "../Button";

export default function Navbar() {
  return (
    <nav className="hidden lg:flex lg:items-center lg:justify-between h-[77px] bg-blackText px-16 gap-x-4">
      <img src="/images/ucars.png" className="h-8" />
      <ul className="flex items-center gap-x-12">
        <li>
          <a href="#newcars" className="text-white font-medium">
            New Cars
          </a>
        </li>
        <li>
          <a href="#usedcars" className="text-white font-medium">
            Used Cars
          </a>
        </li>
        <li>
          <a href="#reviews" className="text-white font-medium">
            Reviews
          </a>
        </li>
        <li>
          <a href="#news" className="text-white font-medium">
            News
          </a>
        </li>
      </ul>
      <Button type="red" label="Login" className="py-2 px-[72px]" />
    </nav>
  );
}
