"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/svgs/logo.svg";
import CommonButton from "./button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
  { name: "Page", path: "/page" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const handleButtonClick = () => {
    console.log("Get Code button clicked!");
  };

  return (
    <nav className="bg-[var(--primary)] text-white px-10 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link
        href="/"
        className="text-[#11190C] font-semibold flex gap-3.5 text-xl"
      >
        <Image src={logo} alt="Drivio Logo" />
        <span className="font-text">Drivio</span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-4 items-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className="text-(--navsimple) font-text hover:text-[#11190C] cursor-pointer flex items-center gap-1 p-3 font-medium hover:font-semibold"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Sign Up Button */}
      <CommonButton
        className="text-[#E6FF02] bg-black font-medium font-text w-[120px] h-[45px] rounded-full hover:opacity-90 transition duration-200"
        onClick={handleButtonClick}
      >
        Get Code
      </CommonButton>
    </nav>
  );
};

export default Navbar;
