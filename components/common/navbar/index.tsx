'use client'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import CommonButton from './button'
import {ArrowRight, ShoppingBag, Store} from 'lucide-react'
import nitromart from '@/assets/nitromart5.png'
import Image from 'next/image'

const navItems = [
  {name: 'Home', path: '/'},
  {name: 'Features', path: '/features'},
  {name: 'Documentation', path: '/documentation'},
  {name: 'Blog', path: '/blog'},
]

const Navbar = () => {
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setVisible(prevScrollY > currentScrollY || currentScrollY < 10)
      setPrevScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }  text-black px-28 py-6 flex justify-between items-center`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-black font-extrabold flex gap-2 text-xl items-center tracking-widest "
      >
        <ShoppingBag className="text-[#00C2E8]" size={40} />
        <span className="font-text">NitroMart</span>

        {/* <Image
          src={nitromart}
          alt="NitroMart Logo"
          width={180}
          className="object-contain" // Ensures image scales properly without background artifacts
        /> */}
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-4 items-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className="text-[#828E9D] font-text text-md font-light p-3 flex items-center gap-1 cursor-pointer transition-all duration-350 ease-in-out hover:text-black hover:font-medium hover:scale-105"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Sign Up Button */}
      <CommonButton
        className="text-white bg-[#00C2E8] font-medium font-text w-[120px] h-[45px] rounded-full hover:opacity-90 transition duration-200 cursor-pointer"
        onClick={() => console.log('Get Code button clicked!')}
      >
        Get Code
      </CommonButton>
    </nav>
  )
}

export default Navbar
