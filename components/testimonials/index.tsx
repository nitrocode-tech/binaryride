import React from "react";
import container from "@/assets/svgs/Container.svg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-black py-24 h-[800px]">
      <div className="w-[65%] mx-auto">
        <h1 className="text-6xl font-semibold font-display text-center text-white">
          What our clients are{" "}
          <span className="text-(--yellowshade)">saying</span>
        </h1>
        {/*  reviews */}
        <div className=" flex  justify-center  rounded-[10px] mt-22">
          <div className="w-[60%] flex items-start gap-2 flex-col py-34 px-12 bg-white rounded-l-[10px]">
            <h1 className="text-6xl text-black  font-semibold font-display">
              How has your experience been so far
            </h1>
            <p className="text-2xl text-black font-medium font-text">
              with John Doe
            </p>
          </div>
          <div className="w-[40%] bg-white rounded-r-[10px]">
            {/* video here */}
            <Image src={container} alt="testimonials" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
