'use client'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import logo from '@/assets/svgs/logo.svg'
import CommonButton from '../button'

const navItems = [
  {name: 'Home', path: '/'},
  {name: 'Features', path: '/contact'},
  {name: 'Documentation', path: '/contact'},
  {name: 'Blog', path: '/blog'},
]

const Navbar = () => {
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setVisible(prevScrollY > currentScrollY || currentScrollY < 4)
      setPrevScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }  text-white px-28 py-6 flex justify-between items-center`}
    >
      {/* Logo */}
      <Link href="/" className="text-white font-semibold flex gap-3.5 text-xl">
        <span className="font-text italic font-extrabold">Nitro🚀Mart</span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-4 items-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className="text-[#818E9D] font-text hover:text-white cursor-pointer flex items-center gap-1 p-3 font-extralight text-lg "
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Get Code Button */}
      <CommonButton
        className="text-[#54b2cf] bg-black font-medium font-text w-[120px] h-[45px] rounded-full hover:opacity-90 transition duration-200 cursor-pointer"
        onClick={() => console.log('Get Code button clicked!')}
      >
        Get Code
      </CommonButton>
    </nav>
  )
}

export default Navbar
