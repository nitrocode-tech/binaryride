"use client";
import React from "react";
import CommonButton from "../common/button";
import vector from "@/assets/svgs/Vector.svg";
import Image from "next/image";
import finance_icon from "@/assets/svgs/finace-phone.svg";
import overlay_left from "@/assets/svgs/overlay-left.svg";
import overlay_right from "@/assets/svgs/Overlay-right.svg";
import overlayExtra from "@/assets/svgs/Overlay+.svg";
import overlayShadow from "@/assets/svgs/Overlay+Shadow.svg";

const Finance = () => {
  const handleButtonClick = () => {
    console.log("Get Code button clicked!");
  };

  return (
    <div className="bg-(--primary) pt-24">
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
      <div className="w-[70%] mx-auto relative">
        <Image src={vector} alt="vector" />
        <div className=" absolute top-0 left-0 bottom-0 right-0">
          <div className="flex items-center justify-center">
            <Image src={finance_icon} alt="finace" width={300} height={600} />
          </div>
          <div className="absolute top-[90px] right-[105px]">
            <Image src={overlay_right} alt="overlay" width={317} height={250} />
          </div>
          <div className="absolute top-[210px] left-[55px]">
            <Image src={overlay_left} alt="overlay" width={280} height={200} />
          </div>
          <div className="absolute top-[113px] left-[178px]">
            <Image src={overlayShadow} alt="overlay" width={277} height={278} />
          </div>
          <div className="absolute top-0 right-0">
            <Image src={overlayExtra} alt="overlay" width={318} height={320} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
