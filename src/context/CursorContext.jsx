import React, { createContext, useContext, useEffect, useState } from 'react'

const CursorContext = createContext()

export const CursorProvider = ({ children }) => {
  // cursor position

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const [cursorBg, setCursorBg] = useState('default')
  const mobileViewportIsActive = window.innerWidth < 768

  
  useEffect(() => {
    if(!mobileViewportIsActive){
    const move = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', move)

    return () => {
      window.addEventListener('mousemove', move)
    }
  }else{
    setCursorBg('none')
  }
  })

  const cursorVariant = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPosition.x - 72,
      y: cursorPosition.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    none:{
      width:0,
      height:0,
      backgroundColor: 'rgba(255,255,255, 1)',
    }
  }

  // mouse enter handler
  const mouseEnterHandler = () => {
    setCursorBg('text')
  }

  // mouse end handler
  const mouseEndHandler = () => {
    setCursorBg('default')
  }

  return (
    <CursorContext.Provider value={{ cursorVariant, cursorBg, mouseEnterHandler, mouseEndHandler }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursorContext = () => {
  return useContext(CursorContext)
}
