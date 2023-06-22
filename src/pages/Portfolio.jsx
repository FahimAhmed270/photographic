import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { transition1 } from '../transition'
import { projectsNav, projectsData } from '../data'
import Header from '../component/Header'
import { useCursorContext } from '../context/CursorContext'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const [item, setItem] = useState({ name: 'all' })
  const [project, setProject] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'all') {
      setProject(projectsData)
    } else {
      const newProject = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name
      })
      setProject(newProject)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }

  const {mouseEnterHandler, mouseEndHandler} = useCursorContext()
  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: '0%' }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='section'>
        <div className="container mx-auto pb-12">
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='pt-[200px] text-center'>
            <h1 onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseEndHandler} className='text-[50px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em]'>My Recent Projects</h1>
          </motion.div>
          {/* portfolio navbar design */}
          <nav onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseEndHandler} className='mx-auto mt-14 p-5 lg:p-0'>
            <ul className='flex flex-wrap gap-5 justify-center items-center'>
              {projectsNav.map((item, id) => {
                const { name } = item
                return (
                  <li onClick={(e) => handleClick(e, id)} key={id} className={`${active === id ? 'bg-primary text-white' : ''} border border-solid border-black px-8 py-3 cursor-pointer capitalize transition-all duration-300`}>
                    {name}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* portfolio project design */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-8 p-8 md:p-0 lg:p-0 md:p-0'>
            {project.map((item) => {
              return (
                <div key={item.id} className='flex flex-col items-start text-center mt-10 cursor-pointer'>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={transition1}
                    className=''>
                    <img src={item.image} alt="" />
                  </motion.div>
                  <div className=' flex flex-col items-start justify-center'>
                    <p className='capitalize text-primary text-md mt-3'>{item.category}</p>
                    <h3 className='font-semibold capitalize text-xl mt-3'>{item.name}</h3>
                    <Link to={item.link} target='blank' className='btn p-3 mt-5 hover:bg-transparent hover:text-black border border-solid border-black transition-all duration-300 capitalize'>Live Demo</Link>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Portfolio
