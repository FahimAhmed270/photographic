import React from 'react'
import { Link } from 'react-router-dom'
import about from '../img/about/woman.png'
import { motion } from 'framer-motion'
import { transition1 } from '../transition'
import Header from '../component/Header'
import { useCursorContext } from '../context/CursorContext'

const Home = () => {
  const { mouseEnterHandler, mouseEndHandler } = useCursorContext()
  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: '0%' }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='section'>
        <div onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseEndHandler} className="container mx-auto ">
          <div className='grid lg:grid-cols-2 lg:gap-x-20 gap-y-10'>
            {/* image part */}
            <div className='pt-[130px] flex justify-center'>
              <div className='flex justify-center items-center'>
                <img src={about} alt="" />
              </div>
            </div>
            {/* text part */}
            <motion.div
              initial={{ opacity: 0, y: '-70%' }}
              animate={{ opacity: 1, y: '0%' }}
              exit={{ opacity: 0, y: '-70%' }}
              transition={transition1}
              className='pt-[50px] lg:pt-[250px] flex flex-col items-center text-center lg:items-start lg:text-left gap-y-5 p-5 lg:p-none'>
              <h1 className='text-[50px] md:text-[60px] lg:text-[70px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em]'>About me</h1>
              <p className='text-[20px] font-primary pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem quia nulla exercitationem consequuntur. Debitis, error soluta? Ipsa, ipsum repudiandae!</p>
              <Link to='/contact' className='btn hover:bg-transparent hover:text-black border border-solid border-black transition-all duration-300'>Download CV</Link>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Home
