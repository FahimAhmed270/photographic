import React, { useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TbBrandFiverr } from 'react-icons/tb'
import { SiUpwork } from 'react-icons/si'
import { ImFacebook } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'

const menuVariant ={
  hidden:{
    x:'100%'
  },
  show:{
    x:'0%',
    transition:{
      ease:[0.6, 0.01, -0.05, 0.9]
    }
  }
}
const MobileNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='text-primary lg:hidden'>
      {/* nav icon open */}
      <div onClick={()=> setOpen(true)} className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
      variants={menuVariant}
      initial='hidden'
      animate={open ? 'show' : ''}
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
        {/* close icon */}
        <div onClick={()=> setOpen(false)} className='text-4xl absolute left-4 top-10 z-30 text-primary cursor-pointer'>
          <CgClose/>
        </div>
        {/* menu list */}
        <ul className='h-full flex flex-col justify-center items-center space-y-10 font-bold font-primary text-3xl'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li className='flex flex-row gap-x-5  pt-10'>
          <a href=""><TbBrandFiverr/></a>
          <a href=""><SiUpwork/></a>
          <a href="https://www.facebook.com/fahimahmed54270/" target='_blank'><ImFacebook/></a>
          <a href=""><FaLinkedinIn/></a>
          </li>
          
        </ul>
      </motion.div>
    </nav>
  )
}

export default MobileNav
