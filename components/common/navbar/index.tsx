'use client'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import CommonButton from './button'

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
      }  text-white px-28 py-6 flex justify-between items-center`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-white  font-semibold flex gap-3.5 text-xl italic"
      >
        <span className="font-text">Nitro🚀Mart</span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-4 items-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className="text-[#828E9D] font-text text-md hover:text-white cursor-pointer flex items-center gap-1 p-3 font-light"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Sign Up Button */}
      <CommonButton
        className="text-[#E6FF02] bg-black font-medium font-text w-[120px] h-[45px] rounded-full hover:opacity-90 transition duration-200 cursor-pointer"
        onClick={() => console.log('Get Code button clicked!')}
      >
        Get Code
      </CommonButton>
    </nav>
  )
}

export default Navbar
