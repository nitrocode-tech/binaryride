import Image from 'next/image'
import Iphone_Icon from '@/assets/svgs/iphone.svg'
import grid_icon from '@/assets/svgs/grid.svg'
import magic from '@/assets/magic.png'
import grid1 from '@/assets/grid1.png'
import grid2 from '@/assets/grid2.png'
import gradient from '@/assets/gradient.png'
import React from 'react'

const Hero = () => {
  return (
    <div>
      {/* hero-text */}
      <div className="flex items-center justify-center mx-28 pt-28">
        <div className="w-full flex flex-col  ">
          <h1 className="text-white font-semibold text-5xl  leading-tight font-display">
            NEXT-GEN Multivendor Ecommerce
          </h1>
          <p className=" mt-4 font-extralight text-xl text-(--secondarytext)  w-[90%] leading-[35px]">
            From vendor onboarding to last-mile fulfillment—everything your
            ecommerce marketplace needs in one place.
          </p>
        </div>

        <div className="w-[90%] h-[570px] flex items-center justify-center  rounded-3xl relative">
          <div className="absolute -top-10 right-1/4 w-[250px] h-[250px] bg-fuchsia-400/25 blur-3xl rounded-full z-0" />
          <div className="absolute -bottom-10 left-1/4 w-[190px] h-[190px] bg-amber-300/25 blur-2xl rounded-full z-0" />
          <div className="pt-10 pb-8 z-10">
            <Image src={Iphone_Icon} alt="iphone" width={370} height={360} />
          </div>
        </div>
        {/* <div className="w-[90%] h-[570px] flex items-center justify-center bg-[#0b0b0c] rounded-3xl relative overflow-hidden">
          <div className="absolute top-[-20px] left-[30px] w-[230px] h-[230px] bg-purple-400/30 blur-2xl rounded-full" />
          <div className="absolute bottom-[-20px] right-[40px] w-[190px] h-[190px] bg-green-300/20 blur-3xl rounded-full" />
          <div className="pt-10 pb-8 z-10">
            <Image src={Iphone_Icon} alt="iphone" width={370} height={360} />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Hero
