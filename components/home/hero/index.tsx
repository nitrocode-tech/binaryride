import Image from "next/image";
import investment_icon from "@/assets/svgs/investment.svg";
import Iphone_Icon from "@/assets/svgs/iphone.svg";
import Overlay_left from "@/assets/svgs/overlay-left.svg";
import Overlay_right from "@/assets/svgs/Overlay-right.svg";
import grid_icon from "@/assets/svgs/grid.svg";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-(--primary)">
      {/* hero-text */}
      <div className="flex items-center justify-center px-6 pt-24 pb-8">
        <div className="w-[67%]  relative">
          <div className="absolute top-[-23px] left-[-10px] bg-[var(--yellowshade)] w-[160px] h-[45px] rounded-full flex items-center justify-center gap-2  -rotate-[4deg]">
            <Image
              src={investment_icon}
              alt="investment"
              className="rotate-[8deg]"
            />
            <span className="text-(--primarytext) font-display">
              Investment
            </span>
          </div>
          <div className="absolute top-[70px] right-[-25px] bg-[var(--yellowshade)] w-[160px] h-[45px] rounded-full flex items-center justify-center gap-2  rotate-[10deg]">
            <Image
              src={investment_icon}
              alt="investment"
              className="rotate-[3deg]"
            />
            <span className="text-(--primarytext) font-display">
              Investment
            </span>
          </div>
          <div className="w-full md:w-[95%]  space-y-6 text-center md:text-left">
            <h1 className="text-[var(--primarytext)] text-center font-semibold text-5xl md:text-6xl leading-tight font-display">
              Elevate your financial <br /> management with Miros
            </h1>
            <div>
              <p className="text-base font-medium md:text-lg text-(--secondarytext) text-center font-text">
                Streamline your business's financial management with our
                intuitive, scalable SaaS platform.
              </p>
              <p className="text-base font-medium md:text-lg text-(--secondarytext) text-center font-text">
                Designed for U.S. enterprises, our solutions simplify complex
                processes.
              </p>
            </div>
          </div>
        </div>
        {/* hero-grid */}
      </div>
      {/* hero-style */}
      <div className="pb-50 flex items-center justify-center sticky">
        <div
          className="w-[85%] h-[570px] mx-auto flex items-center justify-center bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${grid_icon.src})`,
          }}
        >
          <div className="w-[80%] relative top-38">
            {/* overlays */}
            <div className="absolute top-[-75px] left-[45px] z-10">
              <Image src={Overlay_left} alt="overlay" width={287} />
            </div>
            <div className="absolute right-[55px] bottom-[-130px] z-20">
              <Image src={Overlay_right} alt="overlay" width={277} />
            </div>

            {/* phone */}
            <div className="w-[40%] h-[550px] relative mx-auto flex items-center justify-center bg-(--yellowshade) rounded-[14px]">
              <span className="w-5 h-5 bg-black absolute right-4 top-4 rounded-full"></span>
              <span className="w-5 h-5 bg-black absolute left-4 bottom-4 rounded-full"></span>
              <div className="pt-10 pb-8">
                <Image
                  src={Iphone_Icon}
                  alt="iphone"
                  width={370}
                  height={360}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
