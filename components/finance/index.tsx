"use client";
import React from "react";
import CommonButton from "../common/navbar/button";
import vector from "@/assets/svgs/Vector.svg";
import Image from "next/image";

const Finance = () => {
  const handleButtonClick = () => {
    console.log("Get Code button clicked!");
  };

  return (
    <div className="bg-(--primary) py-24">
      <div className="w-[65%] mx-auto space-y-6 ">
        <h1 className="text-[var(--primarytext)] font-semibold text-5xl md:text-6xl text-center leading-tight font-display">
          Simplify your finances with our <br /> comprehensive toolkit
        </h1>
        <div>
          <p className="text-base font-medium md:text-lg text-(--secondarytext) text-center font-text">
            Streamline your business's financial management with our intuitive,
            scalable SaaS platform.
          </p>
          <p className="text-base font-medium md:text-lg text-(--secondarytext) text-center font-text">
            Designed for U.S. enterprises, our solutions simplify complex
            processes.
          </p>
          <div className="flex items-center justify-center py-10">
            <CommonButton
              className="text-[#E6FF02] bg-black font-medium font-text w-[120px] h-[45px] rounded-full hover:opacity-90 transition duration-200 cursor-pointer"
              onClick={handleButtonClick}
            >
              Learn more
            </CommonButton>
          </div>
        </div>
      </div>
      {/* images */}
      <div className="w-[70%] mx-auto">
        <Image src={vector} alt="vector" />
      </div>
    </div>
  );
};

export default Finance;
