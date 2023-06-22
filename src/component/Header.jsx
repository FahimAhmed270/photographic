import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'
import { TbBrandFiverr } from 'react-icons/tb'
import { SiUpwork } from 'react-icons/si'
import { ImFacebook } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCursorContext } from '../context/CursorContext'


const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  const { mouseEnterHandler, mouseEndHandler } = useCursorContext()
  return (
    <header className={`${bg ? 'bg-[#eee] lg:h-[90px]' : 'none'} fixed w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center z-20 transition-all duration-300`}>
      <div className='flex flex-col md:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseEndHandler}
          to='/'><img src={logo} alt="" className='max-w-[200px]' /></Link>
        {/* navbar design */}
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to='/' className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to='/about' className='text-[#696c6d] hover:text-primary transition'>About</Link>
          <Link to='/portfolio' className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
          <Link to='/contact' className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
        </nav>
      </div>
      {/* social icon */}
      <div onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseEndHandler}
        className='hidden lg:flex items-center ml-24'>
        <ul className='flex gap-x-4'>
          <li>
            <a href="https://www.fiverr.com/fahim_ahmed_pro?up_rollout=true" target='_blank' className='text-2xl'><TbBrandFiverr /></a>
          </li>
          <li>
            <a href="" target='_blank' className='text-2xl'><SiUpwork /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/fahimahmed54270/" target='_blank' className='text-2xl'><ImFacebook /></a>
          </li>
          <li>
            <a href="" target='_blank' className='text-2xl'><FaLinkedinIn /></a>
          </li>
        </ul>
      </div>
      {/* mobile navbar design */}
      <MobileNav />
    </header>
  )
}

export default Header
