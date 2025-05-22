import Image from 'next/image'
import Iphone_Icon from '@/assets/svgs/iphone.svg'
import React from 'react'
import Finance_Icon from '@/assets/svgs/finace-phone.svg'
import overlayExtra from '@/assets/svgs/Overlay+.svg'
import overlayShadow from '@/assets/svgs/Overlay+Shadow.svg'
import magic from '@/assets/magic.png'
import Slider from './slider'
import {ArrowRight} from 'lucide-react'

const Hero = () => {
  return (
    <div>
      {/* hero-text */}
      <div className="flex items-center justify-center mx-28 pt-32">
        <div className="w-full flex flex-col mt-[-50px]">
          <div className="inline-block mr-auto mb-7 rounded-full bg-[#e5e5e6] px-5 py-2 text-sm  text-[#646465] tracking-wide uppercase">
            Join the Future
          </div>
          <h1 className=" text-black font-semibold text-5xl leading-tight font-display">
            NEXT-GEN Multivendor Ecommerce
          </h1>
          <p className="mt-4 font-extralight text-xl text-(--secondarytext)  w-[90%] leading-[35px]">
            From vendor onboarding to last-mile fulfillment—everything your
            ecommerce marketplace needs in one place.
          </p>

          <div className="mt-6">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#00C2E8] px-6 py-3 text-white text-sm font-medium hover:bg-[#00c1e8dc] cursor-pointer transition">
              Let’s get started
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div
          className="w-[90%] h-[570px] flex items-center justify-center bg-[#1e1e1e] relative rounded-3xl"
          style={{
            backgroundImage: `url(${magic.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.95,
          }}
        >
          {/* <div className="absolute top-1/6 left-1/4 w-[220px] h-[220px] bg-lime-300/25 blur-xl rounded-full z-0" />
          <div className="absolute bottom-1/6 right-1/4 w-[180px] h-[180px] bg-blue-300/25 blur-xl rounded-full z-0" /> */}
          <div className="absolute -top-10 right-1/6 w-[240px] h-[240px] bg-fuchsia-300/20 blur-2xl rounded-full z-0" />
          <div className="absolute bottom-[-20px] left-1/5 w-[180px] h-[180px] bg-indigo-200/30 blur-xl rounded-full z-0" />
          <div className="absolute inset-0 bg-[url('/patterns/grid-light.svg')] bg-no-repeat bg-center opacity-10 z-0" />

          {/* Image */}
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
