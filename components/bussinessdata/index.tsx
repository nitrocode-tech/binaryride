import React from "react";
import spent_Icon from "@/assets/svgs/spent.svg";
import Image from "next/image";

const BussinessCollection = [
  {
    value: "2.5k",
    label: "Partners & customers",
  },
  {
    value: "$2.2k",
    label: "Raise Invest",
  },
  {
    value: "4.9",
    label: "Customer review",
  },
];

const BussinessData = () => {
  return (
    <div className="bg-black py-16 md:py-20 lg:py-24">
      <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-[54.5%]">
            <div>
              <h1 className="text-white font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Unlock the power of <br />
                your <span className="text-[var(--yellowshade)]">
                  business
                </span>{" "}
                data
              </h1>
            </div>
            <div className="pt-16 md:pt-24">
              <Image src={spent_Icon} alt="spent-monthly" />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[45.5%] mt-10 lg:mt-52">
            <div className="flex flex-col gap-10">
              <p className="text-base md:text-lg font-text text-white">
                Our platform empowers you to make data-driven decisions that
                drive growth, optimize performance, and maximize profitability
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0">
                {BussinessCollection.map((item, index) => (
                  <div
                    key={index}
                    className="text-white text-center sm:text-left"
                  >
                    <p className="text-3xl md:text-4xl font-medium font-display">
                      {item.value}
                      {(item.label === "Partners & customers" ||
                        item.label === "Raise Invest") && (
                        <span className="text-base font-medium">+</span>
                      )}
                      {item.label === "Customer review" && (
                        <span className="text-sm font-normal">/5.0</span>
                      )}
                    </p>
                    <p className="text-sm font-text text-[#A5A5A5]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-lg md:text-xl leading-[30px] font-semibold font-display text-[var(--yellowshade)] w-fit px-2">
                #togetherwithmiros
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessData;
