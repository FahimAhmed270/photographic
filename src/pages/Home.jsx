import React from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'
import home from '../img/home/woman.png'
import { motion } from 'framer-motion'
import { transition1 } from '../transition'
import { useCursorContext } from '../context/CursorContext'

const Home = () => {
  const {mouseEnterHandler, mouseEndHandler} = useCursorContext()
  return (
    <>
    <Header/>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'>
      <div className="container mx-auto ">
        <div className='grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-10 gap-y-0'>
          {/* text part */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseEndHandler}
            className='pt-[50px] lg:pt-[250px] flex flex-col items-center text-center lg:items-start lg:text-left gap-y-5 order-2 lg:order-1 p-5 lg:p-none'>
            <h1 className='text-[50px] md:text-[60px] lg:text-[70px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em]'>I Build & Design <br /> Web Interfaces</h1>
            <p className='text-[26px] font-primary pb-5'>Sylhet, Bangaldesh</p>
            <Link to='/contact' className='btn hover:bg-transparent hover:text-black border border-solid border-black transition-all duration-300'>Hire Me</Link>
          </motion.div>
          {/* image part */}
          <div className='order-1 lg:order-2 flex justify-center items-center'>
            <motion.div
              initial={{ scale: 0, y: 0 }}
              animate={{ scale: 1, y: 1 }}
              exit={{ scale: 0, y: 0 }}
              transition={transition1}
              className=''>
              <motion.img
              whileHover={{ scale : 1.1}}
              transition={transition1}
              src={home} alt=""/>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
    </>
  )
}

export default Home
