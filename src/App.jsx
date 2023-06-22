import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { AnimatePresence, motion } from 'framer-motion'
import { useCursorContext } from './context/CursorContext'


const App = () => {
  const {cursorVariant, cursorBg} = useCursorContext();
  return (
    <>
      <Router >
        <AnimatePresence initial={true} mode='wait'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Router>
      {/* cursor design */}
      <motion.div
      variants={cursorVariant} animate={cursorBg}
      className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'></motion.div>
    </>
  )
}

export default App
