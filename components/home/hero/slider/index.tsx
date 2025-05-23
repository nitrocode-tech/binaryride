'use client'
import React from 'react'
import Image from 'next/image'

import ReactJs_logo from '@/assets/reactjs_logo_icon_170805.png'
import NextJs_logo from '@/assets/Next.js.png'
import NestJs_logo from '@/assets/nestjs-plain-wordmark.256x86.png'
import NodeJs_logo from '@/assets/nodejs-logo-svgrepo-com.png'
import GraphQl_logo from '@/assets/graphql_logo_icon_171045.png'
import PostgreSQL_logo from '@/assets/postgreSQL.png'
import Sentry_logo from '@/assets/sentry-wordmark-dark-400x119.png'
import Firebase_logo from '@/assets/firebase_logo_icon_168209.png'
import Appolo_logo from '@/assets/apollo-logo.png'
import Google_Map_logo from '@/assets/google-maps-logo.png'
import Shadcn_logo from '@/assets/ShadCn.png'
import Tailwind_logo from '@/assets/Tailwind-CSS-logo.png'

const logos = [
  {icon: ReactJs_logo, width: 140, height: 64},
  {icon: NextJs_logo, width: 140, height: 64},
  {icon: NodeJs_logo, width: 140, height: 64},
  {icon: NestJs_logo, width: 140, height: 64},
  {icon: GraphQl_logo, width: 140, height: 64},
  {icon: PostgreSQL_logo, width: 140, height: 64},
  {icon: Sentry_logo, width: 140, height: 64},
  {icon: Firebase_logo, width: 140, height: 64},
  {icon: Google_Map_logo, width: 140, height: 64},
  {icon: Appolo_logo, width: 140, height: 64},
  // {icon: Shadcn_logo, width: 240, height: 64},
  {icon: Tailwind_logo, width: 140, height: 64},
]

const Slider = () => {
  return (
    <div className="overflow-hidden w-full relative">
      <div className="slider-track flex gap-10 w-max">
        {[...logos, ...logos].map((img, index) => (
          <Image
            key={index}
            src={img.icon}
            alt={`tech-${index}`}
            width={img.width}
            height={img.height}
            className="object-contain filter grayscale hover:grayscale-0 hover:cursor-pointer transition duration-300"
          />
        ))}
      </div>

      <style jsx>{`
        .slider-track {
          animation: scroll-left 30s linear infinite;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

export default Slider
