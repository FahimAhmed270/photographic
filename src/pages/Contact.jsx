import React from 'react'
import Header from '../component/Header'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { BsArrowRight } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { contactBox, transition1 } from '../transition'
import { useCursorContext } from '../context/CursorContext'


const Contact = () => {
  const {mouseEnterHandler, mouseEndHandler} = useCursorContext()
  return (
    <>
    <Header />
    <section
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseEndHandler} 
    className='section'>
      <div className="container mx-auto">
        <div className='grid lg:grid-cols-2 lg:gap-x-20 gap-y-10 '>
          {/* form part */}
          <motion.div
          initial={{ opacity: 0, x: '-50%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '-50%' }}
          transition={transition1}
          className='bg-[#eef7f9] pt-[200px] lg:pt-[250px] flex flex-col items-center text-center lg:items-start lg:text-left gap-y-5 p-12 lg:p-0'>
            <h1 className='text-[50px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em]'>Contact me</h1>
            <p className='text-[20px] font-primary pb-5'>I would love to get suggestions from you</p>
            <form action="https://formspree.io/f/mbjeeqla" method='POST'>
              <div>
                <input type="text" placeholder='Your Name' name='name' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full placeholder:text-[#757879]' />
                <input type="email" placeholder='Your Email Address' name='email' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full placeholder:text-[#757879]' />
                <input type="text" placeholder='Your Message' name='text' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full placeholder:text-[#757879]' />
                <button type='submit' className='btn mt-5 py-3 px-10 hover:bg-transparent hover:text-black border border-solid border-black transition-all duration-300'>Send It</button>
              </div>
            </form>
          </motion.div>
          {/* contact main box */}
          <div className='lg:pt-[200px] pt-[50px] flex justify-center'>
            <div className='flex flex-row lg:flex-col gap-8 p-10 md:p-5 lg:p-0'>
              {/* contact box */}
              <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: '0%' }}
              transition={contactBox}
              className='flex flex-col items-center text-center gap-y-1 shadow-xl hover:shadow-md p-10 rounded-xl transition-all duration-200'>
                <RxEnvelopeClosed size={30}/>
                  <h3 className='font-bold text-xl'>Email</h3>
                  <p className='text-base'>Fahimahmed54270@gmail.com</p>
                  <Link to='mailto:fahimahmed54270@gmail.com' className='flex items-center  gap-x-2 mt-2 group'>Write me <BsArrowRight className='group-hover:translate-x-2 transition-all duration-200'/></Link>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: '0%' }}
              transition={contactBox}
              className='flex flex-col items-center text-center gap-y-1 shadow-xl hover:shadow-md p-10 rounded-xl'>
                <GoMarkGithub size={30}/>
                  <h3 className='font-bold text-xl'>Github</h3>
                  <p className='text-base'>github.com/FahimAhmed270</p>
                  <Link to='https://github.com/FahimAhmed270' target='blank' className='flex items-center  gap-x-2 mt-2 group'>Watch Github<BsArrowRight className='group-hover:translate-x-2 transition-all duration-200'/></Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
