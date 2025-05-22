import Image from 'next/image'
import Iphone_Icon from '@/assets/svgs/iphone.svg'
import React from 'react'
import Finance_Icon from '@/assets/svgs/finace-phone.svg'
import overlayExtra from '@/assets/svgs/Overlay+.svg'
import overlayShadow from '@/assets/svgs/Overlay+Shadow.svg'
import Slider from './slider'

const Hero = () => {
  return (
    <div>
      {/* hero-text */}
      <div className="flex items-center justify-center mx-28 pt-28">
        <div className="w-full flex flex-col mt-[-50px]">
          <h1 className=" text-white font-semibold text-5xl leading-tight font-display">
            NEXT-GEN Multivendor Ecommerce
          </h1>
          <p className="mt-4 font-extralight text-xl text-(--secondarytext)  w-[90%] leading-[35px]">
            From vendor onboarding to last-mile fulfillment—everything your
            ecommerce marketplace needs in one place.
          </p>
        </div>

        <div className="w-[95%] pt-10 pb-8  flex items-center justify-center  rounded-3xl relative">
          <div className="z-10">
            <Image src={Finance_Icon} alt="iphone" width={280} />
          </div>
          <div className="absolute top-0 z-100 right-[-70px]">
            <Image src={overlayExtra} alt="overlay" width={260} height={320} />
          </div>
          <div className="absolute bottom-0 z-100 left-[-5px]">
            <Image src={overlayShadow} alt="overlay" width={230} height={248} />
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="mx-28">
        <Slider />
      </div>
    </div>
  )
}

export default Hero
